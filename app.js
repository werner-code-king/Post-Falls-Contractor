/* Post Falls Contractor Network — app logic */
(function () {
  'use strict';

  var SEED_CONTRACTORS = [{"id":"pf1","category":"Landscaping & Lawn Care","name":"Oasis Lawn and Pest","phone":null,"website":null,"address":"Post Falls, ID (serving nearby towns)","zip":null,"rating":{"value":4.9,"count":84},"ratingSource":"Yext","sources":[{"type":"listing","url":"https://directory.yext.com/en/oasis-lawn-and-pest-2095863003"}],"note":"Rating sourced from a Yext-powered business directory listing; the listing does not specify which underlying review platform (Google, etc.) the aggregated score comes from.","desc":"Lawn care and pest control company based in or near Post Falls, Idaho, serving the surrounding area.","rank":1,"groupSize":8},{"id":"pf2","category":"Landscaping & Lawn Care","name":"Auto Rain Contracting LLC","phone":null,"website":null,"address":"Serving Cataldo, ID and northern Idaho / eastern Washington","zip":null,"rating":{"value":4.93,"count":30},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Cataldo-ID/Lawn-Dethatching"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Landscape-Install-Landscaping-for-Yard-or-Garden"}],"note":null,"desc":"Sprinkler installation and lawn care company serving northern Idaho (including Kootenai County) and the Spokane, WA area.","rank":2,"groupSize":8},{"id":"pf3","category":"Landscaping & Lawn Care","name":"Nova Landworks LLC","phone":null,"website":null,"address":"717 Chocolate Bear Rd, Rathdrum, ID","zip":null,"rating":{"value":5,"count":13},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Landscaping.Hayden.ID.-12046.html"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/RATHDRUM-ID/Lawn-and-Garden-Sprinkler-System-Install"}],"note":"HomeAdvisor review counts for this listing varied between 13 and 17 across snapshots; both show a perfect 5.0 rating. Listed with 9 years in business, specializing in hardscaping (pavers, retaining walls) and irrigation.","desc":"Hardscaping and landscape design-build company based in Rathdrum, Idaho, serving the Coeur d'Alene area with paver patios, retaining walls, and sprinkler systems.","rank":3,"groupSize":8},{"id":"pf4","category":"Landscaping & Lawn Care","name":"All Terrain Lawncare","phone":null,"website":null,"address":"PO Box 1586, Post Falls, ID","zip":null,"rating":{"value":4.72,"count":72},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Lawn-Care-Maintain-and-Mow-A-Lawn"},{"type":"listing","url":"https://www.experience.com/reviews/all-22649903"},{"type":"listing","url":"https://www.homeadvisor.com/c.Landscaping.Coeur_d alene.ID.-12046.html"}],"note":"Rating varies slightly across HomeAdvisor snapshots (4.6-4.72, 72-85 reviews depending on location page); used the Post Falls-specific figure. In business since 2012; also offers snow removal, tree service, and irrigation.","desc":"Full-service lawn care and landscaping company serving Post Falls and the Coeur d'Alene area since 2012.","rank":4,"groupSize":8},{"id":"pf5","category":"Landscaping & Lawn Care","name":"Savage Landscape And Home Repair","phone":null,"website":null,"address":"1214 East Larch Ave, Kootenai County, ID","zip":null,"rating":{"value":5,"count":6},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Landscape-Install-Landscaping-for-Yard-or-Garden"}],"note":"HomeAdvisor 'Approved Pro' badge; perfect rating from a small sample of 6 reviews. 6 years of experience listed.","desc":"Landscaping and home repair company in Kootenai County, Idaho, listed as a HomeAdvisor Approved Pro.","rank":5,"groupSize":8},{"id":"pf6","category":"Landscaping & Lawn Care","name":"A to Z Sprinklers and Landscape Inc","phone":null,"website":null,"address":"9635 W Halstead Dr, Kootenai County, ID","zip":null,"rating":{"value":5,"count":5},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Landscape-Install-Landscaping-for-Yard-or-Garden"}],"note":"Perfect rating from only 5 reviews; listing claims over 25 years of local experience (self-reported, not independently verified).","desc":"Sprinkler and landscaping company in Kootenai County, Idaho, with a stated 25+ years of local experience.","rank":6,"groupSize":8},{"id":"pf7","category":"Landscaping & Lawn Care","name":"Taylor Made Lawn Care","phone":null,"website":null,"address":"Serving Post Falls & Kootenai County, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.experience.com/reviews/taylor-22659797"}],"note":"No reviews found on any platform as of this search; listing is unclaimed.","desc":"Family owned and operated full-service lawn care business serving the Kootenai County area of North Idaho, in business since 2013 per its own listing.","rank":7,"groupSize":8},{"id":"pf8","category":"Landscaping & Lawn Care","name":"Levi's Landscape","phone":null,"website":null,"address":"Rathdrum, ID (serving Athol, Hayden, Post Falls)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.yourgreenpal.com/pro/levi-s-landscape"}],"note":"No review scores found on its GreenPal listing.","desc":"Landscaping company based in Rathdrum, Idaho, extending services to Athol, Hayden, and Post Falls.","rank":8,"groupSize":8},{"id":"pf9","category":"Roofing","name":"Apex Roofing, LLC","phone":null,"website":null,"address":"Serving Post Falls & Coeur d'Alene, ID","zip":null,"rating":{"value":4.71,"count":41},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Roofing-Install-or-Repair"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-D-Alene-ID/Roofing-Install-or-Repair"}],"note":"HomeAdvisor shows slightly different snapshots (4.71-4.73 rating, 40-42 reviews); averaged to 4.71/41. One snapshot lists 7 years of experience.","desc":"Roofing contractor serving Post Falls and Coeur d'Alene, Idaho, with the largest HomeAdvisor review count found among local roofers.","rank":1,"groupSize":8},{"id":"pf10","category":"Roofing","name":"Gold Gutters","phone":null,"website":null,"address":"Kootenai County, ID","zip":null,"rating":{"value":4.86,"count":14},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Metal-Roofing-Repair"}],"note":"Primarily a gutter installation company that also appears under roofing-related HomeAdvisor categories for Kootenai County.","desc":"Gutter installation company serving Kootenai County, Idaho, also listed under roofing-adjacent HomeAdvisor categories.","rank":2,"groupSize":8},{"id":"pf11","category":"Roofing","name":"New Heights Roofing, LLC","phone":null,"website":null,"address":"Post Falls, ID","zip":null,"rating":{"value":4.68,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Wood-Shake-or-Composite-Roofing-Install-or-Replace"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/COEUR-D-ALENE-ID/Wood-Shake-or-Composite-Roofing-Install-or-Replace"}],"note":"A separate directory listing cites 68 reviews without naming the platform or giving a score; the verifiable HomeAdvisor figure (4.68/19) was used instead. Listing claims 21 years of experience and states its license was 'verified as active when last checked' (self-reported, not independently confirmed here).","desc":"Roofing contractor based in Post Falls, Idaho, offering metal, wood shake, and composite roofing with 21 years of stated experience.","rank":3,"groupSize":8},{"id":"pf12","category":"Roofing","name":"TAD Construction LLC","phone":null,"website":null,"address":"Kootenai County, ID","zip":null,"rating":{"value":5,"count":5},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Metal-Roofing-Repair"}],"note":"HomeAdvisor 'Approved Pro' listing; perfect rating from a small sample of 5 reviews.","desc":"Construction and roofing contractor serving Kootenai County, Idaho.","rank":4,"groupSize":8},{"id":"pf13","category":"Roofing","name":"A Roof Above LLC","phone":null,"website":null,"address":"Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":4},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/c.Roofing.Coeur_D Alene.ID.-12061.html"}],"note":"Perfect rating but very small sample (4 reviews).","desc":"Roofing contractor serving Coeur d'Alene, Idaho.","rank":5,"groupSize":8},{"id":"pf14","category":"Roofing","name":"Yeager Construction","phone":null,"website":null,"address":"Post Falls, ID","zip":null,"rating":{"value":5,"count":4},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Metal-Roofing-Install-or-Replace"}],"note":"Perfect rating but very small sample (4 reviews).","desc":"Construction and roofing contractor serving the Post Falls, Idaho area.","rank":6,"groupSize":8},{"id":"pf15","category":"Roofing","name":"Star Garnet Contractors Group LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, Post Falls, Rathdrum & Hayden, ID","zip":null,"rating":{"value":5,"count":2},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Natural-Slate-Roofing-Install-or-Replace"}],"note":"Perfect rating from only 2 reviews; a relatively new company, ranked near the bottom for credibility despite the perfect score.","desc":"Roofing and remodeling contractor serving Coeur d'Alene, Post Falls, Rathdrum, and Hayden, Idaho.","rank":7,"groupSize":8},{"id":"pf16","category":"Roofing","name":"Empire Roof Coatings","phone":null,"website":null,"address":"Serving Post Falls & Kootenai County, ID (Washington & Idaho licensed)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://coating-genius.lovable.app/service-area/post-falls-id"},{"type":"website","url":"https://coating-genius.lovable.app/service-area/hayden-id"}],"note":"No numeric rating found on any independent platform; testimonials are published on the company's own site. Claims 35+ years serving North Idaho (self-reported).","desc":"Roof coating contractor licensed in Washington and Idaho, serving Post Falls and the greater Kootenai County area.","rank":8,"groupSize":8},{"id":"pf17","category":"HVAC & Furnace","name":"Andy's Heating Cooling","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.92,"count":861},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/andys-22662642"}],"note":"Largest review count found of any business across all three categories researched. Listed as approximately 54 years in business, founded by 'Andy Sr.' as a one-man operation (self-reported history).","desc":"HVAC heating and cooling company serving Coeur d'Alene, Idaho, in business for roughly 54 years.","rank":1,"groupSize":8},{"id":"pf18","category":"HVAC & Furnace","name":"Border Sheet Metal & Heating","phone":null,"website":null,"address":"Hayden, ID","zip":null,"rating":{"value":4.71,"count":207},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/border-22662649"}],"note":"Listing states the company was established in 1942 and that technicians hold NATE certification and the company holds BBB accreditation; these are listing claims, not independently verified here.","desc":"Heating and cooling contractor based in Hayden, Idaho, operating since 1942 per its listing.","rank":2,"groupSize":8},{"id":"pf19","category":"HVAC & Furnace","name":"Right Now Heating & Air","phone":null,"website":null,"address":"212 Evans Street, Coeur d'Alene area, ID","zip":null,"rating":{"value":4.6,"count":245},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/kootenai/hvac.htm"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Heat-Pump-Install-or-Replace"}],"note":"HomeAdvisor shows a lower 4.2 rating from about 300 reviews for the same company; the Angi figure (4.6/245) was used. In business since 2001.","desc":"Heating and air conditioning company serving the Coeur d'Alene, Idaho area, in business since 2001.","rank":3,"groupSize":8},{"id":"pf20","category":"HVAC & Furnace","name":"JA Bertsch Heating & Cooling","phone":null,"website":null,"address":"Coeur d'Alene, ID","zip":null,"rating":{"value":4.6,"count":174},"ratingSource":"Coeur d'Alene Chamber of Commerce directory","sources":[{"type":"listing","url":"https://business.cdachamber.com/list/member/j-a-bertsch-heating-cooling-8653"},{"type":"listing","url":"https://directory.cdachamber.com/list/member/j-a-bertsch-heating-cooling-8653.htm"}],"note":"HomeAdvisor separately lists a 5.0/5 figure for the same company; the larger-sample Chamber-directory figure (4.6/174) was used for ranking. Family-owned, founded 2005; its own listing claims it was 'voted the #1 most trusted HVAC company' (self-reported, not an independent award verification).","desc":"Family-owned heating and cooling company in Coeur d'Alene, Idaho, founded in 2005, offering HVAC, water heater, and electrical services.","rank":4,"groupSize":8},{"id":"pf21","category":"HVAC & Furnace","name":"Comfort Heating, Cooling and Electrical","phone":null,"website":null,"address":"3620 E Covington Ave, serving Post Falls, Coeur d'Alene & Spokane","zip":null,"rating":{"value":5,"count":5},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Rathdrum-ID/Heat-Pump-Install-or-Replace/"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Heat-Pump-Install-or-Replace"}],"note":"HomeAdvisor review count varied between 5 and 6 across snapshots, both at a perfect 5.0 rating. Locally owned, in business over 30 years (since 1993) per its listing.","desc":"Heating, cooling, and electrical company locally owned and operating in the Post Falls / Coeur d'Alene / Spokane area for over 30 years.","rank":5,"groupSize":8},{"id":"pf22","category":"HVAC & Furnace","name":"Sasquatch Heating And Cooling","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":6},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/sasquatch-22662716"}],"note":"Perfect rating from a small sample of 6 reviews.","desc":"Heating and cooling company serving the Coeur d'Alene, Idaho area.","rank":6,"groupSize":8},{"id":"pf23","category":"HVAC & Furnace","name":"Alpine Home Solutions, LLC","phone":null,"website":null,"address":"2306 Sandcreek Lane, Kootenai County area, ID","zip":null,"rating":{"value":4.36,"count":11},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/kootenai/hvac.htm"}],"note":"One reviewer noted a fair price but also an inconvenient return visit for the job.","desc":"HVAC contractor serving the Kootenai County, Idaho area.","rank":7,"groupSize":8},{"id":"pf24","category":"HVAC & Furnace","name":"Bill's Heating & A/C","phone":null,"website":null,"address":"1007 N Boulder Ct, Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.mylocalservices.com/Bills+Heating+andamp+AC-Post+Falls-Idaho-23944902.html"},{"type":"listing","url":"https://runalphaloops.com/carrier/id/2975913/bills-heating-air-appliance-repair-llc"}],"note":"Listing shows only one review with no clear aggregate score; self-describes as offering 24/7 emergency service and claims to be 'the northwest's largest HVAC contractor' (self-reported, unverified). Ranked last for lack of a verifiable rating.","desc":"Heating and air conditioning contractor based at 1007 N Boulder Ct in Post Falls, Idaho.","rank":8,"groupSize":8},{"id":"pf25","category":"Electrical","name":"Saccone Electric LLC","phone":"(208) 449-3855","website":"https://sacconeelectric.com","address":"1705 E Satre Ave, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":90},"ratingSource":"Porch","sources":[{"type":"listing","url":"https://pro.porch.com/post-falls-id/electricians/cp"},{"type":"listing","url":"https://business.cdachamber.com/member-directory/Details/saccone-electric-4502202"},{"type":"listing","url":"https://business.cdachamber.com/list/member/saccone-electric-llc-10032"}],"note":"The 5.0/90-review figure appeared in an aggregator search summary without a single clearly-named review platform; attributed to the Porch listing context it came from. Address/phone confirmed via Coeur d'Alene Chamber of Commerce directory; company is based in Coeur d'Alene but a builder directory lists Post Falls as part of its service area.","desc":"Full-service residential/commercial electrical contractor based in Coeur d'Alene that lists Post Falls, Hauser, Dalton Gardens, Hayden and Rathdrum as part of its service area.","rank":1,"groupSize":10},{"id":"pf26","category":"Electrical","name":"Allen's Electric Co","phone":null,"website":"https://spwotton-allenselectricco.static.hf.space/index.html","address":"Serving Post Falls, ID","zip":null,"rating":{"value":4.9,"count":128},"ratingSource":"company website","sources":[{"type":"website","url":"https://spwotton-allenselectricco.static.hf.space/index.html"},{"type":"listing","url":"https://directory.yext.com/en/allen-s-electric-823704296"}],"note":"Rating is self-reported on what appears to be an unofficial, third-party-hosted page rather than a verified primary company site; no phone number or street address could be confirmed. Treat the high rating/count with caution.","desc":"Father-and-son electrical contracting team that says it has served the Post Falls area since 2008, offering 24/7 emergency service.","rank":2,"groupSize":10},{"id":"pf27","category":"Electrical","name":"VPC Electric","phone":"(833) 274-3217","website":"https://vpcelectrician.com","address":"6875 W Woodard Way, Unit A, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.88,"count":102},"ratingSource":"ProvenExpert","sources":[{"type":"listing","url":"https://www.provenexpert.com/vpc-electric2/"},{"type":"listing","url":"https://www.getvibrato.com/c/biz/vpc-electric-worley-idaho"},{"type":"listing","url":"https://www.getvibrato.com/c/biz/vpc-electric-hauser-idaho"},{"type":"listing","url":"https://www.thumbtack.com/id/coeur-d-alene/ev-charging-service"}],"note":"4.88 is an aggregate the company's ProvenExpert profile compiles across 3 other review sources (including 68 HomeAdvisor reviews), not one platform's native rating.","desc":"Electrical contractor serving Coeur d'Alene and North Idaho; its listing cites 21 years in business and includes EV charger installation.","rank":3,"groupSize":10},{"id":"pf28","category":"Electrical","name":"Scotty's Electric Company","phone":null,"website":null,"address":"11082 Cutless St, Coeur d'Alene, ID area (city/ZIP not fully confirmed in source)","zip":null,"rating":{"value":4.5,"count":117},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_d%20alene.ID.-12026.html"},{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.coeur_d%20alene.ID.-12026.html"},{"type":"listing","url":"https://business.google.com/v/scottys-electric-co/016425345089985470876/54d7/_"}],"note":"A separate HomeAdvisor snippet showed 4.75 from 105 reviews for this same business; figures were inconsistent between queries, so the more frequently cited 4.5/117 was used.","desc":"Electrical company serving Coeur d'Alene, in business since 1998, offering emergency service.","rank":4,"groupSize":10},{"id":"pf29","category":"Electrical","name":"Phase Electric","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":5,"count":16},"ratingSource":"Google","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/post-falls/pro/phase-electric/service/589354004729716738"}],"note":null,"desc":"Licensed electrician serving Post Falls for about 6 years, covering residential, commercial, home automation, low-voltage and battery-backup work; its Thumbtack listing explicitly labels its reviews as sourced from Google.","rank":5,"groupSize":10},{"id":"pf30","category":"Electrical","name":"Glacier Bay Electric","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID area","zip":null,"rating":{"value":4.5,"count":20},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_d%20alene.ID.-12026.html"}],"note":null,"desc":"Electrical contractor serving the Coeur d'Alene area; one HomeAdvisor reviewer cited it for handling fire-damage electrical repairs.","rank":6,"groupSize":10},{"id":"pf31","category":"Electrical","name":"Crosslines Construction LLC","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":5,"count":7},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://thumbtack.com/id/post-falls/electricians"}],"note":"Small review count (7); listed as a licensed pro on Thumbtack.","desc":"Construction/electrical contractor offering lighting installation among other services in the Post Falls area.","rank":7,"groupSize":10},{"id":"pf32","category":"Electrical","name":"Comfort Heating, Cooling & Electrical","phone":null,"website":null,"address":"Serving Post Falls / Coeur d'Alene area","zip":null,"rating":{"value":5,"count":5},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Blanchard-ID/Electrical-Multiple-Projects-Install-or-Repair-Electrical-Switches-and-Outlets"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Blanchard-ID/Power-Outlet-Installation-Install-or-Repair-Electrical-Switches-and-Outlets"}],"note":"Very small review count (5-6, the figure varied slightly between HomeAdvisor snippets); company describes itself as locally owned for over 30 years.","desc":"HVAC and electrical company describing itself as locally owned and trusted in the North Idaho area for over 30 years.","rank":8,"groupSize":10},{"id":"pf33","category":"Electrical","name":"North Idaho Electrical","phone":null,"website":null,"address":"Serving Hayden / Coeur d'Alene area, ID","zip":null,"rating":{"value":5,"count":5},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/hayden/circuit-breaker-companies/north-idaho-electrical/service/578118022772563977"}],"note":"Small review count (5); reviewers praised code-compliant panel/GFCI work and punctuality.","desc":"Electrical contractor based in the Hayden area serving North Idaho, doing panel and GFCI work.","rank":9,"groupSize":10},{"id":"pf34","category":"Electrical","name":"Rady's Electrical LLC","phone":null,"website":null,"address":"Hauser, ID","zip":null,"rating":{"value":4.9,"count":7},"ratingSource":"Yext","sources":[{"type":"listing","url":"https://directory.yext.com/en/rady-s-electrical-llc-2653211841"}],"note":"Very small review count (7); only source found was a Yext-powered directory page. Business states it is licensed, bonded and insured, a self-reported claim that was not independently verified.","desc":"Small electrical contractor based in Hauser, ID, near Post Falls and Coeur d'Alene.","rank":10,"groupSize":10},{"id":"pf35","category":"Plumbing","name":"My Guy Plumbing & Service, Inc.","phone":null,"website":null,"address":"Serving Post Falls, ID","zip":null,"rating":{"value":4.9,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Plumbing.Coeur_d%20alene.ID.-12058.html"},{"type":"listing","url":"https://match.angi.com/c.Plumbing.Coeur_d%20Alene.ID.-12058.html"}],"note":"Angi places the business in Post Falls while HomeAdvisor describes it serving Coeur d'Alene and surrounding areas; no phone number or street address was confirmed.","desc":"Plumbing company based in the Post Falls/Coeur d'Alene area, in business since 2015, offering free estimates.","rank":1,"groupSize":6},{"id":"pf36","category":"Plumbing","name":"Chaud Company Plumbing Services LLC","phone":null,"website":null,"address":"Serving Kootenai County, ID and surrounding region","zip":null,"rating":{"value":4.7,"count":28},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Plumbing.Coeur_d%20alene.ID.-12058.html"}],"note":"HomeAdvisor listings place this company's service area broadly across Idaho; no Post Falls/Coeur d'Alene-specific street address was found.","desc":"Plumbing company in business since 1986; one reviewer cited a same-day leak repair and well-system work.","rank":2,"groupSize":6},{"id":"pf37","category":"Plumbing","name":"The Rooter Guys Plumbing","phone":null,"website":null,"address":"Hayden, ID","zip":null,"rating":{"value":4.62,"count":106},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/the-22852614"}],"note":null,"desc":"Plumbing company based in Hayden, ID serving the Coeur d'Alene area, described as having 41 years of experience and 24-hour availability.","rank":3,"groupSize":6},{"id":"pf38","category":"Plumbing","name":"Straight Shooter Plumbing & Rooter","phone":"(208) 215-8723","website":"https://www.straightshooterplumbing.com/post-falls-id/","address":"10623 N Government Way, Hayden, ID 83835","zip":"83835","rating":{"value":4.6,"count":9},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/straight-shooter-plumbing-and-rooter"},{"type":"website","url":"https://www.straightshooterplumbing.com/post-falls-id/"},{"type":"listing","url":"https://www.promptloop.com/directory/spokane-99201-plumbing-contractors"}],"note":"A second phone number, (208) 262-3968, appeared in another directory; BuildZoom's (208) 215-8723 was used as primary. Markets itself heavily toward Post Falls but its listed office is in Hayden.","desc":"Plumbing and rooter company based in Hayden, ID that markets 24/7 service to Post Falls and other North Idaho communities; BuildZoom listed its license as active when last checked.","rank":4,"groupSize":6},{"id":"pf39","category":"Plumbing","name":"A River City Plumbing Service","phone":"(208) 659-6565","website":"https://www.arivercityplumbingservice.com/","address":"5425 E Poleline Ave, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/a-river-city-plumbing-service"},{"type":"listing","url":"https://www.bestprosintown.com/id/post-falls/a-river-city-plumbing-service-/"},{"type":"listing","url":"https://www.promptloop.com/directory/spokane-99201-plumbing-contractors"}],"note":"No star rating found; BuildZoom instead gives it a 'BuildZoom score' of 113, said to rank above 97% of Idaho contractors, which is a contractor-data score, not a review-based star rating. A separate directory listed a different address (729 N Dundee Dr, Post Falls) that could not be reconciled with the Poleline Ave address, so treat the address with some caution.","desc":"Plumbing company in Post Falls describing itself as having 27 years of experience, with reviews praising customer service and attention to detail.","rank":5,"groupSize":6},{"id":"pf40","category":"Plumbing","name":"Covenant Plumbing PLLC","phone":null,"website":null,"address":"Serving Kootenai County, ID (based in the Sandpoint/Ponderay area)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://terminus.prod.bbb.org/us/id/clark-fork/category/plumber"},{"type":"listing","url":"https://business.google.com/v/covenant-plumbing/013811312188267570722/4927/_"}],"note":"BBB lists an A+ rating (a letter grade, not a review-based star rating) and names Kootenai County, ID as one of its service areas; a confirmed street address could not be isolated from the BBB directory page.","desc":"Plumbing company holding a BBB A+ rating that lists Kootenai County, ID among its service areas.","rank":6,"groupSize":6},{"id":"pf41","category":"Handyman","name":"Equity Builders of Columbia Basin","phone":null,"website":null,"address":"Serving Rathdrum, ID and surrounding areas","zip":null,"rating":{"value":4.9,"count":45},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/rathdrum/treehouse-builders.htm"}],"note":"A partial HomeAdvisor address fragment ('1506 E Twistwood') appeared without a confirmed city/state, so it was not used as the address; no phone or website confirmed.","desc":"General contractor and handyman service based near Rathdrum, ID, in business since 2009, also doing new construction and insurance-restoration work.","rank":1,"groupSize":5},{"id":"pf42","category":"Handyman","name":"Northwest Home Repair and Inspections, LLC","phone":"(208) 660-5536","website":null,"address":"Post Falls, ID 83854-9623","zip":"83854","rating":{"value":4.95,"count":20},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Sliding-Door-or-Tracks-Repair"}],"note":"Also holds a BBB 'A' letter-grade rating in addition to the HomeAdvisor star rating; only a ZIP was found, not a full street address.","desc":"Post Falls-based handyman and inspection business offering discounts for first responders and veterans.","rank":2,"groupSize":5},{"id":"pf43","category":"Handyman","name":"Red Beard Handyman Services","phone":null,"website":null,"address":"PO Box 1082, Post Falls, ID (mailing address)","zip":null,"rating":{"value":5,"count":21},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Wood-Stairs-and-Railings-Repair"},{"type":"listing","url":"https://www.angi.com/companylist/us/id/post-falls/caulking-services.htm"}],"note":"Angi lists a slightly different figure for this same business, 4.9 from 22 reviews; HomeAdvisor's 5.00 (21) was used as primary. In business since 2004, per Angi.","desc":"Handyman service serving Post Falls since 2004; a HomeAdvisor reviewer credited the owner with diagnosing a frozen-pipe issue two other pros had missed.","rank":3,"groupSize":5},{"id":"pf44","category":"Handyman","name":"All Odd Jobs Handyman Services","phone":null,"website":null,"address":"950 Kootenai Cutoff Rd, Athol, ID 83852","zip":"83852","rating":{"value":5,"count":2},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Driveway-or-Concrete-Power-Washing"}],"note":"Only 2 reviews behind the perfect rating, so ranked below businesses with larger, still-strong review counts despite an equal or lower star value.","desc":"Handyman and light fabrication service based on Kootenai Cutoff Rd near Athol, ID, describing 25 years of repair/fabrication experience.","rank":4,"groupSize":5},{"id":"pf45","category":"Handyman","name":"Kootenai County Handyman (Roy Restoration Homes Inc.)","phone":"(253) 606-2310","website":null,"address":"Coeur d'Alene, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.bbb.org/us/id/coeur-d-alene/profile/remodel-contractors/kootenai-county-handyman-1296-1000178300"}],"note":"BBB Accredited since 2/11/2025; no star rating or review count found. The listed phone carries a Tacoma, WA (253) area code, so may not be a local North Idaho line. Alternate business name: Roy Restoration Homes Inc., owner Nicholas A. Roy.","desc":"Handyman and remodeling business in Coeur d'Alene offering decks, fences, flooring and general handyman work.","rank":5,"groupSize":5},{"id":"pf46","category":"Windows & Doors","name":"Elite Construction & Remodeling","phone":"509-505-6655 / 208-505-1227","website":"https://elite-spokane.com","address":"12929 E Sprague Ave, Spokane Valley, WA (serves Coeur d'Alene, ID for door installation)","zip":null,"rating":{"value":4.97,"count":77},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Doors-Exterior-Install-or-Replace"},{"type":"listing","url":"https://www.homeadvisor.com/c.Windows.Coeur_d%20alene.ID.-12080.html"},{"type":"website","url":"https://elite-spokane.com"}],"note":"Based in Spokane Valley, WA, not Idaho; HomeAdvisor lists it serving Coeur d'Alene specifically for exterior/sliding door installation, not confirmed for window work. Included for door category coverage.","desc":"Licensed, bonded and insured general contractor, family owned since 2001, listed on HomeAdvisor/Angi for exterior and sliding door installation serving the Coeur d'Alene area.","rank":1,"groupSize":6},{"id":"pf47","category":"Windows & Doors","name":"North Idaho Glass","phone":null,"website":null,"address":"Coeur d'Alene, ID (exact street address not found)","zip":null,"rating":{"value":5,"count":4},"ratingSource":"Yelp","sources":[{"type":"listing","url":"https://www.yelp.com/biz/north-idaho-glass-coeur-d-alene"},{"type":"search","url":"https://www.yelp.com/search?find_desc=Window+Glass+Replacement&find_loc=Coeur+d%27Alene%2C+ID"}],"note":"Only 4 Yelp reviews; perfect rating but tiny sample, so ranked below the higher-review-count listing despite the equal/lower nominal score of others.","desc":"Window installation and glass-replacement business located in Coeur d'Alene, ID.","rank":2,"groupSize":6},{"id":"pf48","category":"Windows & Doors","name":"Modern Glass Company","phone":"(208) 765-1644","website":null,"address":"3727 W. Industrial Loop, Coeur d'Alene, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://business.cdachamber.com/list/member/modern-glass-company-615"},{"type":"listing","url":"https://www.milgard.com/dealer-profile/idaho/coeur-dalene/modern-glass-co"},{"type":"search","url":"https://cdapress.com/news/2013/jun/28/contact-us-5/"}],"note":"This Old House cites 39 customer reviews for this company but no star value was found in search snippets, so rating is left null rather than estimated. Phone number sourced from a 2013 news page and may be outdated.","desc":"Family-owned glass company operating in the Coeur d'Alene area since 1947; a Milgard windows dealer offering energy-efficient window and glass products.","rank":3,"groupSize":6},{"id":"pf49","category":"Windows & Doors","name":"Window World of Spokane & Coeur d'Alene","phone":"(208) 664-2032","website":null,"address":"Showroom near North Government Way, Hayden, ID (exact street address not confirmed)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.houzz.com/professionals/window-sales-and-installation/aandl-homes-window-world-pfvwus-pf~665179840"},{"type":"listing","url":"https://www.ecowatch.com/windows/replacement/id/coeur-dalene"},{"type":"listing","url":"https://www.ecowatch.com/windows/replacement/id/hayden"}],"note":"Houzz profile (franchise-authored) and EcoWatch describe 'hundreds of glowing reviews' but no aggregated star rating/count was available to cite reliably. Phone number found could not be independently cross-verified as the correct local line.","desc":"Owner-operated Window World franchise (A&L Homes), headquartered near Hayden, ID, serving Spokane, WA and Coeur d'Alene/Post Falls/Kootenai County, ID with replacement windows.","rank":4,"groupSize":6},{"id":"pf50","category":"Windows & Doors","name":"Lifetime Roofing & Siding Inc","phone":"(800) 767-1047","website":null,"address":null,"zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.yellowpages.com/post-falls-id/windows"}],"note":"Yellow Pages listing states a BBB membership claim; this is self-reported by the company, not independently verified. No address or review rating found.","desc":"Roofing, siding and window installation company stating it has been in business since 1975; listed under the Post Falls, ID windows category on Yellow Pages.","rank":5,"groupSize":6},{"id":"pf51","category":"Windows & Doors","name":"DaBella (Spokane branch, serving Coeur d'Alene)","phone":null,"website":null,"address":"Spokane, WA office (serves Coeur d'Alene, ID; exact Idaho office address not confirmed)","zip":null,"rating":{"value":3.9,"count":254},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Windows.Coeur_d%20alene.ID.-12080.html"}],"note":"Large regional window-sales company; HomeAdvisor shows a 3.9 rating from 254 reviews with repeated complaints about responsiveness/management contact. Ranked last despite the high review count because the average rating is notably lower than the other listings.","desc":"DaBella's Spokane branch sells and installs replacement windows and is listed on HomeAdvisor as serving the Coeur d'Alene, ID market.","rank":6,"groupSize":6},{"id":"pf52","category":"Painting","name":"Post Falls Painter","phone":null,"website":null,"address":null,"zip":null,"rating":{"value":5,"count":40},"ratingSource":"Lantern","sources":[{"type":"listing","url":"https://lantern.llc/b/post-falls-painter-post-falls"}],"note":"Rating sourced from the Lantern business-listing platform (listing shows a verification date), not confirmed to be from Google. No phone number or street address was available in search results.","desc":"Family-owned residential and commercial painting company serving Post Falls, Coeur d'Alene, and Hayden, ID, using Sherwin-Williams paint products.","rank":1,"groupSize":6},{"id":"pf53","category":"Painting","name":"Best Painting Company","phone":null,"website":null,"address":"1142 N 5th Street (city/zip not confirmed in listing)","zip":null,"rating":{"value":4.95,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Exterior-Home-or-Structure-Paint-or-Stain"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/post-falls-ID/Exterior-Home-or-Structure-Paint-or-Stain"}],"note":"HomeAdvisor Super Service Award winner. A separate listing page showed 4.94/16 reviews; used the more complete 4.95/22 figure. Street address found but city/zip not stated in snippets.","desc":"Painting company stating it has served the Coeur d'Alene, Post Falls, and Spokane area for about 10 years.","rank":2,"groupSize":6},{"id":"pf54","category":"Painting","name":"Sergiys Quality Painting LLC","phone":null,"website":null,"address":null,"zip":null,"rating":{"value":4.92,"count":39},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Exterior-Home-or-Structure-Paint-or-Stain/"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/post-falls-ID/Exterior-Home-or-Structure-Paint-or-Stain"}],"note":"Review count shown as 39 or 40 depending on listing page; used 39 as the more frequently shown figure. No phone/address found; service area listed as 'Idaho and Washington.'","desc":"Family-owned-and-operated residential and commercial painting company with 15 years of experience, serving Idaho and Washington including the Post Falls area.","rank":3,"groupSize":6},{"id":"pf55","category":"Painting","name":"Five Star Painting of Coeur d'Alene","phone":"509-499-3834","website":null,"address":"1424 East Sherman Ave Suite 400, Coeur d'Alene, ID","zip":null,"rating":{"value":4.71,"count":7},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://business.cdachamber.com/member-directory/Details/five-star-painting-of-coeur-d-alene-4501930"},{"type":"listing","url":"https://www.homeadvisor.com/c.Painting.coeur_d%20alene.ID.-12054.html"}],"note":"Locally owned franchise; phone number sourced from HomeAdvisor could not be independently cross-verified against an official company website (none found).","desc":"Locally owned Five Star Painting franchise location offering residential and light commercial painting with free in-person estimates.","rank":4,"groupSize":6},{"id":"pf56","category":"Painting","name":"Precision Trim Works LLC","phone":null,"website":null,"address":null,"zip":null,"rating":{"value":4.75,"count":4},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Painting-or-Staining-Small-Projects"}],"note":"Only 4 reviews; ranked below higher-review-count listings despite a comparable rating.","desc":"Painting contractor listed on HomeAdvisor serving the Post Falls/Coeur d'Alene area.","rank":5,"groupSize":6},{"id":"pf57","category":"Painting","name":"High Performance Painting and Drywall, LLC","phone":null,"website":null,"address":null,"zip":null,"rating":{"value":5,"count":3},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Exterior-Home-or-Structure-Paint-or-Stain"}],"note":"Perfect rating but only 3 reviews — too small a sample to rank highly; placed last for credibility despite the top nominal score.","desc":"Painting and drywall contractor listed on HomeAdvisor serving the Coeur d'Alene area.","rank":6,"groupSize":6},{"id":"pf58","category":"Pressure Washing","name":"Window Genie of Spokane","phone":null,"website":null,"address":null,"zip":null,"rating":{"value":4.86,"count":172},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Exterior-Surfaces-Powerwashing"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Exterior-Surfaces-Powerwashing"}],"note":"By far the largest review sample among pressure-washing listings found (172 reviews). Primarily a window-cleaning company that also offers pressure washing, gutter cleaning and window tinting. Weighted to #1 in this category for statistical reliability despite not having the single highest star value.","desc":"Veteran-owned exterior cleaning company (window cleaning, tinting, pressure washing, gutter cleaning) serving Spokane, WA and Kootenai County, ID including Post Falls/Coeur d'Alene.","rank":1,"groupSize":7},{"id":"pf59","category":"Pressure Washing","name":"The Moss Boss, LLC","phone":null,"website":null,"address":"Based in Newman Lake, WA","zip":null,"rating":{"value":4.85,"count":24},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Exterior-Surfaces-Powerwashing"}],"note":"Based just across the state line in Newman Lake, WA, not Idaho; included because its HomeAdvisor listing serves the North Idaho/Kootenai County area.","desc":"Exterior/roof and moss-cleaning company based in Newman Lake, WA that serves surrounding areas including North Idaho.","rank":2,"groupSize":7},{"id":"pf60","category":"Pressure Washing","name":"Two Dogs Washing","phone":null,"website":null,"address":null,"zip":null,"rating":{"value":4.83,"count":29},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Exterior-Surfaces-Powerwashing"}],"note":null,"desc":"Pressure washing contractor listed on HomeAdvisor serving Kootenai County, ID.","rank":3,"groupSize":7},{"id":"pf61","category":"Pressure Washing","name":"Limitless Enterprise LLC","phone":null,"website":null,"address":"12767 Kenosha Ln, Apt 101 (Post Falls area; residential-style address, not a confirmed storefront)","zip":null,"rating":{"value":4.9,"count":10},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Exterior-Surfaces-Powerwashing"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Wood-Fence-Install"}],"note":"Listed address is an apartment unit, suggesting a home-based operation rather than a commercial office; verify before relying on it.","desc":"Cleaning company offering pressure washing, window cleaning, interior/commercial cleaning, and landscaping/irrigation services in the Post Falls area.","rank":4,"groupSize":7},{"id":"pf62","category":"Pressure Washing","name":"River City Pressure Washing","phone":null,"website":null,"address":"1507 East Lakeside Ave, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":6},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.tidy.com/locations/coeur-dalene-id/pressure-washing"},{"type":"listing","url":"https://www.experience.com/reviews/river-22674263"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Exterior-Surfaces-Powerwashing"}],"note":"Perfect rating but from only 6 reviews.","desc":"Pressure washing company with about 6 years of experience, based on East Lakeside Ave in Coeur d'Alene, ID.","rank":5,"groupSize":7},{"id":"pf63","category":"Pressure Washing","name":"J&J Solutions Inc.","phone":null,"website":null,"address":null,"zip":null,"rating":{"value":5,"count":4},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Exterior-Surfaces-Powerwashing"}],"note":"Only 4 reviews; the quoted reviewer described carpet cleaning and window washing rather than exterior pressure washing specifically, so its core focus may be broader than pressure washing alone.","desc":"Cleaning company serving Post Falls, ID with services spanning carpet cleaning, window washing, and pressure washing per its HomeAdvisor listing.","rank":6,"groupSize":7},{"id":"pf64","category":"Pressure Washing","name":"All Phase Construction & Repair","phone":null,"website":null,"address":null,"zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Kootenai-ID/Exterior-Surfaces-Powerwashing"}],"note":"Listed under HomeAdvisor's exterior power-washing category for the area, but describes itself primarily as a general contractor; no reviews or rating were shown, so ranked last.","desc":"General contracting company with 15 years of experience serving Bonner, Boundary, Kootenai, and Pend Oreille counties, listed under the local pressure-washing category on HomeAdvisor.","rank":7,"groupSize":7},{"id":"pf65","category":"Garage Doors","name":"Precision Garage Door Service of Post Falls","phone":"(208) 204-0129","website":null,"address":"306 N Spokane St, Post Falls, ID","zip":"83854","rating":{"value":4.9,"count":463},"ratingSource":"Google","sources":[{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/precision-garage-door-service-of-post-falls/"},{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/"}],"note":"Rating/review count come from a third-party directory (ServiceAgent.ai) that pulls Google Business Profile data; listing is marked unclaimed by the owner.","desc":"Residential and commercial garage door installation and repair company based in Post Falls.","rank":1,"groupSize":5},{"id":"pf66","category":"Garage Doors","name":"Overhead Door Company of Spokane-Coeur d'Alene","phone":"(208) 773-0502","website":null,"address":"420 E 5th Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.8,"count":333},"ratingSource":"Google","sources":[{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/overhead-door-company-of-spokane-coeur-d-alene/"},{"type":"listing","url":"https://directory.cdachamber.com/list/category/fence-companies-electric-gate-systems-259"}],"note":"A different aggregator snapshot showed 4.89 from 45 reviews for the same listing; used the larger, Google-attributed figure as more current.","desc":"Garage door dealer/installer whose technicians are described as company employees rather than subcontractors, serving the Post Falls/Coeur d'Alene area.","rank":2,"groupSize":5},{"id":"pf67","category":"Garage Doors","name":"All Season Overhead Door","phone":null,"website":null,"address":"409 South Spokane Ave","zip":null,"rating":{"value":4.96,"count":35},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Garage-Door-Opener-Repair-or-Adjust"},{"type":"listing","url":"https://directory.cdachamber.com/list/category/fence-companies-electric-gate-systems-259"}],"note":"Highest raw rating of the garage-door group but on only 35 reviews, far fewer than the top two; ranked below them for credibility despite the higher score. City for the street address could not be confirmed (Post Falls vs. Coeur d'Alene), so zip is left null.","desc":"Garage door installation and repair company listing 29 years of experience on HomeAdvisor.","rank":3,"groupSize":5},{"id":"pf68","category":"Garage Doors","name":"Continental Door Company - Post Falls","phone":null,"website":"https://www.clopaydoor.com/dealers/garage-doors-post-falls-id-continental-door---post-falls","address":"Serving Post Falls, ID and the Inland Northwest","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.clopaydoor.com/dealers/garage-doors-post-falls-id-continental-door---post-falls"},{"type":"listing","url":"https://serviceagent.ai/directory/washington/spokane-valley/99216/"},{"type":"search","url":"https://www.tricitiesbusinessnews.com/articles/continental-door"}],"note":"Clopay Master Authorized Dealer; its Spokane Valley, WA location shows a 5.0 rating from 1,076 Google reviews on an aggregator, but no Post Falls-specific rating or phone number could be found, so those fields are left null rather than borrowing the Spokane Valley figures.","desc":"Garage door dealer with a Post Falls location, operating under a company that has served Northern Idaho and the greater Spokane area since 2000.","rank":4,"groupSize":5},{"id":"pf69","category":"Garage Doors","name":"Garage Door Center (Spilker Pacific LLC)","phone":null,"website":"https://www.clopaydoor.com/dealers/garage-doors-abilene-id-spilker-pacific-llc-dba-garage-door-center---post-falls-id","address":"Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.clopaydoor.com/dealers/garage-doors-abilene-id-spilker-pacific-llc-dba-garage-door-center---post-falls-id"},{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/"}],"note":"No phone number or independent rating could be located; family-owned claim and 1986 founding date are self-reported on the dealer page.","desc":"Clopay garage door dealer describing itself as family-owned and locally operated in Post Falls since 1986, offering residential and commercial install/repair.","rank":5,"groupSize":5},{"id":"pf70","category":"Fencing & Decking","name":"KI Exteriors","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID and surrounding areas","zip":null,"rating":{"value":5,"count":27},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Deck-or-Porch-Build-or-Replace"}],"note":"HomeAdvisor 'Super Service Award' listing; in business since 2021 per the listing.","desc":"Deck-building company serving the Coeur d'Alene area, in business since 2021.","rank":1,"groupSize":8},{"id":"pf71","category":"Fencing & Decking","name":"Bugle Construction","phone":"(208) 457-7150","website":null,"address":"991 N Innovation Way, Post Falls, ID","zip":"83854","rating":{"value":4.75,"count":67},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Deck-or-Porch-Build-or-Replace"},{"type":"search","url":"https://www.yellowpages.com/rathdrum-id/deck-builders"}],"note":"Appears on HomeAdvisor as 'Bugle Construction JMJ, LLC' (4.75/67 reviews, 12 years experience) and in a separate deck-builder listing as 'Bugle Construction USA' at the Post Falls address; treated as the same company. Ranked #2 ahead of several 5.0-rated competitors because its review count is much larger.","desc":"Post Falls-based construction company offering deck building, listed with roughly a dozen years of experience.","rank":2,"groupSize":8},{"id":"pf72","category":"Fencing & Decking","name":"Atlas Fabrication, LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID area","zip":null,"rating":{"value":5,"count":14},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Deck-or-Porch-Build-or-Replace"}],"note":null,"desc":"Fabrication/construction company offering deck repairs and handrails, in business since 2018 per its HomeAdvisor listing.","rank":3,"groupSize":8},{"id":"pf73","category":"Fencing & Decking","name":"Great North Fencing LLC","phone":"(208) 755-8261","website":null,"address":"3770 E 1st Ave, Post Falls, ID","zip":"83854","rating":{"value":5,"count":3},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/great-north-fencing-llc/014611329652495080121/ee4e/_"},{"type":"listing","url":"https://www.buildzoom.com/contractor/great-north-fencing-llc"}],"note":"Perfect 5.0 rating but only 3 Google reviews, so ranked below competitors with larger samples despite the equal/higher score. BuildZoom shows an active Idaho contractor license (score 94, top 24% of state-licensed contractors) as of its last check.","desc":"Post Falls fencing contractor; BuildZoom lists an active Idaho contractor license.","rank":4,"groupSize":8},{"id":"pf74","category":"Fencing & Decking","name":"Oakmont Carpentry","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID area","zip":null,"rating":{"value":5,"count":9},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Deck-or-Porch-Build-or-Replace"}],"note":"Small review sample (9); in business since 2020 per listing.","desc":"Carpentry company offering deck work in the Coeur d'Alene area.","rank":5,"groupSize":8},{"id":"pf75","category":"Fencing & Decking","name":"North Idaho Fencing LLC","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":1},"ratingSource":"BuildZoom","sources":[{"type":"search","url":"https://www.buildzoom.com/contractor/north-idaho-fencing-llc"}],"note":"Only a single review found, so ranked last among rated fence/deck businesses despite the perfect score. Holds a Kootenai County New County Contractor license, verified active as of last check per BuildZoom.","desc":"Coeur d'Alene-based fencing contractor holding a Kootenai County contractor license.","rank":6,"groupSize":8},{"id":"pf76","category":"Fencing & Decking","name":"Idaho Fence","phone":"(208) 687-2196","website":null,"address":"PO Box 275, Post Falls, ID 83854","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://www.buildzoom.com/contractor/idaho-fence-company-post-falls-id"},{"type":"listing","url":"https://www.customerlobby.com/reviews/779/idaho-fence-co/review/753961"},{"type":"listing","url":"https://www.customerlobby.com/reviews/779/idaho-fence-co/review/51304063"}],"note":"No aggregate star rating/review count found; CustomerLobby shows individual positive reviews (e.g., a 2010 cedar fence install still holding up) but these are old and not summarized into a numeric score. BuildZoom's listing shows an electrical license reference that does not match a fencing business, so licensing should be independently verified.","desc":"Fence contractor founded in 1975, described as the first fence company in the Coeur d'Alene-Spokane region, working with vinyl, wood, and steel fencing plus automatic gates.","rank":7,"groupSize":8},{"id":"pf77","category":"Fencing & Decking","name":"Timberline Fence & Deck","phone":"(208) 777-5550","website":null,"address":"Coeur d'Alene, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://homeguide.com/id/coeur-d'alene/fence-installation/idaho-fence-6aOsiySSR"},{"type":"search","url":"https://www.buildzoom.com/post-falls-id/fencing-contractors"}],"note":"No rating or review count found; service area for Post Falls specifically was not confirmed, only a Coeur d'Alene phone/address.","desc":"Coeur d'Alene-based contractor offering combined fence and deck construction.","rank":8,"groupSize":8},{"id":"pf78","category":"Snow Removal","name":"All Terrain Lawncare LLC","phone":null,"website":null,"address":"PO Box 1586, Post Falls, ID","zip":null,"rating":{"value":4.7,"count":75},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Lawn-Care-Fall-Clean-Up"},{"type":"listing","url":"https://www.experience.com/reviews/all-22649903"}],"note":"Review count varies 72-76 depending on the HomeAdvisor page viewed; used the midpoint. A January 2026 review specifically praised snow clearing of both sides of a driveway. Listed as 'Approved Pro' with a Super Service Award. No street address or phone found, only a PO Box.","desc":"Post Falls landscaping company whose service list includes snow removal alongside lawn care, tree service, and leaf removal.","rank":1,"groupSize":4},{"id":"pf79","category":"Snow Removal","name":"Post Falls Sprinklers (Matterhorn Landscaping)","phone":null,"website":null,"address":"1905 E First Ave, Post Falls, ID","zip":"83854","rating":{"value":5,"count":12},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/matterhorn-landscaping/03911521416193894764/c29a/_"},{"type":"listing","url":"https://next-www.thumbtack.com/id/post-falls/landscaping/matterhorn-landscaping/service/557606756998660103"}],"note":"Business operates/advertises under the name Matterhorn Landscaping; also shows a 5.0/11-review 'Exceptional' rating on Thumbtack. States it offers snow plowing and snow removal and describes itself as licensed, insured, and bonded, but the visible reviews found were about sprinkler/irrigation work rather than snow specifically.","desc":"Post Falls landscaping and sprinkler company that also advertises snow plowing and snow removal for the Post Falls area.","rank":2,"groupSize":4},{"id":"pf80","category":"Snow Removal","name":"Senske Services of Coeur d'Alene","phone":"208-772-0922","website":null,"address":"Serving Coeur d'Alene, ID (branch based in Hayden, ID)","zip":null,"rating":{"value":5,"count":8},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.senske.137472575.html"},{"type":"search","url":"https://cdaid.org/files/Parks/Urban%20Forestry/TREE_SERVICE_LIST_PUB_2024.pdf"}],"note":"Angi reviews (5.0/8) are mostly about lawn/pest work rather than snow specifically, though snow and ice removal is listed among Senske's general services. Phone number is sourced from a 2024 Coeur d'Alene tree-service list and may be for a different service line; Trustpilot shows separate, unrelated negative reviews for the broader Senske company that are not specific to this branch or to snow service, so they were not used to set the rating.","desc":"Branch of a regional lawn and tree care company serving Coeur d'Alene, whose service lineup includes snow and ice removal.","rank":3,"groupSize":4},{"id":"pf81","category":"Snow Removal","name":"Expert Exteriors","phone":null,"website":null,"address":"Serving Coeur d'Alene, ID","zip":null,"rating":{"value":4.3,"count":24},"ratingSource":"HomeAdvisor","sources":[{"type":"search","url":"https://www.homeadvisor.com/tloc/Coeur-d-Alene-ID/Snow-Removal/"}],"note":"Lowest rating of the four snow-removal entries found; no street address or phone located.","desc":"Exteriors/snow removal service listed on HomeAdvisor's Coeur d'Alene snow removal page.","rank":4,"groupSize":4},{"id":"pf82","category":"Septic & Well Services","name":"Mr. Rooter Plumbing of Coeur d'Alene","phone":null,"website":"https://www.mrrooter.com/cda/residential-services/septic-pumping","address":"Serving Coeur d'Alene, Post Falls, Hayden, Rathdrum, Athol & surrounding Kootenai County","zip":null,"rating":{"value":4.8,"count":631},"ratingSource":"company website","sources":[{"type":"website","url":"https://www.mrrooter.com/cda/residential-services/septic-pumping"},{"type":"listing","url":"https://www.mrrooter.com/locations/idaho/athol/septic-tank-pumping"},{"type":"listing","url":"https://www.mrrooter.com/locations/idaho/rathdrum/septic-tank-pumping"}],"note":"Rating is self-reported on Mr. Rooter's own location pages (not an independent platform like Google/Yelp); 631-review count is a franchise-area figure spanning several North Idaho town pages, not Coeur d'Alene exclusively.","desc":"National plumbing franchise with a Coeur d'Alene location offering septic tank pumping, septic system repair and 24/7 emergency scheduling across North Idaho.","rank":1,"groupSize":7},{"id":"pf83","category":"Septic & Well Services","name":"CDA Septic Pumping","phone":null,"website":null,"address":"Serving Coeur d'Alene & surrounding North Idaho communities","zip":null,"rating":{"value":5,"count":13},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/cda-septic-pumping/05713163991983065060/7ce2/_"}],"note":"5.0 rating explicitly attributed to its Google Business Profile, but only 13 reviews, so ranked below the higher-volume Mr. Rooter listing despite the higher star value. No phone/street address surfaced in search results.","desc":"Locally owned septic tank pump-out company serving Coeur d'Alene and nearby North Idaho towns, with reviewers citing professionalism, punctuality and clean trucks; lists a starting price of $600 for a pump-out.","rank":2,"groupSize":7},{"id":"pf84","category":"Septic & Well Services","name":"R.C. Worst & Co., Inc.","phone":"(208) 664-2133","website":"https://rcworst.com/","address":"625 E. Best Ave., Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://rcworst.com/pages/about-us"},{"type":"listing","url":"https://business.cdachamber.com/list/category/water-septic-pumping-428"},{"type":"website","url":"https://rcworst.com/pages/inland-northwestern-us-service-contracting-r-c-worst-co"}],"note":"Primarily a pump/water/wastewater equipment distributor and service contractor (not a dedicated septic pumper); no independent customer rating found. Older DEQ listing shows a different phone (208-770-2535) for the same address, so the 208.664.2133 24/7 emergency line from the company's own site was used.","desc":"Idaho corporation founded in 1953, based in Coeur d'Alene, distributing and servicing pumps, well equipment and wastewater treatment systems across the Inland Northwest, with a 24/7 emergency pump line.","rank":3,"groupSize":7},{"id":"pf85","category":"Septic & Well Services","name":"Little Stinker Septic Service","phone":"(208) 772-7562","website":null,"address":"49866 N Old Highway 95, Coeur d'Alene, ID 83815","zip":"83815","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.septic.com/septic-services/idaho/coeur-d-alene/little-stinker-septic-service/"}],"note":"No written customer reviews located for this specific Idaho business (a similarly named 'Little Stinkers' in Montana is a different company and was excluded). A Yellow Pages listing gave a conflicting phone/city, so the Septic.com number/address was used as primary.","desc":"Septic pumping and related septic services provider in Coeur d'Alene, Idaho, stating it has served the area since 1998.","rank":4,"groupSize":7},{"id":"pf86","category":"Septic & Well Services","name":"B&B Sanitation Services","phone":"(208) 772-3566","website":null,"address":"1986 W Hayden Avenue, Hayden, ID 83835","zip":"83835","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://spokaneriver.net/wastedirectory/vendor/b-and-b-sani-services"}],"note":"Found only in a regional wastewater-vendor directory; no review platform data located.","desc":"Full-service sanitation company stating it has served Coeur d'Alene and surrounding North Idaho homeowners since 1982, including septic tank pumping and real estate septic inspections.","rank":5,"groupSize":7},{"id":"pf87","category":"Septic & Well Services","name":"Straight Shooter Plumbing & Rooter","phone":null,"website":"https://www.straightshooterplumbing.com/post-falls-id/","address":"Serving Post Falls, Idaho","zip":"83854","rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://www.straightshooterplumbing.com/post-falls-id/"},{"type":"website","url":"https://www.straightshooterplumbing.com/?p=2645"}],"note":"No phone number, street address, or third-party rating surfaced in search results; included because it has a dedicated Post Falls septic service page describing repairs and installations.","desc":"Family-run plumbing company with a dedicated Post Falls, ID page advertising septic repairs and installations alongside general plumbing and drain services.","rank":6,"groupSize":7},{"id":"pf88","category":"Septic & Well Services","name":"United Pump Company","phone":null,"website":null,"address":"Serving Hayden, ID & the greater North Idaho region","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/united-pump-company"}],"note":"Weakest data in this category: no phone number or review content could be retrieved (BuildZoom gates them behind sign-in), and its license record shown was a Washington plumbing license, so confirm it actually services Kootenai County before listing prominently.","desc":"Well-pump contractor serving Hayden and the greater North Idaho region, per BuildZoom, offering installation, maintenance and repair of water well pumps and pressure tanks.","rank":7,"groupSize":7},{"id":"pf89","category":"Pest Control","name":"Organix Pest Control","phone":null,"website":null,"address":"1709 East 1st Avenue, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":428},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/organix-pest-control/017732031899746889261/d2b5/_"},{"type":"listing","url":"https://next-www.thumbtack.com/id/post-falls/exterminators/organix-pest-control/service/526932769212137477"}],"note":"No phone number located in search results for the Post Falls office; its Google Business listing is the source for the 5.0/428-review rating. Ranked #1 for having the highest review count at a perfect rating.","desc":"Local, family-owned pest control company based in Post Falls offering a pest-free guarantee (free return visits if pests reappear).","rank":1,"groupSize":5},{"id":"pf90","category":"Pest Control","name":"Crosstown Pest Control","phone":null,"website":"https://www.crosstownpest.com/","address":"Serving Coeur d'Alene, Post Falls & Spokane area (listed Coeur d'Alene, ID 83815)","zip":"83815","rating":{"value":5,"count":276},"ratingSource":"Google","sources":[{"type":"listing","url":"https://reviews.birdeye.com/crosstown-pest-control-164325539873232"},{"type":"website","url":"https://www.crosstownpest.com/coeurdalene-pest-control"},{"type":"listing","url":"https://www.yellowpages.com/coeur-dalene-id/mip/crosstown-pest-control-544465244"}],"note":"No specific street address or phone number surfaced in search results. Birdeye explicitly attributes the 5.0/276 figure to Google reviews; the company's own site separately claims a blended 4.9/1336 across all platforms, which was not used here to avoid overstating a single-platform rating.","desc":"Homegrown pest control company founded in 2016, serving Coeur d'Alene, Post Falls and the Spokane area, advertising free estimates, warranties and a senior discount.","rank":2,"groupSize":5},{"id":"pf91","category":"Pest Control","name":"Oasis Lawn and Pest","phone":"(208) 921-3686","website":"https://oasislawnandpest.com","address":"4838 W Palmwood Ln, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":84},"ratingSource":"Yext","sources":[{"type":"listing","url":"https://directory.yext.com/en/oasis-lawn-and-pest-2095863003"},{"type":"listing","url":"https://www.ibegin.com/directory/visit/15976257"}],"note":"Rating/review count comes from a Yext directory snapshot (not directly confirmed as Google) and may be out of date; phone/address corroborated across two directory listings.","desc":"Family owned and operated company (8+ years, per its listing) in Post Falls offering lawn fertilization/weed control alongside pest and rodent control for Post Falls, Coeur d'Alene, Hayden, Hauser, Rathdrum and Athol.","rank":3,"groupSize":5},{"id":"pf92","category":"Pest Control","name":"Inland Pest Control LLC","phone":null,"website":null,"address":"955 N Innovation Way, Suite B, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":26},"ratingSource":"BestProsInTown","sources":[{"type":"listing","url":"https://www.bestprosintown.com/id/post-falls/pest-control/"}],"note":"BBB lists the address with service area covering Coeur d'Alene, Hayden, Post Falls, Sandpoint, Spokane & Deer Park; no phone number located. Rating platform describes it as '5 Superb' across 26 reviews, a smaller sample than the top-ranked competitors.","desc":"Pest control company based in Post Falls, ID with a listed service area spanning Kootenai County and parts of eastern Washington.","rank":4,"groupSize":5},{"id":"pf93","category":"Pest Control","name":"Pointe Pest Control","phone":null,"website":null,"address":"6020 W Seltice Way, Suite A, Post Falls, ID 83854-4602","zip":"83854","rating":{"value":4.61,"count":168},"ratingSource":"HomeAdvisor/Angi","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Pest-Control-Bugs-and-Insects"},{"type":"listing","url":"https://bestcompany.com/pest-control/pointe-pest-control"}],"note":"Ranked last of 5: lowest rating value despite a solid review count. BBB reportedly shows an A+ rating for Pointe locations generally, but the Post Falls-specific BBB snippet didn't show a grade, so that wasn't used as the primary rating. No confirmed phone number for the Post Falls office specifically (a Liberty Lake, WA number appeared but wasn't used as it's a different office).","desc":"Regional pest control company (founded 2006) with a Post Falls regional contact center location, offering residential pest, rodent and termite control across Idaho, Washington and Oregon.","rank":5,"groupSize":5}];

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
