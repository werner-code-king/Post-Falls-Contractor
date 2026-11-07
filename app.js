/* Post Falls Contractor Network — app logic */
(function () {
  'use strict';

  var SEED_CONTRACTORS = [{"id":"pf1","category":"Landscaping & Lawn Care","name":"Ramey's Yard Care, Inc.","phone":null,"website":null,"address":"3370 N Atlas Rd, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.9,"count":916},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/rameys-yard-care-inc-156226142056532"},{"type":"listing","url":"https://www.mapquest.com/us/idaho/rameys-yard-care-418195064"}],"note":"Birdeye review count seen as 725 in one snapshot and 916 in another; profile is marked unclaimed by the owner, so contact details are unverified.","desc":"Full-service yard care company offering lawn maintenance, landscape and pest/spray services in the Coeur d'Alene area.","rank":1,"groupSize":7},{"id":"pf2","category":"Landscaping & Lawn Care","name":"Loreto Landscaping Design & Build","phone":"(208) 215-6343","website":null,"address":"Post Falls, ID 83877 (serving Post Falls, Coeur d'Alene, Hayden, Rathdrum and surrounding North Idaho)","zip":"83877","rating":{"value":4.8,"count":16},"ratingSource":"Google","sources":[{"type":"listing","url":"https://www.houzz.com/professionals/design-build-firms/loreto-landscaping-design-and-build-pfvwus-pf~1514677978"},{"type":"listing","url":"https://business.google.com/v/loreto-landscaping-design-build/04800645753043107721/c61b/_"}],"note":"Phone and Google rating confirmed on both Houzz and its Google Business Profile; no independent company website found.","desc":"Landscape design-build company specializing in artificial turf installation, serving Post Falls, Coeur d'Alene, Hayden, Rathdrum and the surrounding North Idaho area.","rank":2,"groupSize":7},{"id":"pf3","category":"Landscaping & Lawn Care","name":"All Terrain Lawncare","phone":null,"website":"http://allterrainlawncare.com","address":"PO Box 1586, Post Falls, ID 83877","zip":"83877","rating":{"value":4.6,"count":85},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/all-terrain-lawncare-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.AllTerrainLawncare.34293326.html"}],"note":"HomeAdvisor listings show slightly different figures across snapshots (4.6-4.88); only a PO Box address and no phone number were found. Idaho trade license number shown on HomeAdvisor (RCE-67096) lists an expiration of 07/21/2026, which has already passed as of today.","desc":"Post Falls-based lawn care and landscaping company offering mowing, landscaping and tree work, with about 14 years in business per its Angi profile.","rank":3,"groupSize":7},{"id":"pf4","category":"Landscaping & Lawn Care","name":"TLC Lawn Care & Landscaping","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding areas","zip":null,"rating":{"value":4.5,"count":30},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/d/lawn-services/coeur-d'alene-id/"}],"note":"Found only in a Birdeye 'Best Lawn Services' list; no street address, phone or website located.","desc":"Lawn care and landscaping company serving the Coeur d'Alene area.","rank":4,"groupSize":7},{"id":"pf5","category":"Landscaping & Lawn Care","name":"Bee Stung Yard Care LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":5},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/bee-stung-yard-care-llc/015121699975901143482/e61c/_"}],"note":"Perfect rating but only 5 Google reviews found, so ranked below higher-volume competitors for credibility; no street address or phone found.","desc":"Small landscaping/yard-care business serving Coeur d'Alene, ID.","rank":5,"groupSize":7},{"id":"pf6","category":"Landscaping & Lawn Care","name":"K2 Landscaping","phone":null,"website":"https://www.k2landscaping.com/","address":"311 North Forest Drive, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":3},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/k2-landscaping-reviews-1.htm"},{"type":"listing","url":"https://mapquest.com/us/idaho/k-2-landscaping-366423934"}],"note":"5.0 rating is based on only 3 reviews, so ranked near the bottom despite the perfect score. Founding date is inconsistent across listings (1993 vs. 2023). A phone number seen in one snippet (208-819-6833) actually belongs to a different company (Altec Irrigation) and was excluded.","desc":"Landscaping company in Coeur d'Alene offering design, installation and sprinkler services; HomeAdvisor listings disagree on whether it has operated since 1993 or 2023.","rank":6,"groupSize":7},{"id":"pf7","category":"Landscaping & Lawn Care","name":"Augusta Lawn Care Services of Post Falls","phone":"(208) 593-2484","website":"https://www.augustalawncareservices.com/postfalls","address":"2126 W Cannon Ave, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.augustalawncareservices.com/services/postfalls-lawn-care"},{"type":"listing","url":"https://repairhit.com/biz/augusta-lawn-care-services-of-post-falls"}],"note":"No independent rating platform data found; the only testimonials located are self-published on the company's own site, and its RepairHit directory listing is marked unclaimed, so phone number is unverified. Ranked last for lack of third-party rating data.","desc":"Local franchise location of the Augusta Lawn Care Services brand offering mowing, landscaping, property cleanups and snow removal in Post Falls.","rank":7,"groupSize":7},{"id":"pf8","category":"Roofing","name":"Western Construction & Roofing LLC","phone":null,"website":null,"address":"955 S Innovation Way, Unit A, Post Falls, ID","zip":null,"rating":{"value":5,"count":42},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/western-construction-roofing-llc-reviews-1.htm"},{"type":"listing","url":"https://next-www.thumbtack.com/id/post-falls/roofing/western-construction-roofing-llc/service/445899136014671885"}],"note":"No phone number or official website could be confirmed; a phone number found in search results (208-244-6425) belongs to a different company (Western Foothills Construction LLC) and was excluded. Years in business reported inconsistently (4 years per Thumbtack vs. ~17 per a HomeAdvisor reviewer).","desc":"Roofing contractor based in Post Falls offering roof installation and repair, with Angi reviewers praising the crew and cleanup.","rank":1,"groupSize":5},{"id":"pf9","category":"Roofing","name":"New Heights Roofing, LLC","phone":"(208) 758-3161","website":null,"address":"2785 W Seltice Way, Suite A, Post Falls, ID 83854","zip":"83854","rating":{"value":4.68,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.NewHeightsRoofing.html"},{"type":"listing","url":"https://www.buildzoom.com/contractor/new-heights-roofing-wa"},{"type":"listing","url":"https://www.levelset.com/subcontractors/idaho/post-falls/roofers/new-heights-roofing-id/"}],"note":"Phone number from BuildZoom; a different toll-free number (855-766-3278) appears on LevelSet, so treat as unconfirmed. Serves Post Falls, Coeur d'Alene, Rathdrum and Hayden per its listings; offers free estimates and warranties.","desc":"Roofing company based in Post Falls with about a 20-year track record per its Angi profile, serving Post Falls, Coeur d'Alene, Rathdrum and Hayden.","rank":2,"groupSize":5},{"id":"pf10","category":"Roofing","name":"Integrity Roofing and Repair LLC","phone":"(509) 655-0090","website":null,"address":"2120 N Country Vista Blvd, Liberty Lake, WA 99019","zip":"99019","rating":{"value":5,"count":9},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/integrity-roofing-and-repair-llc"},{"type":"listing","url":"https://api.openstreetmap.org/user/Integrity%20Roofing%20WA/notes"}],"note":"Headquartered in Liberty Lake, WA (just across the state line), not Idaho; no confirmed Post Falls or Coeur d'Alene office was found, though it markets itself as serving the Inland Northwest including North Idaho. Rating based on only 9 reviews.","desc":"Roofing and repair company based in nearby Liberty Lake, WA that describes itself as a premier Inland Northwest roofing company serving the North Idaho/Spokane region.","rank":3,"groupSize":5},{"id":"pf11","category":"Roofing","name":"CAC Roofing","phone":"(208) 930-2580","website":null,"address":"418 E Lakeside Ave, Suite 222, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://business.cdachamber.com/list/member/cac-roofing-10432"},{"type":"listing","url":"https://www.buildzoom.com/contractor/cac-roofing"}],"note":"No third-party star rating found. A second phone number (206-915-1753) appears on BuildZoom but the Chamber's local 208 number was preferred. BuildZoom notes it holds a county contractor license per the Kootenai County license board (not independently verified here).","desc":"Locally owned roofing contractor headquartered in Coeur d'Alene, serving Coeur d'Alene, Hayden, Post Falls, Rathdrum and Kootenai County since 2016.","rank":4,"groupSize":5},{"id":"pf12","category":"Roofing","name":"Halfhide-Kline Roofing","phone":null,"website":null,"address":"PO Box 566, Coeur d'Alene, ID 83816 (service area Coeur d'Alene/Hayden)","zip":"83816","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://homeyou.com/halfhide-kline-roofing-hayden-id"},{"type":"listing","url":"https://business.cdachamber.com/list/member/cac-roofing-10432"}],"note":"Only a mailing PO Box found, no phone number, and no company-specific rating (an Angi 4.6/289-review figure found in search is the category-wide average for Coeur d'Alene roofers, not specific to this company, so it was not used). Ranked last for lack of verifiable contact/rating data.","desc":"Roofing company in the Coeur d'Alene/Hayden area, established in 1990 by Mark and Char Halfhide.","rank":5,"groupSize":5},{"id":"pf13","category":"HVAC & Furnace","name":"J.A. Bertsch Heating & Cooling","phone":"(208) 635-5480","website":null,"address":"3645 N. Government Way, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.6,"count":174},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.JABerschHeatingand.163145543.html"},{"type":"listing","url":"https://business.cdachamber.com/list/member/j-a-bertsch-heating-cooling-8653"}],"note":"HomeAdvisor shows 97% of homeowners recommend it; Chamber listing describes it as voted the #1 most trusted HVAC company (self-reported claim, not independently verified). A secondary phone (208-635-5481) also appears on the Chamber listing.","desc":"Full-service HVAC contractor in Coeur d'Alene offering heating and cooling installation/repair with 24-hour on-call service, per its Chamber of Commerce listing.","rank":1,"groupSize":5},{"id":"pf14","category":"HVAC & Furnace","name":"Finney Heating and Cooling LLC","phone":"208-202-5998","website":null,"address":"3751 W 5th Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":43},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://birdeye.com/finney-heating-and-cooling-llc-168358434448544"},{"type":"listing","url":"https://www.superpages.com/post-falls-id/bpp/finney-heating-and-cooling-573043699"}],"note":"Review count seen as both 43 and 49 across different snapshots/platforms. Superpages describes it as licensed, bonded and insured (self-reported, not independently verified here).","desc":"Licensed, bonded and insured HVAC/R contractor based in Post Falls.","rank":2,"groupSize":5},{"id":"pf15","category":"HVAC & Furnace","name":"Comfort Heating, Cooling & Electrical","phone":null,"website":null,"address":"3620 E Covington Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":6},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://directory.yext.com/en/comfort-heating-cooling-electrical-plumbing-369387407"},{"type":"listing","url":"https://homeadvisor.com/rated.JTWEnterprisesLLC.135037641.html"}],"note":"A separate lead-gen directory (voolt.pro) showed an aggregated 4.9/1409-reviews figure that looks inflated/unverifiable and was not used; HomeAdvisor's smaller, directly-attributed 5.0/6 figure was used instead. No phone number could be confirmed. Company describes itself as serving the area since 1993 (self-reported).","desc":"Post Falls-based HVAC and electrical company describing itself as locally owned and operating since 1993.","rank":3,"groupSize":5},{"id":"pf16","category":"HVAC & Furnace","name":"Mainstream Electric, Heating, Cooling & Plumbing","phone":"(208) 777-7766","website":null,"address":"PO Box 3436, Coeur d'Alene, ID 83816 (headquartered at 12822 E. Indiana Ave., Spokane Valley, WA; serves Post Falls and Coeur d'Alene)","zip":"83816","rating":{"value":4.4,"count":44},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://business.cdachamber.com/list/member/mainstream-electric-heating-cooling-plumbing-2801"},{"type":"listing","url":"https://www.zoominfo.com/c/mainstream-electric/168379193"}],"note":"Company is headquartered in Spokane Valley, WA, not Idaho, though it is listed in the Coeur d'Alene Chamber of Commerce directory and serves the Post Falls/CDA area; several conflicting phone numbers found, the local 208 Chamber number was used. In business since 2000 per earlier search results.","desc":"Regional electric/HVAC/plumbing company headquartered in Spokane Valley, WA, listed with the Coeur d'Alene Chamber of Commerce and serving Post Falls and Coeur d'Alene.","rank":4,"groupSize":5},{"id":"pf17","category":"HVAC & Furnace","name":"Lake City Heating & Cooling","phone":null,"website":null,"address":"2701 N 4th St, Coeur d'Alene, ID 83815","zip":"83815","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/lake-city-heating-and-cooling-reviews-4843856.htm"},{"type":"listing","url":"https://reviews.birdeye.com/lake-city-heating-cooling-159007632"}],"note":"Angi listing states an overall 5-out-of-5 rating but no review count was given, so rating was left null rather than guessing a count. No phone number found.","desc":"HVAC contractor based in Coeur d'Alene offering heating, air conditioning and duct cleaning services.","rank":5,"groupSize":5},{"id":"pf18","category":"Electrical","name":"Scotty's Electric Co","phone":"(208) 659-0391","website":null,"address":"Serving Coeur d'Alene, Hayden & Kootenai County, ID","zip":null,"rating":{"value":4.5,"count":117},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/electrical.htm"},{"type":"listing","url":"https://homeyou.com/scottys-electric-hayden-id"},{"type":"listing","url":"https://business.google.com/v/scottys-electric-co/016425345089985470876/54d7/_"}],"note":"Phone sourced from a third-party aggregator and not independently confirmed; no official website found; no fixed street address found (Google Business profile lists a service area).","desc":"General electrical contractor serving Coeur d'Alene and Hayden, with 117 reviews averaging 4.5 stars on Angi.","rank":1,"groupSize":8},{"id":"pf19","category":"Electrical","name":"Mr. Electric of Spokane & Coeur d'Alene","phone":null,"website":"https://mrelectric.com/locations/idaho/post-falls/","address":"Serving Post Falls, Coeur d'Alene & Kootenai County, ID (based in Spokane Valley, WA)","zip":null,"rating":{"value":4.6,"count":85},"ratingSource":"Angi","sources":[{"type":"website","url":"https://mrelectric.com/locations/idaho/post-falls/"},{"type":"website","url":"https://mrelectric.com/coeur-d-alene"},{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/mr-electric-of-spokane-and-coeurdalene-reviews-9458551.htm"}],"note":"Regional franchise based in Spokane Valley, WA, not a Post Falls/CDA storefront; says in business since 2011; rating platform attribution is based on its Angi listing name since the originating snippet did not explicitly name the platform.","desc":"Mr. Electric franchise offering residential and commercial electrical work, emergency service and free estimates in the Post Falls and Coeur d'Alene area.","rank":2,"groupSize":8},{"id":"pf20","category":"Electrical","name":"Media Controlled, LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene & Kootenai County, ID","zip":null,"rating":{"value":4.7,"count":21},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_d_Alene.ID.-12026.html"}],"note":"No street address, phone, or website found in search results.","desc":"Electrical contractor serving Coeur d'Alene, in business since 2017 per its HomeAdvisor profile.","rank":3,"groupSize":8},{"id":"pf21","category":"Electrical","name":"CC Electric","phone":null,"website":null,"address":"1311 E Fernwood Ct, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.9,"count":12},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.mapquest.com/us/idaho/cc-electric-507161318"},{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_d_alene.ID.-12026.html"}],"note":"Owner-operated shop (listing describes it as run by 'Chad'); no phone or website confirmed.","desc":"Owner-operated residential and commercial electrical contractor based in Coeur d'Alene.","rank":4,"groupSize":8},{"id":"pf22","category":"Electrical","name":"Resurrection Electric","phone":null,"website":"http://resurrection-electric.com","address":"4451 W Seltice Way #2, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":10},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/resurrection-electric-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.ResurrectionElectric.143030779.html"}],"note":"Also shows a 5.0 rating on HomeAdvisor; listed as veteran-owned; no phone number found in search results.","desc":"Veteran-owned electrical contractor located in Coeur d'Alene with a 5.0 rating across its Angi/HomeAdvisor reviews.","rank":5,"groupSize":8},{"id":"pf23","category":"Electrical","name":"Connection Electric LLC","phone":null,"website":null,"address":"5763 N Harcourt Dr, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":7},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.CONNECTIONELECTRICLLC.138029913.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/connection-electric-llc-reviews-1.htm"}],"note":"In business since 2020 per HomeAdvisor; no phone or website found.","desc":"Electrical contracting business based in Coeur d'Alene, in business since 2020.","rank":6,"groupSize":8},{"id":"pf24","category":"Electrical","name":"Comfort Heating, Cooling and Electrical","phone":null,"website":null,"address":"Serving Post Falls & Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":6},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Post_Falls.ID.-12026.html"},{"type":"listing","url":"https://directory.yext.com/en/comfort-heating-cooling-electrical-plumbing-369387407"}],"note":"Multi-trade (HVAC/electrical/plumbing) company; only 6 reviews found, so ranked lower than businesses with larger samples despite the perfect score.","desc":"Multi-trade home services company offering electrical work alongside HVAC and plumbing, in business since 1993 per its listing.","rank":7,"groupSize":8},{"id":"pf25","category":"Electrical","name":"Super D Electric LLC","phone":"(208) 215-6857","website":"https://superdelectric.com","address":"2705 N Howard St, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.4,"count":34},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://todayshomeowner.com/near-me/idaho/coeur-dalene/electrical/"},{"type":"listing","url":"https://reviews.birdeye.com/super-d-electric-llc-166539827650110"}],"note":"Birdeye profile is unclaimed by the business, which may affect how current the review count/rating is; ranked last in this category for the lowest rating found.","desc":"Electrical contractor in Coeur d'Alene offering construction, repair and holiday lighting services.","rank":8,"groupSize":8},{"id":"pf26","category":"Plumbing","name":"My Guy Plumbing & Service","phone":null,"website":null,"address":"Serving Post Falls & Coeur d'Alene, ID","zip":null,"rating":{"value":4.9,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.MyGuyPlumbing.53534756.html"},{"type":"listing","url":"https://www.homeadvisor.com/c.Plumbing.Coeur_d_alene.ID.-12058.html"}],"note":"No confirmed phone, website, or street address found in search results.","desc":"Plumbing service company serving Post Falls and Coeur d'Alene, in business since 2015 per its HomeAdvisor profile.","rank":1,"groupSize":6},{"id":"pf27","category":"Plumbing","name":"The Rooter Guys Plumbing, LLC","phone":"(208) 772-4408","website":"https://therooterguysplumbing.com","address":"11889 N Tracey Rd, Hayden, ID 83835","zip":"83835","rating":{"value":4.62,"count":106},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/the-22852614"},{"type":"listing","url":"https://www.bbb.org/us/id/hayden/category/plumber"}],"note":"Also performs septic work; locally owned and operated since 2004 per its listing; rating snapshot dated around September 2025.","desc":"Plumbing and septic service company based in Hayden, ID, locally owned and operated since 2004.","rank":2,"groupSize":6},{"id":"pf28","category":"Plumbing","name":"Method Plumbing & Drains LLC","phone":null,"website":null,"address":"3110 N Radiant Star Rd, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":11},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.bbb.org/us/id/post-falls/category/plumber"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/water-heater-installation/method-plumbing/service/496283146135617542"}],"note":"BBB lists this address with an A+ rating; in business since 2021 per HomeAdvisor; phone/website not confirmed in search results.","desc":"Full-service residential and commercial plumbing repair and install company based in Post Falls, in business since 2021.","rank":3,"groupSize":6},{"id":"pf29","category":"Plumbing","name":"Straight Shooter Plumbing and Rooter, LLC","phone":"(208) 215-8723","website":"https://www.straightshooterplumbing.com","address":"10623 N Government Way, Hayden, ID 83835 (opened a dedicated Post Falls office in Jan 2024)","zip":"83835","rating":{"value":5,"count":8},"ratingSource":"HomeAdvisor","sources":[{"type":"website","url":"https://www.straightshooterplumbing.com/post-falls-id/"},{"type":"listing","url":"https://www.buildzoom.com/contractor/straight-shooter-plumbing-and-rooter"},{"type":"listing","url":"https://globenewswire.com/news-release/2024/01/18/2811934/0/en/Straight-Shooter-Plumbing-and-Rooter-Expands-Its-Reach-with-a-New-Office-Location-in-Post-Falls-Idaho.html"}],"note":"Headquartered in Hayden with a Post Falls office added per a Jan 2024 press release; a separate lead-aggregator page cited much higher Google/Yelp/Facebook counts that could not be independently verified, so only the HomeAdvisor figure (5.0/8) is reported here.","desc":"24/7 full-service plumbing company headquartered in Hayden, ID that opened a dedicated Post Falls office in January 2024.","rank":4,"groupSize":6},{"id":"pf30","category":"Plumbing","name":"America NW Plumbing, Heating and Cooling","phone":"(208) 755-2333","website":"https://americanwplumbing.com","address":"1420 E 3rd Ave Suite 201, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://americanwplumbing.com"},{"type":"website","url":"https://www.americanwplumbing.com/about-us/"},{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/america-nw-plumbing-778751668"}],"note":"Two different street addresses appear across directories (a MapQuest listing gives a separate Seltice Way address); no star rating found in search results; says veteran-owned and serving the area since 1977.","desc":"Plumbing and HVAC contractor based in Post Falls that says it has served the area since 1977.","rank":5,"groupSize":6},{"id":"pf31","category":"Plumbing","name":"Lakeside Custom Plumbing, Inc","phone":"(208) 691-9356","website":"https://www.lakesidecustomplumbing.com","address":"14665 E Antelope Ct, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/lakeside-custom-plumbing-reviews-6237331.htm"},{"type":"listing","url":"https://start.cortera.com/company/research/k2n7mzs3n/lakeside-custom-plumbing-inc/"}],"note":"Address conflicts between directories (Cortera lists a different address on N 13th St); no customer rating/review count found; described as having 21 years in business.","desc":"Plumbing company based in Coeur d'Alene with a reported 21 years in business; no review rating located.","rank":6,"groupSize":6},{"id":"pf32","category":"Handyman","name":"Red Beard Handyman Services","phone":null,"website":null,"address":"PO Box 1082, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":21},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.RedBeardHandyman.80757085.html"}],"note":"Angi separately shows a 4.9 rating from 22 reviews for the same business, consistent with the HomeAdvisor figure; family-owned, in business since 2004; no phone or website found.","desc":"Family-owned handyman and carpentry business serving Post Falls and surrounding North Idaho, in business since 2004.","rank":1,"groupSize":5},{"id":"pf33","category":"Handyman","name":"Northwest Home Repair and Inspections, LLC","phone":null,"website":null,"address":"510 South Clearwater Loop, Suite 100, Post Falls, ID 83854","zip":"83854","rating":{"value":4.95,"count":20},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/northwest-home-repair-and-inspections-llc-reviews-1.htm"},{"type":"listing","url":"https://match.angi.com/rated.NorthwestHomeRepairand.125129452.html"}],"note":"Offers warranties per its Angi listing; no phone or website found in search results.","desc":"Handyman and home-repair/inspection company based in Post Falls.","rank":2,"groupSize":5},{"id":"pf34","category":"Handyman","name":"Project Pro","phone":null,"website":null,"address":"4677 E. Aspen Way, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":7},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/project-pro-reviews-1.htm"}],"note":"Listing shows free estimates but no emergency services; no phone or website found.","desc":"Handyman service based in Post Falls offering free project estimates.","rank":3,"groupSize":5},{"id":"pf35","category":"Handyman","name":"All Odd Jobs Handyman Services","phone":null,"website":null,"address":"950 Kootenai Cutoff Rd, Kootenai County, ID","zip":null,"rating":{"value":5,"count":2},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Handyman-Services.Kootenai.ID.-12039.html"}],"note":"Only 2 reviews found, so the perfect rating carries low statistical confidence; ranked below higher-volume competitors for credibility.","desc":"Handyman service operating in the Kootenai, ID area.","rank":4,"groupSize":5},{"id":"pf36","category":"Handyman","name":"Kootenai County Handyman","phone":"(253) 606-2310","website":null,"address":"Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.bbb.org/us/id/coeur-d-alene/profile/remodel-contractors/kootenai-county-handyman-1296-1000178300"}],"note":"BBB Accredited with an A+ letter rating (since Feb 2025), but no numeric star rating or review count was found; listing shows Yelp and Facebook pages rather than an official company website.","desc":"General handyman and remodeling contractor serving Coeur d'Alene, North Idaho and the Spokane area, offering decks, fencing, drywall, painting and small excavation work.","rank":5,"groupSize":5},{"id":"pf37","category":"Windows & Doors","name":"Equity Builders of Columbia Basin","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding areas","zip":null,"rating":{"value":4.9,"count":45},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://match.angi.com/tloc/Post-Falls-ID/Windows-Install-or-Replace"},{"type":"listing","url":"https://www.homeadvisor.com/c.Windows.Coeur_D_Alene.ID.-12080.html"}],"note":"No street address found; tagged a HomeAdvisor Super Service Award winner for windows/doors work in the Coeur d'Alene area.","desc":"Remodeling/construction contractor offering window and door installation services in the Coeur d'Alene, ID area.","rank":1,"groupSize":7},{"id":"pf38","category":"Windows & Doors","name":"Oakmont Carpentry","phone":null,"website":null,"address":"Serving North Idaho from Blackrock to Athol, ID (based in Post Falls area)","zip":null,"rating":{"value":5,"count":8},"ratingSource":"Angi","sources":[{"type":"search","url":"https://match.angi.com/rated.OakmontCarpentry.115816821.html"},{"type":"search","url":"https://match.angi.com/c.Carpenters.Post_Falls.ID.-12010.html"}],"note":"Primarily a finish-carpentry/deck-building contractor that also lists windows and doors among its services; no confirmed street address or phone found.","desc":"North Idaho carpentry contractor (decks, finish carpentry) that also performs window and door installation, with an Angi review describing a large deck project.","rank":2,"groupSize":7},{"id":"pf39","category":"Windows & Doors","name":"Fireside Windows, LLC","phone":null,"website":null,"address":"Serving Post Falls, ID and surrounding areas","zip":null,"rating":{"value":4.9,"count":10},"ratingSource":"Angi","sources":[{"type":"search","url":"https://match.angi.com/rated.pteranodonimagescom.92927965.html"},{"type":"listing","url":"https://www.homeadvisor.com/rated.pteranodonimagescom.92927965.html"}],"note":"In business since 2020 per its listing; a HomeAdvisor page also showed 5.0/10 for the same business, so platforms differ slightly on the exact rating value.","desc":"Window and siding replacement company serving Post Falls, ID, with reviewers praising quality, price and service.","rank":3,"groupSize":7},{"id":"pf40","category":"Windows & Doors","name":"Elite Construction & Remodeling","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding areas","zip":null,"rating":{"value":4.7,"count":97},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Doors-Exterior-Install-or-Replace"}],"note":"Highest review count found among local window/door contractors (97), though its rating value is slightly below several lower-volume listings; in business since 2001.","desc":"Remodeling contractor in business since 2001 offering exterior and interior door installation/replacement in the Coeur d'Alene area.","rank":4,"groupSize":7},{"id":"pf41","category":"Windows & Doors","name":"Pella Windows & Doors","phone":"(208) 665-1313","website":null,"address":"901 Appleway Ave., Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://todayshomeowner.com/near-me/idaho/coeur-dalene/windows/"}],"note":"National window/door brand with a local Coeur d'Alene showroom; no independent rating/review count found in search results.","desc":"National window and door manufacturer/retailer with a showroom location in Coeur d'Alene, ID.","rank":5,"groupSize":7},{"id":"pf42","category":"Windows & Doors","name":"Modern Glass Company","phone":"(208) 765-1644","website":"https://clutch.co/profile/modern-glass-company","address":"3727 W. Industrial Loop, Coeur d'Alene, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://www.milgard.com/dealer-profile/idaho/coeur-dalene/modern-glass-co"},{"type":"search","url":"https://business.cdachamber.com/list/member/modern-glass-company-615"},{"type":"search","url":"https://startpage.mapquest.com/us/idaho/modern-glass-company-10235614"}],"note":"Angi shows a 5-star listing with no stated review count, and a MapQuest/Yelp mirror shows only 7 reviews on a listing marked 'Closed' (possibly outdated), so rating omitted for reliability rather than reported as a clean 5.0.","desc":"Family-owned glass, window and door company operating in Coeur d'Alene since 1947, a listed Milgard dealer.","rank":6,"groupSize":7},{"id":"pf43","category":"Windows & Doors","name":"Window World (Hayden, ID)","phone":null,"website":null,"address":"Hayden, ID showroom, serving Kootenai County and the Spokane area","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://www.houzz.com/professionals/window-sales-and-installation/aandl-homes-window-world-pfvwus-pf~665179840"},{"type":"search","url":"https://www.ecowatch.com/windows/replacement/id/post-falls"}],"note":"National franchise brand; owners' Houzz profile cites over 30 years of window/home-improvement installation experience, but no independent rating/review count was found.","desc":"Window replacement franchise with a Hayden, ID showroom serving Kootenai County, including Post Falls and Coeur d'Alene.","rank":7,"groupSize":7},{"id":"pf44","category":"Painting","name":"James Painting LLC","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":5,"count":84},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/james-painting-llc/01188754547515292694/0e88/_"},{"type":"listing","url":"https://business.google.com/v/james-painting-llc/01188754547515292694/0e88/_/rev"}],"note":"Listed on Google Business as 'James Painting LLC / Mitchell Brothers Painting'; no confirmed phone/street address found, and a possible BBB zip reference (83854) could not be confirmed as belonging to this business.","desc":"Painting contractor offering interior, exterior, and door painting with Post Falls listed as a service area.","rank":1,"groupSize":8},{"id":"pf45","category":"Painting","name":"Post Falls Painter","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":5,"count":40},"ratingSource":"Google","sources":[{"type":"listing","url":"https://lantern.llc/b/post-falls-painter-post-falls"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/interior-painting/post-falls-painter/service/446010728109277192"}],"note":"Rating is shown on a Lantern marketing/booking page (a third-party platform partner), not verified directly on Google Maps, so treat with some caution.","desc":"Local painting service branded 'Post Falls Painter,' with reviewers describing the owner as dependable and trustworthy.","rank":2,"groupSize":8},{"id":"pf46","category":"Painting","name":"Best Painting Company (Coeur d'Alene | Post Falls | Spokane)","phone":null,"website":null,"address":"1142 North 5th Street, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/cda/best-painting-company-%7C-coeur-d%27alene-%7C-post-falls-%7C-spokane-reviews-10803796.htm"},{"type":"listing","url":"https://www.homeadvisor.com/c.Painting.Coeur_d_alene.ID.-12054.html"}],"note":"HomeAdvisor Super Service Award winner, in business since 2016; Angi separately shows an overall ~4.9 rating without a clear review count.","desc":"Painting contractor serving Coeur d'Alene, Post Falls and Spokane, offering interior/exterior painting, trim, siding, doors, garage doors and fences.","rank":3,"groupSize":8},{"id":"pf47","category":"Painting","name":"High Performance Painting and Drywall, LLC","phone":null,"website":null,"address":"5700 E Lorraine Dr, Athol, ID 83801","zip":"83801","rating":{"value":4.7,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Exterior-Home-or-Structure-Paint-or-Stain"}],"note":"In business since 2018; has the largest review count among Coeur d'Alene-area painters found. A second, unconfirmed address (849 N 4th St, Coeur d'Alene) also appeared in a BBB snippet.","desc":"Painting and drywall contractor based near Coeur d'Alene, serving the surrounding area since 2018.","rank":4,"groupSize":8},{"id":"pf48","category":"Painting","name":"Five Star Painting of Coeur d'Alene","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.7,"count":7},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d%27alene/five-star-painting-of-coeur-d%27alene%2C-id-reviews-10651908.htm"}],"note":"National franchise; Angi shows a similar 4.71 rating from the same 7 reviews. Small sample size.","desc":"Franchise painting company serving Coeur d'Alene, offering free estimates and warrantied work.","rank":5,"groupSize":8},{"id":"pf49","category":"Painting","name":"Get R Done Painting","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.5,"count":30},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.GetRDonePainting.24920498.html"}],"note":"No street address found.","desc":"Painting contractor serving the Coeur d'Alene area.","rank":6,"groupSize":8},{"id":"pf50","category":"Painting","name":"Honey Do Painting, LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.5,"count":1},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.HoneyDoPainting.74146373.html"}],"note":"Only one review found, so ranked below higher-volume competitors despite a comparable rating value; family-owned per its own listing description.","desc":"Family-owned-and-operated painting company based in Coeur d'Alene, Idaho.","rank":7,"groupSize":8},{"id":"pf51","category":"Painting","name":"Tru Image Painting, LLC","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":4.4,"count":16},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/c.Painting.Post_Falls.ID.-12054.html"}],"note":"Lowest rating value found in this category search set.","desc":"Painting contractor serving Post Falls, ID.","rank":8,"groupSize":8},{"id":"pf52","category":"Pressure Washing","name":"Double Diamond Window Cleaning and Pressure Washing","phone":"(208) 214-8838","website":null,"address":"55 N Cedar St, Suite 111, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":316},"ratingSource":"Google","sources":[{"type":"listing","url":"https://lantern.llc/b/double-diamond-window-cleaning-and-pressure-washing-post-falls/book"},{"type":"listing","url":"https://lantern.llc/b/double-diamond-window-cleaning-and-pressure-washing-post-falls"}],"note":"Rating/phone sourced from a third-party Lantern booking page rather than Google Maps directly; the same suite address appears listed under other business names in some directories (e.g., 'Crazy Clean', 'Clean N Sparkly'), so verify before contacting.","desc":"Exterior cleaning company offering window cleaning, pressure washing, gutter cleaning and roof moss treatment in Post Falls, ID, with a stated 3-day rain warranty.","rank":1,"groupSize":6},{"id":"pf53","category":"Pressure Washing","name":"River City Pressure Washing","phone":null,"website":null,"address":"Serving Coeur d'Alene, Hayden and Post Falls, ID","zip":null,"rating":{"value":5,"count":11},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/river-city-pressure-washing-reviews-1.htm"},{"type":"search","url":"https://www.homeadvisor.com/c.powerwashing.Post_Falls.ID.-14980.html"}],"note":"In business since 2019; Angi separately shows a 5.00 rating from 6 reviews. A single-source street address (1507 East Lakeside Ave) could not be confirmed against a second source, so a service-area description is used instead.","desc":"Pressure washing company in business since 2019, serving Coeur d'Alene, Hayden and Post Falls.","rank":2,"groupSize":6},{"id":"pf54","category":"Pressure Washing","name":"Two Dogs Washing","phone":null,"website":"http://twodogswashing.com","address":"401 East 6th Avenue, Post Falls, ID 83854","zip":"83854","rating":{"value":4.8,"count":30},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.TwoDogsWashing.128556994.html"},{"type":"search","url":"https://www.homeadvisor.com/c.powerwashing.Post_Falls.ID.-14980.html"}],"note":"In business since 2015; no phone number found in search results.","desc":"Pressure washing company in Post Falls, ID, in business since 2015, offering residential and commercial exterior cleaning with free estimates.","rank":3,"groupSize":6},{"id":"pf55","category":"Pressure Washing","name":"JMG Handyman Services LLC","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":4.5,"count":8},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/c.powerwashing.Post_Falls.ID.-14980.html"}],"note":"Newer business, in operation only since 2024, with a small review sample; ranked below more established, higher-volume competitors.","desc":"Handyman services company in Post Falls, ID, offering pressure washing among its services since 2024.","rank":4,"groupSize":6},{"id":"pf56","category":"Pressure Washing","name":"Advanced Hot Wash LLC","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.AdvancedHotWashLLC.23990933.html"}],"note":"No rating or review count found in search results.","desc":"Pressure washing business listed as serving the Post Falls, ID area.","rank":5,"groupSize":6},{"id":"pf57","category":"Pressure Washing","name":"Inland NorthWash, LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, Hayden and Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/pressure-washing"}],"note":"Listed with the Better Business Bureau; no rating/review count found.","desc":"Pressure washing company listed with the BBB as serving Coeur d'Alene, Hayden and Post Falls, ID.","rank":6,"groupSize":6},{"id":"pf58","category":"Garage Doors","name":"Precision Garage Door Service of Post Falls","phone":"(208) 204-0129","website":"https://www.precisiondoor.net/locations/idaho/spokane/coeur-dalene","address":"306 N Spokane St Unit G, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":463},"ratingSource":"Google","sources":[{"type":"search","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/precision-garage-door-service-of-post-falls/"},{"type":"website","url":"https://www.precisiondoor.net/locations/idaho/spokane/coeur-dalene"},{"type":"listing","url":"https://precisiondoor.net/locations/idaho/spokane/coeur-dalene/post-falls/reviews"}],"note":"ServiceAgent aggregator cites 4.9/463 Google reviews; Precision's own Post Falls reviews page shows a much smaller sample (6 reviews, 4.17 avg), so figures conflict across sources — weighted toward the larger Google-attributed figure for ranking.","desc":"Franchise garage door repair, installation, and spring-replacement company with a Post Falls service location.","rank":1,"groupSize":8},{"id":"pf59","category":"Garage Doors","name":"Overhead Door Company Spokane-Coeur d'Alene","phone":"(208) 773-0502","website":null,"address":"420 E 5th Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.8,"count":333},"ratingSource":"Google","sources":[{"type":"search","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/overhead-door-company-of-spokane-coeur-d-alene/"},{"type":"listing","url":"https://business.cdachamber.com/list/category/fence-companies-electric-gate-systems-259"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/overhead-door-company-spokane-coeur-d'alene-reviews-2356179.htm"}],"note":"HomeAdvisor separately lists 4.89/45 reviews for this company, so review counts vary by platform.","desc":"Garage door sales, installation, and repair company with a Post Falls location serving the greater Spokane-Coeur d'Alene region.","rank":2,"groupSize":8},{"id":"pf60","category":"Garage Doors","name":"All Season Overhead Door","phone":null,"website":null,"address":"409 South Spokane Ave, Coeur d'Alene, ID","zip":null,"rating":{"value":4.96,"count":35},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Garage-Door-Opener-Repair-or-Adjust"}],"note":"No phone number could be confirmed in search results.","desc":"Garage door installation and repair company serving Coeur d'Alene, Idaho; a reviewer praised a technician's knowledge of garage door openers.","rank":3,"groupSize":8},{"id":"pf61","category":"Garage Doors","name":"North Idaho Garage Door","phone":null,"website":null,"address":"Serving Post Falls, ID 83854 and surrounding area","zip":"83854","rating":{"value":5,"count":511},"ratingSource":"Voolt","sources":[{"type":"listing","url":"https://voolt.pro/idaho/post-falls/home-construction/north-idaho-garage-door/"},{"type":"search","url":"https://prospeo.io/c/north-idaho-garage-door"}],"note":"Rating comes from an unverified third-party directory (Voolt); the phone number found elsewhere looked incomplete and no street address could be confirmed, so this is ranked below competitors with verified ratings despite the high raw numbers.","desc":"Locally owned garage door company serving the Post Falls area.","rank":4,"groupSize":8},{"id":"pf62","category":"Garage Doors","name":"DJ's Garage Door, LLC","phone":null,"website":null,"address":"2640 E Valley Road, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":1},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Garage-Door-Opener-Repair-or-Adjust"}],"note":"Perfect rating but based on only 1 review — ranked near the bottom for credibility despite the high score.","desc":"Garage door service and repair company based in Coeur d'Alene.","rank":5,"groupSize":8},{"id":"pf63","category":"Garage Doors","name":"Garage Door Center Inc.","phone":null,"website":null,"address":"808 W Mullan Ave, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/garage-door-center-inc-10240371"}],"note":"MapQuest listing shows 7 reviews but no star value, and marks the business as closed — status should be verified before referral.","desc":"Garage door sales and service business listed in Post Falls.","rank":6,"groupSize":8},{"id":"pf64","category":"Garage Doors","name":"NationServe of Coeur d'Alene","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://homeadvisor.com/tloc/Coeur-d-Alene-ID/Garage-Door-Install-or-Replace"}],"note":"No numeric rating found in search results; listed as offering free project estimates and warranties.","desc":"Garage door repair and installation company serving Coeur d'Alene.","rank":7,"groupSize":8},{"id":"pf65","category":"Garage Doors","name":"Same Day Garage Doors","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://business.dptribune.com/dptribune/news/read/43259116/same_day_garage_doors_announces_24/7_emergency_repair_and_installation_services"}],"note":"Found only via a press release announcing 24/7 emergency service; no independent address, phone, or rating could be confirmed, and the release may be dated.","desc":"Garage door company that announced 24/7 emergency repair and installation service in the Post Falls area.","rank":8,"groupSize":8},{"id":"pf66","category":"Fencing & Decking","name":"Best Fence","phone":"(208) 664-4050","website":null,"address":"1295 E Best Ave, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.9,"count":55},"ratingSource":"Yext","sources":[{"type":"listing","url":"https://directory.yext.com/en/best-fence-1933051619"},{"type":"listing","url":"https://directory.cdachamber.com/list/category/fence-companies-electric-gate-systems-259"},{"type":"listing","url":"https://www.procore.com/network/p/best-construction-inc-coeur-dalene"}],"note":"Phone number is drawn from a Chamber of Commerce listing for 'Best Builder CO LLC' at the same address, an apparently related/parent entity — not independently confirmed as Best Fence's own line.","desc":"Fence and railing contractor in Coeur d'Alene installing wood, vinyl, ornamental metal, chain-link, and composite fencing.","rank":1,"groupSize":5},{"id":"pf67","category":"Fencing & Decking","name":"Bulldog Fence Inc","phone":"(509) 475-5079","website":null,"address":"Serving Coeur d'Alene & surrounding area (based in Otis Orchards, WA)","zip":null,"rating":{"value":5,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.houzz.com/professionals/fencing-and-gate-sales-and-construction/bulldog-fence-inc-pfvwus-pf~758628345"},{"type":"listing","url":"https://www.homeadvisor.com/sp/bulldog-fence-otis-orchards-wa"}],"note":"Perfect rating from a modest sample of 19 reviews; headquartered just across the WA border in Otis Orchards but listed as serving Coeur d'Alene and surrounding area.","desc":"Fencing and gate sales/construction company established in 2004, serving the Spokane-Coeur d'Alene area.","rank":2,"groupSize":5},{"id":"pf68","category":"Fencing & Decking","name":"Idaho Fence","phone":"(208) 773-3781","website":null,"address":"2430 W Seltice Way, Post Falls, ID 83854","zip":"83854","rating":{"value":4.1,"count":254},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/idaho-fence-company-post-falls-id"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/idaho-fence-reviews-6512933.htm"},{"type":"listing","url":"https://reviews.birdeye.com/idaho-fence-148917071010899"},{"type":"listing","url":"https://homeguide.com/id/coeur-d'alene/fence-installation/idaho-fence-6aOsiySSR"}],"note":"A separate BuildZoom page lists a different phone number ((208) 687-2196), so the number should be confirmed directly. Angi separately shows a 4.85 rating (no review count given); CustomerLobby reviews are mixed, with at least one complaint about workmanship despite mostly positive feedback. Long-established (incorporated 1975), which likely explains the high review volume despite the more moderate Birdeye average.","desc":"Fence contractor and fencing-materials retailer based in Post Falls, in business since 1975.","rank":3,"groupSize":5},{"id":"pf69","category":"Fencing & Decking","name":"Bugle Construction JMJ, LLC","phone":null,"website":"https://www.bugleconstructionanddecking.com","address":"PO Box 220, Post Falls, ID 83877","zip":"83877","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/bugle-construction-jmj-llc-reviews-1.htm"},{"type":"listing","url":"https://www.buildzoom.com/contractor/bugle-construction"},{"type":"listing","url":"https://www.houzz.com/professionals/general-contractors/bugle-pfvwus-pf~1891899047"}],"note":"A phone number ((208) 457-7234) is tied to a similarly named 'Bugle Construction' at a different address, but could not be confirmed as the same LLC. Reviewers mention composite deck builds, pergolas, and stamped concrete; no aggregate numeric rating was found, only individual positive review quotes.","desc":"Deck-building contractor based in Post Falls specializing in composite decks, covered patios, and pergolas.","rank":4,"groupSize":5},{"id":"pf70","category":"Fencing & Decking","name":"Timberline Fence & Deck","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":3.98,"count":8},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/sp/timberline-fence-deck-coeur-dalene-id"}],"note":"Lowest-rated listing found in this category; several visible reviews date to 2017, so current quality is unverified.","desc":"Fence and deck installation company serving the Coeur d'Alene area.","rank":5,"groupSize":5},{"id":"pf71","category":"Snow Removal","name":"Mr Plow","phone":"208-209-5877","website":null,"address":"11100 N Airport Dr, Hayden, ID 83835","zip":"83835","rating":{"value":4.8,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://snowremovalnation.pages.dev/snowremovalservice/mr-plow"},{"type":"listing","url":"https://www.homeadvisor.com/rated.Mrplow.109250102.html"}],"note":"HomeAdvisor's visible reviews date to December 2020, so the rating may not reflect recent seasons; the profile also states it does not offer emergency service or warranties.","desc":"Dedicated snow removal service based in Hayden, Idaho, serving the Coeur d'Alene/Post Falls area.","rank":1,"groupSize":5},{"id":"pf72","category":"Snow Removal","name":"Augusta Lawn Care Services of Post Falls","phone":"(208) 593-2484","website":"https://www.augustalawncareservices.com/services/postfalls-snow-ice-removal","address":"2126 W Cannon Ave, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.augustalawncareservices.com/services/postfalls-snow-ice-removal"},{"type":"listing","url":"https://repairhit.com/biz/augusta-lawn-care-services-of-post-falls"}],"note":"Phone number sourced from an unclaimed third-party listing (RepairHit), not confirmed on the company's own site. Landscaping franchise location that adds winter plowing, shoveling, and ice-salting service — matches the seasonal 'landscaper that plows' pattern common in this region.","desc":"Lawn care and landscaping franchise location in Post Falls that also offers snow plowing for driveways/lots, sidewalk shoveling, and ice salting in winter.","rank":2,"groupSize":5},{"id":"pf73","category":"Snow Removal","name":"U.S. Lawns (Spokane branch)","phone":null,"website":"https://uslawns.com/locations/wa/spokane/snow-removal-ice-management/","address":"Serving Post Falls, Hayden & Rathdrum, ID (Spokane, WA-based branch)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://uslawns.com/locations/wa/spokane/snow-removal-ice-management/"}],"note":"National commercial landscaping franchise; this branch's own service page specifically names Post Falls, Hayden, and Rathdrum among the North Idaho areas it covers for snow and ice management.","desc":"Commercial landscaping company offering snow removal and ice management, with a Spokane-based branch covering nearby North Idaho cities.","rank":3,"groupSize":5},{"id":"pf74","category":"Snow Removal","name":"Chick Factor LLC","phone":null,"website":null,"address":"PO Box, Hayden, ID 83835","zip":"83835","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://prod.bbb.org/us/id/rathdrum/category/commercial-snow-removal-service"}],"note":"Listed in a BBB commercial snow removal services category; also offers dump truck work and seal coating, so snow removal appears to be a seasonal add-on service.","desc":"Hayden-based company offering snow removal alongside dump truck and seal coating services.","rank":4,"groupSize":5},{"id":"pf75","category":"Snow Removal","name":"Superior Asphalt Sealcoating and Maintenance","phone":null,"website":null,"address":"Serving Post Falls, ID (stated service radius ~125 miles)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://prod.bbb.org/us/id/rathdrum/category/commercial-snow-removal-service"}],"note":"Primarily an asphalt sealcoating/maintenance company that lists snow removal as an additional service for the Post Falls area; no rating found.","desc":"Asphalt maintenance company that also offers snow removal services to the Post Falls area.","rank":5,"groupSize":5},{"id":"pf76","category":"Septic & Well Services","name":"CDA Septic Pumping","phone":null,"website":"https://cdasepticpumping-site.pages.dev/","address":"Serving Post Falls, ID (ZIP 83854 & 83877) and surrounding North Idaho communities","zip":"83854","rating":{"value":5,"count":13},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/cda-septic-pumping/05713163991983065060/7ce2/_"},{"type":"website","url":"https://cdasepticpumping-site.pages.dev/septic-pumping-post-falls-id/"}],"note":"No confirmed phone number or street address found; appears to be a route-based/local pumping service rather than a storefront. Google rating has a small sample size (13 reviews).","desc":"A locally-run septic tank pumping service that describes itself as serving Post Falls and nearby North Idaho communities on a scheduled route basis.","rank":1,"groupSize":8},{"id":"pf77","category":"Septic & Well Services","name":"Chaud Company Plumbing Services LLC","phone":null,"website":null,"address":"Serving Kootenai, ID and surrounding North Idaho areas","zip":null,"rating":{"value":4.7,"count":28},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Water-Treatment-System.Kootenai.ID.-12077.html"}],"note":"No verified street address or phone number surfaced in search results; listed only on HomeAdvisor aggregator pages.","desc":"A plumbing and well/pump service company reportedly in business since 1986, serving the Kootenai, ID area with well pump and water treatment work.","rank":2,"groupSize":8},{"id":"pf78","category":"Septic & Well Services","name":"Evergreen Sanitation","phone":null,"website":null,"address":"2910 Old Hartford Rd, Post Falls area, ID","zip":null,"rating":{"value":4.35,"count":103},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Septic-Tanks-Wells.Post_Falls.ID.-12081.html"},{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/septic-tank.htm"}],"note":"Largest review count found for any septic provider in the area (103), which offsets a slightly lower average rating than smaller-sample competitors. Could not confirm a working 208-area phone number; several numbers tied to this name appear to belong to a Washington-state branch.","desc":"A septic/sanitation company reportedly operating since 1957 that lists Post Falls, ID among its service areas.","rank":3,"groupSize":8},{"id":"pf79","category":"Septic & Well Services","name":"H2O Well Service Inc","phone":"(208) 667-0321","website":null,"address":"582 W Hayden Ave, Hayden, ID 83835","zip":"83835","rating":{"value":3.5,"count":18},"ratingSource":"Yelp","sources":[{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/h2o-well-service-10236950"},{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/h2o-well-service-reviews-481193.htm"},{"type":"listing","url":"https://homeyou.com/h2o-well-service-inc-hayden-id"}],"note":"Mixed reviews: Yelp shows 3.5/18, while an Angi listing shows notably low quality/value sub-scores. Ranked lower on credibility due to inconsistent feedback across platforms. Phone number is shared on directory listings with the similarly-named/co-located North Idaho Pump Co and may ring either business.","desc":"A well drilling, pump service, and water filtration company based in Hayden, ID serving North Idaho and Eastern Washington.","rank":4,"groupSize":8},{"id":"pf80","category":"Septic & Well Services","name":"Little Stinker Septic Service","phone":"(208) 772-7562","website":null,"address":"49866 N Old Highway 95, Rathdrum/Coeur d'Alene, ID 83858","zip":"83858","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.septic.com/septic-services/idaho/coeur-d-alene/little-stinker-septic-service/"},{"type":"listing","url":"https://www.superpages.com/coeur-d-alene-id/septic-tank-system-cleaning"}],"note":"Sources disagree on whether the listed city/ZIP is Coeur d'Alene (83815) or Rathdrum (83858) for the same street address; phone number also conflicts with a Yellow Pages listing showing (844) 833-8105. No rating found on any platform.","desc":"A septic pumping service that states it has been operating in the Coeur d'Alene, Idaho area since 1998 (one source cites 30+ years of industry experience).","rank":5,"groupSize":8},{"id":"pf81","category":"Septic & Well Services","name":"United Pump Co (United Crown Pump & Drilling)","phone":"(208) 772-7867","website":"https://www.unitedcrown.com","address":"3125 W Hayden Ave, Hayden, ID 83835","zip":"83835","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/united-pump-company"},{"type":"listing","url":"https://naicslist.com/company-profile/united-pump-co-hayden-id-83835"},{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/united-crown-pump-and-drilling-reviews-478783.htm"}],"note":"Directory listings disagree on the business name (United Pump Co vs. United Crown Pump & Drilling) and phone number (a Yellow Pages listing shows (208) 772-3230 for the same address). BuildZoom shows an active Idaho general contractor registration; no numeric rating found.","desc":"A well pump installation, upgrade, and troubleshooting company based in Hayden, ID; Angi describes it as licensed and bonded in Idaho and Washington.","rank":6,"groupSize":8},{"id":"pf82","category":"Septic & Well Services","name":"North Idaho Pump Co Inc","phone":"(208) 667-0321","website":null,"address":"6120 E Seltice Way, Post Falls, ID 83854 (mailing: PO Box 3364, Post Falls, ID 83877)","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://naicslist.com/company-profile/north-idaho-pump-co-inc-post-falls-id-83854"}],"note":"BBB/Yellow Pages listings show this business sharing an address and phone number with H2O Well Service Inc's Hayden listing in some directories, so the two may be affiliated or the data may be stale; no rating found.","desc":"A pump sales, irrigation equipment, and pump service company registered as a corporation in Post Falls, ID.","rank":7,"groupSize":8},{"id":"pf83","category":"Septic & Well Services","name":"Straight Shooter Plumbing & Rooter","phone":"(208) 215-8723","website":"https://www.straightshooterplumbing.com","address":"10623 N Government Way, Hayden, ID 83835 (opened a Post Falls office per Jan. 2024 announcement)","zip":"83835","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.straightshooterplumbing.com/post-falls-id/"},{"type":"listing","url":"https://globenewswire.com/news-release/2024/01/18/2811934/0/en/Straight-Shooter-Plumbing-and-Rooter-Expands-Its-Reach-with-a-New-Office-Location-in-Post-Falls-Idaho.html"}],"note":"Primarily a general plumbing/drain company that also advertises septic services for Post Falls on its own site; no separate Post Falls street address was confirmed, and no numeric rating was found.","desc":"A plumbing, drain, and septic service company headquartered in Hayden, ID that announced a dedicated Post Falls, ID office location in January 2024.","rank":8,"groupSize":8},{"id":"pf84","category":"Pest Control","name":"Organix Pest Control","phone":null,"website":null,"address":"3931 N Schreiber Way, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":428},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/organix-pest-control/017732031899746889261/d2b5/_"},{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/organix-pest-control-424457850"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/exterminators/organix-pest-control/service/526932769212137477"}],"note":"A separate directory (BestProsInTown) lists a different Post Falls address (1709 E 1st Ave) for this business; MapQuest's Coeur d'Alene address was used as it included full contact details. No phone number could be confirmed. Highest weighted score of all pest control results given perfect rating and large review count (428).","desc":"A pest control company serving Post Falls, Coeur d'Alene, Hayden, and the Spokane area, describing itself as the region's eco-friendly pest control choice.","rank":1,"groupSize":6},{"id":"pf85","category":"Pest Control","name":"Pointe Pest Control","phone":"(208) 643-8290","website":"https://pointepest.com/post-falls-id-pest-control","address":"6020 W. Seltice Way, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":3765},"ratingSource":"Birdeye","sources":[{"type":"website","url":"https://pointepest.com/post-falls-id-pest-control"},{"type":"listing","url":"https://reviews.birdeye.com/pointe-pest-control-156230182443733"}],"note":"Appeared in an aggregate Birdeye directory under a similar name/rating; the confirmed company website and address are for \"Pointe Pest Control.\" Largest review sample size of any business in this report.","desc":"A pest control company with a dedicated Post Falls, ID branch office offering general pest, ant, spider, wasp, and rodent control services.","rank":2,"groupSize":6},{"id":"pf86","category":"Pest Control","name":"Croach Pest Control","phone":"208-262-8224","website":"https://croach.com","address":"955 Innovation Way, Ste B, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":1712},"ratingSource":"Birdeye","sources":[{"type":"website","url":"https://croach.com/?p=11344"},{"type":"listing","url":"https://reviews.birdeye.com/croach-pest-control-156229202903655"}],"note":"A company directory also lists an 800 number (800-455-7377) and an alternate Post Falls suite address; local 208 number used as primary. Idaho Pest Control License #63036 is stated on the company's own site (noted factually, not verified).","desc":"A pest control company with a Post Falls, ID office (955 Innovation Way) serving Coeur d'Alene and the greater Spokane/North Idaho area, including ant, bed bug, and general pest services.","rank":3,"groupSize":6},{"id":"pf87","category":"Pest Control","name":"Bug Blasters LLC","phone":"(208) 758-1890","website":null,"address":"5320 E Seltice Way, Post Falls, ID 83854-7713","zip":"83854","rating":{"value":4.9,"count":241},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/bug-blasters-156229070964313"},{"type":"listing","url":"https://prod.bbb.org/us/id/post-falls/profile/pest-control/bug-blasters-llc-1296-1000049209/customer-reviews"}],"note":"BBB separately shows only 3 customer reviews (5.0 average) and lists conflicting addresses across its own pages (5320 E Seltice Way vs. 8732 N Meyer Rd vs. 1709 E 1st Ave) for what may be the same or different entries; used the Birdeye figure (241 reviews) as the larger, more informative sample but flagging the address/count conflict for credibility.","desc":"A North Idaho-based pest control company (BBB-listed, not BBB-accredited) offering general pest, bed bug, and bee removal services.","rank":4,"groupSize":6},{"id":"pf88","category":"Pest Control","name":"Oasis Pest Control (Oasis Lawn and Pest)","phone":"(208) 921-3686","website":null,"address":"4838 W Palmwood Ln, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":102},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/oasis-pest-control-156229612264352"},{"type":"listing","url":"https://wwwww.bbb.org/us/id/hauser/category/pest-control"}],"note":"BBB lists a different suite address (955 N Innovation Way Ste B, Post Falls) for this business than the directory listing used here; Angi separately shows \"no reviews yet\" for the same name, so the Birdeye figure should be treated with some caution.","desc":"A lawn and pest control company serving Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Hauser, ID per its BBB service-area listing.","rank":5,"groupSize":6},{"id":"pf89","category":"Pest Control","name":"Allen Pest Control","phone":null,"website":null,"address":"140 East Spruce Avenue, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://voolt.pro/idaho/coeur-dalene/cleaning-maintenance/allen-pest-control/"}],"note":"No rating, phone number, or independent verification found beyond a single directory listing; included for its clearly stated street address, but ranked last for low source confidence.","desc":"A pest control business listed with a Coeur d'Alene, ID street address; no further service details were confirmed in search results.","rank":6,"groupSize":6}];

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
    { name: 'Pest Control', color: '#C0392B', icon: 'bug' }
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
    bug: '<ellipse cx="12" cy="13" rx="5" ry="7"/><line x1="12" y1="6" x2="12" y2="20"/><line x1="7" y1="9" x2="3" y2="7"/><line x1="7" y1="13" x2="3" y2="13"/><line x1="7" y1="17" x2="3" y2="19"/><line x1="17" y1="9" x2="21" y2="7"/><line x1="17" y1="13" x2="21" y2="13"/><line x1="17" y1="17" x2="21" y2="19"/><circle cx="10" cy="4" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="4" r="1" fill="currentColor" stroke="none"/>'
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
