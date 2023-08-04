import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { uniqueCount } from './lib/utils.js';
import { scanKeyTerms, getTwitterCount } from './lib/scraper.js';
import { connectDB } from './lib/db.js';
import './lib/cron.js';
import aggregate from './lib/aggregate.js';

const app = express();
app.use(cors());

const __dirname = path.resolve();

dotenv.config({ path: './config/config.env' })


connectDB()


const PORT = process.env.PORT || 3000


// Static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get(`/scrape`, async (req, res, next) => {
  console.log(`Scraping!!`);
  const [iCount, tCount] = await Promise.all([
    scanKeyTerms(),
    getTwitterCount(),
  ]);
  res.json({ iCount, tCount });
});

app.get(`/data`, async (req, res, next) => {
  // get the scrape data

  const { twitter, instagram } = db.data;
  console.log(twitter)
  // filter for only unique values
  const unqiueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);
  // respond with json
  res.json({ twitter: unqiueTwitter, instagram: uniqueInstagram });
});

app.get(`/aggregate`, async (req, res, next) => {
  // get the scrape data
  const { twitter, instagram } = db.value();
  // filter for only unique values
  const unqiueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);
  // need to aggregate these values.
  // respond with json
  res.json({ twitter: aggregate(twitter), instagram: aggregate(instagram) });
});

app.get('/incremental', async (req, res) => {
  const now = Date.now();
  const threeDays = 1000 * 60 * 60 * 24 * 3;
  const twitter = db.data.twitter.slice(3500).filter((tweet) => tweet.date > now - threeDays);

  const html = /*html*/`<ul>
    ${twitter.map(function(tweet, index) {
      const diffTime = Math.round((now - tweet.date) / 1000 / 60 / 60);
      const diffCount = tweet.count - twitter[index - 1]?.count;
      if(diffCount === 0) return '';
      return `<li
        style="color: ${diffCount > 0 ? 'green' : 'red'}"
      >${diffCount > 0 ? '+' : ''}${diffCount} (${diffTime} h)</li>`
    }).join('')}
  </ul>`;

  res.send(html)

});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.enable('trust proxy')
  app.use((req, res, next) => {
      req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
  })
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'public')))
}
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)


