# Post Falls Contractor Network

A single-page contractor directory for Post Falls, Idaho and the surrounding Coeur d'Alene / Kootenai County area in North Idaho. Built as a static `index.html` + `app.js` pair (no build step, no framework) so it can be hosted anywhere or published as a Claude Artifact.

## What's here

- **15 trade categories** adapted for North Idaho's climate and property mix: Landscaping & Lawn Care, Roofing, HVAC & Furnace, Electrical, Plumbing, Handyman, Windows & Doors, Painting, Pressure Washing, Garage Doors, Fencing & Decking, Snow Removal, Septic & Well Services, Pest Control, and Housekeeping.
- **101 researched businesses** across those trades (refreshed weekly — see below), each with a name, trade, phone/website/address where found, a rating and the *actual* platform it came from, source links, and a directory rank within its trade.
- Category filtering, search, a ZIP-code coverage checker (Post Falls core ZIP 83854, plus nearby Coeur d'Alene-area ZIPs), favorites ("My List"), side-by-side compare (up to 3), and a "List a business" form for unverified community submissions.
- When published as a Claude Artifact with `db`/`user` capabilities granted, the directory and favorites sync live across viewers; otherwise it falls back to `localStorage` automatically (same UI, "Local demo only" status pill).

## Sourcing methodology

Businesses were found via targeted web searches per trade — patterns like *"best `<trade>` Post Falls ID"*, *"top rated `<trade>` Coeur d'Alene ID"*, and *"`<trade>` Kootenai County Idaho reviews"* — run across five parallel research passes, one covering 2–3 trades each.

Rules followed for every listing:

- A rating is labeled **"Google"** only when a source explicitly attributed it to Google. Otherwise the actual platform is named (HomeAdvisor, Angi, Yelp, Thumbtack, BBB, Experience.com, a local directory, or the company's own site) — never guessed or defaulted to Google.
- Businesses are ranked within their trade primarily by rating, weighted by review count, so a perfect score on one or two reviews ranks below a strong score backed by dozens or hundreds of reviews. Judgment calls like that are recorded in a `note` field on the listing.
- No trade was padded to a fixed count — trade groups range from 4 to 10 businesses depending on what could actually be sourced with a real name and a real address or clearly stated service area.
- No business, address, phone number, or rating was invented. Where no rating could be found, the listing says so rather than guessing.
- License and insurance status is **never** verified or claimed. A few listings mention a self-reported license claim or an aggregator "approved pro" badge; these are noted as unverified claims in the description, never shown as a verified badge or used as a filter.

## Known limitations

- Most ratings come from HomeAdvisor/Angi aggregator snapshots rather than a single canonical platform — only 7 of 101 listings carry a rating explicitly sourced from Google itself.
- 20 of 101 listings have no verifiable public rating at all.
- Phone numbers and street addresses are frequently missing or unconfirmed — many small North Idaho trades operate from a truck or a PO Box rather than a storefront.
- A few listings are based just across the state line in Spokane/Spokane Valley/Otis Orchards/Liberty Lake, WA, included only where they clearly advertise serving the Post Falls/Coeur d'Alene area.
- Because each weekly refresh re-runs independent web searches, the exact set of businesses can shift from week to week — a trade's roster reflects what surfaced in that week's searches, not a fixed master list. A business dropping off one week doesn't mean it closed.
- Nothing here is phone-verified or independently audited. Confirm license, insurance, and current availability directly with any business before hiring.

## Data refresh

This directory's data is refreshed automatically once a week (Saturdays) by re-running the full sourcing methodology above from scratch — fresh web searches for all 15 trades, a rebuilt seed dataset, and a resync of the GitHub repo, the Claude Artifact, and its shared database.

## Files

- `index.html` — markup and embedded styles (teal design system, Big Shoulders Display / Source Sans 3 / IBM Plex Mono).
- `app.js` — all application logic and the `SEED_CONTRACTORS` data array, loaded as a separate script file (kept separate from `index.html` so GitHub's language detection correctly reports the repo's JavaScript).
