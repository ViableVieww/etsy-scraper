import axios from 'axios';
import 'dotenv/config';
import axiosRetry from 'axios-retry';
import {
  createFile,
  createFolder,
  getFileData,
  purgeDuplicates,
  writeTextToS3,
  writeToFile
} from './utils.js';
import fs from 'fs';

import path from 'path';

export async function scrapeDefaultProducts() {
  const basePath = 'data';
  let max_rev_reached = false;
  let min_revenue = parseInt(process.env.MIN_REV);
  let everBeeCounter = 0;

  while (!max_rev_reached) {
    let max_revenue = min_revenue;

    const everbeeRequest = {
      url: `https://api.everbee.com/product_analytics/default_product_analytics?order_by=est_mo_revenue&order_direction=desc&page=1&per_page=1&est_mo_revenue_min=${min_revenue}&listing_type=download`,
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
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Type': 'application/json'
      }
    };

    let everbeeResponse = await axios(everbeeRequest);
    let final_max_revenue = everbeeResponse.data.results[0].est_mo_revenue;

    let isLastPage = false;
    let page = process.env.PAGE || 0;
    let page_limit = process.env.PAGE_LIMIT;
    max_revenue += 50;

    const newFolderRev = `${min_revenue}-${max_revenue}`;

    createFolder(`${basePath}/${newFolderRev}`);

    while (!isLastPage) {
      try {
        console.log('Last Page:', isLastPage);
        console.log('Current Page:', page);
        console.log('Min Rev:', min_revenue);
        console.log('Max Rev:', max_revenue);
        console.log('Page Limit:', page_limit);
        console.log('Max Revenue:', final_max_revenue);
        // EVER BEE
        const everbeeRequest = {
          url: `https://api.everbee.com/product_analytics/default_product_analytics?order_by=est_mo_revenue&order_direction=desc&est_mo_revenue_min=${min_revenue}&est_mo_revenue_max=${max_revenue}&per_page=${page_limit}&page=${page}&listing_type=download`,
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
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Content-Type': 'application/json'
          }
        };

        let everbeeResponse = await axios(everbeeRequest);

        axiosRetry(axios, { retries: 3 });

        const everbeeData = everbeeResponse.data;

        const shopsFileName = `shops-${page}.json`;
        const listingsFileName = `listings-${page}.json`;
        const combinedFolderName = `${basePath}/${newFolderRev}`;
        const shopsFilePath = path.join(combinedFolderName, shopsFileName);
        const listingsFilePath = path.join(
          combinedFolderName,
          listingsFileName
        );

        if (everbeeData.results.length > 0) {
          await createFile(listingsFilePath);
          await createFile(shopsFilePath);
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

              writeToFile(shopsFilePath, newShopObj, everBeeCounter - 1);

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
                writeToFile(
                  listingsFilePath,
                  newListingObj,
                  everBeeCounter - 1
                );

                console.log('\nEVERBEE NEW LISTING: ', newListingObj);
              } catch (err) {
                console.error('ERROR', err);
              }
            }
          }
          page++;
        } else {
          isLastPage = true;
          console.log('isLastPage', isLastPage);
          if (max_revenue >= final_max_revenue) {
            max_rev_reached = true;
            break;
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    min_revenue = max_revenue;
  }

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let finalListings = {};
  let finalShops = {};

  const folderNames = fs.readdirSync(basePath);

  for (const folderName of folderNames) {
    const folderPath = path.join(basePath, folderName);
    const fileNames = fs.readdirSync(folderPath);

    for (const fileName of fileNames) {
      const filePath = path.join(folderPath, fileName);

      try {
        const fileData = fs.readFileSync(filePath, 'utf8');

        if (fileName.includes('shops')) {
          finalShops = {
            ...finalShops,
            ...JSON.parse(getFileData(filePath))
          };
        } else if (fileName.includes('listings')) {
          finalListings = {
            ...finalListings,
            ...JSON.parse(getFileData(filePath))
          };
        }

        console.log(`Data from ${filePath}:\n${fileData}\n`);
      } catch (error) {
        console.error(`Error reading ${filePath}: ${error}`);
      }
    }
  }

  const listingS3Location = await writeTextToS3(
    `etsy_listings/${month}-${day}-${year}.json`,
    JSON.stringify(finalListings)
  );
  console.log('\nWrote Listings: ', listingS3Location);

  finalShops = purgeDuplicates(finalShops);
  console.log('\nPurged Shop Duplicates');

  const shopsS3Location = await writeTextToS3(
    `etsy_shops/${month}-${day}-${year}.json`,
    JSON.stringify(finalShops)
  );
  console.log('\nWrote Shops: ', shopsS3Location);

  console.log('-----FINISHED-----');
}
