# Riara Oasis B3 Virtual Tour - b3.riaraoasis.co.ke

A 360° walkthrough of the B3 2-bedroom (128 m²) show house at Riara Oasis Residency, Riara Road, Kilimani. Shot on an Insta360 X5.

- `index.html` - the tour (three.js viewer, room bar, property details, enquiry popup)
- `pano/` - 8K panoramas (01-19), `pano4k/` - 4K versions for phones
- `api/rate.js` - returns the day's USD→KES rate, cached 24 h (used if a KES price is shown)
- `vercel.json` - daily cron that refreshes the rate

Deployed on Vercel; no build step.
