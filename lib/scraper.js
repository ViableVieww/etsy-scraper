import axios from 'axios';
import { load } from 'cheerio';

import Listing from '../models/listing.js';
import Shop from '../models/shop.js';
// import Products from '../models/product';

//Search through keyterms using sale samurai api.
//Store all valuable information about the search term along with the top 10-20 listings.
//When storing information for the listing see if we can use API's or scrapers from any other third party to get as much information on the listing before storing in db.

// const keyTerms = [
//   'Wedding Invitation Templates',
//   'Resume/CV Templates',
//   'Social Media Post Templates',
//   'Blog Post Templates',
//   // 'Meal Planning Templates',
//   // 'Budgeting Templates',
//   // 'Fitness Training Templates',
//   // 'Event Planning Templates',
//   // 'E-commerce Product Listing Templates',
//   // 'PowerPoint Presentation Templates',
//   // 'Email Newsletter Templates',
//   // 'Infographic Templates',
//   // 'Recipe Card Templates',
//   // 'Landing Page Templates',
//   // 'Business Card Templates',
//   // 'Flyer Templates',
//   // 'Magazine Layout Templates',
//   // 'eBook Templates',
//   // 'Menu Templates',
//   // 'Real Estate Flyer Templates',
//   // 'Travel Itinerary Templates',
//   // 'Wedding Seating Chart Templates',
//   // 'Art Portfolio Templates',
//   // 'Social Media Content Calendar Templates',
//   // 'Project Proposal Templates',
//   // 'Wedding Program Templates',
//   // 'Financial Report Templates',
//   // 'Meeting Agenda Templates',
//   // 'Gift Certificate Templates',
//   // 'Certificate of Achievement Templates',
//   // 'Wedding Thank You Card Templates',
//   // 'Digital Scrapbook Templates',
//   // 'Sales Funnel Templates',
//   // 'Invoice Templates',
//   // 'Photo Collage Templates',
//   // 'Social Media Profile Templates',
//   // 'Letterhead Templates',
//   // 'Wedding RSVP Card Templates',
//   // 'Social Media Ads Templates',
//   // 'Mood Board Templates',
//   // 'Business Plan Templates',
//   // 'Event Ticket Templates',
//   // 'Classroom Lesson Plan Templates',
//   // 'Website Design Templates',
//   // 'Recipe eBook Templates',
//   // 'Weekly Planner Templates',
//   // 'Business Proposal Templates',
//   // 'Training Manual Templates',
//   // 'Party Invitation Templates',
//   // 'Marketing Plan Templates',
//   // 'Stock Photos',
//   // 'Vector Illustrations',
//   // 'Digital Art Prints',
//   // 'Digital Scrapbooking Kits',
//   // 'Lightroom Presets',
//   // 'Photoshop Actions',
//   // 'Digital Patterns',
//   // 'Website Themes/Templates',
//   // 'Digital Stickers',
//   // 'Digital Planner Pages',
//   // 'Social Media Templates',
//   // 'Digital Fonts',
//   // 'Digital Papers',
//   // 'Printable Wall Art',
//   // 'Digital Brushes',
//   // 'Digital Collage Sheets',
//   // 'Clipart Bundles',
//   // 'SVG Cut Files',
//   // 'Instagram Story Templates',
//   // 'Video Effects/Transitions',
//   // 'Digital Postcards',
//   // '3D Models',
//   // 'PowerPoint Templates',
//   // 'Printable Calendars',
//   // 'Digital Printable Quotes',
//   // 'Website Banners',
//   // 'Sound Effects',
//   // 'Royalty-Free Music Tracks',
//   // 'Voice Over Recordings',
//   // 'Podcast Intros/Outros',
//   // 'Audio Loops/Samples',
//   // 'Virtual Reality Experiences',
//   // 'Mobile App Icons',
//   // 'After Effects Templates',
//   // 'Motion Graphics',
//   // 'Stock Videos',
//   // 'Instagram Filters',
//   // 'Digital Badges',
//   // 'Mobile App UI Kits',
//   // 'Ebook Covers',
//   // 'Digital Product Mockups',
//   // 'Instagram Highlight Icons',
//   // 'Desktop Wallpapers',
//   // 'Digital Avatars/Character Illustrations',
//   // 'Animated GIFs',
//   // 'Webinar Slide Decks',
//   // 'Animated Emojis/Stickers',
//   // 'Presentation Templates',
//   // 'Web Buttons/Banners',
//   // 'Printable Coloring Pages',
//   // 'Habit Tracker App',
//   // 'Meditation Timer App',
//   // 'To-Do List App',
//   // 'Budget Planner App',
//   // 'Language Learning App',
//   // 'Calorie Counter App',
//   // 'Workout Tracker App',
//   // 'Recipe Organizer App',
//   // 'Journaling App',
//   // 'Task Manager App',
//   // 'Study Planner App',
//   // 'Time Tracker App',
//   // 'Pomodoro Timer App',
//   // 'Daily Affirmations App',
//   // 'Goal Tracker App',
//   // 'Sleep Tracker App',
//   // 'Gratitude Journal App',
//   // 'Weather Forecast App',
//   // 'Countdown Timer App',
//   // 'Period Tracker App',
//   // 'Water Intake Tracker App',
//   // 'Flashcard App',
//   // 'Baby Name Generator App',
//   // 'Mindfulness App',
//   // 'Sudoku Puzzle App',
//   // 'Baby Sleep Sound App',
//   // 'Random Quote Generator App',
//   // 'Music Playlist App',
//   // 'Password Manager App',
//   // 'Coloring Book App',
//   // 'Alarm Clock App',
//   // 'BMI Calculator App',
//   // 'Tarot Card Reading App',
//   // 'Cocktail Recipe App',
//   // 'Travel Planner App',
//   // 'Horoscope App',
//   // 'Random Number Generator App',
//   // 'Movie Recommendation App',
//   // 'Unit Converter App',
//   // 'Morse Code Translator App',
//   // 'Car Locator App',
//   // 'Vocabulary Builder App',
//   // 'Meditation Music App',
//   // 'Home Workout App',
//   // 'Name Pronunciation App',
//   // 'Dream Journal App',
//   // 'Photo Collage Maker App',
//   // 'Baby Growth Tracker App',
//   // 'Meditation Guide App',
//   // 'Quote of the Day App'
// ]


const keyTerms = [
  'Resume/CV Templates',
  'Social Media Post Templates',
  'Blog Post Templates',
  'Meal Planning Templates',
  'Budgeting Templates',
  'Fitness Training Templates',
  'Event Planning Templates',
  'E-commerce Product Listing Templates',
  'PowerPoint Presentation Templates',
  'Email Newsletter Templates',
  'Infographic Templates',
  'Recipe Card Templates',
  'Landing Page Templates',
  'Business Card Templates',
  'Flyer Templates'
]

//Loop through keywords
//Search keyword on ERank, return all 200 listings attached.
//Create product model
//
//Each term extract all listings attached.
//For each listing, search individually through everbee.
//Store all listings within database attaching all info from salesumari and everbee
//For each listing store shop details
//Each term will be used to create a product item.


export async function scanKeyTerms(keys) {
  console.log('SCANNING KEY terms');


  let counter = 0;
  for (const term of keyTerms) {
    counter++;
    console.log('Counter: ', counter, '\nTerm: ', term)

    const erankRequest = {
      url: 'https://erank.com/get-top-listings',
      method: 'POST',
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "_pk_id.1.0d9d=9bc913259c1a9082.1688619016.; _gcl_au=1.1.1841949002.1688619017; _ga=GA1.2.1123035410.1688619017; intercom-device-id-w7z8c9mt=c37fd4fe-c28a-4ce6-8a42-deb4e94b58bc; er_sid=Wtncml6CkcOVNcgpGg%2CryHymrFvVZRKBM5Ra6MvLY6NhNmU5BsESixjAyb-DJFcNWM4YFTCcqv5ic4oQIPtgDLbia7PRpJqhzRdkhenT4vaSS2LfjfXYjOnCRbSHL4iI; language=en; _pk_ses.1.0d9d=1; _gid=GA1.2.606117806.1690382730; er_sess_x=NDNlUHdicU94VUUxc3JGVU1QR1hJNUpPWHc2cHNRQnorSElLN2tWZDR5VHVySDVLM0JnZGZSamJCS1NabmhoaVBwNW1GTldlTXBKU2xVcG83WkMxdCtYZWwxbUVDWXovNHBBSW11V0ZoeURQSDdsQWFCTnAzeFFsdVVsVVhsbnhRUzc1NzBENjRvUjRIRmRDTThBU3QwKzBvNStoVmx0VkNQc05nTHlld1hyczJwM1RCdTB6R2FvV1VILy82eEVuSlhRZkQ5VlhUKzF0b3Z2bWdHdE1tWUtPZkppd0JxaGNwUXcxN3FkL0h2UT0%3D; csrftoken-b21c44c796=095438cc1d2cafd72a3f5eeeaaaf3214; intercom-session-w7z8c9mt=bU1sVHpJaXV0bHQzdkRrODM0Y0R6SWhWOFREbnZjLzZuRmNTZTZ3dWxtSDRrc0Q4aExDa29kU0ttWjExZDhKWC0tRVFQOEkrQ01WUlFoUW9JSzN2Q0VEZz09--614b78d836bb01ba294d2ddc619f1668a4cb19cd; AWSALB=9rtyLp/OtgyhPcZtsFTL5p4fhQJFLk/iFEH8pS4M9tIy/tc7oBTTUy5GR2IoOoq2BJzYk9vAkegQkjCvbGJMa60MUEeYC8CSrR+JeUZaDqkuZO6rxw/rs3ovynJi; AWSALBCORS=9rtyLp/OtgyhPcZtsFTL5p4fhQJFLk/iFEH8pS4M9tIy/tc7oBTTUy5GR2IoOoq2BJzYk9vAkegQkjCvbGJMa60MUEeYC8CSrR+JeUZaDqkuZO6rxw/rs3ovynJi",
        "Referer": "https://erank.com/keyword-tool/tags?keywords=wedding%20invitation%20templates&country=USA",
        "Referrer-Policy": "no-referrer-when-downgrade"
      },
      data: {
        keywords: term,
        country: 'USA'
      }
    };

    console.log('REQUESTING ERANK LISTING DATA NOW')
    let erankresponse = await axios(erankRequest);

  

    //Loop through keywords
    //Each term extract all listings attached.
    //For each listing, search individually through everbee.
    //Store all listings within database attaching all info from salesumari and everbee
    //For each listing store shop details
    //Each term will be used to create a product item.



    // SALE SAMURAI
  
    // let erankresponse = await axios(saleSamuraiRequest);
    if (erankresponse.data.data && erankresponse.data.data) {
      const listings = erankresponse.data.data;

      let everBeeCounter = 0;
      for (const listing of listings) {
        const listingID = listing.listing_id;

        // EVER BEE
        const everbeeRequest = {
          url: `https://api.everbee.com/listing/${listingID}?fromApp=extension&listingDetails=true&listingAnalytics=true&listingTagAnalytics=true&listingShop=true`,
          method: 'GET',
          headers: {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "authorized-token": "04421871-6486-4b35-9faf-3b728f4b3b99",
            "if-none-match": "W/\"662acb123755812fee46e341f10aeea8\"",
            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://www.etsy.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          }
        };

  
        let everbeeResponse = await axios(everbeeRequest);
        const everbeeData = everbeeResponse.data;

        everBeeCounter++;

        console.log('EVERBEE COUNTER: ', everBeeCounter);
  
        if (everbeeResponse && everbeeResponse.data.listing) {

          const everbeeShop = everbeeData.shop;
          
          const newShopObj = {
            createdAt: everbeeShop.created_at,
            currencyCode: everbeeShop.currency_code,
            digitalListingCount: everbeeShop.digital_listing_count,
            everbeeShopID: everbeeShop.id,
            shopID: everbeeShop.shop_id,
            activeListingCount: everbeeShop.listing_active_count,
            title: everbeeShop.title,
            name: everbeeShop.shop_name,
            favorites: everbeeShop.num_favorers,
            averageReview: everbeeShop.review_average,
            reveiewCount: everbeeShop.review_count,
            totalSales: everbeeShop.transaction_sold_count,
            url: everbeeShop.url,
          };


          let newShop = await Shop.create(newShopObj)

          const newShopID = newShop.id;
          const everbeeListing = everbeeData.listing;
          const newListingObj = {
            listingID,
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
              visibilityScore: everbeeListing.visibility_score
            },
            erank: {
              converted: listing.converted,
              dailyViews: listing.daily_views,
              hearts: listing.hearts,
              listingAge: listing.listing_age,
              name: listing.listing_name,
              tags: listing.tags,
              totalViews: listing.total_views
            },
            title: everbeeListing.title,
            tags: everbeeListing.tags,
            state: everbeeListing.state,
            price: everbeeListing.price,
            shop: newShopID,
          }

          try {
            const newListing = await Listing.create(newListingObj);
            console.log('\nEVERBEE NEW LISTING: ', newListing);

            // return {
            //   newListing
            // };
    
          } catch (err) {
            console.error('ERROR', err);
          }
        }
      }
    }
  }

}



// const newUser = {
//   googleId: profile.id,
//   discordID: profile.id,
//   discordUsername: profile.username,
//   discordAvatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
//   discordDiscriminator: profile.discriminator,
//   email: profile.email,
//   accessToken: accessToken,
//   refreshToken: refreshToken
// }

// try {
//   let user = await User.findOne({ discordUsername: profile.username })

//   if (user) {
//     done(null, user)
//   } else {
//     user = await User.create(newUser)
//     done(null, user)
//   }


export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getTwitterFollowers(html) {
  const $ = load(html);
  const span = $('.profile-stat-num');
  const count = $(span[2]).text().replace(',','');
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
  const json = await fetch("https://www.instagram.com/api/v1/users/web_profile_info/?username=wesbos").then(x => x.json());
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
  for(const response of results) {
    if(response.status === 'rejected') continue;
    const result = response.value;
    console.log('Trying to save', result.platform)
    // db.data[result.platform].push({
    //   date: Date.now(),
    //   count: result.count
    // })
    // await db.write();
  }

  console.log('Done!')
}
