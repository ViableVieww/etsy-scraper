import axios from 'axios';
import 'dotenv/config';
import axiosRetry from 'axios-retry';
import {
  getFileData,
  purgeDuplicates,
  writeTextToS3,
  writeToFile
} from './utils.js';

export async function scrapeDefaultProducts() {
  let counter = 0;
  counter++;
  console.log('Counter: ', counter);

  let everBeeCounter = 0;
  let isLastPage = false;
  let page = 1;
  let page_limit = process.env.PAGE_LIMIT;
  let min_revenue = process.env.MIN_REV;

  while (!isLastPage) {
    try {
      console.log('Last Page:', isLastPage);
      console.log('Current Page:', page);
      // EVER BEE
      const everbeeRequest = {
        url: `https://api.everbee.com/product_analytics/default_product_analytics?&order_by=est_mo_revenue&order_direction=desc&est_mo_revenue_min=${min_revenue}&list_type=download&page=${page}&per_page=${page_limit}`,
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

      axiosRetry(axios, { retries: 3 });

      const everbeeData = everbeeResponse.data;

      if (everbeeData.results.length > 0) {
        for (let i = 0; i < everbeeData.results.length; i++) {
          everBeeCounter++;
          const everbee = everbeeData.results[i];

          console.log('EVERBEE COUNTER: ', everBeeCounter);

          if (everbee) {
            const everbeeShop = everbee.Shop;

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

            writeToFile('shops.json', newShopObj);

            const everbeeListing = everbee;
            const newListingObj = {
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
              shop: newShopObj.shopID
            };

            try {
              writeToFile('listings.json', newListingObj);

              console.log('\nEVERBEE NEW LISTING: ', newListingObj);
            } catch (err) {
              console.error('ERROR', err);
            }
          }
        }
        page++;
      } else {
        isLastPage = true;
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        const listingS3Location = await writeTextToS3(
          `etsy_listings/${month}-${day}-${year}.json`,
          getFileData('listings.json')
        );
        console.log('\nWrote Listings: ', listingS3Location);

        purgeDuplicates('shops.json');
        console.log('\nPurged Shop Duplicates');

        const shopsS3Location = await writeTextToS3(
          `etsy_shops/${month}-${day}-${year}.json`,
          getFileData('shops.json')
        );
        console.log('\nWrote Shops: ', shopsS3Location);
      }
    } catch (e) {
      console.error(e);
    }
  }
  console.log('-----FINISHED-----');
}
