import { run } from 'react-snap';
import puppeteer from 'puppeteer';

run({
  source: 'dist',
  destination: 'dist',
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  },
  puppeteer: puppeteer,
  puppeteerArgs: [
    '--no-sandbox', 
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process'
  ],
  puppeteerLaunchOptions: {
    headless: 'new'
  },
  skipThirdPartyRequests: true,
  include: [
    '/',
    '/project',
    '/terms',
    '/docs',
    '/faq',
    '/news',
    '/progress',
    '/contact'
  ]
});
