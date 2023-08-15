import cron from 'node-cron';
import { scrapeDefaultProducts } from './scraper.js';
import { clearFile } from './utils.js';

cron.schedule(`*/5 * * * *`, () => {
  console.log(`⏲️ RUNNING THE CRON`);
  clearFile('listings.json');
  clearFile('shops.json');
  scrapeDefaultProducts();
});
