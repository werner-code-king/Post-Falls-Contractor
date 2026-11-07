/* Post Falls Contractor Network — app logic */
(function () {
  'use strict';

  var SEED_CONTRACTORS = [{"id":"pf1","category":"Landscaping & Lawn Care","name":"All Terrain Lawncare","phone":null,"website":"http://allterrainlawncare.com","address":"PO Box 1586, Post Falls, ID 83877","zip":"83877","rating":{"value":4.6,"count":85},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.AllTerrainLawncare.34293326.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/all-terrain-lawncare-reviews-1.htm"}],"note":"Highest review volume found among local lawn care companies, so weighted above smaller 5.0-rated listings for credibility.","desc":"Post Falls lawn care and landscaping company that also offers snow removal; directory listings show roughly 14 years in business.","rank":1,"groupSize":5},{"id":"pf2","category":"Landscaping & Lawn Care","name":"Nova Landworks LLC","phone":null,"website":null,"address":"717 Chocolate Bear Rd, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":17},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.NovaLandworksLLC.126927502.html"}],"note":null,"desc":"Landscaping and front/back-yard installation company operating since 2016, offering free estimates and emergency services.","rank":2,"groupSize":5},{"id":"pf3","category":"Landscaping & Lawn Care","name":"K2 Landscaping","phone":null,"website":"https://www.k2landscaping.com/","address":"311 North Forest Drive, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":3},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/k2-landscaping-reviews-1.htm"},{"type":"listing","url":"https://match.angi.com/rated.K2Landscaping.119309345.html"}],"note":"Perfect rating is based on only 3 reviews, so ranked below a higher-volume competitor (Nova Landworks) for credibility.","desc":"Family-owned landscaping company founded in 1993 and based in Coeur d'Alene, now run by the founder's son-in-law.","rank":3,"groupSize":5},{"id":"pf4","category":"Landscaping & Lawn Care","name":"Taylor Made Lawn Care","phone":null,"website":null,"address":"Serving Post Falls & Kootenai County, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/taylor-made-lawn-care-reviews-9202718.htm"},{"type":"listing","url":"https://www.experience.com/reviews/taylor-22659797"}],"note":"Angi reviews are described as strongly positive, but no aggregate numeric rating or review count was visible in search results, so ranked by lack of verifiable data.","desc":"Family owned and operated full-service lawn care business serving Kootenai County, North Idaho, with roughly 13 years in business.","rank":4,"groupSize":5},{"id":"pf5","category":"Landscaping & Lawn Care","name":"Augusta Lawn Care Services of Post Falls","phone":"(208) 593-2484","website":"https://augustalawncareservices.com/postfalls","address":"2126 W Cannon Ave, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://augustalawncareservices.com/postfalls"},{"type":"listing","url":"https://repairhit.com/biz/augusta-lawn-care-services-of-post-falls"}],"note":"No rating or review count found; the only directory listing with a phone number was marked 'Unclaimed'.","desc":"Local branch of a national franchise offering mowing, landscaping, cleanups, fertilization, and snow/ice removal in Post Falls.","rank":5,"groupSize":5},{"id":"pf6","category":"Roofing","name":"Western Construction & Roofing LLC","phone":null,"website":null,"address":"955 S Innovation Way, Unit A, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":42},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/western-construction-roofing-llc-reviews-1.htm"},{"type":"listing","url":"https://next-www.thumbtack.com/id/post-falls/roofing/western-construction-roofing-llc/service/445899136014671885"}],"note":"HomeAdvisor and Thumbtack also show 5.0 ratings (45 and 8 reviews respectively); Angi's 42-review figure was used as the most substantial consistent sample.","desc":"Post Falls roofing contractor with reviewers praising timeliness and job-site cleanup; described in one listing as among North Idaho's more highly reviewed roofers.","rank":1,"groupSize":5},{"id":"pf7","category":"Roofing","name":"Inland Roofing & Supply, Inc.","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding areas (headquartered at 5528 E Sprague Ave, Spokane, WA)","zip":null,"rating":{"value":4.7,"count":94},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Roofing.Coeur_d alene.ID.-12061.html"}],"note":"Headquartered in Spokane, WA since 1938; lists Coeur d'Alene as a service area rather than having a local Idaho office, so no Idaho zip is given.","desc":"Long-established roofing contractor/supplier (in business since 1938) that serves the Coeur d'Alene area and has received HomeAdvisor's Super Service Award.","rank":2,"groupSize":5},{"id":"pf8","category":"Roofing","name":"Keep It Simple Roofing & Construction","phone":null,"website":null,"address":"927 West Davidson Avenue, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.8,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/keep-it-simple-roofing-construction-reviews-1.htm"}],"note":null,"desc":"Family owned and operated Coeur d'Alene roofing and construction company in business since 2017, recommended by 95% of homeowners per HomeAdvisor.","rank":3,"groupSize":5},{"id":"pf9","category":"Roofing","name":"New Heights Roofing, LLC","phone":"(208) 758-3161","website":null,"address":"2785 W Seltice Way, Suite A, Post Falls, ID 83854","zip":"83854","rating":{"value":4.68,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.NewHeightsRoofing.35884341.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/new-heights-roofing-llc-reviews-1.htm"},{"type":"listing","url":"https://www.buildzoom.com/contractor/new-heights-roofing-wa"}],"note":"Multiple conflicting phone numbers appear across directories (BuildZoom, a company landing page, and LevelSet) — verify directly before publishing.","desc":"Roofing company with offices in Post Falls, ID and Spokane Valley, WA, rated 4.6-4.68 across Angi and HomeAdvisor from about 19 reviews.","rank":4,"groupSize":5},{"id":"pf10","category":"Roofing","name":"Integrity Roofing and Repair LLC","phone":"(509) 655-0090","website":"https://integrityroofingandrepair.com/","address":"Serving Post Falls, ID (headquartered at 2120 N Country Vista Blvd, Liberty Lake, WA 99019)","zip":null,"rating":{"value":5,"count":9},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://cost-guide-ssr.homeadvisor.com/rated.integrityroofingandrepairllc.153076088.html"},{"type":"listing","url":"https://www.buildzoom.com/contractor/integrity-roofing-and-repair-llc"}],"note":"Headquartered in Liberty Lake, WA, listing Post Falls as a service area; perfect rating is based on a small sample of 9 reviews, and a second phone number (509) 655-6900 also appears in some listings — ranked last for credibility.","desc":"Inland Northwest roofing and repair company serving Post Falls and the surrounding region, stated to be licensed in both Washington and Idaho.","rank":5,"groupSize":5},{"id":"pf11","category":"HVAC & Furnace","name":"J.A. Bertsch Heating & Cooling","phone":"(208) 635-5480","website":null,"address":"3645 N Government Way, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.9,"count":1931},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://birdeye.com/ja-bertsch-heating-and-cooling-175710298768861?page=2"},{"type":"listing","url":"https://business.cdachamber.com/list/member/j-a-bertsch-heating-cooling-8653"}],"note":"Chamber of Commerce listing describes it as voted the area's most trusted HVAC company repeatedly; a different number appears on Carrier's dealer locator, so confirm before publishing.","desc":"Family-owned HVAC and electrical services company based in Coeur d'Alene; a majority stake was reportedly acquired by The SEER Group.","rank":1,"groupSize":8},{"id":"pf12","category":"HVAC & Furnace","name":"Andy's Heating & Cooling","phone":"(208) 209-5529","website":null,"address":"7800 N Government Way, Dalton Gardens, ID 83815","zip":"83815","rating":{"value":4.92,"count":861},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/andys-22662642"},{"type":"listing","url":"https://www.carrier.com/us/en/residential/dealers/id/coeur-d-alene/7800-n-government-way-3226-loc"}],"note":"Carrier's dealer locator and a Yellow Pages listing show different phone numbers; the number here comes from Carrier's dealer page.","desc":"Coeur d'Alene-area HVAC dealer (also listed as Andy's Heating and Cooling/Stove Shoppe) citing about 54 years of experience and Carrier dealer certification.","rank":2,"groupSize":8},{"id":"pf13","category":"HVAC & Furnace","name":"Comfort Heating, Cooling & Electrical","phone":"(208) 769-9810","website":"https://comfortheatingandairinc.com/","address":"3620 E Covington Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":1409},"ratingSource":"Voolt","sources":[{"type":"listing","url":"https://voolt.pro/idaho/post-falls/electrical-hvac/comfort-heating-cooling-electrical-2/"},{"type":"listing","url":"https://directory.yext.com/en/comfort-heating-cooling-electrical-plumbing-369387407"}],"note":"Rating/review count sourced from Voolt, a smaller aggregator; the 1,409-review figure should be cross-checked against Google before being presented as authoritative.","desc":"Post Falls-based heating, cooling, electrical and plumbing company stating it has served local families since 1993.","rank":3,"groupSize":8},{"id":"pf14","category":"HVAC & Furnace","name":"ACI Northwest Heating, Cooling & Electrical","phone":"(208) 772-9571","website":"https://www.acinw.com","address":"6600 N Government Way, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.8,"count":491},"ratingSource":"Voolt","sources":[{"type":"listing","url":"https://voolt.pro/idaho/coeur-dalene/electrical-hvac/aci-northwest-heating-cooling-electrical/"},{"type":"listing","url":"https://www.homeadvisor.com/rated.acinorthwestinc.156417861.html"}],"note":"Directory listings disagree on phone number ((208) 772-9571 vs (208) 209-0199); verify before publishing.","desc":"Coeur d'Alene heating, cooling and electrical contractor operating as ACI Northwest, Inc.","rank":4,"groupSize":8},{"id":"pf15","category":"HVAC & Furnace","name":"Finney Heating and Cooling LLC","phone":"208-202-5998","website":null,"address":"3751 W 5th Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":43},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://birdeye.com/finney-heating-and-cooling-llc-168358434448544"},{"type":"listing","url":"https://www.superpages.com/post-falls-id/bpp/finney-heating-and-cooling-573043699"}],"note":null,"desc":"Post Falls heating and cooling company; no official company website was found in search results.","rank":5,"groupSize":8},{"id":"pf16","category":"HVAC & Furnace","name":"The Barton Boys Heating & Air Conditioning","phone":"(509) 892-5300","website":"https://bartonboys.com/","address":"Serving Coeur d'Alene & Hayden, ID (headquartered at 7221 E Nora Ave, Spokane Valley, WA 99212)","zip":null,"rating":{"value":4.8,"count":20},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/the-barton-boys-heating-and-air-conditioning"},{"type":"listing","url":"https://www.guildquality.com/pro/the-barton-boys-heating-and-air-conditioning"}],"note":"Headquartered in Spokane Valley, WA; GuildQuality lists Coeur d'Alene & Hayden, ID as part of its stated service area, so no Idaho zip is given.","desc":"HVAC company (part of The Barton Boys, Inc., reportedly acquired by The SEER Group) serving the greater Spokane and Coeur d'Alene/Hayden area.","rank":6,"groupSize":8},{"id":"pf17","category":"HVAC & Furnace","name":"Cline's Heating and Air Conditioning","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding areas","zip":null,"rating":{"value":5,"count":13},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Air-Conditioning.Coeur_d alene.ID.-12002.html"}],"note":"No street address or phone number found; perfect rating is based on a small sample of 13 reviews.","desc":"HVAC company listed as serving Coeur d'Alene, ID and surrounding areas, in business since 1988.","rank":7,"groupSize":8},{"id":"pf18","category":"HVAC & Furnace","name":"Right Now Heating & Air","phone":null,"website":"https://rightnowheatcool.com","address":"Serving Coeur d'Alene, ID and surrounding areas","zip":null,"rating":{"value":4.2,"count":300},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.RightNowHeating.34687920.html"},{"type":"listing","url":"https://www.consumeraffairs.com/homeowners/right-now-heating-and-air-conditioning.html"}],"note":"Primary offices found were in Caldwell/Meridian, ID (Treasure Valley); HomeAdvisor lists the company as serving Coeur d'Alene since 2001, but no local CDA address or phone was found. Ranked last despite the large review count because of its comparatively lower 4.2 rating.","desc":"Idaho HVAC and plumbing company (primarily based in the Treasure Valley) listed on HomeAdvisor as serving the Coeur d'Alene area since 2001.","rank":8,"groupSize":8},{"id":"pf19","category":"Electrical","name":"Tactical Electric LLC","phone":"(208) 617-3166","website":"https://tacticalelectrical.com","address":"2504 N Sparrow Loop, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":10},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/tactical-electric-llc-wa-2"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/tactical-electric-reviews-11078500.htm"},{"type":"search","url":"https://bbb.org/us/id/post-falls/category/electrician"}],"note":"Address and phone corroborated by BuildZoom and BBB. A different, older listing with address 1045 N Hwy 41 and phone (208) 773-8000 appears to actually belong to a separate business (Acme Electric), not Tactical Electric.","desc":"Electrical contractor based in Post Falls, ID, with a listed service area covering Post Falls and the Spokane, WA area.","rank":1,"groupSize":8},{"id":"pf20","category":"Electrical","name":"Parker Electric Inc","phone":"(208) 661-8310","website":null,"address":"2424 Pearson Way, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":21},"ratingSource":"Voolt","sources":[{"type":"listing","url":"https://voolt.pro/idaho/post-falls/electrical-hvac/parker-electric"},{"type":"search","url":"https://bbb.org/us/id/post-falls/category/electrical-contractors"}],"note":"Rating was found on Voolt, a smaller/lesser-known aggregator; could not be cross-verified on Google, Yelp, or Angi.","desc":"Electrical contracting company operating in Post Falls, ID.","rank":2,"groupSize":8},{"id":"pf21","category":"Electrical","name":"Scotty's Electric Co","phone":"(208) 659-0391","website":null,"address":"Serving Post Falls, Hayden & Coeur d'Alene, ID","zip":null,"rating":{"value":4.5,"count":117},"ratingSource":"Angi","sources":[{"type":"search","url":"https://www.angi.com/companylist/us/id/post-falls/electrical.htm"},{"type":"listing","url":"https://business.google.com/v/scottys-electric-co/016425345089985470876/54d7/_"}],"note":"Angi/HomeAdvisor (shared ownership, same underlying reviews) show 4.5 from 117 reviews; in business since 1998 per listings. Phone number found on only one third-party aggregator, so confirm directly. Ranked above several perfect-score competitors despite the lower score because its review sample (117) is far larger and more statistically meaningful, and it has a much longer track record.","desc":"Electrical contractor established in 1998, serving Post Falls, Hayden, and Coeur d'Alene, with emergency services listed.","rank":3,"groupSize":8},{"id":"pf22","category":"Electrical","name":"River City Electric","phone":"(208) 620-1737","website":null,"address":"113 E 3rd Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":7},"ratingSource":"Yelp","sources":[{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/river-city-electric-641750478"},{"type":"listing","url":"https://homeguide.com/id/coeur-d'alene/electrical-repair/river-city-electric-VkLZVnbou"}],"note":"Yelp rating/count reported via a MapQuest aggregator listing, not confirmed directly on Yelp's own site.","desc":"Electrical contractor based in Post Falls serving Post Falls and the greater Coeur d'Alene area.","rank":4,"groupSize":8},{"id":"pf23","category":"Electrical","name":"Rady's Electrical LLC","phone":"(208) 659-0212","website":"https://radyselectric.com","address":"11630 N Summit Loop, Hauser, ID 83854","zip":"83854","rating":{"value":4.9,"count":7},"ratingSource":"Yext","sources":[{"type":"listing","url":"https://directory.yext.com/en/rady-s-electrical-llc-2653211841"},{"type":"listing","url":"https://www.zoominfo.com/c/radys-electrical-llc/411544504"}],"note":"Listing states the company has served Kootenai County since 1990. A conflicting address (995 N Boulder Ct, Post Falls) appeared on a MapQuest listing for the similar name 'Rady's Electric' and may be outdated or a different record.","desc":"Family-run electrical contractor based in Hauser, ID, with a listing citing service to Kootenai County since 1990.","rank":5,"groupSize":8},{"id":"pf24","category":"Electrical","name":"North Idaho Electrical","phone":null,"website":null,"address":"Serving Coeur d'Alene & Kootenai County, ID","zip":null,"rating":{"value":5,"count":5},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/coeur-d-alene/circuit-breaker-companies/north-idaho-electrical/service/578118022772563977"}],"note":"Small operation (about 2 employees, roughly one year in business per profile); very small review sample.","desc":"Small, background-checked electrical contractor doing code-compliant work in Coeur d'Alene and surrounding Kootenai County.","rank":6,"groupSize":8},{"id":"pf25","category":"Electrical","name":"Honest Electric LLC","phone":null,"website":null,"address":"PO Box 516, Post Falls, ID 83877","zip":"83877","rating":{"value":5,"count":2},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://thumbtack.com/id/post-falls/electrical-repairs/honest-electric-llc/service/542853132474507266"},{"type":"listing","url":"https://www.homeadvisor.com/rated.HonestElectricLLC.151009357.html"}],"note":"Very small review sample (2 on Thumbtack; separately rated 5.0 on HomeAdvisor). Listed hours are 8 AM-8 PM, closed Sundays, with no emergency service per Angi (conflicts with HomeAdvisor, which does list emergency service).","desc":"Small electrical contracting LLC operating in the Post Falls area, offering free estimates.","rank":7,"groupSize":8},{"id":"pf26","category":"Electrical","name":"E & E Electric LLC","phone":null,"website":"https://eeelectriccompany.com","address":"4121 E 2nd Ave Apt A, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":1},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/e-e-electric-llc-reviews-1.htm"}],"note":"Only one review found on Angi; perfect rating but minimal sample, ranked last for credibility.","desc":"Small electrical contractor based in Post Falls offering free estimates and warranties.","rank":8,"groupSize":8},{"id":"pf27","category":"Plumbing","name":"A River City Plumbing Service","phone":"(208) 659-6565","website":null,"address":"5425 E Poleline Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":458},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.ARiverCityPlumbing.111187769.html"},{"type":"listing","url":"https://www.buildzoom.com/contractor/a-river-city-plumbing-service"},{"type":"listing","url":"https://www.bestprosintown.com/id/post-falls/a-river-city-plumbing-service-/"}],"note":"HomeAdvisor's own profile confirms an overall 4.9 rating; the specific 458-review count was found on a secondary aggregator (a pages.dev directory) and could not be independently cross-verified, so treat the exact count with some caution. BuildZoom/Bestprosintown cite 23-27 years in business.","desc":"Long-established plumbing company in Post Falls, ID, with directory listings citing over two decades in business.","rank":1,"groupSize":8},{"id":"pf28","category":"Plumbing","name":"My Guy Plumbing & Service, Inc.","phone":null,"website":null,"address":"Serving Post Falls & Coeur d'Alene, ID","zip":null,"rating":{"value":4.9,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.MyGuyPlumbing.53534756.html"}],"note":"Listings disagree on founding year (2015 vs 2021); no phone number or street address could be confirmed from available search results.","desc":"Plumbing service company based in Post Falls, serving Coeur d'Alene and surrounding areas.","rank":2,"groupSize":8},{"id":"pf29","category":"Plumbing","name":"First Choice Plumbing","phone":null,"website":null,"address":"Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":36},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/first-choice-plumbing-reviews-6391492.htm"},{"type":"listing","url":"https://naicslist.com/company-profile/rays-first-choice-plumbing-post-falls-id-83854"}],"note":"Angi lists this business as 'First Choice Plumbing' while a NAICS directory lists 'Rays First Choice Plumbing' at the same Post Falls 83854 ZIP; treated as the same business but not fully confirmed. Offers warranties, emergency service, and a senior discount per listing.","desc":"Plumbing contractor based in Post Falls offering emergency services and a senior discount.","rank":3,"groupSize":8},{"id":"pf30","category":"Plumbing","name":"Scott's Plumbing LLC","phone":null,"website":"https://www.scottsplumbing.us","address":"1420 E 3rd Ave Unit 3, Post Falls, ID 83854","zip":"83854","rating":{"value":4.5,"count":41},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.zoominfo.com/c/scotts-plumbing/445694496"},{"type":"listing","url":"https://www.homeadvisor.com/rated.ScottsPlumbingLLC.156481655.html"},{"type":"listing","url":"https://www.bestprosintown.com/id/post-falls/scott-s-plumbing-/"}],"note":"Two different phone numbers were found across sources ((509) 899-8883 vs (208) 999-7788) and could not be reconciled, so phone is left blank pending confirmation. HomeAdvisor review set includes at least one entry explicitly labeled a Google review.","desc":"Plumbing company based in Post Falls serving Post Falls, Coeur d'Alene, and the Spokane/Spokane Valley/Liberty Lake area.","rank":4,"groupSize":8},{"id":"pf31","category":"Plumbing","name":"Method Plumbing & Drains LLC","phone":null,"website":null,"address":"3110 N Radiant Star Rd, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":11},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://thumbtack.com/id/post-falls/water-heater-installation/method-plumbing/service/496283146135617542"}],"note":"A separate Angi listing shows a conflicting Dover, ID address that appears to be an outdated or erroneous entry. In business since 2021 per HomeAdvisor; serves within roughly a 60-mile radius of Kootenai County.","desc":"Full-service plumbing and drain repair/installation company based in Post Falls, serving roughly a 60-mile radius of Kootenai County.","rank":5,"groupSize":8},{"id":"pf32","category":"Plumbing","name":"Providence Plumbing","phone":null,"website":null,"address":"Serving Rathdrum & Kootenai County, ID","zip":null,"rating":{"value":5,"count":11},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/rathdrum/providence-plumbing-reviews-9107300.htm"}],"note":"Most recent review on the Angi listing is dated May 2025.","desc":"Plumbing contractor based in Rathdrum serving Kootenai County.","rank":6,"groupSize":8},{"id":"pf33","category":"Plumbing","name":"Straight Shooter Plumbing and Rooter LLC","phone":"(208) 215-8723","website":"https://www.straightshooterplumbing.com","address":"10623 N Government Way, Hayden, ID 83835","zip":"83835","rating":{"value":5,"count":8},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/straight-shooter-plumbing-and-rooter"},{"type":"listing","url":"https://www.homeadvisor.com/rated.xxxxxxx.135580261.html"}],"note":"HomeAdvisor listing includes an entry explicitly labeled a Google review (dated March 2026). Company's own site also lists service areas in Texas and Tennessee in addition to North Idaho.","desc":"Plumbing and drain/rooter company based in Hayden, ID, using trenchless pipe repair technology and serving North Idaho.","rank":7,"groupSize":8},{"id":"pf34","category":"Plumbing","name":"America NW Plumbing, Heating, and Cooling","phone":"(208) 755-2333","website":"https://americanwplumbing.com","address":"1420 E 3rd Ave Suite 201, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.americanwplumbing.com/contact-us"},{"type":"search","url":"https://www.promptloop.com/directory/spokane-99201-plumbing-contractors"}],"note":"No independently verifiable star rating was found on Google, Yelp, or BBB (only the company's own testimonials page); BBB separately lists an A+ rating, which is a BBB accreditation grade, not a star rating. A conflicting address (6612 E Seltice Way Ste A, Post Falls) also appears in one directory. Also offers HVAC services.","desc":"Plumbing, heating, and cooling contractor based in Post Falls, ID.","rank":8,"groupSize":8},{"id":"pf35","category":"Handyman","name":"Choice Marketing, Corp.","phone":null,"website":null,"address":"Serving Post Falls, ID & surrounding areas","zip":null,"rating":{"value":4.9,"count":65},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://thebuildermarket.com/us/id/post-falls/handyman-services"}],"note":"In business since 2007 per HomeAdvisor-sourced listing; no street address or phone number found in available search results.","desc":"Handyman service company serving Post Falls, ID and surrounding areas, in business since 2007.","rank":1,"groupSize":8},{"id":"pf36","category":"Handyman","name":"Equity Builders of Columbia Basin","phone":null,"website":null,"address":"Serving Post Falls, ID & surrounding areas","zip":null,"rating":{"value":4.9,"count":45},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://thebuildermarket.com/us/id/post-falls/handyman-services"}],"note":"A separate Angi listing for the same business shows a lower 4.67 rating from 18 reviews; the HomeAdvisor figure (4.9/45) is used here as the larger sample. No street address or phone found.","desc":"Handyman and general contracting company serving the Post Falls area.","rank":2,"groupSize":8},{"id":"pf37","category":"Handyman","name":"Top Shelf Handyman Pros","phone":"(208) 428-5105","website":null,"address":"405 N Greensferry Rd Unit 25, Post Falls, ID 83877","zip":"83877","rating":{"value":5,"count":27},"ratingSource":"Voolt","sources":[{"type":"listing","url":"https://repairhit.com/biz/top-shelf-handyman-pros"},{"type":"listing","url":"https://voolt.pro/idaho/post-falls/home-construction/top-shelf-handyman-pros"}],"note":"The RepairHit listing is marked 'Unclaimed' and the Voolt listing 'Unverified'; no official company website found, so confirm the phone number directly before relying on it.","desc":"Handyman service business based in Post Falls, ID.","rank":3,"groupSize":8},{"id":"pf38","category":"Handyman","name":"Red Beard Handyman Services","phone":null,"website":null,"address":"PO Box 1082, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":21},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.RedBeardHandyman.80757085.html"}],"note":"HomeAdvisor listing cites 21 years of experience; services include handyman work, CNC plasma cutting, and light fabrication. Only a PO Box was found, no street address or phone.","desc":"Handyman service with 21 years of experience, serving Coeur d'Alene and surrounding areas, also offering CNC plasma cutting and light fabrication.","rank":4,"groupSize":8},{"id":"pf39","category":"Handyman","name":"Northwest Home Repair and Inspections, LLC","phone":"(208) 660-5536","website":null,"address":"510 South Clearwater Loop, Suite 100, Post Falls, ID 83854","zip":"83854","rating":{"value":4.95,"count":20},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.NorthwestHomeRepairand.125129452.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/northwest-home-repair-and-inspections-llc-reviews-1.htm"}],"note":"A separate Angi review page shows only 14 reviews, a smaller sample than the 20-review HomeAdvisor figure used here. Phone number sourced from a BBB listing with an ambiguous snippet layout, so confirm directly. Offers free estimates and warranties; listing says it does not offer emergency service.","desc":"Home repair and inspection company based in Post Falls, ID.","rank":5,"groupSize":8},{"id":"pf40","category":"Handyman","name":"Think N Tinker, LLC","phone":null,"website":null,"address":"Serving Kootenai County, ID","zip":null,"rating":{"value":5,"count":4},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/c.Handyman-Services.Kootenai.ID.-12039.html"}],"note":"In business since 2024 per HomeAdvisor; very small review sample.","desc":"Small handyman service operating in Kootenai County, in business since 2024.","rank":6,"groupSize":8},{"id":"pf41","category":"Handyman","name":"All Odd Jobs Handyman Services","phone":null,"website":null,"address":"950 Kootenai Cutoff Rd, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":2},"ratingSource":"Angi","sources":[{"type":"search","url":"https://www.angi.com/companylist/us/id/kootenai/handyman-service.htm"}],"note":"Very small review sample (2 reviews).","desc":"Handyman service located at 950 Kootenai Cutoff Rd in the Coeur d'Alene area.","rank":7,"groupSize":8},{"id":"pf42","category":"Handyman","name":"Kootenai County Handyman","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.bbb.org/us/id/coeur-d-alene/profile/remodel-contractors/kootenai-county-handyman-1296-1000178300"}],"note":"BBB-accredited since February 2025 with an A+ rating, which is a BBB accreditation grade, not a star rating. Phone numbers found use a 253 (Washington) area code and differ across BBB pages ((253) 606-2310 vs (253) 431-3783), raising doubt about reliability; phone omitted. Ranked last due to lack of a verifiable star rating and contact-number inconsistency.","desc":"Remodeling and general handyman company BBB-listed as serving Coeur d'Alene and North Idaho, accredited since February 2025.","rank":8,"groupSize":8},{"id":"pf43","category":"Windows & Doors","name":"Fireside Windows, LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding area (based in Kellogg, ID)","zip":null,"rating":{"value":4.9,"count":10},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/rated.pteranodonimagescom.92927965.html"},{"type":"search","url":"https://match.angi.com/rated.pteranodonimagescom.92927965.html"}],"note":"Small review sample (10), but rating is explicitly 4.9 on HomeAdvisor; no street address found for the Coeur d'Alene service area, only a Kellogg, ID base of operations.","desc":"Window and door installation/replacement company in business since 2020, serving the Coeur d'Alene, ID area.","rank":1,"groupSize":7},{"id":"pf44","category":"Windows & Doors","name":"Elite Construction & Remodeling","phone":"509-505-6655 / 208-505-1227","website":"https://elite-spokane.com","address":"12929 E Sprague Ave, Spokane Valley, WA (serves Coeur d'Alene / Post Falls area)","zip":null,"rating":{"value":4.7,"count":97},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/windows.htm"},{"type":"search","url":"https://www.homeadvisor.com/c.Windows.Coeur_d_Alene.ID.-12080.html"}],"note":"Address is on the Washington side of the state line (Spokane Valley), not Idaho, but the business is listed as serving the Coeur d'Alene/Post Falls window-replacement market; in business since 2001.","desc":"General contractor offering window and door installation/replacement among other remodeling services, licensed/bonded/insured per its own listing (unverified by us), in business since 2001.","rank":2,"groupSize":7},{"id":"pf45","category":"Windows & Doors","name":"DaBella","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and Kootenai County (regional/multi-state company)","zip":null,"rating":{"value":3.9,"count":254},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/windows.htm"},{"type":"search","url":"https://birdeye.com/dabella-170742433705864?page=324"}],"note":"Region-specific rating (3.9/254) used here rather than Birdeye's company-wide aggregate (4.8/11,748), which is not Coeur d'Alene-specific; ranked below smaller local firms due to the lower score despite large review volume.","desc":"Large regional home-improvement company offering window and roofing replacement, serving the Coeur d'Alene area.","rank":3,"groupSize":7},{"id":"pf46","category":"Windows & Doors","name":"Cda Glass","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":3.28,"count":58},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/cda-22666866"}],"note":"Listing is unclaimed by the business owner; covers retail glass, windows, mirrors and shower/glass replacement, not strictly a windows-and-doors installer.","desc":"Retail glass company handling windows, mirrors, showers, and glass replacement in the Coeur d'Alene area.","rank":4,"groupSize":7},{"id":"pf47","category":"Windows & Doors","name":"Renewal by Andersen of Coeur d'Alene","phone":"(208) 615-4063","website":null,"address":"1925 W Riverstone Dr, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/renewal-by-andersen-replacement-windows-id"},{"type":"search","url":"https://www.ecowatch.com/windows/replacement/id/coeur-dalene"}],"note":"EcoWatch cites generic 'hundreds of positive reviews' with no verifiable number for this specific location; BuildZoom shows no reviews received; a nearby Eastern WA regional office page shows 4.8/5 from 1,107 reviews but that covers Spokane Valley, not confirmed as Coeur d'Alene-specific, so no rating is reported here.","desc":"Window and door replacement company (national Andersen brand franchise) with a Coeur d'Alene location address.","rank":5,"groupSize":7},{"id":"pf48","category":"Windows & Doors","name":"Window World of Spokane, LLC (Coeur d'Alene)","phone":"208-664-2032","website":null,"address":"2623 Seltice Way, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://governmentbidders.com/government-bidders/contractor-5016544-WINDOW-WORLD-OF-SPOKAN.htm"},{"type":"search","url":"https://www.ecowatch.com/windows/replacement/id/coeur-dalene"}],"note":"No location-specific rating found; a Houzz listing for a related 'A&L Homes | Window World' franchise gives a different office address (Hayden, ID / Liberty Lake, WA), so confirm which office serves a given job before relying on this address alone.","desc":"Window replacement company (national Window World brand) with a listed Coeur d'Alene address.","rank":6,"groupSize":7},{"id":"pf49","category":"Windows & Doors","name":"Inland NW Windows","phone":null,"website":"https://inlandnwwindows.pages.dev","address":"Serving North Idaho (Inland Northwest region)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://inlandnwwindows.pages.dev"}],"note":"Site is self-published with only self-reported testimonials; no independently verifiable rating or review count found, and the domain is a temporary-style Cloudflare Pages site, so ranked last for credibility.","desc":"Window and door replacement company website serving the Inland Northwest region including North Idaho.","rank":7,"groupSize":7},{"id":"pf50","category":"Painting","name":"Post Falls Painter","phone":"(208) 889-8425","website":"https://postfallspainter.com","address":"3019 N Andromeda St, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":40},"ratingSource":"Google","sources":[{"type":"listing","url":"https://lantern.llc/b/post-falls-painter-post-falls"}],"note":"Rating/review data comes from a third-party directory page (lantern.llc) that explicitly cites it as a Google rating verified Apr 2026; confirm directly on Google Maps before relying on it, since the page appears to be a paid-partnership listing.","desc":"Family-owned residential and commercial painting company led by owner Joshua, serving North Idaho from Post Falls.","rank":1,"groupSize":7},{"id":"pf51","category":"Painting","name":"Best Painting Company (Coeur d'Alene | Post Falls | Spokane)","phone":null,"website":null,"address":"1142 N 5th Street (city not specified in listing; serves Coeur d'Alene, Post Falls, and Spokane)","zip":null,"rating":{"value":4.95,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/cda/best-painting-company-%7C-coeur-d%27alene-%7C-post-falls-%7C-spokane-reviews-10803796.htm"},{"type":"search","url":"https://www.homeadvisor.com/c.Painting.Post_Falls.ID.-12054.html"}],"note":"Angi's separate listing shows a similar ~4.9 score but a different review count (one snippet read 4.25); HomeAdvisor's 'Super Service Award' listing (4.95/22) used here. One snippet's About-us text oddly referenced a different company name ('Grand-Slam Painting & Construction LLC'), so treat the listing with some caution.","desc":"Painting contractor offering exterior and interior painting and stucco work across the Coeur d'Alene/Post Falls/Spokane tri-area, in business since 2016.","rank":2,"groupSize":7},{"id":"pf52","category":"Painting","name":"High Performance Painting and Drywall, LLC","phone":null,"website":null,"address":"5700 East Lorraine Drive (city not specified; serves North Idaho)","zip":null,"rating":{"value":4.7,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Exterior-Home-or-Structure-Paint-or-Stain"}],"note":"Address city was not confirmed within available snippets; no phone number found.","desc":"Family-owned painting and drywall company serving North Idaho.","rank":3,"groupSize":7},{"id":"pf53","category":"Painting","name":"River View Painting","phone":null,"website":null,"address":"Serving Post Falls, ID and the Spokane, WA area","zip":null,"rating":{"value":4.6,"count":22},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/post-falls/interior-painting/river-view-painting-interiors-exterior/service/509423870331953152"}],"note":"Listed under both the Post Falls, ID and Spokane, WA Thumbtack markets; no street address or phone found.","desc":"Interior and exterior painting service operating in the Post Falls/Spokane area.","rank":4,"groupSize":7},{"id":"pf54","category":"Painting","name":"Get R Done Painting","phone":null,"website":null,"address":"102 W Petal Ct, Post Falls, ID 83854","zip":"83854","rating":{"value":4.5,"count":30},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://reviews.birdeye.com/get-r-done-painting-149541834689069"},{"type":"search","url":"https://startpage.mapquest.com/us/idaho/get-r-done-painting-282099354"}],"note":"Birdeye profile is unclaimed by the business; no phone number could be found in available listings.","desc":"Painting contractor based in Post Falls, ID.","rank":5,"groupSize":7},{"id":"pf55","category":"Painting","name":"Five Star Painting of Coeur d'Alene","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.7,"count":7},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.FiveStarPainting.39833411.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d%27alene/five-star-painting-of-coeur-d%27alene%2C-id-reviews-10651908.htm"}],"note":"Ranked below River View and Get R Done despite a nominally higher star value, because its review count (7) is much smaller and less reliable for comparison; Angi page separately references positive Google reviews from 2023 customers but gives no Google review count.","desc":"Local franchise of the national Five Star Painting brand serving Coeur d'Alene, ID.","rank":6,"groupSize":7},{"id":"pf56","category":"Painting","name":"Honey Do Painting, LLC","phone":null,"website":null,"address":"Serving Bonners Ferry to Coeur d'Alene, North Idaho (based in Bonners Ferry, ID)","zip":null,"rating":{"value":5,"count":12},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.HoneyDoPainting.74146373.html"},{"type":"listing","url":"https://reviews.birdeye.com/honey-do-painting-llc-166944926607312"}],"note":"Ranked last despite a perfect 5.0: the review count is small (12) and a separate Birdeye listing for a similarly-named business shows a conflicting 4.8/53, raising doubt about whether these are the same company; service area is Bonners Ferry down to Coeur d'Alene, no confirmed street address closer to Post Falls.","desc":"Family-owned painting (and handyman) company based in Bonners Ferry, Idaho, serving areas down to Coeur d'Alene.","rank":7,"groupSize":7},{"id":"pf57","category":"Pressure Washing","name":"Double Diamond Window Cleaning and Pressure Washing","phone":"(208) 214-8838","website":null,"address":"55 N Cedar St Suite 111, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":316},"ratingSource":"Google","sources":[{"type":"listing","url":"https://lantern.llc/b/double-diamond-window-cleaning-and-pressure-washing-post-falls"},{"type":"listing","url":"https://reviews.birdeye.com/d/home-services/post-falls-id/"},{"type":"listing","url":"https://prod.bbb.org/us/id/post-falls/profile/window-cleaning/double-diamond-window-cleaning-llc-1296-1000179832/customer-reviews"}],"note":"Review counts vary by platform (316 on the Google-attributed directory figure, 249 on a separate Birdeye page, 24 on HomeAdvisor, 3 on BBB); the 5.0/316 Google figure is used here as the largest and explicitly Google-sourced number.","desc":"Window cleaning and pressure washing company covering decks, fencing, pavers and sidewalks, based in Post Falls, ID.","rank":1,"groupSize":7},{"id":"pf58","category":"Pressure Washing","name":"The Moss Boss, LLC","phone":null,"website":null,"address":"PO Box 974 (serves Newman Lake, WA and the Coeur d'Alene/Hayden, ID area)","zip":null,"rating":{"value":4.85,"count":24},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.TheMossBossLLC.73154588.html"},{"type":"search","url":"https://homeadvisor.com/tloc/Post-falls-ID/Roof-Clean"}],"note":"Primary stated service base is Newman Lake, WA (just across the state line), with reviews mentioning Coeur d'Alene and Hayden, ID customers; no confirmed coverage of Post Falls specifically, and only a PO Box address is available.","desc":"Pressure washing and moss removal company serving the Newman Lake, WA and Coeur d'Alene/Hayden, ID area.","rank":2,"groupSize":7},{"id":"pf59","category":"Pressure Washing","name":"Two Dogs Washing","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":4.8,"count":30},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.TwoDogsWashing.128556994.html"}],"note":"In business since 2015, offers free estimates and commercial work; no street address or phone number found in available listings.","desc":"Residential and commercial pressure washing company serving Post Falls, ID, in business since 2015.","rank":3,"groupSize":7},{"id":"pf60","category":"Pressure Washing","name":"River City Pressure Washing","phone":null,"website":null,"address":"1507 E Lakeside Ave (listed service area: Post Falls, Coeur d'Alene, Hayden, ID)","zip":null,"rating":{"value":5,"count":11},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/river-city-pressure-washing-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/c.powerwashing.Post_Falls.ID.-14980.html"}],"note":"Review count is inconsistent across sources (6, 10, and 11 reviews cited in different listings), so this perfect rating is ranked below higher-volume competitors for credibility; family-owned, in business since 2019; no phone number found.","desc":"Locally-owned family pressure washing business offering free estimates and emergency service across Coeur d'Alene, Hayden, and Post Falls.","rank":4,"groupSize":7},{"id":"pf61","category":"Pressure Washing","name":"Pressure Plus LLC","phone":null,"website":null,"address":"Serving Kootenai County, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/kootenai/pressure-washing.htm"}],"note":"Also offers window and painting work per its listing; Angi's Kootenai County pressure-washing page shows a combined category average of 4.8 from 10 verified reviews (shared with River City Pressure Washing), but no individually attributable rating was found; one 2021 review praised honest, on-time service and a paint job.","desc":"Pressure washing (and painting/window) company serving Kootenai County, Idaho.","rank":5,"groupSize":7},{"id":"pf62","category":"Pressure Washing","name":"Inland NorthWash, LLC","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/pressure-washing"}],"note":"Found only in a BBB category directory listing for Post Falls; no independent rating, phone number, or address located.","desc":"Pressure washing company listed as serving Post Falls, ID.","rank":6,"groupSize":7},{"id":"pf63","category":"Pressure Washing","name":"CDA Softwash","phone":null,"website":null,"address":"Serving Kootenai County, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://lib.www.bbb.org/us/id/bonners-ferry/category/pressure-washing"}],"note":"Found only in a BBB category directory listing for the Kootenai/North Idaho area; no independent rating, phone number, or address located.","desc":"Soft-wash / pressure washing company listed as serving the Kootenai County, Idaho area.","rank":7,"groupSize":7},{"id":"pf64","category":"Garage Doors","name":"Precision Garage Door Service of Post Falls","phone":"(208) 204-0129","website":"https://www.precisiondoor.net/locations/idaho/spokane/coeur-dalene/post-falls/reviews","address":"306 N Spokane St Unit G, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":463},"ratingSource":"Google","sources":[{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/precision-garage-door-service-of-post-falls/"},{"type":"website","url":"https://www.precisiondoor.net/locations/idaho/spokane/coeur-dalene/post-falls/reviews"}],"note":"Listing on ServiceAgent is marked unclaimed; the directory states its rating/review figures come from the business's Google Business Profile data, not independently verified by the directory.","desc":"Franchise garage door repair, installation, spring, and opener service serving Post Falls and Kootenai County.","rank":1,"groupSize":6},{"id":"pf65","category":"Garage Doors","name":"Overhead Door Company Spokane-Coeur d'Alene","phone":"(208) 773-0502","website":null,"address":"420 E 5th Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.89,"count":45},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/overhead-door-company-spokane-coeur-d'alene-reviews-2356179.htm"},{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/overhead-door-company-of-spokane-coeur-d-alene/"}],"note":"ServiceAgent separately reports 4.8 stars / 333 reviews for this same branch; Angi's figure used because it is clearly attributed to a named platform. Part of a 9-branch regional dealer network (Spokane WA based).","desc":"Regional garage door dealer and installer with a Post Falls branch office, part of a nine-branch Spokane/Idaho network.","rank":2,"groupSize":6},{"id":"pf66","category":"Garage Doors","name":"North Idaho Garage Door","phone":null,"website":null,"address":"Serving Post Falls, ID 83854 and surrounding area","zip":"83854","rating":{"value":5,"count":511},"ratingSource":"Voolt","sources":[{"type":"listing","url":"https://voolt.pro/idaho/post-falls/home-construction/north-idaho-garage-door/"}],"note":"Rating reported only by the Voolt aggregator directory; original review platform (likely Google) is not explicitly stated, so sourcing is weaker than other entries. Ranked below Overhead Door despite the higher raw score because of this.","desc":"Locally owned garage door company that says its own employees perform all work without subcontractors.","rank":3,"groupSize":6},{"id":"pf67","category":"Garage Doors","name":"Garage Door Center (Spilker Pacific LLC)","phone":null,"website":"https://www.clopaydoor.com/dealers/garage-doors-abilene-id-spilker-pacific-llc-dba-garage-door-center---post-falls-id","address":"Post Falls, ID","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.clopaydoor.com/dealers/garage-doors-abilene-id-spilker-pacific-llc-dba-garage-door-center---post-falls-id"}],"note":"No numeric rating found in search results.","desc":"Clopay Master Authorized Dealer in Post Falls, operating legally as Spilker Pacific LLC dba Garage Door Center.","rank":4,"groupSize":6},{"id":"pf68","category":"Garage Doors","name":"Complete Garage Door Service","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/complete-garage-door-service-reviews-5830549.htm"}],"note":"BBB lists the company as A+ rated (not accredited) but that is not a star rating; no numeric rating/review count found.","desc":"Garage door repair service established in 2009, serving the Coeur d'Alene area.","rank":5,"groupSize":6},{"id":"pf69","category":"Garage Doors","name":"Same Day Garage Doors","phone":"(208) 810-4800","website":null,"address":"1380 N Ewell Ct, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://business.dptribune.com/dptribune/news/read/43259116/same_day_garage_doors_announces_24/7_emergency_repair_and_installation_services"},{"type":"listing","url":"https://www.city-data.com/profiles/279766"}],"note":"Address and phone are inconsistent across directories (at least 3 different address/phone combinations appear); the most frequently repeated figures were used. No reliable aggregate rating found, though an individual HomeAdvisor review praised the technician.","desc":"Garage door repair and installation company advertising 24/7 emergency service in the Post Falls area.","rank":6,"groupSize":6},{"id":"pf70","category":"Fencing & Decking","name":"Idaho Fence","phone":"(208) 687-2296","website":null,"address":"2430 W Seltice Way, Post Falls, ID 83854","zip":"83854","rating":{"value":4.1,"count":254},"ratingSource":"Google","sources":[{"type":"listing","url":"https://reviews.birdeye.com/idaho-fence-148917071010899"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/idaho-fence-reviews-6512933.htm"},{"type":"listing","url":"https://www.customerlobby.com/reviews/779/idaho-fence-co"}],"note":"Birdeye's figure explicitly aggregates this business's Google reviews. Angi separately shows a higher 4.85 score; Customer Lobby reviews are more mixed (includes complaints about a crooked fence and a sinking post).","desc":"Fence contractor founded in 1975 that furnishes and installs all types of fencing in the Post Falls/Kootenai County area.","rank":1,"groupSize":7},{"id":"pf71","category":"Fencing & Decking","name":"Bugle Construction JMJ, LLC","phone":"(208) 457-7234","website":null,"address":"306 N Spokane St, Post Falls, ID 83854 (also listed with mailing address PO Box 220, Post Falls, ID 83877)","zip":"83854","rating":{"value":4.75,"count":67},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/bugle-construction"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/bugle-construction-jmj-llc-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.BugleConstructionJMJ.84716752.html"}],"note":"HomeAdvisor shows two conflicting figures across its own pages (4.3/81 reviews on one, 4.75/67 on its approved-pro page); the latter was used. In business since 2013 per HomeAdvisor; reviewers describe composite decking with cable railing and patio covers.","desc":"Post Falls general contractor (in business since 2013) building decks, composite decking, patio covers, and fence work.","rank":2,"groupSize":7},{"id":"pf72","category":"Fencing & Decking","name":"Estes Landscaping & Construction LLC","phone":null,"website":null,"address":"Serving Post Falls, ID 83854","zip":"83854","rating":{"value":4.5,"count":10},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/estes-landscaping-and-construction-llc-reviews-10470010.htm"}],"note":"Angi describes the average only as 'maintained 4.5+ stars' without an exact decimal shown in the snippet. One 1-star review (April 2025) criticized a phone-only estimate given without a site visit.","desc":"Owner-operated Post Falls company building decks, porch covers, sheds, fences, and railings; offers free estimates.","rank":3,"groupSize":7},{"id":"pf73","category":"Fencing & Decking","name":"Almighty Constructors","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":8},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/almighty-constructors-reviews-1.htm"}],"note":"The 5.0/8 figure is specifically for Angi's deck-repair category; the company's overall multi-category average is described only as 'above 4.5 stars' without an exact number.","desc":"Coeur d'Alene-area contractor doing deck repair and related construction work.","rank":4,"groupSize":7},{"id":"pf74","category":"Fencing & Decking","name":"Elite Construction & Remodeling","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.71,"count":90},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Composite-Deck-Build"}],"note":"Rating appeared on HomeAdvisor's Coeur d'Alene composite-deck category page rather than a standalone company profile URL; it was the largest deck-specific review sample found in this research.","desc":"Coeur d'Alene-area remodeling contractor offering composite deck construction.","rank":5,"groupSize":7},{"id":"pf75","category":"Fencing & Decking","name":"Northwest Hard Surface Restoration","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.79,"count":21},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Deck-Fence-Patio-or-Porch-Clean-and-Seal"}],"note":"Rating found on a HomeAdvisor category page rather than a dedicated company profile; service is mainly deck/fence/patio cleaning and sealing rather than new construction.","desc":"Coeur d'Alene-area contractor specializing in deck, fence, and patio cleaning and sealing.","rank":6,"groupSize":7},{"id":"pf76","category":"Fencing & Decking","name":"Clarks Builders LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":3.67,"count":3},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Deck-or-Porch-Build-or-Replace"}],"note":"Lowest rating and smallest review sample (3 reviews) found in this category; ranked last for credibility.","desc":"Coeur d'Alene-area builder appearing in deck-construction directory listings.","rank":7,"groupSize":7},{"id":"pf77","category":"Snow Removal","name":"Post Falls Sprinklers","phone":null,"website":null,"address":"1905 E 1st Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":12},"ratingSource":"Google","sources":[{"type":"listing","url":"https://repairhit.com/business/post-falls-sprinklers"},{"type":"listing","url":"https://business.google.com/v/matterhorn-landscaping/03911521416193894764/c29a/_"},{"type":"listing","url":"https://www.thumbtack.com/id/post-falls/landscaping/matterhorn-landscaping/service/557606756998660103"}],"note":"A Google Business listing at this same address appears under the name 'Matterhorn Landscaping' with the same 5/12 rating and the same snow-plowing description — may be the same operation under two names; flagged for verification. Repairhit separately shows 5.0/3 reviews.","desc":"Irrigation/landscaping company in Post Falls that also offers snow plowing and removal for residential and commercial properties.","rank":1,"groupSize":7},{"id":"pf78","category":"Snow Removal","name":"Bee Stung Yard Care LLC","phone":null,"website":null,"address":"1206 E Best Ave, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":5},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/bee-stung-yard-care-llc/015121699975901143482/e61c/_"},{"type":"listing","url":"https://naicslist.com/company-profile/bee-stung-yard-care-llc-coeur-d-alene-id-83814"}],"note":"Perfect rating based on only 5 reviews — small sample, ranked below the larger-sample Post Falls Sprinklers listing despite an equal score. BBB lists the company under landscape contractors serving Kootenai County.","desc":"Coeur d'Alene yard-care company; a Google reviewer specifically praised its landscaping, yard clean-up, and snow removal work.","rank":2,"groupSize":7},{"id":"pf79","category":"Snow Removal","name":"Augusta Lawn Care Services of Post Falls","phone":"(208) 593-2484","website":"https://www.augustalawncareservices.com/postfalls","address":"2126 W Cannon Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":3},"ratingSource":"Repairhit","sources":[{"type":"listing","url":"https://repairhit.com/biz/augusta-lawn-care-services-of-post-falls"},{"type":"website","url":"https://www.augustalawncareservices.com/services/postfalls-snow-ice-removal"}],"note":"Rating is from an unclaimed Repairhit directory listing based on only 3 reviews. This is a local branch of a 200+ location national franchise, so service quality may vary by operator.","desc":"Local branch of the Augusta Lawn Care Services franchise offering snow plowing, shoveling, and ice/salt treatment alongside lawn care in Post Falls.","rank":3,"groupSize":7},{"id":"pf80","category":"Snow Removal","name":"All Terrain Lawncare","phone":null,"website":null,"address":"Serving Post Falls, ID 83854","zip":"83854","rating":{"value":4.74,"count":76},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.AllTerrainLawncare.34293326.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/all-terrain-lawncare-reviews-1.htm"}],"note":"Strong rating is for the company's overall lawn-care work; its dedicated HomeAdvisor snow-removal category listing shows no snow-specific reviews yet. Included per task guidance since snow removal is listed among its services (13-14 years in business).","desc":"Post Falls landscaping company offering lawn care, tree service, and snow removal.","rank":4,"groupSize":7},{"id":"pf81","category":"Snow Removal","name":"Idaho Lawns Landscape and Snow Maintenance Co.","phone":null,"website":null,"address":"149 Bentley Place, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/landscape-contractors"}],"note":"Found via BBB category listing; no star rating located.","desc":"Post Falls landscaping and snow maintenance company listed with the Better Business Bureau.","rank":5,"groupSize":7},{"id":"pf82","category":"Snow Removal","name":"Down to Earth Landscaping","phone":null,"website":null,"address":"3649 Donegal Ln Apt C103, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/landscape-contractors"}],"note":"Found via BBB category listing under landscape contractors and snow removal services; no star rating located. A second address (808 W Mullan) also appears for this name in BBB data.","desc":"Post Falls landscaping company listed with the BBB under landscape contractors and snow removal services.","rank":6,"groupSize":7},{"id":"pf83","category":"Snow Removal","name":"Ultra Lawn, LLC","phone":null,"website":null,"address":"Serving Post Falls, ID 83877","zip":"83877","rating":{"value":3.9,"count":26},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/ultra-lawn-llc-167521247065529"},{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/ultra-lawn-639683304"}],"note":"A MapQuest listing shows this business's location as closed — current operating status is unconfirmed. One review complains about slow check deposits/payment delays. Ranked last and flagged for verification before listing live.","desc":"North Idaho lawn-care and sprinkler-repair company operating since 1997 that has also offered snow removal.","rank":7,"groupSize":7},{"id":"pf84","category":"Septic & Well Services","name":"Morning Star Excavating, LLC","phone":null,"website":null,"address":"Serving Cataldo, Coeur d'Alene, Rathdrum & Post Falls, ID","zip":null,"rating":{"value":5,"count":13},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/rated.MorningStarExcavating.140067407.html"},{"type":"listing","url":"https://www.angi.com/companylist/us/id/cataldo/excavating.htm"},{"type":"listing","url":"https://www.homeadvisor.com/c.Septic-Tanks-Wells.Cataldo.ID.-12081.html"}],"note":"Angi/HomeAdvisor both show the same 5.0/13-review figure (3 years listed experience); reviews found cover excavation/septic installation, not well work specifically; no emergency service or warranty per listing.","desc":"Excavation contractor serving the Cataldo/Coeur d'Alene area that lists septic system installation, replacement, and repair among its services.","rank":1,"groupSize":5},{"id":"pf85","category":"Septic & Well Services","name":"United Crown Pump & Drilling","phone":"(208) 772-7867","website":"https://www.unitedcrown.com","address":"3125 W Hayden Ave, Hayden, ID 83835","zip":"83835","rating":{"value":5,"count":3},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/united-crown-pump-and-drilling-reviews-478783.htm"},{"type":"listing","url":"https://www.zoominfo.com/c/united-pump-co/355416817"},{"type":"listing","url":"https://naicslist.com/company-profile/united-pump-co-hayden-id-83835"}],"note":"Only 3 Angi reviews shown (most recent 12/2024) despite the perfect score, so weighted below Morning Star's larger sample; BBB lists an A+ rating but says the business is not BBB-accredited; a secondary phone number (208) 772-3230 also appears in one directory.","desc":"Well pump and drilling company in Hayden offering new well pump installation, water system upgrades, and troubleshooting for low pressure or pump failures.","rank":2,"groupSize":5},{"id":"pf86","category":"Septic & Well Services","name":"Mr. Rooter Plumbing of Coeur d'Alene","phone":"(208) 668-0007","website":"https://www.mrrooter.com/cda/","address":"1986 W Hayden Ave, Coeur d'Alene, ID 83815","zip":"83815","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.mrrooter.com/cda/residential-services/septic-pumping"},{"type":"website","url":"https://www.mrrooter.com/cda/residential-services/septic-system-installation/"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Well-Pump-Install-or-Replace"}],"note":"Street address comes from a third-party (HomeAdvisor) listing, not the company's own site, so treat as unverified; no independent star rating/review count was found, only an unrelated ambiguous customer complaint snippet that may refer to a different office.","desc":"National plumbing franchise's Coeur d'Alene location offering septic tank pumping, septic system installation, and septic/sewer repair with 24/7 scheduling advertised.","rank":3,"groupSize":5},{"id":"pf87","category":"Septic & Well Services","name":"Inland Pump Co LLC","phone":"(208) 661-1340","website":"https://www.inlandpumpco.com","address":"13375 N Idaho Rd, Rathdrum, ID 83858","zip":"83858","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/rathdrum/inland-pump-co-llc-reviews-6323570.htm"},{"type":"listing","url":"https://www.mylocalservices.com/Inland+Pump+Co-Rathdrum-Idaho-24636400.html"},{"type":"listing","url":"https://www.superpages.com/rathdrum-id/water-well-drilling-pump-contractors"}],"note":"Serving the area since 1995 per directory listings; its described services emphasize lake, irrigation, reservoir and UV/filtration systems rather than residential well pumps, so confirm well-pump capability directly; a second phone number (208) 758-7372 appears in one directory.","desc":"Pump sales and installation company in Rathdrum categorized under wells/pumps, plumbing, and water filtration, serving North Idaho and Eastern Washington.","rank":4,"groupSize":5},{"id":"pf88","category":"Septic & Well Services","name":"American Septic and Pump","phone":null,"website":null,"address":"Serving Post Falls & surrounding Kootenai County","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/septic-tank-treatment"}],"note":"A BBB category listing shows this business offering septic tank treatment/cleaning/grease pumping, but the street address shown (2481 Titlesist Way, Post Falls) appears to actually belong to a neighboring listing (H & R Complete, Inc.), so no address is reported here; no phone or rating found.","desc":"Septic tank treatment, cleaning, and grease pumping company appearing in BBB's Post Falls septic category listings.","rank":5,"groupSize":5},{"id":"pf89","category":"Pest Control","name":"Pointe Pest Control","phone":"(208) 262-4122","website":"https://pointepest.com/locations/coeur-dalene","address":"118 N 7th St #A-14, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":2749},"ratingSource":"Birdeye","sources":[{"type":"website","url":"https://pointepest.com/locations/coeur-dalene"},{"type":"listing","url":"https://reviews.birdeye.com/pointe-pest-control-156230183728525"},{"type":"listing","url":"https://www.homeadvisor.com/rated.OcalPestControl.83785438.html"}],"note":"HomeAdvisor lists a lower 4.5/183 for the company, likely reflecting a different review pool than Birdeye's 2,749; ranked #1 on review-count weight despite the discrepancy. Also serves Post Falls per a separate location page.","desc":"Pest control company with a Coeur d'Alene office offering residential pest, wasp, and general insect services; also listed in Today's Homeowner's North Idaho pest control roundup.","rank":1,"groupSize":6},{"id":"pf90","category":"Pest Control","name":"Crosstown Pest Control","phone":"(208) 643-2195","website":null,"address":"200 E Duane Ct, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":276},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/crosstown-pest-control-164325539873232"},{"type":"listing","url":"https://todayshomeowner.com/near-me/idaho/coeur-dalene/pest-control"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/exterminators/crosstown-pest-control/service/462053042583232526"}],"note":"A separate unclaimed Birdeye profile lists an alternate Coeur d'Alene address (923 Sherman Ave #200) with no phone shown; the Post Falls address/phone pairing comes from Today's Homeowner's roundup and is used here.","desc":"Pest control company serving Post Falls and Coeur d'Alene, included in Today's Homeowner's list of top North Idaho pest control providers.","rank":2,"groupSize":6},{"id":"pf91","category":"Pest Control","name":"KB Pest and Lawn Solutions","phone":null,"website":null,"address":"PO Box 1056, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":32},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.KBPestandLawn.88415521.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/kb-pest-and-lawn-solutions-reviews-1.htm"}],"note":"Angi's listing separately shows 31 reviews, all five-star, consistent with HomeAdvisor's figure; address is a PO Box (no street address found); no phone number found in available listings.","desc":"Pest and lawn service company based in Post Falls that serves Coeur d'Alene and the surrounding area.","rank":3,"groupSize":6},{"id":"pf92","category":"Pest Control","name":"Allen Pest Control","phone":null,"website":null,"address":"140 E Spruce Ave, Suite 2, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.8,"count":54},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/allen-pest-control-148321525375714"},{"type":"listing","url":"https://voolt.pro/idaho/coeur-dalene/cleaning-maintenance/allen-pest-control/"},{"type":"listing","url":"https://startpage.phoenix.aws.mapquest.com/us/idaho/allen-pest-control-10234609"}],"note":"Only a partial phone number (208) 664-xxxx was found (Seamless.ai), so phone is reported as null; a separate BBB record lists a different address (1918 N 4th St) that may be outdated.","desc":"Pest control company operating out of Coeur d'Alene, also appearing in Today's Homeowner's North Idaho pest control list.","rank":4,"groupSize":6},{"id":"pf93","category":"Pest Control","name":"Bug Off Pest Control, LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding areas","zip":null,"rating":{"value":4.8,"count":17},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.OcalPestControl.83785438.html"}],"note":"No street address or phone number located in available listings; check the HomeAdvisor profile directly for contact details.","desc":"Pest control company serving Coeur d'Alene, ID and surrounding areas per its HomeAdvisor profile.","rank":5,"groupSize":6},{"id":"pf94","category":"Pest Control","name":"Senske Services (Coeur d'Alene)","phone":null,"website":"https://www.senske.com","address":"10269 N Taryne St, Hayden, ID 83835","zip":"83835","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/senske-services-reviews-1.htm"}],"note":"Ranked last: Angi shows 5.0 for quality/value/responsiveness but no review count is given, HomeAdvisor shows this location with no reviews yet, and BBB gives the overall Senske Services organization (not this location specifically) an F rating; numeric rating withheld pending clearer, location-specific data.","desc":"Regional pest control and lawn care company (national franchise) with a branch office in Hayden serving the Coeur d'Alene area.","rank":6,"groupSize":6},{"id":"pf95","category":"Housekeeping","name":"CDA Home Cleaning","phone":null,"website":null,"address":"1940 W Riverstone Dr, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":80},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.cdahomecleaning.158893812.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/house-cleaning.htm"}],"note":"A separate Angi listing for the same business shows a lower 4.7/65-review figure; HomeAdvisor's 5.0/80 is used here as the larger, more recent sample. No phone number found in available listings.","desc":"Residential house cleaning company based in Coeur d'Alene that also serves Hayden, Rathdrum, Post Falls, and Liberty Lake.","rank":1,"groupSize":7},{"id":"pf96","category":"Housekeeping","name":"Full Service Cleaning Co","phone":null,"website":null,"address":"Serving Coeur d'Alene, Hayden, Post Falls & Rathdrum, ID","zip":null,"rating":{"value":5,"count":9},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/hayden/house-cleaning/full-service-cleaning-co/service/553441638037291016"}],"note":"A HomeAdvisor-sourced address (2810 W Strawberry Ln) was found under a Medimont, ID page, which is far outside the core Post Falls/CDA area and looks unreliable, so a service-area description is used instead; only 9 reviews behind the perfect score, so ranked below CDA Home Cleaning's larger sample. In business since 2024 per HomeAdvisor.","desc":"Cleaning company offering residential, commercial, Airbnb, and post-construction cleaning across Coeur d'Alene, Post Falls, Hayden, and surrounding areas.","rank":2,"groupSize":7},{"id":"pf97","category":"Housekeeping","name":"White Glove Cleaning","phone":null,"website":null,"address":"Serving Coeur d'Alene, Hayden, Post Falls & Rathdrum, ID","zip":null,"rating":{"value":4.9,"count":44},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/post-falls-ID/Window-Cleaning/"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/house-cleaning.htm"}],"note":"A street address (13122 E Wick Ave) appeared in listings but its city could not be confirmed as being within the Post Falls/CDA core area, so a service-area description is used instead; HomeAdvisor shows slightly differing figures (4.93/43 vs 4.9/44) across pages. In business since 2016 per listing text.","desc":"House cleaning company in business since 2016 that serves Coeur d'Alene, Hayden, Post Falls, and Rathdrum.","rank":3,"groupSize":7},{"id":"pf98","category":"Housekeeping","name":"Victory Maids","phone":"(208) 603-7304","website":null,"address":"12845 W Riverview Dr, Post Falls, ID 83854","zip":"83854","rating":{"value":4.5,"count":5},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/victory-maids-reviews-1.htm"},{"type":"listing","url":"https://match.angi.com/rated.VictoryMaids.124252844.html"}],"note":"Angi separately shows a 4.55 average; review counts are small (5 on HomeAdvisor) so weighted below higher-volume competitors. BBB lists the company as accredited with an A/A+ rating; also serves Spokane/Spokane Valley, WA.","desc":"Locally owned house cleaning company based in Post Falls that is BBB accredited and also serves the Spokane, WA area.","rank":4,"groupSize":7},{"id":"pf99","category":"Housekeeping","name":"Elite Clean, LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, Hayden, Post Falls & Rathdrum, ID","zip":null,"rating":{"value":4.49,"count":55},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.EliteCleanLLC.68192871.html"}],"note":"No street address or phone number found in available listings; HomeAdvisor page shows at least one negative review with a company response disputing it; in business roughly 20-21 years per differing listing pages.","desc":"Maid service and post-construction cleaning company serving Coeur d'Alene, Hayden, Post Falls, and Rathdrum.","rank":5,"groupSize":7},{"id":"pf100","category":"Housekeeping","name":"NW Maids","phone":"(208) 974-9862","website":"https://nwmaids.com/locations/post-falls-id/","address":"Post Falls, ID","zip":"83854","rating":{"value":4.3,"count":453},"ratingSource":"Google","sources":[{"type":"website","url":"https://nwmaids.com/locations/post-falls-id/"},{"type":"website","url":"https://nwmaids.com/?p=3844"}],"note":"Rating is self-reported on the company's own location page (\"Google rating score: 4.3 of 5, based on 453 reviews\"); the same page also claims 5-star ratings on Yelp, Thumbtack, and Angie's List, which could not be independently verified, so treat the figure with caution. Only a city-level address was found, no street address.","desc":"House cleaning service advertising vetted, insured maids and a satisfaction guarantee, serving Post Falls, ID.","rank":6,"groupSize":7},{"id":"pf101","category":"Housekeeping","name":"Merry Maids","phone":null,"website":"https://merrymaids.com/home-cleaners-post-falls-id","address":"Serving Post Falls & North Idaho","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://merrymaids.com/home-cleaners-post-falls-id"}],"note":"Ranked last: no Post Falls/North Idaho-specific phone number, address, or rating could be confirmed; the only Merry Maids contact numbers found (e.g. Idaho Falls franchise) are for a different, distant city and are not reported here to avoid misattribution.","desc":"National home-cleaning franchise with a dedicated marketing page describing its professional home cleaning service for Post Falls, North Idaho.","rank":7,"groupSize":7}];

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
