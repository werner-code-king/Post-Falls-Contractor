/* Post Falls Contractor Network — app logic */
(function () {
  'use strict';

  var SEED_CONTRACTORS = [{"id":"pf1","category":"Landscaping & Lawn Care","name":"All Terrain Lawncare","phone":null,"website":null,"address":"Post Falls, ID (service area)","zip":null,"rating":{"value":4.8,"count":80},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.AllTerrainLawncare.34293326.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/all-terrain-lawncare-reviews-1.htm"}],"note":"HomeAdvisor rating/count snapshots vary across pages (4.7/72-76 on older category pages vs 4.8/~80 on the main profile); no phone/address found in search results, only general Post Falls service area. Idaho contractor license RCE-67096 mentioned on Angi as a self-reported claim, not verified here.","desc":"Family-owned lawn care company serving Post Falls with mowing, fall cleanup, and related yard maintenance; also offers snow removal and tree service per one directory listing.","rank":1,"groupSize":8},{"id":"pf2","category":"Landscaping & Lawn Care","name":"Big Red's Landscaping/Yard Care","phone":null,"website":null,"address":"Kootenai County, ID (service area)","zip":null,"rating":{"value":4.7,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Lawn-Care-Fall-Clean-Up"}],"note":"A direct business-name search ('Big Red's Landscaping' Idaho) turned up no independent listing beyond the HomeAdvisor category snapshot that surfaced the name; could not confirm address or phone, so treat with extra caution.","desc":"Landscaping and yard care provider appearing in Kootenai County HomeAdvisor fall cleanup listings.","rank":2,"groupSize":8},{"id":"pf3","category":"Landscaping & Lawn Care","name":"Nova Landworks LLC","phone":null,"website":null,"address":"717 Chocolate Bear Rd, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":17},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.NovaLandworksLLC.126927502.html"}],"note":"5.0 rating is based on a relatively small sample (17 reviews), so it ranks behind higher-volume competitors despite the higher average; no phone/website confirmed.","desc":"Landscaping company serving Coeur d'Alene offering yard installs, including full front/back yard landscaping for new construction per an Angi reviewer.","rank":3,"groupSize":8},{"id":"pf4","category":"Landscaping & Lawn Care","name":"Taylor-Made Lawn Care","phone":null,"website":null,"address":"Post Falls, ID (service area)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/taylor-made-lawn-care-reviews-9202718.htm"},{"type":"listing","url":"https://www.experience.com/reviews/taylor-22659797"}],"note":"No numeric rating/review count surfaced in search snippets despite positive reviewer comments ('always dependable and professional'); phone number not found.","desc":"Lawn care company serving Post Falls; Angi reviewers describe it as dependable and professional for mowing/maintenance.","rank":4,"groupSize":8},{"id":"pf5","category":"Landscaping & Lawn Care","name":"Northland Nursery","phone":"(208) 773-3247","website":null,"address":"8093 W Prairie Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":3.5,"count":22},"ratingSource":"Yelp","sources":[{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/northland-nursery-289204047"},{"type":"listing","url":"https://reviews.birdeye.com/northland-nursery-149254112521050"}],"note":"Conflicting ratings across platforms: Yelp-sourced listing shows 3.5/22, while a Birdeye page shows 4.3/23 but that Birdeye page also attaches an address belonging to a different business (Aspen Landscaping), so its figures are treated cautiously. BBB shows an A+ rating (not a numeric review score). 26-years-in-business claim is self-reported.","desc":"Garden center and nursery in Post Falls offering plants, landscaping materials, and related advice/services to homeowners.","rank":5,"groupSize":8},{"id":"pf6","category":"Landscaping & Lawn Care","name":"K2 Landscaping","phone":null,"website":null,"address":"Coeur d'Alene, ID (service area)","zip":null,"rating":{"value":5,"count":3},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/k2-landscaping-reviews-1.htm"}],"note":"Only 3 reviews, so ranked low despite perfect score (small-sample rating per ranking methodology). Business-start-date claims conflict across listings (one says 1993, another differs) — unverified.","desc":"Small landscaping contractor serving the Coeur d'Alene area.","rank":6,"groupSize":8},{"id":"pf7","category":"Landscaping & Lawn Care","name":"Loreto Landscaping Design & Build","phone":null,"website":null,"address":"North Idaho service area including Post Falls, Coeur d'Alene, Hayden, Rathdrum","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://business.google.com/v/loreto-landscaping-design-build/04800645753043107721/c61b/_"},{"type":"listing","url":"https://www.houzz.com/professionals/design-build-firms/loreto-landscaping-design-and-build-pfvwus-pf~1514677978"}],"note":"No numeric rating found in sources reviewed; listed as a design-build firm rather than routine lawn maintenance.","desc":"Design-build landscaping firm serving North Idaho communities including Post Falls, Coeur d'Alene, Hayden, and Rathdrum.","rank":7,"groupSize":8},{"id":"pf8","category":"Landscaping & Lawn Care","name":"Terra Landscaping Inc","phone":null,"website":null,"address":"Post Falls, ID (service area)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://www.homeadvisor.com/c.Landscaping.Post_Falls.ID.-12046.html"}],"note":"No rating/review count or contact details surfaced in search results; included mainly on claimed tenure (operating since 2006, self-reported).","desc":"Landscaping company reportedly serving Post Falls homeowners and small businesses since 2006 with mulching, stump removal, and general landscape work.","rank":8,"groupSize":8},{"id":"pf9","category":"Roofing","name":"Western Construction & Roofing LLC","phone":null,"website":null,"address":"Post Falls, ID (service area)","zip":null,"rating":{"value":5,"count":46},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.WESTERNCONSTRUCTION.116322425.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/western-construction-roofing-llc-reviews-1.htm"}],"note":"Angi shows 5.0/42 reviews, HomeAdvisor shows 5.0/46 — minor count discrepancy likely reflects different snapshot times (same underlying Angi/HomeAdvisor data). Also carries a BBB A+ rating. Could not confirm a direct phone number or street address despite searching.","desc":"North Idaho roofing contractor based in Post Falls offering roof installation and repair, describing itself (self-reported) as one of the region's most respected roofers.","rank":1,"groupSize":7},{"id":"pf10","category":"Roofing","name":"New Heights Roofing, LLC","phone":"(208) 427-9805 (unconfirmed - see note)","website":"newheightsroofing.com (unconfirmed exact URL)","address":"2785 West Seltice Way, Suite A, Post Falls, ID 83854","zip":"83854","rating":{"value":4.68,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.NewHeightsRoofing.35884341.html"},{"type":"listing","url":"https://www.provenexpert.com/en-us/new-heights-roofing/"}],"note":"Phone number is inconsistent across sources — four different numbers appeared (208-758-3161, 855-766-3278, 208-415-1846, 208-559-6442, plus 208-427-9805 from another listing); none independently confirmed as current, so call to verify before using. ProvenExpert aggregates ~80 reviews across 5 sources at 4.64 avg. Claims '20 years of experience' are self-reported.","desc":"Roofing contractor based in Post Falls offering roof installation, repair, free estimates, and warranties.","rank":2,"groupSize":7},{"id":"pf11","category":"Roofing","name":"Inland Roofing & Supply, Inc.","phone":null,"website":null,"address":"Coeur d'Alene, ID (service area)","zip":null,"rating":{"value":4.7,"count":95},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/c.Roofing.Coeur_d alene.ID.-12061.html"}],"note":"An initial search summary claimed the company dates to 1938, but a follow-up search found HomeAdvisor's own listing states 'in business since 2015' — a direct conflict; the earlier claim could not be verified and may be wrong or refer to a different/predecessor entity. No phone/address confirmed.","desc":"Roofing company serving Coeur d'Alene with roof installation and repair services.","rank":3,"groupSize":7},{"id":"pf12","category":"Roofing","name":"Keep It Simple Roofing & Construction","phone":null,"website":null,"address":"Coeur d'Alene, ID (service area)","zip":null,"rating":{"value":4.8,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/c.Roofing.Coeur_d alene.ID.-12061.html"}],"note":"No phone/address found in search results; rating sample is moderate (22 reviews).","desc":"Roofing and construction contractor serving the Coeur d'Alene area.","rank":4,"groupSize":7},{"id":"pf13","category":"Roofing","name":"Glacier Roofing and Exteriors","phone":"(509) 420-5663","website":null,"address":"2115 E Sherman Ave, Suite 222, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://prod.bbb.org/us/id/coeur-d-alene/profile/roofing-contractors/glacier-roofing-and-exteriors-1296-1000032039/customer-reviews"}],"note":"BBB lists an A+ rating/Accredited status (not a star rating) but also shows at least one complaint describing a roof that failed city inspection and a permit that expired; read the full BBB complaint history before hiring. A second phone number, (208) 714-0489, appears on a different directory (Buildzoom) — unconfirmed which is current. A MapQuest listing marks the location 'Closed,' which may be outdated.","desc":"Roofing and exteriors contractor with a Coeur d'Alene office; BBB-accredited (A+) but with at least one notable customer complaint on file.","rank":5,"groupSize":7},{"id":"pf14","category":"Roofing","name":"Gold Gutters","phone":null,"website":null,"address":"Kootenai County, ID (service area)","zip":null,"rating":{"value":4.86,"count":14},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/kootenai/roofing.htm"}],"note":"Primarily a gutter specialist rather than a full roofing contractor; included because it appeared prominently in the Kootenai County roofing category search. Small review sample (14).","desc":"Gutter installation/repair company serving Kootenai County, appearing under the local roofing category on Angi.","rank":6,"groupSize":7},{"id":"pf15","category":"Roofing","name":"Baseline Construction LLC","phone":null,"website":null,"address":"Kootenai County, ID (service area)","zip":null,"rating":{"value":5,"count":3},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/kootenai/roofing.htm"}],"note":"Very small review sample (3), so ranked last despite a perfect score, per the rating-weighted-by-volume methodology.","desc":"Construction/roofing contractor serving Kootenai County.","rank":7,"groupSize":7},{"id":"pf16","category":"HVAC & Furnace","name":"TemperaturePro Inland Northwest","phone":"(208) 738-9572 (unconfirmed - see note)","website":"temperaturepro.com/hayden-id","address":"655 W. Capstone Court, Unit A, Hayden, ID 83835","zip":"83835","rating":{"value":5,"count":86},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/hayden/central-air-conditioning-repair/temperaturepro-inland-northwest/service/541888105060139008"},{"type":"website","url":"https://temperaturepro.com/hayden-id"}],"note":"Highest-volume strong rating found for the category (5.0/86 on Thumbtack, with a slightly different count of 83 seen in an earlier snapshot — counts shift over time as new reviews post). Phone number came from a third-party directory (PromptLoop) and could not be confirmed on the company's own site, which only shows a 'Call Now' button; also listed at 4.7/5 on This Old House's aggregation. Also serves Coeur d'Alene/Rathdrum per company site.","desc":"HVAC contractor based in Hayden, ID serving the Coeur d'Alene/Inland Northwest area with heating, cooling, and air-quality installation and repair.","rank":1,"groupSize":6},{"id":"pf17","category":"HVAC & Furnace","name":"Comfort Heating, Cooling, Electrical & Plumbing","phone":"(208) 773-9928 (unconfirmed - see note)","website":null,"address":"3620 E Covington Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":6},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.JTWEnterprisesLLC.135037641.html"},{"type":"listing","url":"https://directory.yext.com/en/comfort-heating-cooling-electrical-plumbing-369387407"}],"note":"Address is consistent across most directories (3620 E Covington Ave), but the phone number found is attributed to a related/similarly-named entity at a slightly different address (3680 E Covington Ave, 'Comfort Heating & Air Inc') and is not confirmed for the 3620 location — call to verify. Rating sample is small (6 reviews) despite a perfect score, limiting confidence; one Angi reviewer praised fast emergency service from Post Falls to Sandpoint. Self-reported 33 years in business / founded 1993.","desc":"Home services company in Post Falls offering heating, cooling, electrical, and plumbing services, including furnace repair and emergency calls.","rank":2,"groupSize":6},{"id":"pf18","category":"HVAC & Furnace","name":"Sturm Heating & Air Conditioning","phone":"(509) 325-4505 (Spokane office)","website":"sturmheating.com","address":"1112 N Nelson St, Spokane, WA 99202 (serves Coeur d'Alene area)","zip":null,"rating":{"value":4.4,"count":125},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/hvac.htm"}],"note":"Headquartered in Spokane, WA, not North Idaho — no local Coeur d'Alene street address or phone could be confirmed; included because it is listed as the top-appearing pro on Angi's Coeur d'Alene HVAC category page with the largest review sample found (125). A separate HomeAdvisor snapshot showed 4.33/60 reviews, a lower count — likely an older snapshot of the same underlying listing. Flag for the user that this is an out-of-state-based company serving the area, not a local North Idaho business.","desc":"Spokane, WA-based heating and air conditioning contractor that services the Coeur d'Alene, ID area; largest review volume found among HVAC options in this search but based outside Idaho.","rank":3,"groupSize":6},{"id":"pf19","category":"HVAC & Furnace","name":"Bill's Heating & A/C","phone":"(208) 777-5528","website":"billsfireplace.com or callbills.com (uncertain - see note)","address":"1007 N Boulder Ct, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.levelset.com/subcontractors/idaho/post-falls/hvac/bills-heating-a-c"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/bill%27s-heating-and-ac-reviews-8223870.htm"}],"note":"Address and phone are consistent across multiple independent directories (LevelSet, GuildQuality), giving higher confidence than most entries here, but the website domain is uncertain (two different domains appear in different sources) and no numeric review rating was found in the snippets retrieved. A Superpages listing shows a second possible location in Hayden, ID, which may be outdated or a separate branch. Self-reported '35+ years serving North Idaho.'","desc":"HVAC company based in Post Falls offering heating and air conditioning installation, repair, and maintenance; also appears associated with fireplace services under a related business name.","rank":4,"groupSize":6},{"id":"pf20","category":"HVAC & Furnace","name":"Alpina Mechanical","phone":null,"website":null,"address":"Coeur d'Alene, ID (service area)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://bbb.org/us/id/coeur-d-alene/category/heating-and-air-conditioning"}],"note":"No numeric rating or contact info surfaced in search results; included solely on a reported BBB A+ rating (letter grade, not a review score) alongside appearing on Angi's Coeur d'Alene HVAC list.","desc":"HVAC contractor serving Coeur d'Alene, carrying a BBB A+ rating.","rank":5,"groupSize":6},{"id":"pf21","category":"HVAC & Furnace","name":"J.A. Bertsch Heating and Cooling","phone":null,"website":null,"address":"3645 N Government Way, Coeur d'Alene, ID (per Carrier dealer locator)","zip":null,"rating":{"value":5,"count":2},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/coeur-d-alene/furnace-installation/j-bertsch-heating-cooling-llc/service/478993041152630785"},{"type":"listing","url":"https://directory.cdachamber.com/list/member/j-a-bertsch-heating-cooling-8653.htm"}],"note":"One summary claimed 'This Old House' cites 1,410 customer reviews for this company, but that figure could not be re-verified directly and likely refers to an aggregated/category-wide count rather than this single business — treat with caution. The only company-specific rating found (Thumbtack, 5.0) has just 2 reviews, so ranked last. Listed as a Carrier dealer and Coeur d'Alene Chamber of Commerce member.","desc":"Heating and cooling contractor based in Coeur d'Alene, a Carrier HVAC dealer and local Chamber of Commerce member.","rank":6,"groupSize":6},{"id":"pf22","category":"Electrical","name":"Mr. Electric of Spokane","phone":null,"website":"https://mrelectric.com/coeur-d-alene","address":"Spokane, WA-based; service area includes Coeur d'Alene, Post Falls & Kootenai County, ID","zip":null,"rating":{"value":4.9,"count":539},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/mr-electric-of-spokane-159248832355197"},{"type":"website","url":"https://mrelectric.com/coeur-d-alene"},{"type":"listing","url":"https://startpage.mapquest.com/us/washington/mr-electric-of-spokane-381082477"}],"note":"Ratings vary sharply by platform: Birdeye shows 4.9★ (539 reviews, unclaimed profile), HomeAdvisor shows 4.6★ (85 reviews), and a Yelp listing (via MapQuest) shows only ~3.5★ (13 reviews). Franchise is based in Spokane, WA and treats Kootenai County/CdA/Post Falls as a secondary service area rather than a local HQ.","desc":"National franchise electrical contractor offering residential and commercial electrical repair, panel upgrades, lighting, and emergency service, based in Spokane and serving North Idaho.","rank":1,"groupSize":7},{"id":"pf23","category":"Electrical","name":"Scotty's Electric Company","phone":"(208) 659-0391","website":null,"address":"Based in Hayden, ID; service area includes Post Falls","zip":null,"rating":{"value":4.5,"count":117},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/post-falls/electrical.htm"},{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/scottys-electric-company-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Post_Falls.ID.-12026.html"}],"note":"Also listed on Angi with the same 4.5/117 figures. The phone number (208) 659-0391 came from a directory page where it sat next to a different business's entry, so it is not fully confirmed — verify before relying on it. In business since 1998.","desc":"Established residential electrician (in business since 1998) based in Hayden, offering panel work, wiring, and emergency electrical service to the Post Falls/Hayden area.","rank":2,"groupSize":7},{"id":"pf24","category":"Electrical","name":"Super D Electric LLC","phone":"(208) 215-6857","website":"https://superdelectric.com","address":"2705 N Howard St, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.4,"count":34},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/super-d-electric-llc-166539827650110"},{"type":"listing","url":"https://todayshomeowner.com/near-me/idaho/coeur-dalene/electrical/"},{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/electrical-contractors"}],"note":"Birdeye profile is unclaimed by the business owner. BBB lists this business at the same Howard St address but shows it as not BBB accredited.","desc":"Local electrical contractor offering new construction wiring, electrical repair, and holiday lighting installation in the Coeur d'Alene area.","rank":3,"groupSize":7},{"id":"pf25","category":"Electrical","name":"CC Electric","phone":null,"website":null,"address":"1311 E Fernwood Ct, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.9,"count":12},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_d_Alene.ID.-12026.html"},{"type":"listing","url":"https://www.mapquest.com/us/idaho/cc-electric-507161318"}],"note":"In business since 2022, so the 12-review sample is small and the ranking relative to peers is less certain. A separate BBB listing shows a 'CC Electric, LLC' at a different address (4300 Royal St) that may or may not be the same company — unverified, treat as a possible duplicate/different entity.","desc":"Small residential electrical contractor serving Coeur d'Alene, offering free estimates on wiring and repair work.","rank":4,"groupSize":7},{"id":"pf26","category":"Electrical","name":"Resurrection Electric","phone":null,"website":"https://resurrection-electric.com","address":"4451 W Seltice Way #2, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":10},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.ResurrectionElectric.143030779.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/resurrection-electric-reviews-1.htm"}],"note":"In business since 2023, so this perfect rating is based on a small, recent sample (10 reviews) and a short track record relative to other listed competitors.","desc":"Locally owned electrical contractor in Coeur d'Alene offering residential wiring and repair with a stated workmanship warranty.","rank":5,"groupSize":7},{"id":"pf27","category":"Electrical","name":"Connection Electric LLC","phone":null,"website":null,"address":"N Harcourt Dr, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":1},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.CONNECTIONELECTRICLLC.138029913.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/connection-electric-llc-reviews-1.htm"}],"note":"Review count is unclear from available listing text — it appears to reference a single 2023 reviewer, so treat the 5.0 figure as resting on a very small sample, not a mature track record. Full street address/number not captured in available sources.","desc":"Electrical contractor based in Coeur d'Alene performing residential electrical installation and repair.","rank":6,"groupSize":7},{"id":"pf28","category":"Electrical","name":"Parker Electric Inc","phone":"(208) 661-8310","website":null,"address":"Serves Post Falls, ID and surrounding areas (BBB did not give a street address; a third-party directory lists 2424 Pearson Way, Post Falls, ID but marks it 'Unverified')","zip":"83854","rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/electrician"},{"type":"listing","url":"https://voolt.pro/idaho/post-falls/electrical-hvac/parker-electric"}],"note":"BBB lists this business as 'A+' and accredited — that is BBB's own grade (based on complaint history, etc.), not a star/review rating. No Google, Yelp, Angi, or HomeAdvisor star rating was found for this business, so rating is left null. Do not confuse with 'Parker Electric NSB LLC' in Florida, an unrelated business.","desc":"Electrical contracting company serving Post Falls, ID and the surrounding area; BBB-accredited.","rank":7,"groupSize":7},{"id":"pf29","category":"Plumbing","name":"A River City Plumbing Service","phone":"(208) 659-6565","website":null,"address":"729 N Dundee Dr, Post Falls, ID 83854 (a second source lists 5425 E Poleline Ave, Post Falls, ID 83854 — sources conflict on street address)","zip":"83854","rating":{"value":4.9,"count":458},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.ARiverCityPlumbing.111187769.html"},{"type":"listing","url":"https://www.buildzoom.com/contractor/a-river-city-plumbing-service"},{"type":"listing","url":"https://www.bestprosintown.com/id/post-falls/a-river-city-plumbing-service-/"}],"note":"HomeAdvisor's own profile confirms a 4.9/5 overall rating; the 458-review count comes from a secondary directory aggregator (bestprosintown.com) and was not independently confirmed on HomeAdvisor's page text, so treat the exact count with some caution. Street address is inconsistent across sources — confirm by phone before visiting.","desc":"Plumbing company serving Post Falls and the surrounding area, offering 24-hour emergency service and over two decades of experience per its own listings.","rank":1,"groupSize":8},{"id":"pf30","category":"Plumbing","name":"My Guy Plumbing & Service, Inc.","phone":null,"website":null,"address":"Service area: Post Falls, Coeur d'Alene, Kootenai County ID; Spokane & Pend Oreille County, WA (no reliable street address found — see note)","zip":null,"rating":{"value":4.9,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.MyGuyPlumbing.53534756.html"},{"type":"listing","url":"https://www.homeadvisor.com/rated.MyGuyPlumbing.53534756.html"}],"note":"Angi shows a very similar 5.0/31-review figure for the same business; the two platforms' numbers don't exactly match. Street address could not be reliably confirmed — several candidate addresses found in search results appear to belong to other, unrelated businesses at the same BBB page. BBB lists this company as A+ accredited. In business since 2015.","desc":"Plumbing service company serving the Post Falls/Coeur d'Alene/Spokane area, in business since 2015.","rank":2,"groupSize":8},{"id":"pf31","category":"Plumbing","name":"Mainstream Electric, Heating, Cooling & Plumbing","phone":"(208) 777-7766","website":null,"address":"Mailing address: PO Box 3436, Coeur d'Alene, ID 83816 (operating street address is 12822 E Indiana Ave, Spokane Valley, WA 99216)","zip":"83816","rating":{"value":4.6,"count":38},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/mainstream-electric%2C-heating%2C-cooling-and-plumbing-reviews-2319950.htm"},{"type":"listing","url":"https://directory.cdachamber.com/list/member/mainstream-electric-heating-cooling-plumbing-2801.htm"}],"note":"Named an Angi Super Service Award winner. This is a multi-trade company (electric/HVAC/plumbing), not a plumbing-only specialist, and is Spokane Valley, WA-based with a Coeur d'Alene mailing address only. Toll-free numbers conflict across sources ((866) 411-9277 vs (877) 690-9277) — use the local Chamber-listed number above.","desc":"Multi-trade home services company (electrical, HVAC, and plumbing) based in Spokane Valley, WA, serving North Idaho including Coeur d'Alene and Post Falls.","rank":3,"groupSize":8},{"id":"pf32","category":"Plumbing","name":"Drain Specialists","phone":null,"website":null,"address":"Service area: Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":9},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/plumbing.htm"}],"note":"Small review sample (9 reviews); offers warranties per its Angi listing. No street address or phone number surfaced in available sources.","desc":"Drain and plumbing service company serving the Coeur d'Alene area.","rank":4,"groupSize":8},{"id":"pf33","category":"Plumbing","name":"Straight Shooter Plumbing and Rooter LLC","phone":null,"website":null,"address":"Service area: Coeur d'Alene, ID","zip":null,"rating":{"value":4.6,"count":9},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/plumbing.htm"}],"note":"Small review sample (9 reviews). No street address or phone number surfaced in available sources.","desc":"Plumbing and drain-clearing contractor serving the Coeur d'Alene area.","rank":5,"groupSize":8},{"id":"pf34","category":"Plumbing","name":"Method Plumbing & Drains","phone":null,"website":null,"address":"Service area: Post Falls / Coeur d'Alene, ID (within ~60-mile radius of Kootenai County per BBB)","zip":null,"rating":{"value":5,"count":11},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/plumbing.htm"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/water-heater-installation/method-plumbing/service/496283146135617542"}],"note":"Review count is inconsistent across search snippets — one source implied as few as 2 reviews while another showed 11; treating 11 as the figure but flagging low confidence. In business since 2021; offers emergency service; BBB-listed as accredited.","desc":"Plumbing and drain service company serving Post Falls and Coeur d'Alene, in business since 2021.","rank":6,"groupSize":8},{"id":"pf35","category":"Plumbing","name":"Scott's Plumbing","phone":null,"website":null,"address":"Serves Kootenai County, ID including Coeur d'Alene and Post Falls","zip":null,"rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://www.bbb.org/us/id/post-falls/category/plumber"},{"type":"listing","url":"https://www.bestprosintown.com/id/post-falls/scott-s-plumbing-/"}],"note":"BBB lists this business as 'A+' and accredited — that is BBB's own grade, not a star/review rating. No Google, Yelp, Angi, or HomeAdvisor star rating was found, so rating is left null. No phone or street address confirmed from available sources.","desc":"Plumbing contractor serving Kootenai County, ID, BBB-accredited.","rank":7,"groupSize":8},{"id":"pf36","category":"Plumbing","name":"Mr. Rooter Plumbing of Coeur d'Alene","phone":null,"website":"https://www.mrrooter.com/locations/idaho/post-falls","address":"Serves Coeur d'Alene / Post Falls, ID (national franchise)","zip":null,"rating":{"value":2.5,"count":4},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/plumbing.htm"},{"type":"website","url":"https://www.mrrooter.com/locations/idaho/post-falls"}],"note":"National franchise brand; the local Angi listing shows a notably low 2.5/5 rating, though from a very small sample (4 reviews). The franchise's own Post Falls page separately claims '180 Customer Reviews' without publishing an average rating. Included here as a known/sourced local option, but the Angi figure is a caution flag rather than an endorsement.","desc":"National plumbing franchise with a Post Falls/Coeur d'Alene location; the local Angi rating sample is small and notably mixed.","rank":8,"groupSize":8},{"id":"pf37","category":"Handyman","name":"Choice Marketing, Corp.","phone":null,"website":null,"address":"Serves Post Falls, ID","zip":null,"rating":{"value":4.9,"count":65},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.americanassetmanagement.71721054.html"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Mount-Tv-Fixed-Price/"}],"note":"An older snapshot of a similarly-described listing shows 4.7/72 reviews instead, so treat the exact figures as approximate/platform-snapshot-dependent. The HomeAdvisor profile URL slug itself references 'americanassetmanagement,' an unrelated-sounding name, suggesting this listing ID may have been reassigned/rebranded on HomeAdvisor — a reason for some caution despite the strong numbers. In business since 2007; does not offer emergency service.","desc":"Handyman services company serving Post Falls, offering small-project repairs including TV mounting, in business since 2007.","rank":1,"groupSize":6},{"id":"pf38","category":"Handyman","name":"Red Beard Handyman Services","phone":null,"website":null,"address":"PO Box 1082, Coeur d'Alene, ID (mailing address only; no storefront address found)","zip":null,"rating":{"value":5,"count":21},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.RedBeardHandyman.80757085.html"}],"note":"A separate Angi listing for this business is filed under Athol, ID and its hours suggested it might be closed on the days listed at the time of that snapshot — current active status could not be fully confirmed. No phone number found.","desc":"Handyman service covering door repair, hardware/track fixes, ceiling fan installs and similar small projects in the Coeur d'Alene area.","rank":2,"groupSize":6},{"id":"pf39","category":"Handyman","name":"Northwest Home Repair and Inspections, LLC","phone":null,"website":null,"address":"510 South Clearwater Loop, Suite 100, Post Falls, ID 83854 (a BBB listing instead gives 23875 N McKenzie Dr, Rathdrum, ID 83858 — sources conflict on which city/address is correct)","zip":"83854","rating":{"value":5,"count":14},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.NorthwestHomeRepairand.125129452.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/northwest-home-repair-and-inspections-llc-reviews-1.htm"}],"note":"Angi's profile states a 5.0/5 overall rating but also notes the pro has 'maintained an average of 4.5+ stars' over time, implying some variance across its review history; sample size (14 reviews) is modest. Address is inconsistent between Angi (Post Falls) and BBB (Rathdrum) — confirm which is current before relying on it. Offers warranties and free estimates.","desc":"Home repair and inspection company offering general handyman work and home inspections in the Post Falls/Rathdrum area.","rank":3,"groupSize":6},{"id":"pf40","category":"Handyman","name":"TruBlue of North Idaho","phone":"208-504-2581","website":null,"address":"212 W Ironwood Dr Ste D PMB 215, Coeur d'Alene, ID 83814 (appears to be a mailing/virtual office address, not a storefront)","zip":"83814","rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://www.prweb.com/releases/the-espinoza-family-brings-focus-on-the-customer-experience-to-new-trublue-franchise-in-north-idaho-854594113.html"},{"type":"listing","url":"https://www.spokanejournal.com/local-news/trueblue-home-care-service-opens-in-coeur-dalene"}],"note":"BBB lists this franchise location as 'A+' accredited — that is BBB's grade, not a star rating. A 5.0/122-review figure found during research belongs to a different TruBlue franchise (Treasure Valley/Boise, a separate business) and must NOT be attributed to this North Idaho location; rating left null here for that reason. Franchise serves Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Athol.","desc":"Local franchise of the TruBlue handyman/home-service brand, offering general home repair, maintenance, and senior/busy-household home care assistance in North Idaho.","rank":4,"groupSize":6},{"id":"pf41","category":"Handyman","name":"Kootenai County Handyman","phone":null,"website":null,"address":"Serves Coeur d'Alene, North Idaho and the Spokane area","zip":null,"rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://www.bbb.org/us/id/coeur-d-alene/profile/remodel-contractors/kootenai-county-handyman-1296-1000178300"}],"note":"BBB lists this business as 'A+' and accredited since February 2025 — that is BBB's own grade, not a star/review rating; no Google, Yelp, Angi, HomeAdvisor, or Thumbtack rating was found, so rating is left null. No confirmed phone number or street address found (a number appearing near this listing, (253) 606-2310, is labeled 'Other Phone' with unclear ownership, and a separate (208) 415-2544 number actually belongs to a different company, Lone Larch Services).","desc":"General handyman and remodeling company serving Coeur d'Alene and North Idaho, offering remodels, decks, fences, flooring, siding, drywall, painting, and furniture assembly per its BBB listing.","rank":5,"groupSize":6},{"id":"pf42","category":"Handyman","name":"Lone Larch Services, LLC","phone":"(208) 415-2544","website":null,"address":"Post Falls, ID; service area within a 50-mile radius of Post Falls","zip":null,"rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://www.bbb.org/us/id/post-falls/profile/remodel-contractors/lone-larch-services-llc-1296-1000136580"}],"note":"BBB lists this business as 'A+' — that is BBB's own grade, not a star/review rating; no independent star rating (Google/Yelp/Angi/HomeAdvisor) was found, so rating is left null. BBB's page reportedly has a reviews section but review text was not retrievable from available search snippets.","desc":"Handyman and home-improvement company serving Post Falls and a 50-mile surrounding radius, offering handyman services, landscaping, and remodeling per its BBB listing.","rank":6,"groupSize":6},{"id":"pf43","category":"Windows & Doors","name":"Elite Construction & Remodeling","phone":"(509) 505-6655","website":"https://www.elite-spokane.com","address":"Spokane, WA 99206 (listed service area includes Post Falls / Coeur d'Alene, North Idaho)","zip":"99206","rating":{"value":4.71,"count":91},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/wa/spokane/elite-construction-and-remodeling-reviews-5833871.htm"},{"type":"listing","url":"https://patch.com/washington/spokane/business/listing/499268/elite-construction-remodeling-llc"},{"type":"listing","url":"https://www.buildzoom.com/contractor/elite-construction-remodeling-wa"}],"note":"This business is based in Spokane, WA (not Idaho) but appears in Angi's Post Falls, ID door-installation results as serving that area — a common cross-border service pattern near the ID/WA line. Confirm it will travel to your address before hiring. The 4.71/91 rating covers the company's general remodeling/door work, not windows specifically.","desc":"Spokane, WA-based general contractor offering remodeling, new construction, and exterior/interior door installation and replacement; shows up serving the Post Falls/Coeur d'Alene door-installation market.","rank":1,"groupSize":6},{"id":"pf44","category":"Windows & Doors","name":"Watts Construction, LLC","phone":null,"website":"https://www.wattsbuilt.com","address":"PO Box 1601, Hayden, ID 83835 (service area includes Post Falls)","zip":"83835","rating":{"value":5,"count":15},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated...WattsConstruction"},{"type":"listing","url":"https://angi.com/companylist/us/id/dalton-gardens/watts-construction-llc-reviews-1.htm"}],"note":"HomeAdvisor's 'Approved Pro' badge is a platform/self-reported status, not a verified license or insurance credential. Listed service area varies between Hayden and Post Falls/Dalton Gardens across directory pages.","desc":"Small North Idaho construction company offering exterior/entry/patio door installation and replacement windows along with general carpentry, serving the Post Falls–Hayden area.","rank":2,"groupSize":6},{"id":"pf45","category":"Windows & Doors","name":"Modern Glass Company","phone":null,"website":null,"address":"3727 W. Industrial Loop, Coeur d'Alene, ID","zip":null,"rating":{"value":4.4,"count":null},"ratingSource":"EcoWatch","sources":[{"type":"listing","url":"https://www.ecowatch.com/windows/replacement/id/coeur-dalene"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/modern-glass-company-reviews-2349277.htm"},{"type":"listing","url":"https://www.milgard.com/dealer-profile/idaho/coeur-dalene/modern-glass-co"},{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/modern-glass-company-10235614"}],"note":"Ratings vary by platform: Angi shows 5/5 but without a stated review count in available results; a Yelp listing (via MapQuest) shows only 7 reviews. A 'Milgard Dealer of the Year 2021' mention is a vendor/manufacturer award claim found in a directory listing, not independently verified here.","desc":"Longtime Coeur d'Alene glass company (operating since 1947) offering residential and commercial window, door, and skylight sales and installation; a certified Milgard dealer.","rank":3,"groupSize":6},{"id":"pf46","category":"Windows & Doors","name":"CDA Glass Inc","phone":"(208) 667-6494","website":null,"address":"1523 N 4th St, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":3.28,"count":58},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/cda-22666866"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Glass-Shower-Door-or-Enclosure-Repair"},{"type":"listing","url":"https://www.yellowpages.com/worley-id/windows"}],"note":"Ratings conflict sharply across platforms: Experience.com shows 3.28/58 while HomeAdvisor shows a much lower 1.83/6. Complaint-style reviews were found (e.g., a wrong-color custom door install) — treat as mixed/use caution and check current Google/Yelp reviews before hiring.","desc":"Coeur d'Alene retail glass company offering residential and commercial glass, window, mirror, shower-door, and door replacement/repair services.","rank":4,"groupSize":6},{"id":"pf47","category":"Windows & Doors","name":"A&L Homes LLC (Window World of Spokane)","phone":null,"website":null,"address":"11359 N Government Way, Hayden, ID 83835","zip":"83835","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://prod.bbb.org/us/id/hayden/profile/windows/al-homes-llc-1296-18001420"},{"type":"listing","url":"https://www.houzz.com/professionals/window-sales-and-installation/aandl-homes-window-world-pfvwus-pf~665179840"}],"note":"Operates locally as 'Window World of Spokane' (owned by Lisa & Allan Gwaltney) with a Hayden showroom. BBB shows an A+ rating and accreditation, but that is BBB's own letter grade, not a customer-review score — no independent review count/average was found in available sources.","desc":"Window World franchise dealer selling and installing vinyl windows, patio/entry/French doors, and siding, with a showroom in Hayden serving Kootenai and Spokane counties.","rank":5,"groupSize":6},{"id":"pf48","category":"Windows & Doors","name":"Window Techs","phone":"(208) 661-1869","website":null,"address":"10968 N Government Way, Hayden, ID 83835","zip":"83835","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.bbb.org/us/id/hayden/category/windows"}],"note":"BBB lists an A+ rating (BBB's own grade) but marks the business as not BBB-accredited; no independent customer reviews or review counts were found in available sources.","desc":"Hayden-based window sales and service company serving the North Idaho/Kootenai County area.","rank":6,"groupSize":6},{"id":"pf49","category":"Painting","name":"James Painting LLC","phone":null,"website":null,"address":"Serves Post Falls, ID 83854 (no public street address found)","zip":"83854","rating":{"value":5,"count":84},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/james-painting-llc/01188754547515292694/0e88/_"},{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/painting-contractors"}],"note":"Google reviews reference the business also as/with 'Mitchell Brothers Painting'; one reviewer mentions work in the broader Spokane area, so confirm current service radius before booking.","desc":"Residential painting contractor serving Post Falls and the surrounding area, offering interior and exterior painting.","rank":1,"groupSize":9},{"id":"pf50","category":"Painting","name":"Five Star Painting of Coeur d'Alene (S&R Contracting, LLC dba)","phone":"(208) 416-3843","website":"https://www.fivestarpainting.com/coeur-dalene","address":"1424 East Sherman Avenue, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.9,"count":227},"ratingSource":"company website","sources":[{"type":"website","url":"https://fivestarpainting.com/coeur-dalene/why-five-star-painting/testimonials"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d%27alene/five-star-painting-of-coeur-d%27alene%2C-id-reviews-10651908.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.FiveStarPainting.39833411.html"},{"type":"listing","url":"https://www.networx.com/painters/id/coeur-d-alene"}],"note":"The 4.9/227 figure comes from the company's own website review page — a self-reported aggregate, not confirmed here as Google or another independently named platform. Third-party platforms show smaller but consistent samples: Angi 5.0/5 reviews, HomeAdvisor 4.77/7 reviews. Phone number sourced from a third-party directory (Networx) and unconfirmed on the official site.","desc":"Local Five Star Painting franchise (legal name S&R Contracting, LLC) serving Coeur d'Alene and North Idaho with residential and commercial interior/exterior painting.","rank":2,"groupSize":9},{"id":"pf51","category":"Painting","name":"High Performance Painting and Drywall, LLC","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID (no public street address found)","zip":null,"rating":{"value":4.7,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/write-a-review/68181156/"}],"note":"Angi shows a separate 5.00 rating, but from only 3 reviews — a much smaller sample than HomeAdvisor's 38. In business since 2018 per HomeAdvisor.","desc":"Coeur d'Alene-area painting and drywall contractor offering interior/exterior painting and drywall repair.","rank":3,"groupSize":9},{"id":"pf52","category":"Painting","name":"Bullet Painting","phone":null,"website":"https://www.bulletpainting.com","address":"7568 N Davenport St, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.6,"count":33},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/bullet-painting-166916608066290"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/bullet-painting-reviews-10083516.htm"}],"note":"Angi shows a separate 5.0 rating across quality/value/professionalism, but from a smaller, unspecified sample.","desc":"Coeur d'Alene painting company offering residential and commercial interior/exterior painting, cabinet refinishing, and power washing.","rank":4,"groupSize":9},{"id":"pf53","category":"Painting","name":"Best Painting Company (Coeur d'Alene | Post Falls | Spokane)","phone":null,"website":null,"address":"1142 N 5th Street (city not clearly confirmed in available listings — appears tied to the Coeur d'Alene/Post Falls market)","zip":null,"rating":{"value":4.95,"count":22},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/cda/best-painting-company-%7C-coeur-d%27alene-%7C-post-falls-%7C-spokane-reviews-10803796.htm"},{"type":"listing","url":"https://www.homeadvisor.com/c.Painting.Coeur_d_Alene.ID.-12054.html"}],"note":"HomeAdvisor shows a matching 5.0/22, but a separate HomeAdvisor listing under a similar name shows 4.2 overall out of 5 — unclear if that's the same business or a duplicate/different profile. In business since approximately 2016 per Angi. Street address's city could not be confirmed.","desc":"Painting contractor advertising service across Coeur d'Alene, Post Falls, and Spokane, offering interior and exterior residential painting with free estimates.","rank":5,"groupSize":9},{"id":"pf54","category":"Painting","name":"Get R Done Painting","phone":null,"website":null,"address":"Serves Post Falls, ID (no public street address found)","zip":null,"rating":{"value":4.5,"count":30},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.GetRDonePainting.24920498.html"}],"note":null,"desc":"Post Falls-area painting contractor offering interior and exterior residential painting.","rank":6,"groupSize":9},{"id":"pf55","category":"Painting","name":"Intex Painting & Construction LLC","phone":null,"website":null,"address":"Serves Post Falls, ID (street address not confirmed)","zip":null,"rating":{"value":5,"count":13},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/intex-painting-construction-llc/05408641509604381527/1701/_"}],"note":"Small review sample (13 reviews).","desc":"Post Falls-area painting and construction company offering interior/exterior painting services.","rank":7,"groupSize":9},{"id":"pf56","category":"Painting","name":"Tru Image Painting LLC","phone":null,"website":null,"address":"Coeur d'Alene, ID (street address not confirmed)","zip":null,"rating":{"value":4.4,"count":16},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.bbb.org/us/id/coeur-d-alene/profile/painting-contractors/tru-image-painting-llc-1296-1000136806"}],"note":"BBB-accredited since 10/6/2022; the BBB profile snippet did not show a letter grade or complaint history in available results.","desc":"Coeur d'Alene-based interior and exterior painting contractor.","rank":8,"groupSize":9},{"id":"pf57","category":"Painting","name":"GB Painting LLC","phone":"(208) 277-6502","website":null,"address":"1869 E Seltice Way #248, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/painting-contractors"}],"note":"BBB lists an A+ rating (BBB's own grade, not a customer-review score) and accreditation at this address. Other search results show a different phone number ((480) 689-3823) possibly tied to a different address/listing for a similarly named business — verify before calling. No independent customer review count/score found.","desc":"Post Falls-based painting contractor offering residential and commercial interior/exterior painting, serving Coeur d'Alene, Hayden, and Sandpoint.","rank":9,"groupSize":9},{"id":"pf58","category":"Pressure Washing","name":"Choice Marketing Corp","phone":null,"website":null,"address":"Serves Post Falls, ID and surrounding areas (no public street address found)","zip":null,"rating":{"value":4.7,"count":71},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.powerwashing.Post_Falls.ID.-14980.html"}],"note":"In business since 2007 per HomeAdvisor; has the largest review count found among local pressure washers, but no street address or phone number was available in search results to confirm a physical location — verify before hiring.","desc":"Pressure washing service serving Post Falls and the surrounding Kootenai County area.","rank":1,"groupSize":5},{"id":"pf59","category":"Pressure Washing","name":"Two Dogs Washing","phone":null,"website":"https://www.twodogswashing.com","address":"401 East 6th Avenue, Post Falls, ID 83854","zip":"83854","rating":{"value":4.8,"count":29},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.TwoDogsWashing.128556994.html"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Exterior-Surfaces-Powerwashing"}],"note":"HomeAdvisor shows a very similar 4.82–4.83 rating from 28–29 reviews depending on the page snapshot. BBB lists the business with an A+ rating.","desc":"Post Falls-based exterior cleaning company offering pressure washing, soft washing, deck cleaning, and window cleaning for residential and commercial properties.","rank":2,"groupSize":5},{"id":"pf60","category":"Pressure Washing","name":"Double Diamond Window Cleaning and Pressure Washing LLC","phone":"(208) 755-8036","website":null,"address":"55 N Cedar St Suite 111, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":null},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/window-cleaning"},{"type":"listing","url":"https://lantern.llc/b/double-diamond-window-cleaning-and-pressure-washing-post-falls"}],"note":"A third-party directory (Lantern) claims '316+ reviews' at a perfect 5 stars; this large count could not be independently confirmed against BBB or HomeAdvisor, so treat it with caution. BBB lists the business (as 'Double Diamond Window Cleaning LLC') with an A+ rating.","desc":"Post Falls-based window cleaning, gutter cleaning, and pressure washing company offering residential and commercial exterior cleaning services.","rank":3,"groupSize":5},{"id":"pf61","category":"Pressure Washing","name":"River City Pressure Washing","phone":null,"website":null,"address":"1507 East Lakeside Ave, Coeur d'Alene/Post Falls area","zip":null,"rating":{"value":5,"count":6},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/river-city-pressure-washing-reviews-1.htm"}],"note":"In business since 2019 per listing. Review count is small (6, with one source suggesting up to 11), so the perfect rating rests on a limited sample. Listed under both Coeur d'Alene and Post Falls search categories.","desc":"Pressure washing service based in the Coeur d'Alene/Post Falls area.","rank":4,"groupSize":5},{"id":"pf62","category":"Pressure Washing","name":"Inland NorthWash, LLC","phone":null,"website":null,"address":"Service area: Coeur d'Alene, Hayden, and Post Falls, ID (no public street address found)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/pressure-washing"}],"note":"BBB lists the business but marks it as not accredited; no customer rating or review count was found in available sources.","desc":"Pressure washing company serving Coeur d'Alene, Hayden, and Post Falls.","rank":5,"groupSize":5},{"id":"pf63","category":"Garage Doors","name":"Precision Garage Door Service of Post Falls","phone":"(208) 204-0129","website":"https://precisiondoor.net/locations/idaho/spokane/coeur-dalene","address":"306 N Spokane St Unit G, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":463},"ratingSource":"Google","sources":[{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/precision-garage-door-service-of-post-falls/"},{"type":"listing","url":"https://precisiondoor.net/locations/idaho/spokane/coeur-dalene/post-falls/reviews"}],"note":"Address and phone come from a third-party aggregator (ServiceAgent) and could not be independently confirmed. The company's own site shows only 6 Post Falls-specific reviews averaging 4.17, while the 4.9/463 Google-reviews figure may reflect the broader Spokane-area Precision Door business rather than Post Falls alone. Ranked #1 on the weighted rating/count rule, but treat the figure with real caution.","desc":"Garage door repair, installation, and opener service branch of the Precision Door franchise network serving Post Falls and the broader Spokane/Coeur d'Alene area.","rank":1,"groupSize":6},{"id":"pf64","category":"Garage Doors","name":"Overhead Door Company Spokane-Coeur d'Alene","phone":"(208) 773-0502","website":null,"address":"420 E 5th Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.89,"count":45},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/overhead-door-company-spokane-coeur-d'alene-reviews-2356179.htm"}],"note":"Angi lists this location as an 'Approved Pro' badge, which is a self-reported platform designation, not a verified license or insurance status. The phone number was sourced from a BBB category listing for the same address, not confirmed directly on the Angi page itself.","desc":"Local Post Falls branch of the Overhead Door Company franchise, offering residential and commercial garage door sales, installation, and repair.","rank":2,"groupSize":6},{"id":"pf65","category":"Garage Doors","name":"Garage Door Center (Spilker Pacific LLC)","phone":null,"website":null,"address":"808 West Mullan Avenue Ste A, Post Falls, ID 83854-5296","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.clopaydoor.com/dealers/garage-doors-abilene-id-spilker-pacific-llc-dba-garage-door-center---post-falls-id"}],"note":"Listed as family-owned and locally operated since 1986 and as a Clopay Master Authorized Dealer (self-reported). A MapQuest snapshot showed the listing as 'Closed,' which may just be stale cached data. No independently verifiable star rating was found.","desc":"Clopay Master Authorized Dealer in Post Falls selling and servicing residential and commercial garage doors since 1986.","rank":3,"groupSize":6},{"id":"pf66","category":"Garage Doors","name":"North Idaho Garage Door LLC","phone":null,"website":null,"address":"Post Falls, ID (exact street address unclear - see note)","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/garage-doors"}],"note":"BBB shows an 'A' letter grade (not a 1-5 star numeric rating) for this Post Falls garage door company. Its exact street address was ambiguous in scraped BBB listing snippets, which placed nearby addresses in both Post Falls and Rathdrum. No numeric review rating was found.","desc":"Garage door sales and repair company serving Post Falls and the surrounding Kootenai County area.","rank":4,"groupSize":6},{"id":"pf67","category":"Garage Doors","name":"J&K Commercial Services","phone":"(208) 930-2009","website":null,"address":"5267 E Royal Dr, Post Falls, ID 83854-5835","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/garage-doors"}],"note":"BBB listings conflict: one shows an A+ rating, another marks this business as not BBB accredited. The phone number appeared adjacent to this address in scraped BBB search results but could not be independently confirmed as belonging to this specific business rather than a neighboring listing.","desc":"Commercial services company based in Post Falls that lists Kootenai County, including garage-door-related work, among its service areas.","rank":5,"groupSize":6},{"id":"pf68","category":"Garage Doors","name":"Continental Door Company","phone":"(509) 774-5735","website":null,"address":"12718 E Indiana Ave, Spokane Valley, WA 99216 (main showroom)","zip":"99216","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.clopaydoor.com/dealers/garage-doors-post-falls-id-continental-door---post-falls"},{"type":"listing","url":"https://business.spokanevalleychamber.org/list/member/continental-door-company-8140"}],"note":"Headquartered in Spokane Valley, WA, not Idaho. Included because it holds a separate Clopay dealer listing specifically for Post Falls, ID, and its Chamber profile says it has served the Coeur d'Alene area for 15+ years. No Idaho street address or star rating was confirmed; treat as a regional provider rather than a North Idaho-based company.","desc":"Clopay Master Authorized Dealer based in Spokane Valley, WA, offering residential and commercial garage door sales, installation, and repair across the Spokane/Coeur d'Alene/Post Falls region, including a reported 24/7 emergency service.","rank":6,"groupSize":6},{"id":"pf69","category":"Fencing & Decking","name":"Bugle Construction JMJ, LLC","phone":"(208) 457-7234","website":null,"address":"306 N Spokane St, Post Falls, ID 83854","zip":"83854","rating":{"value":4.74,"count":66},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.BugleConstructionJMJ.84716752.html"},{"type":"listing","url":"https://www.buildzoom.com/contractor/bugle-construction"}],"note":"Review figures conflict across listings for what appears to be the same business: one HomeAdvisor page shows 4.74/66 while another shows 4.3/81. Angi separately says only that the pro has 'maintained 4.5+ stars' with no count given. Address also conflicts: BuildZoom gives the street address above, while Angi lists a PO Box 220, Post Falls, ID 83877 instead. Primarily a deck/porch/pergola builder; no confirmed fence-installation work was found despite the business surfacing in 'fencing & decking' searches.","desc":"Post Falls-based contractor specializing in custom decks, porch covers, pergolas, and concrete flatwork, in business since 2013.","rank":1,"groupSize":6},{"id":"pf70","category":"Fencing & Decking","name":"Best Fence","phone":"(208) 664-4050","website":null,"address":"1295 E Best Ave, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.9,"count":55},"ratingSource":"Business directory (Yext)","sources":[{"type":"listing","url":"https://directory.yext.com/en/best-fence-1933051619"},{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/fence-contractors"}],"note":"Two different street addresses appear across sources for what is presumably the same company - a Yext directory listing gives 1295 E Best Ave, while a BBB listing gives 623 W Stoddard Ln, Coeur d'Alene, ID 83815. The phone number found sat ambiguously between this listing and a neighboring 'Lewis Siding and Fencing' entry on a BBB results page, so it is not fully confirmed. BBB lists the business as A+ accredited.","desc":"Fence contractor serving Coeur d'Alene and the surrounding Idaho/Washington area, installing and repairing wood, vinyl, metal, chain-link, and composite fences and gates.","rank":2,"groupSize":6},{"id":"pf71","category":"Fencing & Decking","name":"KI Exteriors","phone":null,"website":null,"address":"Coeur d'Alene, ID (service area; no street address found)","zip":"83814","rating":{"value":5,"count":27},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Decks.Coeur_d%20alene.ID.-12017.html"}],"note":"No phone number or street address found in available sources. Some listings may conflate this business with a separately named 'KI Construction,' and fence-specific work for this company could not be confirmed (visible reviews were deck/porch related).","desc":"Deck and porch construction company serving Coeur d'Alene, in business since 2018.","rank":3,"groupSize":6},{"id":"pf72","category":"Fencing & Decking","name":"Estes Landscaping & Construction LLC","phone":null,"website":null,"address":"Post Falls, ID (service area)","zip":"83854","rating":{"value":4.5,"count":10},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/estes-landscaping-and-construction-llc-reviews-10470010.htm"},{"type":"listing","url":"https://www.networx.com/c.estes-decks-construction-llc1"}],"note":"A visible 1-star review from April 2025 complained that an estimate was given by phone without a site visit. A similarly named 'Estes Decks & Construction LLC' also appears in search results serving Post Falls, Rathdrum, Hayden, and Coeur d'Alene; it is not confirmed whether this is the same or a related entity.","desc":"Owner-operated Post Falls company offering decks, porch covers, sheds, and fences, with free estimates.","rank":4,"groupSize":6},{"id":"pf73","category":"Fencing & Decking","name":"Idaho Fence Co","phone":null,"website":null,"address":"2430 W Seltice Way, Post Falls, ID (headquarters; also has Boise, ID and Spokane Valley, WA locations)","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.customerlobby.com/reviews/779/idaho-fence-co"},{"type":"listing","url":"https://www.buildzoom.com/contractor/idaho-fence-company"}],"note":"Phone number is inconsistent across three different sources ((208) 687-2296, (208) 773-3781, (208) 687-2196), so none is reported here with confidence. Customer Lobby reviews are mixed - generally positive, but include a complaint about a sinking fence post about two years after installation, and a separate complaint from a neighboring property owner about crew conduct during a shared-property-line fence job. Founded in the mid-1970s per company materials, though the exact year varies by source (1975 vs. 1977).","desc":"Long-established fence contractor headquartered in Post Falls, offering fence installation and fencing-materials sales across North Idaho and Eastern Washington.","rank":5,"groupSize":6},{"id":"pf74","category":"Fencing & Decking","name":"Timberline Fence & Deck, LLC","phone":"(208) 777-5550","website":null,"address":"9010 W Thompson Rd, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.homeadvisor.com/sp/timberline-fence-deck-coeur-dalene-id"}],"note":"HomeAdvisor shows an aggregate rating of 3.9/5, but the underlying review count was not visible in available sources, so no count is reported here. The one individually visible review (from 2016) was negative, describing missing/half-installed screws after a fence and patio-cover job - treat as a single old data point, not a full picture.","desc":"Locally owned Coeur d'Alene company specializing in deck and fence installation.","rank":6,"groupSize":6},{"id":"pf75","category":"Snow Removal","name":"All Terrain Lawncare LLC","phone":null,"website":null,"address":"Post Falls, ID (service area)","zip":"83854","rating":{"value":4.74,"count":76},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.AllTerrainLawncare.34293326.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/all-terrain-lawncare-reviews-1.htm"}],"note":"A separate HomeAdvisor snippet cites an overall '4.8' figure with no review count shown; 4.74/76 is the more specific figure found and is used here. Experience.com shows 0 reviews for this company. Sources disagree on whether emergency snow service is offered (one says yes, one says no) - verify directly. No phone number or confirmed street address found.","desc":"Post Falls-area lawn care company whose services include snow removal, tree service, and rototilling; a HomeAdvisor reviewer praised a thorough full-driveway snow-clearing job.","rank":1,"groupSize":6},{"id":"pf76","category":"Snow Removal","name":"SolTerra, LLC","phone":null,"website":null,"address":"Service area: Hayden Lake and Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":16},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/solterra-llc/015184084862265702287/5f24/_"}],"note":"No phone number or street address was found. This rating is from a Google Business Profile reviews page and was not independently cross-checked against another review platform.","desc":"North Idaho landscaping company offering weekly lawn maintenance, irrigation repair, and seasonal snow & ice management.","rank":2,"groupSize":6},{"id":"pf77","category":"Snow Removal","name":"Post Falls Sprinklers (listing also associated with \"Matterhorn Landscaping\")","phone":null,"website":null,"address":"1905 E 1st Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":12},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/matterhorn-landscaping/03911521416193894764/c29a/_"},{"type":"listing","url":"https://repairhit.com/business/post-falls-sprinklers"}],"note":"Significant name/service ambiguity: the Google Business Profile at this address is headed 'Post Falls Sprinklers' and claims to offer snow plowing/removal in addition to irrigation work, and self-reports being licensed, insured, and bonded (an unverified claim, not a verified status). The visible reviews behind the 5.0/12 figure appear to concern irrigation/landscaping work rather than snow removal specifically, and a separate listing name, 'Matterhorn Landscaping,' shares the same address. Verify current services directly before hiring for snow removal.","desc":"Post Falls landscaping/irrigation company whose Google listing also advertises snow plowing and removal service.","rank":3,"groupSize":6},{"id":"pf78","category":"Snow Removal","name":"CDA Ground Works LLC","phone":null,"website":null,"address":"Service area: Post Falls / North Idaho","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/post-falls/snow-removal.htm"}],"note":"Angi's Post Falls snow-removal category page cites a 4.6 rating from 30 reviews, but that figure is a category-wide average across multiple pros, not this company's own rating, so it is not reported as this company's rating. No company-specific rating was found.","desc":"North Idaho \"mow and snow\" company offering residential and commercial lawn care (mowing, trimming, edging) plus snow removal.","rank":4,"groupSize":6},{"id":"pf79","category":"Snow Removal","name":"BCR Land Services, Inc.","phone":null,"website":null,"address":"205 W Anton Ave, Coeur d'Alene, ID 83815-9348","zip":"83815","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/snow-removal-services"}],"note":"No phone number, customer reviews, or BBB accreditation/rating status were found in available sources. BBB tags the business under excavating, septic tank contracting, and snow removal services.","desc":"Coeur d'Alene excavating and septic contractor that also lists snow removal services with the BBB.","rank":5,"groupSize":6},{"id":"pf80","category":"Snow Removal","name":"Curb Appeal Landscape & Curbing LLC","phone":"(208) 691-2068","website":null,"address":"7431 N Rude St, Dalton Gardens, ID 83815","zip":"83815","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/curb-appeal-landscape-and-curbing-llc"},{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/landscape-curbing"}],"note":"BBB marks this business as not accredited. BuildZoom cites an Idaho landscape contractor license shown with an expiration date of 07-28-2023 (in the past) - this is a directory-listed detail, not a verified current license status; confirm directly with the Idaho Contractors Board before hiring. No customer reviews were found.","desc":"Dalton Gardens-based landscape contractor offering landscape curbing, lawn maintenance, and snow removal services.","rank":6,"groupSize":6},{"id":"pf81","category":"Septic & Well Services","name":"R.C. Worst & Co., Inc.","phone":"(208) 664-2133","website":"https://rcworst.com","address":"625 E. Best Ave., Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.9,"count":436},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/r-c-worst-co-inc-144380362066748"},{"type":"listing","url":"https://www.shopperapproved.com/reviews/RCWorst.com"},{"type":"website","url":"https://rcworst.com/pages/about-us"},{"type":"listing","url":"https://prod.bbb.org/us/id/coeur-d-alene/profile/pump-sales/r-c-worst-and-company-inc-1296-3000700"}],"note":"Shopper Approved separately shows 4.8 from ~3,233 reviews (a different, product-review-heavy sample) — both platforms agree the business is well-regarded for well pump/water system work. BBB lists it A+ but not accredited.","desc":"Long-established Inland Northwest dealer and service company for water well pumps, water/wastewater treatment systems, and related equipment, serving Coeur d'Alene, Post Falls, and the surrounding region.","rank":1,"groupSize":6},{"id":"pf82","category":"Septic & Well Services","name":"Evergreen Sanitation, Inc.","phone":null,"website":null,"address":"Service area: Post Falls, ID and surrounding North Idaho communities","zip":null,"rating":{"value":4.2,"count":109},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.EvergreenSanitationInc.13931745.html"},{"type":"listing","url":"https://www.homeadvisor.com/c.Septic-Tanks-Wells.Post_Falls.ID.-12081.html"},{"type":"listing","url":"https://www.angi.com/companylist/us/id/post-falls/septic-tank.htm"}],"note":"In business since 1957 per HomeAdvisor. Could not confirm a current street address or a reliable direct phone number — the (800) 433-1678 number found is specifically advertised for restaurant grease-trap pumping, not general septic calls, so it should be verified before relying on it. HomeAdvisor's FAQ says no emergency service, but at least one reviewer described a next-morning emergency response, so hours/availability should be confirmed directly.","desc":"Long-running Post Falls septic pumping and onsite wastewater system service, also handling grease-trap pumping for commercial kitchens.","rank":2,"groupSize":6},{"id":"pf83","category":"Septic & Well Services","name":"CDA Septic Pumping","phone":null,"website":null,"address":"Service area: Coeur d'Alene and surrounding North Idaho communities","zip":null,"rating":{"value":5,"count":13},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/cda-septic-pumping/05713163991983065060/7ce2/_"}],"note":"Rating/count comes from an explicit Google Business Profile for a company named 'CDA Septic Pumping.' Could not find a confirmed phone number or address; several marketing pages referencing this name/area (on pages.dev/netlify/vercel hosts) look like generic templated lead-gen sites rather than the business's own site, so they were not used as sources. Verify directly via the Google listing before contacting.","desc":"Locally owned septic tank pump-out service covering Coeur d'Alene and nearby North Idaho communities, including seasonal pumping for cabins/second homes.","rank":3,"groupSize":6},{"id":"pf84","category":"Septic & Well Services","name":"Idaho Septic Solutions, LLC","phone":null,"website":null,"address":"Service area: Post Falls / North Idaho (specific address not published in sources found)","zip":null,"rating":{"value":4.6,"count":null},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.IdahoSepticSolutions.73829217.html"}],"note":"Only sourced from its HomeAdvisor profile; review count was not clearly legible in results (a few individual reviews from 2021 were visible, e.g. 5.0 and 4.0). Could not confirm street address, phone, or an Idaho Secretary of State registration, so treat with extra caution and verify directly.","desc":"Septic service company listed on HomeAdvisor as serving the Post Falls/North Idaho area; offers free estimates per its profile.","rank":4,"groupSize":6},{"id":"pf85","category":"Septic & Well Services","name":"United Crown Pump & Drilling","phone":"(208) 772-7867","website":"http://www.unitedcrown.com","address":"3125 W. Hayden Ave., Hayden, ID 83835","zip":"83835","rating":{"value":5,"count":null},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/united-crown-pump-and-drilling-reviews-478783.htm"},{"type":"listing","url":"https://www.buildzoom.com/contractor/united-pump-company"}],"note":"Angi's review count was garbled in the page text ('5.03 Reviews'), so the real count is unclear and appears to be very small — the 5.0 rating should be weighted accordingly. Phone number is also inconsistent across sources: ZoomInfo/BBB show (208) 772-7867, while a wellowner.org contractor directory and Yellow Pages show (208) 772-3230. Self-describes as licensed and bonded in Idaho & Washington (unverified claim).","desc":"Family-owned North Idaho well drilling and pump company offering water system construction, well services, and water filtration, based in Hayden.","rank":5,"groupSize":6},{"id":"pf86","category":"Septic & Well Services","name":"Little Stinker Septic Service","phone":"(208) 772-7562","website":null,"address":"49866 N Old Highway 95, Rathdrum, ID 83858","zip":"83858","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.septic.com/septic-services/idaho/coeur-d-alene/little-stinker-septic-service/"},{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/little-stinker-septic-service-10236757"}],"note":"Yelp shows 23 reviews for this business (via a MapQuest-aggregated listing) but no average star score was visible in results, so rating is left null rather than guessed. A separately named 'Little Stinkers Septic Service Inc' shows a BBB rating of B-, but the address context (Priest River/Athol) doesn't clearly match this Rathdrum listing, so that rating was not applied here. In business since 1998 per its own profile.","desc":"Rathdrum-based septic pumping and service company that has served the Coeur d'Alene/North Idaho area since 1998.","rank":6,"groupSize":6},{"id":"pf87","category":"Pest Control","name":"Organix Pest Control","phone":null,"website":null,"address":"3931 N Schreiber Way, Coeur d'Alene, ID 83815 (also lists a Post Falls service base)","zip":"83815","rating":{"value":5,"count":428},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/organix-pest-control/017732031899746889261/d2b5/_"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/exterminators/organix-pest-control/service/526932769212137477"},{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/organix-pest-control-424457850"}],"note":"Address is inconsistent across sources: a MapQuest listing gives a Coeur d'Alene (Schreiber Way) address, while its Google Business Profile describes it as based in Post Falls. Treat as serving both cities until confirmed. No phone number found in results.","desc":"Local, family-owned residential and commercial pest control company serving the Post Falls/Coeur d'Alene area.","rank":1,"groupSize":7},{"id":"pf88","category":"Pest Control","name":"Crosstown Pest Control","phone":null,"website":null,"address":"Service area: Post Falls, ID (specific street address not found)","zip":null,"rating":{"value":5,"count":1440},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/crosstown-pest-control-166409477832081"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/exterminators/crosstown-pest-control/service/462053042583232526"},{"type":"listing","url":"https://www.thisoldhouse.com/near-me/idaho/coeur-dalene/pest-control"}],"note":"Caution: the Birdeye profile is unclaimed by the business, and review counts conflict across sources (This Old House cites 533 reviews while Birdeye shows 1,440) — treat the rating/count as directional, not precise. Could not confirm a street address or phone number.","desc":"Pest control company serving Post Falls and the Coeur d'Alene area, offering general pest, rodent, and seasonal pest services.","rank":2,"groupSize":7},{"id":"pf89","category":"Pest Control","name":"Bug Blasters, LLC","phone":"(208) 758-1890","website":null,"address":"8732 N Meyer Rd, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":241},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://prod.bbb.org/us/id/post-falls/profile/pest-control/bug-blasters-llc-1296-1000049209/customer-reviews"},{"type":"listing","url":"https://todayshomeowner.com/near-me/idaho/post-falls/pest-control/"}],"note":"BBB lists the business serving North Idaho generally; address/phone combination comes from a single directory (Today's Homeowner) so worth confirming directly before calling.","desc":"Post Falls-based pest control company serving North Idaho, handling general pest issues and bed bugs, with free inspections advertised.","rank":3,"groupSize":7},{"id":"pf90","category":"Pest Control","name":"Oasis Pest Control (Oasis Lawn and Pest)","phone":"(208) 921-3686","website":null,"address":"955 N Innovation Way Ste B, Post Falls, ID 83854 (a separate directory lists 4838 W Palmwood Ln, Post Falls, ID)","zip":"83854","rating":{"value":4.9,"count":102},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/oasis-pest-control-156229612264352"},{"type":"listing","url":"https://directory.yext.com/en/oasis-lawn-and-pest-2095863003"},{"type":"listing","url":"https://www.ibegin.com/directory/visit/15976257"}],"note":"Two different Post Falls street addresses appear across directories (BBB vs. Yext/iBegin), and it's unclear whether 'Oasis Pest Control' and 'Oasis Lawn and Pest' are the same entity or related businesses — flagged for verification. Birdeye profile is unclaimed. Phone sourced from a single lower-tier directory (iBegin), so confirm before use.","desc":"Post Falls-area pest and lawn service company covering Post Falls, Coeur d'Alene, Hayden, Hauser, Rathdrum, and Athol.","rank":4,"groupSize":7},{"id":"pf91","category":"Pest Control","name":"Super Nova Pest Control","phone":"(208) 413-8027","website":"https://supernovapest.com","address":"907 N A St, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.9,"count":74},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/coeur-d-alene/exterminators/super-nova-pest-control/service/547023131080826889"},{"type":"listing","url":"https://prod.bbb.org/us/id/category/wasp-removal"}],"note":"A separate listing under the spelling 'Supernova' gives a different address (2201 E Coeur d'Alene Ave); the company's own materials describe operating from a base on Coeur d'Alene Ave, so the A St address, while repeated most often, isn't fully settled.","desc":"Coeur d'Alene-based residential pest control company handling ants, wasps, spiders, and other common regional pests.","rank":5,"groupSize":7},{"id":"pf92","category":"Pest Control","name":"Allen Pest Control","phone":null,"website":null,"address":"140 E Spruce Ave, Suite 2, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.82,"count":45},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/allen-22830993"},{"type":"listing","url":"https://voolt.pro/idaho/coeur-dalene/cleaning-maintenance/allen-pest-control/"}],"note":"A BBB listing shows a different address (1918 N 4th St, Coeur d'Alene) for 'Allen Pest Control Inc,' possibly an older or secondary location — the Spruce Ave address appears most consistently. In business since 1996 per one directory. No confirmed phone number found.","desc":"Established Coeur d'Alene pest control company serving North Idaho, in business since the mid-1990s.","rank":6,"groupSize":7},{"id":"pf93","category":"Pest Control","name":"KB Pest and Lawn Solutions","phone":null,"website":null,"address":"PO Box 1056, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":32},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/kb-pest-and-lawn-solutions-reviews-1.htm"},{"type":"listing","url":"https://match.angi.com/rated.KBPestandLawn.88415521.html"}],"note":"Only a PO Box address was found (no physical service address); owner listed as Kyle Bozarth. No phone number found in results — small/newer local operation, so weight the perfect rating accordingly given the modest review count.","desc":"Small, locally owned Post Falls pest and lawn-care company.","rank":7,"groupSize":7},{"id":"pf94","category":"Housekeeping","name":"Wonder Woman Cleaning Service","phone":null,"website":null,"address":"11717 E Lenora Dr, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":109},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-D-Alene-ID/Maid-Service"}],"note":"In business since 1997 — longest-running local residential cleaner found in this research. Self-describes as licensed, insured and bonded (unverified claim). No phone number found; ZIP not confirmed.","desc":"Long-established residential house cleaning / maid service based in Coeur d'Alene, also serving Hayden, Post Falls, and Rathdrum.","rank":1,"groupSize":6},{"id":"pf95","category":"Housekeeping","name":"CDA Home Cleaning","phone":null,"website":null,"address":"1940 West Riverstone Drive, Coeur d'Alene, ID","zip":null,"rating":{"value":4.7,"count":65},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.cdahomecleaning.158893812.html"},{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/cleaning.htm"}],"note":"HomeAdvisor shows a higher 5.0 rating for this business but the review count seen differed across page captures (37 in one, 80 in another) — used the more consistently documented Angi figure (4.7/65) as the primary rating and flagged the HomeAdvisor discrepancy. A separately named 'Coeur d'Alene Home Cleaning LLC' at 609 W Linden Ave turned up in a BBB search — unclear if related; not treated as the same business here. Marked a HomeAdvisor Super Service Award winner (self/platform-reported, not independently verified).","desc":"Residential and short-term-rental house cleaning service serving Coeur d'Alene, Hayden, Post Falls, and Rathdrum, offering recurring daily/weekly/biweekly/monthly cleaning.","rank":2,"groupSize":6},{"id":"pf96","category":"Housekeeping","name":"White Glove Cleaning","phone":null,"website":null,"address":"Service area: Post Falls, ID and surrounding areas (a directory lists 13122 E Wick Ave with the city unconfirmed)","zip":null,"rating":{"value":4.9,"count":43},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.whiteglovecleaning.159065816.html"}],"note":"In business since 2016. The only street address found (via an Angi directory snippet) did not clearly state its city, so it is not presented as confirmed. No phone number found.","desc":"Post Falls-area residential house cleaning service offering free estimates.","rank":3,"groupSize":6},{"id":"pf97","category":"Housekeeping","name":"Radiant Home Cleaning Services","phone":null,"website":null,"address":"6848 North Government Way, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":18},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://thumbtack.com/id/coeur-d-alene/house-cleaning/radiant-home-cleaning-services/service/543349468244746257"},{"type":"listing","url":"https://www.homeadvisor.com/rated.radiantcleaning.156628197.html"}],"note":"A separate HomeAdvisor capture shows 5.0 from only 6 reviews, and listed founding years conflict (2021 vs. 2023) across different profile captures — review count (18, from Thumbtack, where several of the underlying reviews are themselves sourced from Google) should be treated as approximate. Serves Coeur d'Alene, Hayden, Post Falls, and Rathdrum per its profile.","desc":"Residential house cleaning service based in Coeur d'Alene, serving the greater Coeur d'Alene/Post Falls area.","rank":4,"groupSize":6},{"id":"pf98","category":"Housekeeping","name":"Full Service Cleaning Co","phone":null,"website":null,"address":"2810 W Strawberry Ln (city/ZIP not clearly stated); service area: Kootenai County, including Coeur d'Alene, Post Falls, and Hayden","zip":null,"rating":{"value":5,"count":9},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.FullServiceCleaningCo.156254404.html"},{"type":"listing","url":"https://www.thumbtack.com/id/hayden/house-cleaning/full-service-cleaning-co/service/553441638037291016"}],"note":"Small review sample (9), so the perfect rating should be weighted lightly relative to larger-sample competitors. Street address's city could not be confirmed from available snippets.","desc":"Kootenai County residential house cleaning company covering Coeur d'Alene, Post Falls, and Hayden.","rank":5,"groupSize":6},{"id":"pf99","category":"Housekeeping","name":"Merry Maids of Coeur d'Alene","phone":"(208) 314-0343","website":"https://merrymaids.com/coeur-dalene","address":"Service area: Coeur d'Alene, Sandpoint, Sagle, Athol, and surrounding North Idaho areas","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://merrymaids.com/coeur-dalene"},{"type":"website","url":"https://merrymaids.com/coeur-dalene/cleaning-services/house-cleaning"}],"note":"This is a national franchise brand's local Coeur d'Alene location rather than an independent small business; included because it is a real, locally operating residential cleaning service franchise. No independent third-party rating/review count was found for this specific location in the sources checked, so rating is left null rather than guessed.","desc":"Local franchise location of the national Merry Maids residential house cleaning brand, serving Coeur d'Alene and nearby North Idaho communities.","rank":6,"groupSize":6}];

  var CATEGORIES = [
    { name: 'Landscaping & Lawn Care', color: '#4C8C2A', icon: 'leaf' },
    { name: 'Roofing', color: '#B2492F', icon: 'roof' },
    { name: 'HVAC & Furnace', color: '#2B6CB0', icon: 'therm' },
    { name: 'Electrical', color: '#C98A1E', icon: 'bolt' },
    { name: 'Plumbing', color: '#1C8C9C', icon: 'drop' },
    { name: 'Handyman', color: '#C0652A', icon: 'tool' },
    { name: 'Windows & Doors', color: '#5B5FC7', icon: 'window' },
    { name: 'Painting', color: '#B83280', icon: 'roller' },
    { name: 'Pressure Washing', color: '#2B8FC0', icon: 'spray' },
    { name: 'Garage Doors', color: '#6B6B76', icon: 'garage' },
    { name: 'Fencing & Decking', color: '#8B5E34', icon: 'fence' },
    { name: 'Snow Removal', color: '#4A90C4', icon: 'snow' },
    { name: 'Septic & Well Services', color: '#587A5C', icon: 'well' },
    { name: 'Pest Control', color: '#C0392B', icon: 'bug' },
    { name: 'Housekeeping', color: '#8A6FC9', icon: 'sparkle' }
  ];

  var CAT_BY_NAME = {};
  CATEGORIES.forEach(function (c) { CAT_BY_NAME[c.name] = c; });

  var ICONS = {
    leaf: '<circle cx="12" cy="15" r="2.4"/><path d="M12 15 C12 15 12 6 19 5 C19 5 18 13 12 15 Z" fill="currentColor" stroke="none"/>',
    roof: '<polyline points="3,13 12,5 21,13" fill="none"/><line x1="6" y1="13" x2="6" y2="19"/><line x1="18" y1="13" x2="18" y2="19"/><line x1="6" y1="19" x2="18" y2="19"/>',
    therm: '<rect x="10" y="3" width="4" height="12" rx="2"/><circle cx="12" cy="18" r="3"/>',
    bolt: '<polygon points="13,2 5,14 11,14 9,22 19,9 13,9" fill="currentColor" stroke="none"/>',
    drop: '<path d="M12 3 C12 3 5 12 5 16 A7 7 0 0 0 19 16 C19 12 12 3 12 3 Z" fill="currentColor" stroke="none"/>',
    tool: '<circle cx="12" cy="12" r="8"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
    window: '<rect x="4" y="4" width="16" height="16" rx="1"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/>',
    roller: '<rect x="4" y="5" width="12" height="6" rx="1"/><line x1="16" y1="8" x2="20" y2="8"/><line x1="20" y1="8" x2="20" y2="15"/><line x1="20" y1="15" x2="14" y2="15"/><line x1="14" y1="11" x2="14" y2="19"/>',
    spray: '<path d="M11 3 C11 3 6 10 6 14 A5 5 0 0 0 16 14 C16 10 11 3 11 3 Z" fill="currentColor" stroke="none"/><line x1="17" y1="6" x2="20" y2="4"/><line x1="18" y1="10" x2="21" y2="10"/><line x1="17" y1="14" x2="20" y2="16"/>',
    garage: '<rect x="3" y="5" width="18" height="15" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="3" y1="17" x2="21" y2="17"/>',
    fence: '<line x1="5" y1="5" x2="5" y2="20"/><line x1="12" y1="3" x2="12" y2="20"/><line x1="19" y1="5" x2="19" y2="20"/><line x1="2" y1="11" x2="22" y2="11"/><line x1="2" y1="16" x2="22" y2="16"/>',
    snow: '<line x1="12" y1="2" x2="12" y2="22"/><line x1="4" y1="7" x2="20" y2="17"/><line x1="4" y1="17" x2="20" y2="7"/>',
    well: '<circle cx="12" cy="13" r="8"/><path d="M12 7 C12 7 9 10 9 12.5 A3 3 0 0 0 15 12.5 C15 10 12 7 12 7 Z" fill="currentColor" stroke="none"/>',
    bug: '<ellipse cx="12" cy="13" rx="5" ry="7"/><line x1="12" y1="6" x2="12" y2="20"/><line x1="7" y1="9" x2="3" y2="7"/><line x1="7" y1="13" x2="3" y2="13"/><line x1="7" y1="17" x2="3" y2="19"/><line x1="17" y1="9" x2="21" y2="7"/><line x1="17" y1="13" x2="21" y2="13"/><line x1="17" y1="17" x2="21" y2="19"/><circle cx="10" cy="4" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="4" r="1" fill="currentColor" stroke="none"/>',
    sparkle: '<path d="M12 3 L13.8 9.2 L20 11 L13.8 12.8 L12 19 L10.2 12.8 L4 11 L10.2 9.2 Z" fill="currentColor" stroke="none"/><path d="M19 3 L19.7 5.3 L22 6 L19.7 6.7 L19 9 L18.3 6.7 L16 6 L18.3 5.3 Z" fill="currentColor" stroke="none"/>'
  };

  function iconSvg(name, size) {
    size = size || 18;
    return '<svg class="cat-icon" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
  }

  var CORE_ZIPS = ['83854'];
  var NEARBY_ZIPS = ['83815', '83814', '83816', '83835'];

  // ---------- state ----------
  var state = {
    submissions: [],
    favorites: new Set(),
    compare: new Set(),
    filters: { category: 'all', search: '', googleOnly: false, minRating: 0, sort: 'directory' },
    mode: 'connecting', // connecting | live | local
    viewerId: null,
    db: null,
    user: null,
    contractorsCol: null,
    favDoc: null
  };

  var LS_FAV_KEY = 'pfcn_favorites_v1';
  var LS_SUB_KEY = 'pfcn_submissions_v1';

  function loadLocalFavorites() {
    try {
      var raw = localStorage.getItem(LS_FAV_KEY);
      if (raw) return new Set(JSON.parse(raw));
    } catch (e) {}
    return new Set();
  }
  function saveLocalFavorites() {
    try { localStorage.setItem(LS_FAV_KEY, JSON.stringify(Array.from(state.favorites))); } catch (e) {}
  }
  function loadLocalSubmissions() {
    try {
      var raw = localStorage.getItem(LS_SUB_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
  }
  function saveLocalSubmissions() {
    try { localStorage.setItem(LS_SUB_KEY, JSON.stringify(state.submissions)); } catch (e) {}
  }

  function allContractors() {
    return SEED_CONTRACTORS.concat(state.submissions);
  }

  // ---------- DOM helpers ----------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function escapeHtml(s) {
    if (s === null || s === undefined) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function initials(name) {
    var words = String(name).split(/\s+/).filter(Boolean);
    var s = '';
    for (var i = 0; i < words.length && s.length < 2; i++) {
      var w = words[i];
      if (/^[A-Za-z0-9]/.test(w)) s += w[0].toUpperCase();
    }
    return s || '?';
  }

  // ---------- rendering ----------
  function renderChips() {
    var row = $('#chipRow');
    row.innerHTML = '';
    var allChip = el('button', 'chip chip-all' + (state.filters.category === 'all' ? ' active' : ''), 'All trades');
    allChip.setAttribute('data-cat', 'all');
    row.appendChild(allChip);
    CATEGORIES.forEach(function (c) {
      var count = allContractors().filter(function (b) { return b.category === c.name; }).length;
      var chip = el('button', 'chip' + (state.filters.category === c.name ? ' active' : ''));
      chip.setAttribute('data-cat', c.name);
      chip.style.setProperty('--chip-color', c.color);
      chip.innerHTML = iconSvg(c.icon, 16) + '<span>' + escapeHtml(c.name) + '</span><span class="chip-count">' + count + '</span>';
      row.appendChild(chip);
    });
    $all('.chip', row).forEach(function (chip) {
      chip.addEventListener('click', function () {
        state.filters.category = chip.getAttribute('data-cat');
        renderAll();
      });
    });
  }

  function renderStats() {
    var all = allContractors();
    var total = all.length;
    var googleCount = all.filter(function (b) { return b.ratingSource === 'Google'; }).length;
    var ratedCount = all.filter(function (b) { return b.rating; }).length;
    $('#statTotal').textContent = total;
    var inline = $('#statTotalInline');
    if (inline) inline.textContent = total + '+';
    $('#statTrades').textContent = CATEGORIES.length;
    $('#statGoogle').textContent = googleCount;
    $('#statRated').textContent = ratedCount;
  }

  function matchesFilters(b) {
    var f = state.filters;
    if (f.category !== 'all' && b.category !== f.category) return false;
    if (f.googleOnly && b.ratingSource !== 'Google') return false;
    if (f.minRating > 0 && (!b.rating || b.rating.value < f.minRating)) return false;
    if (f.search) {
      var hay = (b.name + ' ' + b.category + ' ' + (b.desc || '') + ' ' + (b.address || '')).toLowerCase();
      if (hay.indexOf(f.search.toLowerCase()) === -1) return false;
    }
    return true;
  }

  function sortList(list) {
    var f = state.filters.sort;
    var copy = list.slice();
    if (f === 'rating') {
      copy.sort(function (a, b) { return (b.rating ? b.rating.value : -1) - (a.rating ? a.rating.value : -1); });
    } else if (f === 'reviews') {
      copy.sort(function (a, b) { return (b.rating ? b.rating.count : -1) - (a.rating ? a.rating.count : -1); });
    } else if (f === 'name') {
      copy.sort(function (a, b) { return a.name.localeCompare(b.name); });
    } else {
      copy.sort(function (a, b) {
        if (a.category !== b.category) return a.category.localeCompare(b.category);
        return (a.rank || 99) - (b.rank || 99);
      });
    }
    return copy;
  }

  function ratingBadgeLabel(b) {
    if (!b.rating) return 'Not yet rated';
    if (b.ratingSource === 'Google') return 'Google-rated';
    if (b.pending) return 'Community submission';
    return 'Rated on ' + b.ratingSource;
  }

  function starString(value) {
    var full = Math.round(value);
    var s = '';
    for (var i = 0; i < 5; i++) s += (i < full ? '★' : '☆');
    return s;
  }

  function cardHtml(b) {
    var cat = CAT_BY_NAME[b.category] || { color: '#888', icon: 'tool' };
    var ratingLine = b.rating
      ? '<span class="stars" style="color:var(--amber)">' + starString(b.rating.value) + '</span><span class="rating-num">' + b.rating.value.toFixed(1) + '</span><span class="rating-count">(' + b.rating.count + ')</span>'
      : '<span class="no-rating">No rating on file</span>';
    var badgeClass = b.rating ? (b.ratingSource === 'Google' ? 'badge-google' : 'badge-other') : 'badge-none';
    var rankBadge = b.pending ? '<span class="rank-badge pending-badge">Community submission</span>' : (b.rank ? '<span class="rank-badge">#' + b.rank + ' of ' + b.groupSize + '</span>' : '');
    var isFav = state.favorites.has(b.id);
    var isCmp = state.compare.has(b.id);
    var contactBtn;
    if (b.phone) {
      contactBtn = '<span class="btn btn-primary btn-contact" data-contact-phone="' + escapeHtml(b.phone) + '">Call ' + escapeHtml(b.phone) + '</span>';
    } else if (b.website) {
      contactBtn = '<a class="btn btn-primary" href="' + escapeHtml(b.website) + '" target="_blank" rel="noopener">Visit website</a>';
    } else {
      contactBtn = '<span class="btn btn-disabled">No contact on file</span>';
    }
    return (
      '<div class="card" data-id="' + b.id + '" tabindex="0">' +
      '<div class="card-top">' +
      '<div class="avatar" style="background:' + cat.color + '">' + escapeHtml(initials(b.name)) + '</div>' +
      '<button class="fav-btn' + (isFav ? ' active' : '') + '" data-fav="' + b.id + '" aria-label="Toggle favorite" title="Save to My List">' + (isFav ? '♥' : '♡') + '</button>' +
      '</div>' +
      '<div class="card-tag" style="color:' + cat.color + '">' + iconSvg(cat.icon, 14) + '<span>' + escapeHtml(b.category) + '</span></div>' +
      '<h3 class="card-name">' + escapeHtml(b.name) + '</h3>' +
      rankBadge +
      '<div class="card-rating">' + ratingLine + '</div>' +
      '<div class="rating-src-badge ' + badgeClass + '">' + ratingBadgeLabel(b) + '</div>' +
      '<p class="card-desc">' + escapeHtml(b.desc || '') + '</p>' +
      '<p class="card-addr">' + escapeHtml(b.address || 'Service area not specified') + '</p>' +
      '<div class="card-actions">' +
      contactBtn +
      '<label class="cmp-check"><input type="checkbox" data-cmp="' + b.id + '" ' + (isCmp ? 'checked' : '') + '/> Compare</label>' +
      '</div>' +
      '</div>'
    );
  }

  function renderGrid() {
    var grid = $('#grid');
    var all = allContractors().filter(matchesFilters);
    var sorted = sortList(all);
    $('#resultCount').textContent = sorted.length + (sorted.length === 1 ? ' contractor' : ' contractors') + ' found';
    if (sorted.length === 0) {
      grid.innerHTML = '<div class="empty-state">No contractors match these filters. Try widening your search or clearing a filter.</div>';
      return;
    }
    grid.innerHTML = sorted.map(cardHtml).join('');
    $all('.fav-btn', grid).forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleFavorite(btn.getAttribute('data-fav'));
      });
    });
    $all('[data-cmp]', grid).forEach(function (chk) {
      chk.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleCompare(chk.getAttribute('data-cmp'));
      });
    });
    $all('[data-contact-phone]', grid).forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        copyToClipboard(b.getAttribute('data-contact-phone'));
      });
    });
    $all('.card', grid).forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('a,.fav-btn,.cmp-check,input,[data-contact-phone]')) return;
        openDetail(card.getAttribute('data-id'));
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') openDetail(card.getAttribute('data-id'));
      });
    });
  }

  function renderAll() {
    renderChips();
    renderStats();
    renderGrid();
    renderFavCount();
    renderCompareBar();
  }

  function renderFavCount() {
    var n = state.favorites.size;
    var badge = $('#favCount');
    badge.textContent = n;
    badge.hidden = n === 0;
  }

  // ---------- favorites ----------
  function toggleFavorite(id) {
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    persistFavorites();
    renderGrid();
    renderFavCount();
    if ($('#myListModal').classList.contains('open')) renderMyList();
  }

  function persistFavorites() {
    if (state.mode === 'live' && state.favDoc) {
      state.favDoc.set({ ids: Array.from(state.favorites) }).catch(function () {});
    } else {
      saveLocalFavorites();
    }
  }

  function renderMyList() {
    var body = $('#myListBody');
    var items = allContractors().filter(function (b) { return state.favorites.has(b.id); });
    if (items.length === 0) {
      body.innerHTML = '<p class="empty-state">No favorites yet. Tap the heart on any contractor card to save it here.</p>';
      return;
    }
    body.innerHTML = items.map(cardHtml).join('');
    $all('.fav-btn', body).forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleFavorite(btn.getAttribute('data-fav'));
      });
    });
    $all('[data-cmp]', body).forEach(function (chk) {
      chk.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleCompare(chk.getAttribute('data-cmp'));
      });
    });
    $all('[data-contact-phone]', body).forEach(function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); copyToClipboard(b.getAttribute('data-contact-phone')); });
    });
    $all('.card', body).forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('a,.fav-btn,.cmp-check,input,[data-contact-phone]')) return;
        closeModal($('#myListModal'));
        openDetail(card.getAttribute('data-id'));
      });
    });
  }

  // ---------- compare ----------
  function toggleCompare(id) {
    if (state.compare.has(id)) {
      state.compare.delete(id);
    } else {
      if (state.compare.size >= 3) {
        showToast('You can compare up to 3 contractors at a time.');
        return;
      }
      state.compare.add(id);
    }
    renderGrid();
    renderCompareBar();
  }

  function renderCompareBar() {
    var bar = $('#compareBar');
    if (state.compare.size === 0) {
      bar.hidden = true;
      return;
    }
    bar.hidden = false;
    $('#compareCount').textContent = state.compare.size + (state.compare.size === 1 ? ' selected' : ' selected');
  }

  function openCompareModal() {
    var ids = Array.from(state.compare);
    var items = allContractors().filter(function (b) { return ids.indexOf(b.id) !== -1; });
    var body = $('#compareBody');
    if (items.length === 0) {
      body.innerHTML = '<p class="empty-state">Nothing selected to compare.</p>';
    } else {
      var rows = [
        ['Trade', function (b) { return escapeHtml(b.category); }],
        ['Directory rank', function (b) { return b.pending ? 'Community submission' : (b.rank ? ('#' + b.rank + ' of ' + b.groupSize) : '—'); }],
        ['Rating', function (b) { return b.rating ? (b.rating.value.toFixed(1) + '★ (' + b.rating.count + ') · ' + (b.ratingSource || '')) : 'Not yet rated'; }],
        ['Note', function (b) { return b.note ? escapeHtml(b.note) : '—'; }],
        ['Phone', function (b) { return b.phone ? escapeHtml(b.phone) : '—'; }],
        ['Address / area', function (b) { return escapeHtml(b.address || 'Not specified'); }],
        ['Sources', function (b) { return (b.sources ? b.sources.length : 0) + ' cited'; }]
      ];
      var html = '<table class="compare-table"><thead><tr><th></th>' + items.map(function (b) { return '<th>' + escapeHtml(b.name) + '</th>'; }).join('') + '</tr></thead><tbody>';
      rows.forEach(function (r) {
        html += '<tr><th>' + r[0] + '</th>' + items.map(function (b) { return '<td>' + r[1](b) + '</td>'; }).join('') + '</tr>';
      });
      html += '</tbody></table>';
      body.innerHTML = html;
    }
    openModal($('#compareModal'));
  }

  // ---------- detail modal ----------
  function openDetail(id) {
    var b = allContractors().filter(function (x) { return x.id === id; })[0];
    if (!b) return;
    var cat = CAT_BY_NAME[b.category] || { color: '#888', icon: 'tool' };
    var body = $('#detailBody');
    var ratingFull = b.rating
      ? '<span class="stars" style="color:var(--amber)">' + starString(b.rating.value) + '</span> ' + b.rating.value.toFixed(1) + ' (' + b.rating.count + ' reviews)'
      : 'No rating on file';
    var badgeClass = b.rating ? (b.ratingSource === 'Google' ? 'badge-google' : 'badge-other') : 'badge-none';
    var sourcesHtml = (b.sources || []).map(function (s) {
      return '<a class="source-chip" href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener">' + escapeHtml(s.type) + '</a>';
    }).join('');
    var contactBtn = b.phone
      ? '<span class="btn btn-primary btn-contact" data-contact-phone="' + escapeHtml(b.phone) + '">Call ' + escapeHtml(b.phone) + '</span>'
      : (b.website ? '<a class="btn btn-primary" href="' + escapeHtml(b.website) + '" target="_blank" rel="noopener">Visit website</a>' : '<span class="btn btn-disabled">No contact on file</span>');
    var isFav = state.favorites.has(b.id);
    body.innerHTML =
      '<div class="detail-head">' +
      '<div class="avatar avatar-lg" style="background:' + cat.color + '">' + escapeHtml(initials(b.name)) + '</div>' +
      '<div><h2 class="detail-name">' + escapeHtml(b.name) + '</h2>' +
      '<div class="card-tag" style="color:' + cat.color + '">' + iconSvg(cat.icon, 14) + '<span>' + escapeHtml(b.category) + '</span></div>' +
      (b.pending ? '<span class="rank-badge pending-badge">Community submission — unverified</span>' : (b.rank ? '<span class="rank-badge">#' + b.rank + ' of ' + b.groupSize + '</span>' : '')) +
      '</div></div>' +
      '<div class="detail-rating">' + ratingFull + '</div>' +
      '<div class="rating-src-badge ' + badgeClass + '">' + ratingBadgeLabel(b) + '</div>' +
      (b.note ? '<p class="detail-note"><strong>Research note:</strong> ' + escapeHtml(b.note) + '</p>' : '') +
      '<p class="detail-desc">' + escapeHtml(b.desc || '') + '</p>' +
      '<div class="detail-grid">' +
      '<div><span class="kv-label">Phone</span><span class="kv-val">' + (b.phone ? escapeHtml(b.phone) : '—') + '</span></div>' +
      '<div><span class="kv-label">Website</span><span class="kv-val">' + (b.website ? '<a href="' + escapeHtml(b.website) + '" target="_blank" rel="noopener">' + escapeHtml(b.website.replace(/^https?:\/\//, '')) + '</a>' : '—') + '</span></div>' +
      '<div><span class="kv-label">Address / area</span><span class="kv-val">' + escapeHtml(b.address || 'Not specified') + '</span></div>' +
      '<div><span class="kv-label">Rating source</span><span class="kv-val">' + escapeHtml(b.ratingSource || 'None found') + '</span></div>' +
      '</div>' +
      (sourcesHtml ? '<div class="sources-block"><span class="kv-label">Sources</span><div class="source-list">' + sourcesHtml + '</div></div>' : '') +
      '<div class="detail-actions">' +
      contactBtn +
      '<button class="btn btn-ghost" id="detailFavBtn">' + (isFav ? '♥ Remove from My List' : '♡ Save to My List') + '</button>' +
      '</div>';
    $('#detailFavBtn', body).addEventListener('click', function () { toggleFavorite(b.id); openDetail(b.id); });
    $all('[data-contact-phone]', body).forEach(function (btn) {
      btn.addEventListener('click', function () { copyToClipboard(btn.getAttribute('data-contact-phone')); });
    });
    openModal($('#detailModal'));
  }

  // ---------- submit business ----------
  function handleSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var name = form.bizName.value.trim();
    var category = form.bizCategory.value;
    if (!name || !category) { showToast('Business name and trade are required.'); return; }
    var entry = {
      id: 'community-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      category: category,
      name: name,
      phone: form.bizPhone.value.trim() || null,
      website: form.bizWebsite.value.trim() || null,
      address: form.bizAddress.value.trim() || null,
      zip: null,
      rating: null,
      ratingSource: null,
      sources: [],
      note: null,
      desc: form.bizDesc.value.trim() || 'Submitted by a community member.',
      rank: null,
      groupSize: null,
      pending: true
    };
    if (state.mode === 'live' && state.contractorsCol) {
      state.contractorsCol.add(entry).catch(function () { addLocalSubmission(entry); });
    } else {
      addLocalSubmission(entry);
    }
    form.reset();
    closeModal($('#submitModal'));
    showToast('Thanks! Your submission was added as an unverified community listing.');
  }

  function addLocalSubmission(entry) {
    state.submissions.push(entry);
    saveLocalSubmissions();
    renderAll();
  }

  // ---------- zip checker ----------
  function checkZip(value) {
    var out = $('#zipResult');
    var v = String(value).trim();
    if (!/^\d{5}$/.test(v)) {
      out.className = 'zip-result';
      out.textContent = '';
      return;
    }
    if (CORE_ZIPS.indexOf(v) !== -1) {
      out.className = 'zip-result zip-good';
      out.textContent = 'Inside Post Falls — contractors in this directory list it as core service area.';
    } else if (NEARBY_ZIPS.indexOf(v) !== -1) {
      out.className = 'zip-result zip-warn';
      out.textContent = 'Nearby Coeur d\'Alene-area ZIP — many of these contractors may still serve you. Confirm service area directly.';
    } else {
      out.className = 'zip-result zip-bad';
      out.textContent = 'Outside the core North Idaho / Kootenai County area this directory focuses on. Some contractors may still travel here — ask directly.';
    }
  }

  // ---------- misc UI ----------
  function copyToClipboard(text) {
    function fallback() {
      showToast('Phone: ' + text);
    }
    try {
      navigator.clipboard.writeText(text).then(function () {
        showToast('Copied ' + text + ' to clipboard.');
      }, fallback);
    } catch (e) { fallback(); }
  }

  var toastTimer = null;
  function showToast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3200);
  }

  function openModal(m) {
    m.classList.add('open');
    m.removeAttribute('hidden');
    document.body.classList.add('modal-open');
  }
  function closeModal(m) {
    m.classList.remove('open');
    m.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
  }
  function closeAllModals() {
    $all('.modal.open').forEach(closeModal);
  }

  function updateSyncPill() {
    var pill = $('#syncPill');
    pill.classList.remove('pill-connecting', 'pill-live', 'pill-local');
    if (state.mode === 'connecting') {
      pill.classList.add('pill-connecting');
      pill.textContent = 'Connecting…';
    } else if (state.mode === 'live') {
      pill.classList.add('pill-live');
      pill.textContent = 'Live · shared directory';
    } else {
      pill.classList.add('pill-local');
      pill.textContent = 'Local demo only';
    }
  }

  // ---------- backend wiring ----------
  function connectBackend() {
    if (!window.claude || typeof window.claude.use !== 'function') {
      goLocal();
      return;
    }
    Promise.all([window.claude.use('db'), window.claude.use('user')]).then(function (res) {
      var db = res[0], user = res[1];
      if (!db || !user) { goLocal(); return; }
      state.db = db;
      state.user = user;
      user.id().then(function (uid) {
        if (!uid) { goLocal(); return; }
        state.viewerId = uid;
        state.contractorsCol = db.collection('contractors');
        state.favDoc = db.doc('data/users/' + uid + '/favorites');
        state.mode = 'live';
        updateSyncPill();

        state.contractorsCol.onSnapshot(function (snap) {
          var subs = [];
          snap.docs.forEach(function (d) {
            if (!d.exists) return;
            if (/^pf\d+$/.test(d.id)) return; // seed doc, already have it locally
            var data = d.data();
            subs.push(Object.assign({ id: d.id, pending: true }, data));
          });
          state.submissions = subs;
          renderAll();
        }, function () {});

        state.favDoc.onSnapshot(function (snap) {
          var ids = (snap.exists && snap.data() && snap.data().ids) || [];
          state.favorites = new Set(ids);
          renderGrid();
          renderFavCount();
          if ($('#myListModal').classList.contains('open')) renderMyList();
        }, function () {});
      }).catch(goLocal);
    }).catch(goLocal);

    setTimeout(function () {
      if (state.mode === 'connecting') goLocal();
    }, 10500);
  }

  function goLocal() {
    if (state.mode === 'live') return;
    state.mode = 'local';
    state.favorites = loadLocalFavorites();
    state.submissions = loadLocalSubmissions();
    updateSyncPill();
    renderAll();
  }

  // ---------- init ----------
  function wireStaticUI() {
    $('#searchInput').addEventListener('input', function (e) {
      state.filters.search = e.target.value;
      renderGrid();
    });
    $('#googleOnlyToggle').addEventListener('change', function (e) {
      state.filters.googleOnly = e.target.checked;
      renderGrid();
    });
    $('#minRatingSelect').addEventListener('change', function (e) {
      state.filters.minRating = parseFloat(e.target.value) || 0;
      renderGrid();
    });
    $('#sortSelect').addEventListener('change', function (e) {
      state.filters.sort = e.target.value;
      renderGrid();
    });
    $('#zipInput').addEventListener('input', function (e) { checkZip(e.target.value); });

    $('#myListBtn').addEventListener('click', function () { renderMyList(); openModal($('#myListModal')); });
    $('#listBizBtn').addEventListener('click', function () { openModal($('#submitModal')); });
    $('#submitForm').addEventListener('submit', handleSubmit);

    $('#compareBtn').addEventListener('click', openCompareModal);
    $('#clearCompareBtn').addEventListener('click', function () {
      state.compare.clear();
      renderGrid();
      renderCompareBar();
    });

    $all('[data-close-modal]').forEach(function (btn) {
      btn.addEventListener('click', function () { closeModal(btn.closest('.modal')); });
    });
    $all('.modal').forEach(function (m) {
      m.addEventListener('mousedown', function (e) { if (e.target === m) closeModal(m); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    wireStaticUI();
    renderAll();
    updateSyncPill();
    connectBackend();
  });
})();
