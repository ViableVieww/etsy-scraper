import 'dotenv/config';
import { scrapeDefaultProducts } from './lib/scraper.js';
import { clearFile } from './lib/utils.js';

// import './lib/cron.js';
clearFile('listings.json');
clearFile('shops.json');
await scrapeDefaultProducts();