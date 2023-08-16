import 'dotenv/config';
import { scrapeDefaultProducts } from './lib/scraper.js';
import { clearFolder } from './lib/utils.js';

// import './lib/cron.js';
clearFolder('./data');
await scrapeDefaultProducts();
