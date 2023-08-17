import cron from 'node-cron';
import { scrapeDefaultProducts } from './scraper.js';
import { clearFolder } from './utils.js';

cron.schedule(`0 0 * * 0`, async () => {
  console.log(`⏲️ RUNNING THE CRON`);
  
  clearFolder('./data');
  await scrapeDefaultProducts();
});
