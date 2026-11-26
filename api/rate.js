// Daily USD→KES rate for the tour page.
// Vercel caches this response for 24 hours, and the cron in vercel.json
// calls it every morning, so the rate is checked once a day.
// Source: fawazahmed0/exchange-api (free, CC0 licence, updated daily).
const SOURCES = [
  'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
  'https://latest.currency-api.pages.dev/v1/currencies/usd.min.json'
];

module.exports = async function handler(req, res) {
  for (const url of SOURCES) {
    try {
      const r = await fetch(url);
      if (!r.ok) continue;
      const d = await r.json();
      const kes = d && d.usd && d.usd.kes;
      if (typeof kes !== 'number' || !d.date) continue;
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=172800');
      return res.status(200).json({ rate: kes, updated: d.date });
    } catch (e) { /* try the next source */ }
  }
  res.setHeader('Cache-Control', 's-maxage=600');
  res.status(502).json({ error: 'rate unavailable' });
};
