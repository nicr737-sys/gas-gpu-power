import { run } from 'react-snap';

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
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
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
