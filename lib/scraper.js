import axios from 'axios';
import { load } from 'cheerio';

import Listing from '../models/listing.js';
import Shop from '../models/shop.js';

const keyTerms = [
  'Resume/CV Templates',
  'Social Media Post Templates'
];

export async function scanKeyTerms(keys) {
  console.log('SCANNING KEY terms');

  let counter = 0;
  for (const term of keyTerms) {
    counter++;
    console.log('Counter: ', counter, '\nTerm: ', term);

    let everBeeCounter = 0;
    let isLastPage = false;
    let page = 1;
    let page_limit = 100;
    let min_revenue = 10;

    while (!isLastPage) {
      console.log('Last Page:', isLastPage);
      console.log('Current Page:', page);
      // EVER BEE
      const everbeeRequest = {
        url: `https://api.everbee.com/product_analytics?type_of_search=&search_term=${term}&order_by=est_mo_revenue&order_direction=desc&est_mo_revenue_min=${min_revenue}&page=${page}&per_page=${page_limit}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          'accept-language': 'en-US,en;q=0.9',
          'authorized-token': '04421871-6486-4b35-9faf-3b728f4b3b99',
          'if-none-match': 'W/"662acb123755812fee46e341f10aeea8"',
          'sec-ch-ua':
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          Referer: 'https://www.etsy.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      };

      let everbeeResponse = await axios(everbeeRequest);
      const everbeeData = everbeeResponse.data;

      if (everbeeData.results.length > 0) {
        for (let i = 0; i < everbeeData.results.length; i++) {
          everBeeCounter++;
          const everbee = everbeeData.results[i];

          console.log('EVERBEE COUNTER: ', everBeeCounter);

          if (everbee) {
            const everbeeShop = everbee.Shop;
            let newShop;

            const shopExists = await Shop.findOne({
              shopID: +everbeeShop.shop_id
            });

            if (!shopExists) {
              const newShopObj = {
                createdAt: everbeeShop.created_at,
                currencyCode: everbeeShop.currency_code,
                digitalListingCount: everbeeShop.digital_listing_count,
                everbeeShopID: everbeeShop.id,
                shopID: everbeeShop.shop_id,
                activeListingCount: everbeeShop.listing_active_count,
                title: everbeeShop.title,
                shopName: everbeeShop.shop_name,
                favorites: everbeeShop.num_favorers,
                averageReview: everbeeShop.review_average,
                reveiewCount: everbeeShop.review_count,
                totalSales: everbeeShop.transaction_sold_count,
                url: everbeeShop.url,
                shopAgeMos: everbeeShop.shop_age_month
              };

              newShop = await Shop.create(newShopObj);
            }

            const everbeeListing = everbee;
            const newListingObj = {
              keyword: term,
              listingID: everbee.listing_id,
              url: everbeeListing.url,
              userID: everbeeListing.user_id,
              image: everbeeListing.Images,
              everbee: {
                favorites: everbeeListing.num_favorers,
                viewCount: everbeeListing.views,
                conversionRate: everbeeListing.conversion_rate,
                monthlyRev: everbeeListing.est_mo_revenue,
                monthlySales: everbeeListing.est_mo_sales,
                monthlyReviews: everbeeListing.est_mo_reviews,
                totalSales: everbeeListing.est_total_sales,
                visibilityScore: everbeeListing.visibility_score,
                converted: everbeeListing.conversion_rate,
                hearts: everbeeListing.num_favorers,
                listingAge: everbeeListing.listing_age_in_months,
                name: everbeeListing.listing_name,
                tags: everbeeListing.tags,
                totalViews: everbeeListing.total_views
              },
              title: everbeeListing.title,
              tags: everbeeListing.tags,
              state: everbeeListing.state,
              price: everbeeListing.price,
              shop: shopExists?.id || newShop?.id
            };

            try {
              const newListing = await Listing.create(newListingObj);
              console.log('\nEVERBEE NEW LISTING: ', newListing);
            } catch (err) {
              console.error('ERROR', err);
            }
          }
        }
        page++;
      }
      isLastPage = true;
    }
    console.log('-----FINISHED-----');
  }
}

export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getTwitterFollowers(html) {
  const $ = load(html);
  const span = $('.profile-stat-num');
  const count = $(span[2]).text().replace(',', '');
  return parseInt(count);
}

export async function getInstagramFollowers(html) {
  console.log(html);
  return;
  // load up Cheerio
  const $ = load(html);
  const dataInString = $('script[type="application/ld+json"]').html();
  const pageObject = JSON.parse(dataInString);
  return parseInt(
    pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
  );
}

export async function getInstagramCount() {
  // const html = await getHTML('https://instagram.com/wesbos');
  // this is broken right now
  const json = await fetch(
    'https://www.instagram.com/api/v1/users/web_profile_info/?username=wesbos'
  ).then((x) => x.json());
  return {
    platform: 'instagram',
    count: json.data.user.edge_followed_by.count
  };
}
export async function getTwitterCount() {
  const html = await getHTML('https://nitter.net/wesbos');
  const twitterCount = await getTwitterFollowers(html);
  return {
    platform: 'twitter',
    count: twitterCount
  };
}

export async function getTikTokCount() {
  const html = await getHTML('https://tiktok.com/@wesbos');
  const regex = new RegExp(`(followerCount":)([0-9]*)`, 'i');
  const results = regex.exec(html);
  return {
    platform: 'tiktok',
    count: parseInt(results[2])
  };
}

export async function runCron() {
  console.log('Running Cron');

  const results = await Promise.allSettled([
    getInstagramCount(),
    getTwitterCount(),
    getTikTokCount()
  ]).catch(console.error);

  console.log(results);
  for (const response of results) {
    if (response.status === 'rejected') continue;
    const result = response.value;
    console.log('Trying to save', result.platform);
    // db.data[result.platform].push({
    //   date: Date.now(),
    //   count: result.count
    // })
    // await db.write();
  }

  console.log('Done!');
}
