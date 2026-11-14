/* Post Falls Contractor Network — app logic */
(function () {
  'use strict';

  var SEED_CONTRACTORS = [{"id":"pf1","category":"Landscaping & Lawn Care","name":"All Terrain Lawncare","phone":null,"website":null,"address":"PO Box 1586, Post Falls, ID (mailing address only; no street address found)","zip":null,"rating":{"value":4.6,"count":85},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.AllTerrainLawncare.34293326.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/all-terrain-lawncare-reviews-1.htm"}],"note":"HomeAdvisor rating varies by page (4.6/85 on a Coeur d'Alene-area category page vs. ~4.7-4.8 cited elsewhere for the Post Falls listing). Only a PO Box was found, no street address or phone number, so confirm service area directly with the company.","desc":"Lawn care and landscaping company serving Post Falls and the Coeur d'Alene area, offering mowing, lawn maintenance, tree work and free estimates; lists itself as in business since 2012.","rank":1,"groupSize":8},{"id":"pf2","category":"Landscaping & Lawn Care","name":"Big Red's Landscaping/Yard Care","phone":null,"website":null,"address":"Serves Kootenai, ID (Kootenai County service area)","zip":null,"rating":{"value":4.7,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Landscaping.Kootenai.ID.-12046.html"}],"note":"Rating/review-count figures came from a HomeAdvisor category listing snippet; no dedicated business page, address, or phone number was found in search results.","desc":"Landscaping and yard care company serving the Kootenai County, Idaho area, offering lawn care and related yard maintenance.","rank":2,"groupSize":8},{"id":"pf3","category":"Landscaping & Lawn Care","name":"Nova Landworks LLC","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID area","zip":null,"rating":{"value":5,"count":17},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.NovaLandworksLLC.126927502.html"}],"note":"Listed as in business since 2016. No confirmed street address or phone number found in search results; a 5.0/17 review count is a thin sample despite the perfect score.","desc":"Landscaping company serving the Coeur d'Alene, Idaho area, providing landscape installation and related services.","rank":3,"groupSize":8},{"id":"pf4","category":"Landscaping & Lawn Care","name":"Senske Services of Coeur d'Alene (Senske Lawn & Tree Care)","phone":"(877) 944-4007","website":"senske.com","address":"Serves Coeur d'Alene, ID (local branch of a regional company headquartered in Kennewick, WA)","zip":null,"rating":{"value":5,"count":8},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.senske.137472575.html"},{"type":"listing","url":"https://trustburn.com/reviews/senske-services"}],"note":"Senske is a large regional lawn/tree/pest-control company operating since 1947; the 5.0/8 figure is for the Coeur d'Alene branch listing specifically, so the small review count should weigh against the perfect score. Phone number came from a third-party data aggregator (Prospeo), not confirmed on the company's own site.","desc":"Regional lawn care, tree care, and pest control company with a Coeur d'Alene, Idaho branch, offering mowing, fertilization, and related lawn services.","rank":4,"groupSize":8},{"id":"pf5","category":"Landscaping & Lawn Care","name":"CDF Landscape Professionals Inc","phone":"(208) 765-0796","website":null,"address":"4697 W Seltice Way, Coeur d'Alene, ID (also appears in Post Falls/Rathdrum-area BBB directory categories)","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://governmentbidders.com/government-bidders/contractor-5343413-CDF-LANDSCAPE-PROFESSIONAL.htm"},{"type":"listing","url":"https://www.buildzoom.com/contractor/cdf-landscape-professionals-inc"}],"note":"Phone number conflicts across directories: one source lists (208) 765-0796 as the phone and 208-765-6796 as the fax, while another lists (208) 765-6796 as the phone -- likely one is a typo for the other, so confirm before calling. A BBB category snippet referenced an A+ rating for a landscape contractor in this area but this could not be confirmed as CDF's specific current BBB profile. No numeric customer review rating was found.","desc":"Landscape contracting company serving Kootenai County, Idaho, including landscape design, installation, and maintenance for residential and commercial properties.","rank":5,"groupSize":8},{"id":"pf6","category":"Landscaping & Lawn Care","name":"K2 Landscaping","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID area","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://match.angi.com/rated.K2Landscaping.119309345.html"}],"note":"Listed on Angi/HomeAdvisor as in business since 1993; no numeric rating, address, or phone number was available in search results.","desc":"Landscaping company serving the Coeur d'Alene, Idaho area; listed as operating since 1993.","rank":6,"groupSize":8},{"id":"pf7","category":"Landscaping & Lawn Care","name":"Taylor Made Lawn Care","phone":null,"website":null,"address":"Serves Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/taylor-made-lawn-care-reviews-9202718.htm"},{"type":"listing","url":"https://www.experience.com/reviews/taylor-22659797"}],"note":"Angi reviewers describe the company as dependable and professional, but no numeric rating appeared in search results, and its Experience.com profile showed no reviews yet.","desc":"Lawn care company serving Post Falls, Idaho, offering mowing and lawn maintenance services.","rank":7,"groupSize":8},{"id":"pf8","category":"Landscaping & Lawn Care","name":"Augusta Lawn Care Services of Post Falls","phone":null,"website":"augustalawncareservices.com/postfalls","address":"Serves Post Falls, ID (local franchise location)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://augustalawncareservices.com/postfalls"}],"note":"Locally operated franchise of the Augusta Lawn Care Services brand; no independent numeric rating was found, only the company's own marketing site.","desc":"Franchise lawn care business offering recurring mowing, maintenance plans, and seasonal cleanup for the Post Falls, Idaho area.","rank":8,"groupSize":8},{"id":"pf9","category":"Roofing","name":"Western Construction & Roofing LLC","phone":null,"website":null,"address":"Serves Post Falls, ID and North Idaho","zip":null,"rating":{"value":5,"count":53},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/western-construction-roofing-llc-reviews-1.htm"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/roofing/western-construction-roofing-llc/service/445899136014671885"}],"note":"Rated 5.0 across multiple platforms (HomeAdvisor 53 reviews, Thumbtack 8 reviews) and appears in BBB roofing-contractor category results as an Accredited Business with an A+ rating. No street address or phone number was found in search results.","desc":"Roofing and construction contractor based in Post Falls, Idaho, performing residential roof repair and replacement; describes itself as one of North Idaho's roofing contractors.","rank":1,"groupSize":7},{"id":"pf10","category":"Roofing","name":"Apex Roofing, LLC","phone":null,"website":null,"address":"Serves Post Falls and Coeur d'Alene, ID (one listing shows a Moscow, ID address, possibly a distinct entity)","zip":null,"rating":{"value":4.73,"count":42},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.ApexRoofingLLC.151414482.html"}],"note":"HomeAdvisor review figures for 'Apex Roofing' conflict across pages (42 vs. 53 reviews, 4.7-4.73 rating), and one HomeAdvisor listing ties the name to a Moscow, ID address, which may be a different company -- confirm which Apex Roofing you're contacting.","desc":"Roofing contractor serving the Post Falls and Coeur d'Alene, Idaho area, offering roof installation and repair.","rank":2,"groupSize":7},{"id":"pf11","category":"Roofing","name":"Keep It Simple Roofing & Construction","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID","zip":null,"rating":{"value":4.8,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/keep-it-simple-roofing-construction-reviews-1.htm"}],"note":"Listed as an 'approved pro' on HomeAdvisor -- a self-reported platform badge, not an independent verification of license or insurance.","desc":"Roofing and construction contractor serving Coeur d'Alene, Idaho, offering roof repair and installation services.","rank":3,"groupSize":7},{"id":"pf12","category":"Roofing","name":"New Heights Roofing, LLC","phone":null,"website":null,"address":"2785 W Seltice Way, Suite A, Post Falls, ID 83854","zip":"83854","rating":{"value":4.68,"count":19},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/new-heights-roofing-reviews-6342699.htm"},{"type":"listing","url":"https://www.levelset.com/subcontractors/idaho/post-falls/roofers/new-heights-roofing-id/"}],"note":"Angi shows a matching 4.6/19 for this company. Phone number conflicts across at least three directories ((208) 758-3161, 208-415-1846, and (208) 559-6442 all appear), so confirm directly with the company before calling. Lists 20 years of experience per its Angi profile.","desc":"Roofing company based in Post Falls, Idaho, performing residential roofing installation and repair.","rank":4,"groupSize":7},{"id":"pf13","category":"Roofing","name":"Integrity Roofing and Repair LLC","phone":"(509) 655-0090","website":null,"address":"2120 N Country Vista Blvd, Liberty Lake, WA 99019 (advertises service to Coeur d'Alene, Post Falls, and Hayden, ID)","zip":"99019","rating":{"value":5,"count":9},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/integrity-roofing-and-repair-llc"}],"note":"Based in Liberty Lake, Washington rather than Idaho, though it advertises serving Coeur d'Alene, Post Falls, and Hayden. Review count conflicts between sources (9 vs. 7 reviews cited in different listings). Distinct from a similarly named 'Integrity Roofing & Construction' found at 296 W Sunset Ave, Coeur d'Alene, ID -- confirm which company you're contacting.","desc":"Roofing repair and installation company based in Liberty Lake, Washington that advertises service to North Idaho, including Coeur d'Alene and Post Falls.","rank":5,"groupSize":7},{"id":"pf14","category":"Roofing","name":"Cataldo Construction Company LLC","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID and surrounding areas","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/roofing-contractors"}],"note":"Appears in BBB roofing-contractor category results with a BBB Rating of A+; no numeric customer review count, street address, or phone number was found in search results.","desc":"Roofing and construction contractor serving Coeur d'Alene, Idaho and the surrounding area.","rank":6,"groupSize":7},{"id":"pf15","category":"Roofing","name":"Glacier Roofing and Exteriors (Glacier Property Solutions)","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID and North Idaho (also operates in WA and MT)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://wmfha.org/statewide-supplier-directory/glacier-property-solutions"}],"note":"BBB Accredited Business with an A+ rating per BBB category results. The company's self-reported claim of being 'fully licensed, bonded, and insured' in Idaho, Washington, and Montana is an unverified claim, not a confirmed credential. No numeric customer review rating was found.","desc":"Roofing and exteriors contractor serving Coeur d'Alene, Idaho and the broader Inland Northwest region.","rank":7,"groupSize":7},{"id":"pf16","category":"HVAC & Furnace","name":"Andy's Heating and Cooling and Stove Shoppe","phone":null,"website":null,"address":"7800 N Government Way, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.92,"count":861},"ratingSource":"Experience.com","sources":[{"type":"listing","url":"https://www.experience.com/reviews/andys-22662642"},{"type":"listing","url":"https://www.carrier.com/residential/en/us/dealers/id/coeur-d-alene/7800-n-government-way-3226-loc"}],"note":"Carrier's dealer page separately cites 1,363 Google reviews for this business, but since that figure wasn't directly viewed on a Google listing, the Experience.com figure (4.92/861) is used as the primary sourced rating. Phone number conflicts between Carrier's directory ((208) 209-5529) and a Yellow Pages listing ((208) 772-6464).","desc":"Carrier Factory Authorized HVAC dealer in Coeur d'Alene, Idaho (Dalton Gardens area), offering furnace and air conditioner installation, repair, and maintenance.","rank":1,"groupSize":7},{"id":"pf17","category":"HVAC & Furnace","name":"TemperaturePro Inland Northwest","phone":null,"website":"temperaturepro.com/hayden-id","address":"655 W Capstone Ct Unit A, Hayden, ID 83835","zip":"83835","rating":{"value":5,"count":115},"ratingSource":"Yext","sources":[{"type":"listing","url":"https://directory.yext.com/en/temperaturepro-inland-northwest-2032941031"},{"type":"website","url":"https://temperaturepro.com/hayden-id"}],"note":"Phone number ((208) 738-9572) came from a third-party directory (Promptloop) and was not confirmed directly on the company's own site. A HomeAdvisor listing for this company states it does not offer emergency service.","desc":"HVAC company based in Hayden, Idaho, offering heating and air conditioning installation, repair, and maintenance for the Coeur d'Alene / Inland Northwest area.","rank":2,"groupSize":7},{"id":"pf18","category":"HVAC & Furnace","name":"Mainstream Electric, Heating, Cooling & Plumbing","phone":"(208) 777-7766","website":null,"address":"Serves Coeur d'Alene / North Idaho; headquartered at 12822 E Indiana Ave, Spokane Valley, WA 99216 (a possible local address at 11904 N Emerald Dr, Hayden, ID appeared in a BBB listing but attribution was unclear)","zip":null,"rating":{"value":4.4,"count":44},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://business.cdachamber.com/list/member/mainstream-electric-heating-cooling-plumbing-2801"}],"note":"Headquartered in Spokane Valley, Washington, serving Coeur d'Alene and North Idaho; a possible local Hayden, ID address appears in a BBB listing but the page layout made the attribution unclear, so treat it as unconfirmed. Its Angi profile states the company does not offer emergency service or free estimates.","desc":"Multi-service electric, heating, cooling, and plumbing company serving Coeur d'Alene and North Idaho from its Spokane Valley, Washington base, offering furnace repair and installation among its services.","rank":3,"groupSize":7},{"id":"pf19","category":"HVAC & Furnace","name":"Cline's Heating and Air Conditioning","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":13},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Heating-Furnace-Systems.coeur_d alene.ID.-12040.html"}],"note":"Rating and review count came from a HomeAdvisor category listing snippet; no dedicated business page, address, or phone number was available in search results.","desc":"HVAC contractor serving Coeur d'Alene, Idaho, offering heating and air conditioning installation and repair, with free estimates and emergency service listed.","rank":4,"groupSize":7},{"id":"pf20","category":"HVAC & Furnace","name":"Comfort Heating, Cooling, Electrical & Plumbing","phone":null,"website":null,"address":"3620 E Covington Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":6},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.JTWEnterprisesLLC.135037641.html"},{"type":"listing","url":"https://directory.yext.com/en/comfort-heating-cooling-electrical-plumbing-369387407"}],"note":"In business since 1993 per its own marketing. A separate directory aggregator claimed a much larger figure (around 4.9 from roughly 1,409 reviews) but did not clearly attribute that number to a named platform, so it is not used here; the smaller, platform-attributed HomeAdvisor figure (5.0/6) is used instead. Phone number also conflicts across at least four different directory listings.","desc":"Home services company based in Post Falls, Idaho, offering heating, cooling, electrical, and plumbing services including furnace repair and installation.","rank":5,"groupSize":7},{"id":"pf21","category":"HVAC & Furnace","name":"J.A. Bertsch Heating & Cooling","phone":"(208) 635-5480","website":"jabertsch.com","address":"3645 N Government Way, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":5},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://business.cdachamber.com/member-directory/Details/j-a-bertsch-heating-cooling-4502367"},{"type":"listing","url":"https://www.homeadvisor.com/rated.JABerschHeatingand.163145543.html"}],"note":"Phone number conflicts across sources: Chamber/ZoomInfo list (208) 635-5480 and (208) 635-5481, a separate directory lists (208) 214-6026, and Carrier's dealer page lists (208) 635-0414. The Chamber listing claims 24/7 emergency service, which conflicts with a HomeAdvisor listing saying it offers no emergency service -- the HomeAdvisor entry may be outdated. The company's chamber profile calling itself 'voted #1 most trusted' is a self-reported claim, not an independent award.","desc":"Family-owned heating, cooling, and electrical company based in Coeur d'Alene, Idaho, offering furnace installation, repair, and related HVAC services.","rank":6,"groupSize":7},{"id":"pf22","category":"HVAC & Furnace","name":"R&R Heating & Air Conditioning","phone":null,"website":"randrheating.com","address":"5202 N Florida St -- listed under both Post Falls, ID and Spokane, WA by different directories; the company describes itself as serving Spokane, WA and Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.zoominfo.com/c/rr-heating--air-conditioning/353886910"}],"note":"Significant address ambiguity: directories disagree on whether the physical address is in Post Falls, Idaho or Spokane, Washington, though the business apparently serves both areas. A separate directory aggregator claimed a 4.9 rating from about 1,485 reviews, but did not clearly attribute that figure to a named review platform, so it is not used here and the rating is left unset.","desc":"Heating and air conditioning company serving the Spokane, Washington and Post Falls, Idaho area, including furnace servicing and installation.","rank":7,"groupSize":7},{"id":"pf23","category":"Electrical","name":"Scotty's Electric Company","phone":"(208) 659-0391","website":null,"address":"Service area: Hayden, Hauser, Huetter, Rathdrum, Post Falls, Coeur d'Alene, ID (Google Business listing; a third-party directory lists 11082 Cutless St, Hayden, ID 83835, unverified)","zip":"83835","rating":{"value":4.5,"count":117},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/post-falls/electrical.htm"},{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/scottys-electric-company-reviews-1.htm"},{"type":"listing","url":"https://business.google.com/v/scottys-electric-co/016425345089985470876/54d7/_"}],"note":"Highest review count of any electrician found in the area, which outweighs several competitors' smaller-sample perfect scores. Address not fully confirmed - Google listing gives only a service area, a third-party directory gives a Hayden street address that could not be cross-verified. No official company website found.","desc":"Established electrical contractor (in business since 1998) serving Post Falls, Hayden, Rathdrum, Coeur d'Alene and surrounding North Idaho towns, offering free estimates and emergency service.","rank":1,"groupSize":7},{"id":"pf24","category":"Electrical","name":"Media Controlled, LLC","phone":null,"website":null,"address":"Coeur d'Alene, ID area (service area; exact address not found)","zip":null,"rating":{"value":4.7,"count":21},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_D_Alene.ID.-12026.html"}],"note":"Found only on a HomeAdvisor category roundup page; no dedicated profile, address, or phone number was located, so details are thinner than for other entries.","desc":"Electrical contractor serving the Coeur d'Alene area, listed among HomeAdvisor's higher-rated local electrical pros.","rank":2,"groupSize":7},{"id":"pf25","category":"Electrical","name":"CC Electric, LLC","phone":null,"website":null,"address":"1311 E Fernwood Ct, Coeur d'Alene, ID 83815 (BBB also lists a second address, 301 W Emma)","zip":"83815","rating":{"value":4.9,"count":12},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_D_Alene.ID.-12026.html"},{"type":"listing","url":"https://www.mapquest.com/us/idaho/cc-electric-507161318"},{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/electrician"}],"note":"BBB lists two different addresses for this business; MapQuest shows it as 'closed,' which likely reflects posted hours rather than closure, but could not be confirmed. Serves Athol, Bayview, Coeur d'Alene, Hayden, Post Falls, and Spirit Lake per BBB.","desc":"Owner-operated (Chad) residential and commercial electrical contractor in Coeur d'Alene offering installations, repairs, panel upgrades, and standby systems.","rank":3,"groupSize":7},{"id":"pf26","category":"Electrical","name":"Glacier Bay Electric, LLC","phone":null,"website":null,"address":"Listings disagree: one Angi profile lists Sagle, ID (4549 E Wildlife Trail); another files it under Hayden, ID","zip":null,"rating":{"value":4.68,"count":19},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/glacier-bay-electric-llc-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.GlacierBayElectricLLC.63582916.html"}],"note":"Address is inconsistent across listings (Sagle vs. Hayden) - treat with caution. Reviews are mixed: some praise owner Roy Woodrum's communication, but at least one review complains about a multi-week wiring job; the company's own profile text acknowledges scheduling can run long.","desc":"Small North Idaho electrical contractor run by owner Roy Woodrum, who the listing says has about 34 years of experience; offers free estimates but no emergency service per HomeAdvisor.","rank":4,"groupSize":7},{"id":"pf27","category":"Electrical","name":"Resurrection Electric","phone":null,"website":"resurrection-electric.com","address":"4451 W Seltice Way #2, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":10},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/resurrection-electric-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.ResurrectionElectric.143030779.html"}],"note":"Consistent 5.0 rating across Angi and HomeAdvisor, but the review sample (10) is small, so it ranks below higher-volume competitors despite the perfect score. HomeAdvisor profile states it does not offer emergency service.","desc":"Electrical contractor based in Coeur d'Alene offering residential electrical services; weekday hours roughly 7am-5pm per its Angi listing.","rank":5,"groupSize":7},{"id":"pf28","category":"Electrical","name":"Connection Electric LLC","phone":null,"website":null,"address":"5763 N Harcourt Dr, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":7},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/connection-electric-llc-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/c.Electrical.Coeur_D_Alene.ID.-12026.html"}],"note":"Very small review sample (7), so the perfect rating carries less weight than larger-sample competitors. No emergency service per Angi. Address from a third-party directory listing, not independently cross-verified.","desc":"Coeur d'Alene electrical contractor in business since 2020, offering free estimates for residential electrical work.","rank":6,"groupSize":7},{"id":"pf29","category":"Electrical","name":"Parker Electric Inc","phone":"(208) 661-8310","website":null,"address":"Post Falls, ID 83854-5296 (BBB gives only the ZIP; a separate, unverified directory listing gives 2424 Pearson Way, Post Falls, ID 83854)","zip":"83854","rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/electrician"},{"type":"listing","url":"https://voolt.pro/idaho/post-falls/electrical-hvac/parker-electric"}],"note":"BBB shows this business as accredited with an A+ letter grade (not a 1-5 star rating, so numeric rating/ratingSource for a star score is left null). A separate aggregator (Voolt) claims a 5.0/21-review score and a specific street address, but that site is marked unverified and could not be corroborated, so it was not used for the rating or address fields.","desc":"Electrical contracting company serving Post Falls, Idaho and surrounding areas.","rank":7,"groupSize":7},{"id":"pf30","category":"Plumbing","name":"West Side Drain","phone":null,"website":null,"address":"Coeur d'Alene, ID area (service area; exact address not found)","zip":null,"rating":{"value":4.8,"count":67},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Sewer-Main-Clear/"}],"note":"Highest review count among Coeur d'Alene-area plumbers found, combined with a strong rating, so it ranks first despite several competitors showing nominally higher (but much smaller-sample) scores.","desc":"Plumbing/drain company in business since 2008, serving the Coeur d'Alene area, with sewer main clearing and related drain work among its listed services.","rank":1,"groupSize":7},{"id":"pf31","category":"Plumbing","name":"My Guy Plumbing & Service, Inc.","phone":null,"website":null,"address":"Post Falls, ID (service area; one low-quality aggregator lists 307 W Mullan Ave, Post Falls, ID 83877, unverified)","zip":null,"rating":{"value":4.9,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.MyGuyPlumbing.53534756.html"},{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/plumber"}],"note":"BBB lists it as A+ accredited, serving Kootenai, Pend Oreille, and Spokane counties. Street address could not be confirmed from a reliable source - only a low-quality directory gave one, and it was not corroborated elsewhere.","desc":"Plumbing service company based in Post Falls, in business since 2015, offering free estimates and covering Post Falls, Coeur d'Alene, and parts of Spokane County.","rank":2,"groupSize":7},{"id":"pf32","category":"Plumbing","name":"First Choice Plumbing","phone":null,"website":null,"address":"Post Falls, ID 83854 (exact street address not confirmed)","zip":"83854","rating":{"value":4.9,"count":36},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/first-choice-plumbing-reviews-6391492.htm"}],"note":"A separate directory lists a similarly-named 'Rays First Choice Plumbing' in Post Falls 83854; it's unclear whether this is the same business or a different one, so treat the exact identity/address with caution.","desc":"Plumbing contractor serving Post Falls, Idaho, with Angi reviews reporting 94% five-star ratings.","rank":3,"groupSize":7},{"id":"pf33","category":"Plumbing","name":"Mainstream Electric, Heating, Cooling & Plumbing","phone":null,"website":null,"address":"Coeur d'Alene, ID (Coeur d'Alene Chamber of Commerce member; exact street address not found in these searches)","zip":null,"rating":{"value":4.6,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Plumbing.Coeur_d alene.ID.-12058.html"},{"type":"listing","url":"https://directory.cdachamber.com/list/member/mainstream-electric-heating-cooling-plumbing-2801.htm"}],"note":"Multi-trade company (electrical, HVAC, and plumbing) rather than plumbing-only, which may explain the slightly lower comparative rating; included here for its plumbing line of business, in business since 2000, HomeAdvisor Super Service Award noted (self-reported platform badge, not independently verified).","desc":"Established North Idaho home-services company offering electrical, heating/cooling, and plumbing services, headquartered in the Coeur d'Alene area.","rank":4,"groupSize":7},{"id":"pf34","category":"Plumbing","name":"Method Plumbing","phone":null,"website":null,"address":"Serving Post Falls, ID and the greater Coeur d'Alene area (no specific street address found)","zip":null,"rating":{"value":5,"count":11},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Plumbing.Post_Falls.ID.-12058.html"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/water-heater-installation/method-plumbing/service/496283146135617542"}],"note":"Small review sample (11), so ranks below higher-volume competitors despite the perfect score. A separately named BBB entity, 'Method Plumbing & Drains LLC,' may or may not be the same business - could not confirm the relationship, so no BBB rating was attributed here.","desc":"Full-service residential and commercial plumbing company serving the Post Falls/Coeur d'Alene area, in business since 2021, offering free estimates and emergency service.","rank":5,"groupSize":7},{"id":"pf35","category":"Plumbing","name":"Scott's Plumbing LLC","phone":"(208) 999-7788","website":null,"address":"Post Falls, ID (service area: Kootenai County and surrounding areas, incl. Spokane County; exact street address not found)","zip":null,"rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/plumber"},{"type":"listing","url":"https://www.homeadvisor.com/rated.ScottsPlumbingLLC.156481655.html"}],"note":"BBB shows an A+ letter-grade accreditation rather than a 1-5 star score, so numeric rating is left null; a HomeAdvisor profile exists but no clear star rating/count could be confirmed for it in these searches.","desc":"Plumbing company based in Post Falls with a reported 26 years of experience, serving Kootenai County and nearby Spokane-area communities.","rank":6,"groupSize":7},{"id":"pf36","category":"Plumbing","name":"A River City Plumbing Service LLC","phone":"(208) 659-6565","website":null,"address":"Post Falls, ID - sources disagree: one lists 729 N Dundee Dr, Post Falls, ID 83854; another (and BBB) lists 5425 E Poleline Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":2},"ratingSource":"listing (BuildZoom)","sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/a-river-city-plumbing-service"},{"type":"listing","url":"https://www.homeadvisor.com/rated.ARiverCityPlumbing.111187769.html"}],"note":"Address is inconsistent across sources (two different Post Falls streets) - caution advised. A third-party directory separately claims a 4.9 rating from 458 reviews, but that site's reliability is unclear and could not be corroborated, so it was not used for the rating field. Individual Angi reviews are mixed: one calls the company a reliable go-to, another reports being highly disappointed. HomeAdvisor says no emergency service, while a different listing claims emergency service is offered - conflicting.","desc":"Plumbing service company in Post Falls, Idaho; review and service-detail data is inconsistent across sources, so verify directly before hiring.","rank":7,"groupSize":7},{"id":"pf37","category":"Handyman","name":"Equity Builders of Columbia Basin","phone":null,"website":null,"address":"Serving the Coeur d'Alene / Post Falls area (exact address not found)","zip":null,"rating":{"value":4.9,"count":45},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://thebuildermarket.com/us/id/post-falls/handyman-services"},{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Faucets-Fixtures-and-Pipes-Repair-or-Replace"}],"note":"This business also appeared in plumbing-related searches (it is a multi-trade/general contracting operation, not handyman-only), and its Angi rating (4.67 from 18 reviews) is noticeably lower than its HomeAdvisor rating (4.9 from 45), so treat the rating as somewhat inconsistent across platforms. Ranked first on review-count-weighted basis using the larger HomeAdvisor sample. HomeAdvisor 'Super Service Award' is a self-reported platform badge, not independently verified.","desc":"General contracting/handyman business serving the Coeur d'Alene and Post Falls area, offering caulking, small repair, and multi-trade project work.","rank":1,"groupSize":6},{"id":"pf38","category":"Handyman","name":"Timberline Services, LLC","phone":null,"website":null,"address":"1315 E Coeur d'Alene Ave, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":4.92,"count":32},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.TimberlineServicesLLC.24938719.html"},{"type":"listing","url":"https://match.angi.com/rated.TimberlineServicesLLC.24938719.html"}],"note":"Strong, consistent rating across a decent-sized sample. Reviews span 2019-2024, so current activity status could not be fully confirmed; no phone number was found in these searches.","desc":"Handyman and small-repair company in Coeur d'Alene (about 9-10 years in business per its listings), covering interior door installation/repair and general handyman work, with free project estimates.","rank":2,"groupSize":6},{"id":"pf39","category":"Handyman","name":"Red Beard Handyman Services","phone":null,"website":"redbeardfabshop.com","address":"PO Box 1082, Athol, ID 83801 (mailing address only; no storefront address found)","zip":"83801","rating":{"value":5,"count":21},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.RedBeardHandyman.80757085.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/athol/red-beard-handyman-services-reviews-1.htm"}],"note":"HomeAdvisor lists it as an 'Approved Pro' - this is a self-reported platform badge/screening claim, not a verified license or insurance status. Review sample (21) is moderate; only a PO Box was found, no physical address or phone number.","desc":"Handyman and light-fabrication services business based in Athol, ID, offering free project estimates; does not offer emergency service per its listings.","rank":3,"groupSize":6},{"id":"pf40","category":"Handyman","name":"Northwest Home Repair and Inspections, LLC","phone":null,"website":null,"address":"510 South Clearwater Loop, Suite 100, Post Falls, ID 83854 (a BBB listing separately gives 23875 N McKenzie Dr, Rathdrum, ID 83858 - addresses conflict)","zip":"83854","rating":{"value":4.95,"count":20},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.NorthwestHomeRepairand.125129452.html"},{"type":"listing","url":"https://www.homeadvisor.com/rated.NorthwestHomeRepairand.125129452.html"}],"note":"Angi's main profile page shows only 1 review (a perfect 5.0), while HomeAdvisor shows 20 reviews at 4.95 - used the larger HomeAdvisor sample for ranking. Address is inconsistent between a Post Falls suite address and a Rathdrum address from BBB; could not confirm which is current. No phone number found.","desc":"Home repair and handyman company (about 3 years in business per listings) serving Post Falls, offering free estimates and warranties, reviewers note good communication and attention to detail.","rank":4,"groupSize":6},{"id":"pf41","category":"Handyman","name":"TruBlue of North Idaho (TruBlue Home Service Ally)","phone":"(208) 504-2581","website":"trubluehousecare.com/north-idaho","address":"212 W Ironwood Dr Ste D PMB 215, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://1851franchise.com/trubluehomeserviceally/spokane-journal-trublue-total-house-care-franchise-opens-in-coeur-dalene-2717187"},{"type":"listing","url":"https://thumbtack.com/id/coeur-d-alene/handyman/trublue-home-service-ally/service/431297129071173635"}],"note":"The address carries a 'PMB' suffix, indicating a private mailbox rather than a storefront. BBB shows an A+ letter grade (not a numeric star score, so rating is left null). Thumbtack 'Top Pro' recognition for 2022/2023 is a self-reported platform badge, not an independently verified credential. Franchise of a national brand; owners named Brian and Stephanie Espinoza, serving CDA, Post Falls, Hayden, Rathdrum, and Athol.","desc":"Franchise handyman/home-maintenance company (TruBlue Total House Care) serving Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Athol.","rank":5,"groupSize":6},{"id":"pf42","category":"Handyman","name":"Kootenai County Handyman","phone":"(208) 964-1644","website":null,"address":"Coeur d'Alene, ID area (exact street address not found; serves Coeur d'Alene, North Idaho, and the Spokane area per BBB)","zip":"83815","rating":null,"ratingSource":"BBB","sources":[{"type":"listing","url":"https://www.bbb.org/us/id/coeur-d-alene/profile/remodel-contractors/kootenai-county-handyman-1296-1000178300"}],"note":"BBB shows an A+ letter grade (not a numeric star rating, so rating is left null) and lists the business as BBB-accredited since 2/11/2025. Phone number and ZIP come from a BBB category snippet and could not be independently cross-verified - listings were described as inconsistent.","desc":"Handyman and small-remodel company serving Coeur d'Alene and Kootenai County, offering deck, fence, flooring, drywall, painting, furniture assembly, small excavation, and general repair work.","rank":6,"groupSize":6},{"id":"pf43","category":"Windows & Doors","name":"Watts Construction, LLC","phone":null,"website":null,"address":"PO Box 1601, Post Falls, ID","zip":null,"rating":{"value":5,"count":15},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-falls-ID/Doors-Interior-Install-or-Replace"}],"note":"HomeAdvisor lists it under 'Approved Pro' (a self-reported HomeAdvisor program badge, not a license/insurance verification). No phone number found in available sources; address is a PO Box, not a street address.","desc":"Post Falls-area contractor offering interior door installation and replacement, with closet-build work also listed on HomeAdvisor.","rank":1,"groupSize":6},{"id":"pf44","category":"Windows & Doors","name":"Fireside Windows, LLC","phone":null,"website":null,"address":"Serves Post Falls, ID and surrounding North Idaho area","zip":null,"rating":{"value":4.9,"count":10},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.pteranodonimagescom.92927965.html"}],"note":"No street address or phone found; in business since 2020 per Angi. A reviewer from Coeur d'Alene also appears on its review page, confirming a North Idaho service area.","desc":"North Idaho window and siding replacement contractor; a Post Falls reviewer praised quality, price and service for a combined siding/windows job.","rank":2,"groupSize":6},{"id":"pf45","category":"Windows & Doors","name":"Oakmont Carpentry","phone":null,"website":null,"address":"2004 N Sawtooth Dr, Post Falls, ID (per Angi); BBB lists service area North Idaho, Athol to Post Falls, ZIP 83854","zip":"83854","rating":{"value":5,"count":8},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.OakmontCarpentry.115816821.html"},{"type":"listing","url":"https://www.bbb.org/us/id/post-falls/category/finish-carpentry"}],"note":"Street address appears only on the Angi listing and could not be cross-confirmed with phone/BBB detail; treat with some caution. Review count is small (8).","desc":"Finish carpentry, deck-building and windows/doors/interior trim contractor serving North Idaho from Post Falls.","rank":3,"groupSize":6},{"id":"pf46","category":"Windows & Doors","name":"Xtreme Home Solutions","phone":null,"website":null,"address":"PO Box 1201 (Kootenai County, ID service area)","zip":null,"rating":{"value":4.88,"count":4},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/kootenai/window-door-contractors.htm"}],"note":"Very small review sample (4); no phone number located, only a PO Box.","desc":"Kootenai County contractor offering replacement window, patio door, and entry door installation.","rank":4,"groupSize":6},{"id":"pf47","category":"Windows & Doors","name":"Modern Glass Company","phone":"(208) 765-1644","website":null,"address":"3727 W Industrial Loop, Coeur d'Alene, ID 83815","zip":"83815","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://directory.cdachamber.com/list/member/modern-glass-company-615"},{"type":"listing","url":"https://www.milgard.com/dealer-profile/idaho/coeur-dalene/modern-glass-co"}],"note":"No numeric rating found in sources checked. Operating since 1947 and is a Milgard dealer; an older address (4904 Industrial Avenue West) also appears in one directory, so the 3727 W Industrial Loop address (Coeur d'Alene Chamber) is the one to rely on. A second phone, (208) 765-0355, was also listed by the Chamber directory.","desc":"Long-established Coeur d'Alene glass and glazing company and authorized Milgard window dealer, offering window and glass door replacement/installation.","rank":5,"groupSize":6},{"id":"pf48","category":"Windows & Doors","name":"Inland Window Replacement (Inland NW Windows)","phone":"(208) 518-0482","website":null,"address":"3810 S Bonnell Rd, Coeur d'Alene, ID 83814","zip":"83814","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.buildzoom.com/contractor/inland-window-replacement-coeur-dalene"},{"type":"listing","url":"https://clutch.co/profile/inland-window-replacement-coeur-dalene-0"}],"note":"No reviews found on BuildZoom or Clutch as of this search. Clutch lists the company as founded 1999. Could not confirm an official company website domain with confidence.","desc":"Family-owned window and door replacement contractor serving Coeur d'Alene and the Inland Northwest.","rank":6,"groupSize":6},{"id":"pf49","category":"Painting","name":"Sergiys Quality Painting LLC","phone":null,"website":null,"address":"Serves Idaho and Washington (North Idaho / Spokane area); no street address found","zip":null,"rating":{"value":4.92,"count":39},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.sergiysqualitypaintingllc.159600718.html"}],"note":"Listed as HomeAdvisor 'Approved Pro' (self-reported program badge, not a verified license/insurance status). No phone/address located.","desc":"Residential painting contractor serving North Idaho and the Spokane, WA area; HomeAdvisor reviewers note quick response.","rank":1,"groupSize":10},{"id":"pf50","category":"Painting","name":"Best Painting Company (Coeur d'Alene | Post Falls | Spokane)","phone":null,"website":null,"address":"1142 North 5th Street, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":4.95,"count":22},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/cda/best-painting-company-%7C-coeur-d%27alene-%7C-post-falls-%7C-spokane-reviews-10803796.htm"},{"type":"listing","url":"https://www.homeadvisor.com/c.Painting.Coeur_d_Alene.ID.-12054.html"}],"note":"Angi separately shows 4.9. A similarly-named HomeAdvisor profile active in the Spokane Valley area shows a much lower 4.2 rating and includes a strongly negative review ('if you expect a quality, professional job — look elsewhere'); it's unclear if this is the same legal entity or a similarly-named competitor, so verify which profile you're booking before hiring.","desc":"Interior/exterior residential painting company serving Coeur d'Alene, Post Falls, and Spokane; offers free estimates and lists emergency service availability.","rank":2,"groupSize":10},{"id":"pf51","category":"Painting","name":"High Performance Painting and Drywall, LLC","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID area","zip":null,"rating":{"value":4.7,"count":38},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Painting.Coeur_d alene.ID.-12054.html"}],"note":"No street address or phone located in sources checked.","desc":"Coeur d'Alene-area painting and drywall contractor offering interior and exterior painting services.","rank":3,"groupSize":10},{"id":"pf52","category":"Painting","name":"Get R Done Painting","phone":null,"website":null,"address":"Post Falls, ID area","zip":null,"rating":{"value":4.5,"count":30},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://match.angi.com/rated.GetRDonePainting.24920498.html"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/get-r-done-painting-reviews-6209800.htm"}],"note":"No street address or phone located in sources checked.","desc":"Post Falls-area residential painting contractor.","rank":4,"groupSize":10},{"id":"pf53","category":"Painting","name":"Post Falls Painter","phone":"(208) 889-8425","website":null,"address":"3019 N Andromeda St, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":40},"ratingSource":"Google","sources":[{"type":"listing","url":"https://lantern.llc/b/post-falls-painter-post-falls"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/interior-painting/post-falls-painter/service/446010728109277192"}],"note":"The 5.0/40-review figure is explicitly labeled 'Google' on a Lantern booking page, but Lantern publishes these pages in partnership with the business, so treat it as semi-promotional rather than an independent read of the live Google Business Profile; a direct Google Maps check is advised. Verified-date on that page was listed as April 2026.","desc":"Family-owned residential and commercial painting company serving North Idaho from Post Falls; reviewers cite attention to detail, punctuality and daily cleanup.","rank":5,"groupSize":10},{"id":"pf54","category":"Painting","name":"River View Painting (Interiors & Exterior)","phone":null,"website":null,"address":"Serves Post Falls, ID and the Spokane, WA area","zip":null,"rating":{"value":4.6,"count":22},"ratingSource":"Thumbtack","sources":[{"type":"listing","url":"https://www.thumbtack.com/id/post-falls/interior-painting/river-view-painting-interiors-exterior/service/509423870331953152"}],"note":"Self-describes as licensed, insured and bonded on its Thumbtack listing; this is an unverified self-reported claim, not a confirmed license/insurance status. No phone or address found; contact named on reviews is 'Justin.'","desc":"Interior and exterior residential/commercial painting contractor serving the Post Falls/Spokane area, including full home remodel work.","rank":6,"groupSize":10},{"id":"pf55","category":"Painting","name":"Five Star Painting of Coeur D'Alene","phone":null,"website":null,"address":"Coeur d'Alene, ID area","zip":null,"rating":{"value":4.7,"count":7},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Painting.coeur_d alene.ID.-12054.html"}],"note":"Small review sample (7); also listed similarly on Angi as locally owned and operated. No address/phone located.","desc":"Locally owned and operated franchise location of the Five Star Painting brand serving Coeur d'Alene.","rank":7,"groupSize":10},{"id":"pf56","category":"Painting","name":"Tru Image Painting, LLC","phone":null,"website":null,"address":"North Idaho service area (exact city not confirmed)","zip":null,"rating":{"value":4.4,"count":16},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Post-Falls-ID/Painting-or-Staining-Small-Projects"}],"note":"No address or phone located in sources checked.","desc":"North Idaho residential painting contractor.","rank":8,"groupSize":10},{"id":"pf57","category":"Painting","name":"Honey Do Painting, LLC","phone":null,"website":null,"address":"Serves Bonners Ferry to Coeur d'Alene, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.HoneyDoPainting.74146373.html"}],"note":"A HomeAdvisor mention of roughly '4.5' appeared in search snippets but the exact review count could not be confirmed, so rating is left unset rather than guessed. Verify directly on the HomeAdvisor profile.","desc":"Family-owned painting company serving a broad North Idaho corridor from Bonners Ferry down to Coeur d'Alene.","rank":9,"groupSize":10},{"id":"pf58","category":"Painting","name":"Bullet Painting","phone":null,"website":null,"address":"7568 N Davenport St (North Idaho; exact city not confirmed)","zip":null,"rating":{"value":5,"count":3},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/bullet-painting-reviews-10083516.htm"}],"note":"Very small review sample (3 reviews) — ranks last despite a perfect average because of low confidence from so few reviews.","desc":"Small North Idaho painting contractor.","rank":10,"groupSize":10},{"id":"pf59","category":"Pressure Washing","name":"Double Diamond Window Cleaning and Pressure Washing","phone":"(208) 214-8838","website":null,"address":"55 N Cedar St, Suite 111, Post Falls, ID","zip":null,"rating":{"value":5,"count":316},"ratingSource":"Google","sources":[{"type":"listing","url":"https://lantern.llc/b/double-diamond-window-cleaning-and-pressure-washing-post-falls/book"}],"note":"Rating is explicitly labeled 'Google Rating' on a Lantern booking page, but Lantern pages are published in partnership with the business, so this should be cross-checked against the live Google Business Profile rather than taken at face value. Phone number conflicts across sources: Lantern lists (208) 214-8838 (Post Falls), while a ZoomInfo profile lists (509) 216-5002 (possibly a Spokane-area number); a GitLab user profile lists a different address (1606 E Velora Dr, Post Falls) that looks unofficial and was not used here.","desc":"Post Falls-based window cleaning and pressure washing company serving Post Falls, Coeur d'Alene and surrounding North Idaho communities.","rank":1,"groupSize":5},{"id":"pf60","category":"Pressure Washing","name":"Choice Marketing, Corp.","phone":null,"website":null,"address":"Serves Coeur d'Alene, ID area","zip":null,"rating":{"value":4.7,"count":71},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://homeadvisor.com/c.powerwashing.Coeur_d alene.ID.-14980.html"}],"note":"In business since 2007 per HomeAdvisor; offers warranties. No street address or phone located; not found on Angi or BBB in this search, so cross-verify before contacting.","desc":"Coeur d'Alene-area exterior/power washing service with one of the larger HomeAdvisor review counts found in this category.","rank":2,"groupSize":5},{"id":"pf61","category":"Pressure Washing","name":"Two Dogs Washing","phone":null,"website":"http://twodogswashing.com","address":"401 East 6th Avenue, Post Falls, ID 83854","zip":"83854","rating":{"value":4.8,"count":29},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.TwoDogsWashing.128556994.html"},{"type":"website","url":"http://twodogswashing.com"}],"note":"Review count varies slightly across source snippets (29 vs. 30); used the figure tied directly to the Angi profile page. In business since 2015; also offers deck cleaning, soft washing, and concrete resurfacing, and reportedly does landscaping/irrigation work as well, per a separate directory.","desc":"Post Falls-based exterior cleaning company offering pressure washing, soft washing, deck cleaning and concrete resurfacing, with free estimates.","rank":3,"groupSize":5},{"id":"pf62","category":"Pressure Washing","name":"River City Pressure Washing","phone":null,"website":"https://rivercitypressurewashing.com","address":"1507 East Lakeside Ave, Coeur d'Alene, ID 83814","zip":"83814","rating":{"value":5,"count":11},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-dalene/river-city-pressure-washing-reviews-1.htm"},{"type":"website","url":"https://rivercitypressurewashing.com"}],"note":"Review count is inconsistent across sources: some pages show 6 reviews, others 11 — used the higher figure tied to the main Angi profile, but treat the exact count as approximate. In business since 2019; offers free estimates and emergency service.","desc":"Coeur d'Alene-based pressure washing company offering residential and commercial exterior cleaning with emergency service availability.","rank":4,"groupSize":5},{"id":"pf63","category":"Pressure Washing","name":"Black Diamond Cleaning Co.","phone":null,"website":"https://www.blackdiamondcleaning.com","address":"Post Falls, ID (service area)","zip":null,"rating":{"value":4,"count":3},"ratingSource":"Trustpilot","sources":[{"type":"listing","url":"https://www.trustpilot.com/review/black-diamond-cleaning.com"}],"note":"Very small review sample (3 reviews in the last 12 months on Trustpilot). This appears to be primarily a general cleaning/detailing business rather than a dedicated pressure-washing specialist, so confirm pressure washing is actively offered before booking. Ranks last due to the small sample and lower rating relative to the others.","desc":"Post Falls-based cleaning and detailing company that also offers exterior/pressure washing services.","rank":5,"groupSize":5},{"id":"pf64","category":"Garage Doors","name":"Precision Garage Door Service of Post Falls","phone":"(208) 204-0129","website":"https://precisiondoor.net/locations/idaho/spokane/coeur-dalene/post-falls","address":"306 N Spokane St, Unit G, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":463},"ratingSource":"Google","sources":[{"type":"listing","url":"https://serviceagent.ai/directory/idaho/post-falls/garage-door/precision-garage-door-service-of-post-falls/"},{"type":"listing","url":"https://precisiondoor.net/locations/idaho/spokane/coeur-dalene/post-falls/reviews"}],"note":"A ServiceAgent.ai directory listing reports a 4.9/463 figure attributed to Google reviews, but the company's own Post-Falls-specific review subpage shows only 6 reviews averaging 4.17 stars (2015-2018). The 463-review figure likely reflects the wider Precision Garage Door franchise network rather than the Post Falls location alone; treat the review count with some caution.","desc":"Local franchise of the national Precision Garage Door brand offering garage door repair, spring replacement, and new door/opener installation in Post Falls.","rank":1,"groupSize":6},{"id":"pf65","category":"Garage Doors","name":"Overhead Door Company of Spokane-Coeur d'Alene (Overhead Door, Inc.)","phone":"(208) 773-0502","website":"https://www.overheaddoorspokane.com/","address":"420 E 5th Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.89,"count":45},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/overhead-door-company-spokane-coeur-d'alene-reviews-2356179.htm"},{"type":"listing","url":"https://bbb.org/us/id/post-falls/category/garage-doors"}],"note":"BBB lists this business as A+ rated/accredited at 420 E 5th Ave, Post Falls. One aggregator (ServiceAgent) separately cited a 4.8-star/333-review figure and also listed a conflicting phone number ((208) 204-0129) that appears to actually belong to a different company (Precision Garage Door); the BBB-matched (208) 773-0502 is used here as the more reliably sourced number.","desc":"Authorized Overhead Door brand dealer serving the Spokane/Coeur d'Alene/Post Falls area with garage door sales, installation, and repair for residential and commercial customers.","rank":2,"groupSize":6},{"id":"pf66","category":"Garage Doors","name":"Garage Door Center, Inc. (Spilker Pacific LLC dba Garage Door Center)","phone":null,"website":"https://www.clopaydoor.com/dealers/garage-doors-post-falls-id-garage-door-center-inc-gdc","address":"808 W Mullan Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":4.5,"count":117},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/garage-door-center-148917070593030"},{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/garage-door-center-inc-10240371"},{"type":"listing","url":"https://www.clopaydoor.com/dealers/garage-doors-post-falls-id-garage-door-center-inc-gdc"}],"note":"A separate Birdeye page at the same suite address (808 W Mullan Ave Ste A) shows a 1.0 rating under the name 'Overhead Door,' which appears to be a stale or mislabeled duplicate listing rather than this business — excluded from the rating used here. A Mapquest listing separately shows 7 Yelp reviews (not aggregated into the figure above). No working phone number could be confirmed from available sources.","desc":"Family-owned garage door dealer operating in Post Falls since 1986; a master authorized Clopay dealer offering sales, installation, and service of residential and commercial garage doors.","rank":3,"groupSize":6},{"id":"pf67","category":"Garage Doors","name":"North Idaho Garage Door","phone":null,"website":null,"address":"Service area: Coeur d'Alene, Rathdrum, Dalton Gardens, Hayden, Huetter, and surrounding North Idaho communities","zip":null,"rating":{"value":5,"count":511},"ratingSource":"Voolt (third-party directory)","sources":[{"type":"listing","url":"https://voolt.pro/idaho/post-falls/home-construction/north-idaho-garage-door/"}],"note":"CAUTION: this 5.0/511-review figure comes from a single lesser-known directory (Voolt) and could not be corroborated with a phone number, physical address, Google Business Profile, Yelp, Angi, or BBB listing. Despite the high nominal rating x review-count, it is ranked below better-corroborated listings because the figure is unverified and the source quality is low.","desc":"Garage door installation, spring replacement, and repair service advertising coverage across the Coeur d'Alene/North Idaho area; could not independently verify contact details.","rank":4,"groupSize":6},{"id":"pf68","category":"Garage Doors","name":"Mountain West Door","phone":null,"website":null,"address":"Service area: Post Falls, Sagle, and Sandpoint, ID (business based in Newport, WA)","zip":null,"rating":{"value":5,"count":9},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/mountain-west-door/03941943974973854853/9047/_"}],"note":"Small review sample (9 reviews). Business is headquartered in Newport, WA and serves Post Falls as part of a regional North Idaho/Eastern Washington service area rather than being based locally. Self-reported claim of '17+ years locally owned and operated' is unverified.","desc":"Regional garage door company based in Newport, WA offering installation and repair (including openers and accessories) to Post Falls and nearby North Idaho communities.","rank":5,"groupSize":6},{"id":"pf69","category":"Garage Doors","name":"Silver Valley Doors, LLC","phone":"(208) 682-3441","website":null,"address":"85 Electric Ave, Kingston, ID 83839","zip":"83839","rating":{"value":5,"count":4},"ratingSource":"listing (RepairHit)","sources":[{"type":"listing","url":"https://repairhit.com/biz/silver-valley-doors-llc"}],"note":"Listing is marked unclaimed and has a very small review sample (4). Based in Kingston (Shoshone County), outside Kootenai County proper, but the listing states it serves Kootenai and Benewah Counties too, so it is a border/service-area fit rather than a Post Falls-area business.","desc":"Family-owned garage door business established in 1975, installing and servicing overhead garage doors and openers across northern Idaho including Shoshone, Kootenai, and Benewah Counties.","rank":6,"groupSize":6},{"id":"pf70","category":"Fencing & Decking","name":"Dovetail Contracting, LLC","phone":null,"website":null,"address":"1869 E Seltice Way #542, Post Falls, ID 83854","zip":"83854","rating":{"value":4.93,"count":91},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/dovetail-contracting-llc-reviews-1.htm"},{"type":"listing","url":"https://homeadvisor.com/tloc/Post-Falls-ID/Deck-or-Porch-Build-or-Replace"}],"note":"Listed primarily under decks/porches and remodeling categories; fence-specific work for this company was not clearly confirmed in available listings. No phone number found in sources checked — verify via the Angi/HomeAdvisor profile directly. Angi notes it offers free estimates and warranties (self-reported, unverified).","desc":"Post Falls general contractor specializing in deck building and home remodeling, with strong, high-volume ratings across review platforms.","rank":1,"groupSize":6},{"id":"pf71","category":"Fencing & Decking","name":"Idaho Fence","phone":"(208) 773-3781","website":null,"address":"2430 W Seltice Way, Post Falls, ID 83854","zip":"83854","rating":{"value":4.1,"count":254},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/idaho-fence-148917071010899"},{"type":"listing","url":"https://www.buildzoom.com/contractor/idaho-fence-company-post-falls-id"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/idaho-fence-reviews-6512933.htm"}],"note":"Rating sources conflict: Birdeye shows 4.1/254 while a separate Angi profile shows 4.85 from a much smaller review count (around 5). Ranked below Dovetail despite the much larger review count because the rating itself is meaningfully lower and some reviews (via Customer Lobby) describe sinking posts/leaning panels on a vinyl fence installation. A second phone number, (208) 687-2196, also appeared in one BuildZoom listing — verify before calling. Do not confuse with the separately-reviewed 'Idaho Fence Co.' entity on Customer Lobby, which may be a related but distinct listing.","desc":"Long-established Post Falls fencing contractor installing wood, vinyl, and ornamental fencing, with one of the largest review volumes of any local fence company found.","rank":2,"groupSize":6},{"id":"pf72","category":"Fencing & Decking","name":"Bugle Construction JMJ, LLC","phone":"(208) 457-7234","website":null,"address":"306 N Spokane St, Post Falls, ID 83854 (also listed with a PO Box 220, Post Falls, ID 83877)","zip":"83854","rating":{"value":4.3,"count":81},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://match.angi.com/rated.BugleConstructionJMJ.84716752.html"},{"type":"listing","url":"https://www.buildzoom.com/contractor/bugle-construction"}],"note":"A second phone number, (208) 457-7150, appears on a Yellow Pages listing at the same street address — unclear which is current. Reviews on the deck/porch-build category are generally positive (one reviewer said they checked five decking companies before choosing this one), though the company reportedly does not offer warranties or emergency service. Primarily documented for deck/porch work; fence-specific reviews were not confirmed.","desc":"Post Falls general contractor known locally for deck and porch construction and remodeling work.","rank":3,"groupSize":6},{"id":"pf73","category":"Fencing & Decking","name":"KI Exteriors","phone":null,"website":null,"address":"Service area: Coeur d'Alene / Post Falls area (exact street address not found)","zip":null,"rating":{"value":5,"count":27},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.KICONSTRUCTIONLLC.119262162.html"}],"note":"Some reviews refer to the business as 'KI Construction' rather than 'KI Exteriors,' suggesting these may be the same company operating under two names, or a naming mix-up in listings; could not fully confirm which is correct. No address or phone number was found in available sources. Listed as not offering warranties or emergency services (self-reported).","desc":"Deck and porch building/remodeling contractor serving the Coeur d'Alene area, in business since roughly 2018 per directory listings.","rank":4,"groupSize":6},{"id":"pf74","category":"Fencing & Decking","name":"Estes Landscaping & Construction, LLC","phone":null,"website":null,"address":"Post Falls, ID (listings conflict: 207 W 19th Ave vs. 104 W 14th Ave Apt 2)","zip":"83854","rating":{"value":4.5,"count":17},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/estes-landscaping-and-construction-llc-reviews-10470010.htm"},{"type":"listing","url":"https://www.networx.com/c.estes-decks-construction-llc1"}],"note":"Address is inconsistent across sources (two different Post Falls street addresses). Ratings also vary by category/source: HomeAdvisor shows 4.33 from 12 reviews, Angi's deck category shows 4.74 from 17 reviews; a 4.5 figure is also cited for the overall profile. At least one Angi review for a deck project scored professionalism and punctuality very low (1-2 out of 5), alongside another describing the deck build as 'exceptional' — mixed experience. Self-reported Idaho trade license claim (expiring 12/31/2026) is unverified. May also be a distinct but related entity 'Estes Decks & Construction LLC.'","desc":"Post Falls landscaping and construction company offering deck building among broader landscaping and carpentry services.","rank":5,"groupSize":6},{"id":"pf75","category":"Fencing & Decking","name":"Great North Fencing, LLC","phone":"(208) 755-8261","website":null,"address":"3770 E 1st Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":3},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/great-north-fencing-llc/014611329652495080121/ee4e/_"},{"type":"listing","url":"https://www.buildzoom.com/contractor/great-north-fencing-llc"}],"note":"Only 3 Google reviews — a very small sample, which is why it ranks last despite the perfect score. Also serves Spokane Valley, WA and other nearby Idaho towns (Priest River, Rockford Bay), and focuses specifically on aluminum fencing and automatic gates rather than general fencing or decking. BuildZoom notes an active Washington contractor license for the owner (unverified claim, not confirmed by us).","desc":"Fencing specialist focused on aluminum fence and automated gate installation, serving Post Falls and the broader Spokane Valley/North Idaho region.","rank":6,"groupSize":6},{"id":"pf76","category":"Snow Removal","name":"Dundee Concrete and Landscape (dba Dundee Excavation LLC)","phone":null,"website":null,"address":"12812 N Chronicle St, Coeur d'Alene, ID","zip":null,"rating":{"value":4.27,"count":11},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/coeur-d-alene/snow-removal.htm"}],"note":"HomeAdvisor independently shows the same 4.27/11 figure, which is a good consistency signal despite the modest review count. No phone number could be confirmed from available sources — verify via the Angi/HomeAdvisor profile. Self-reported '19+ years locally owned and operated' claim is unverified.","desc":"Coeur d'Alene-based landscaping and excavation company offering residential and commercial snow removal as a seasonal service alongside its core concrete/landscape work.","rank":1,"groupSize":5},{"id":"pf77","category":"Snow Removal","name":"Mr Plow","phone":"(208) 209-5877","website":null,"address":"11100 N Airport Dr, Hayden, ID 83835","zip":"83835","rating":{"value":4.8,"count":22},"ratingSource":"listing (SnowRemovalNation directory)","sources":[{"type":"listing","url":"https://snowremovalnation.pages.dev/snowremovalservice/mr-plow"},{"type":"listing","url":"https://www.homeadvisor.com/rated.Mrplow.109250102.html"}],"note":"The 4.8/22 figure comes from a lower-profile aggregator site; HomeAdvisor separately shows an overall 4.8 rating but the visible reviews are mostly from December 2020 (all 5-star), so recent activity/current quality is unconfirmed. Treat with some caution given the aggregator source and age of visible reviews.","desc":"Hayden-based residential snow plowing service for driveways, offering free estimates; does not advertise emergency service or warranties per its listing.","rank":2,"groupSize":5},{"id":"pf78","category":"Snow Removal","name":"Augusta Lawn Care Services of Post Falls","phone":"(208) 593-2484","website":"https://www.augustalawncareservices.com/services/postfalls-snow-ice-removal","address":"2126 W Cannon Ave, Post Falls, ID 83854","zip":"83854","rating":{"value":5,"count":3},"ratingSource":"listing (RepairHit)","sources":[{"type":"listing","url":"https://repairhit.com/biz/augusta-lawn-care-services-of-post-falls"},{"type":"website","url":"https://augustalawncareservices.com/postfalls"}],"note":"Listing is marked unclaimed and the review sample is very small (3). This is a local franchise location of the national Augusta Lawn Care Services brand.","desc":"Local franchise branch offering winter driveway/parking-area plowing, sidewalk shoveling, and ice/salt treatment alongside year-round lawn care in Post Falls.","rank":3,"groupSize":5},{"id":"pf79","category":"Snow Removal","name":"Sprinklers Northwest, Inc.","phone":"(208) 818-8838","website":null,"address":"2280 ID-53, Rathdrum, ID 83858 (one source also lists 3854 N Charleville Rd, Post Falls, ID — possibly a second office or outdated record)","zip":"83858","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/rathdrum/category/snow-removal-services"}],"note":"No star rating or review count could be found; the business holds a BBB A+ rating (a BBB accreditation grade, not a customer star rating — not reported here as a 'rating'). Address appears in two different forms across listings (Rathdrum highway address vs. a Post Falls street address) — confirm current location before contacting.","desc":"Rathdrum-based irrigation/sprinkler company that also offers roofing and seasonal snow removal services in the Kootenai County area.","rank":4,"groupSize":5},{"id":"pf80","category":"Snow Removal","name":"All Terrain Specialties, LLC","phone":"(208) 446-7286","website":null,"address":"23408 N Cone Crest Rd, Rathdrum, ID 83858","zip":"83858","rating":null,"ratingSource":null,"sources":[{"type":"listing","url":"https://bbb.org/us/id/athol/category/snow-removal-services"},{"type":"listing","url":"https://carrieratlas.com/trucking-companies/id/rathdrum/all-terrain-specialties-llc/"}],"note":"No reviews or star rating were found for this business. BBB lists a service area covering Coeur d'Alene, Hayden, Rathdrum, Post Falls, Athol, and Spirit Lake under snow removal (also categorized under excavating/demolition). A freight-carrier directory listing under the same name describes a trucking company at this address — it's unclear whether this is the same entity with multiple business lines or a name collision between two different companies; flagged for caution. Do not confuse with the separate 'All Terrain Lawncare LLC' (Post Falls), a different business with no reviews found.","desc":"Rathdrum-area contractor listed under snow removal as well as excavating/demolition/retaining-wall categories, serving a multi-town North Idaho service area.","rank":5,"groupSize":5},{"id":"pf81","category":"Septic & Well Services","name":"Evergreen Sanitation Inc","phone":"(800) 433-1678","website":null,"address":"Service area: Post Falls, ID and surrounding North Idaho","zip":null,"rating":{"value":4.2,"count":109},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/c.Septic-Tanks-Wells.Post_Falls.ID.-12081.html"},{"type":"listing","url":"https://www.angi.com/companylist/us/id/post-falls/septic-tank.htm"}],"note":"Rating/review count inconsistent across HomeAdvisor snapshots (seen as 4.35/103 and 4.2/109). Could not confirm a Post Falls street address; a same-named company in Lake Stevens, WA (2910 Hartford Rd) is a different, unrelated business. Confirm the correct local office before booking.","desc":"Septic tank pumping and onsite wastewater system service provider serving Post Falls and North Idaho; listed as in business since 1957.","rank":1,"groupSize":6},{"id":"pf82","category":"Septic & Well Services","name":"CDA Septic Pumping","phone":null,"website":null,"address":"Service area: Coeur d'Alene and surrounding North Idaho communities","zip":null,"rating":{"value":5,"count":13},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/cda-septic-pumping/05713163991983065060/7ce2/_"}],"note":"Small review sample (13). Google Business Profile did not list a street address, suggesting a mobile/service-area business rather than a storefront.","desc":"Locally owned septic tank pumping company serving Coeur d'Alene and surrounding North Idaho communities.","rank":2,"groupSize":6},{"id":"pf83","category":"Septic & Well Services","name":"H & R Complete, Inc","phone":"(509) 228-9955","website":null,"address":"PO Box 749, Newman Lake, WA 99025 (mailing); also listed at PO Box 2559, Post Falls, ID 83877 and 2481 Titleist Way, Post Falls, ID 83854 on different BBB pages","zip":"83854","rating":{"value":4.1,"count":null},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://bbb.org/us/id/coeur-d-alene/category/septic-tank-treatment"},{"type":"listing","url":"https://angi.com/companylist/us/wa/newman-lake/handr-complete%2C-inc-reviews-2332214.htm"},{"type":"listing","url":"https://spokaneriver.net/wastedirectory/vendor/hr-complete-septic-pumping-and-excavation"}],"note":"Address and phone are inconsistent across sources (WA mailing address/phone vs. multiple differing Post Falls addresses on BBB). BBB shows an A+ rating. Review count not specified in the Angi snapshot found. Serving CDA, Post Falls, Rathdrum, Hayden since 1984 per company description.","desc":"Septic tank pumping, excavation, and septic system installation company serving the Inland Northwest including Kootenai County since 1984.","rank":3,"groupSize":6},{"id":"pf84","category":"Septic & Well Services","name":"United Crown Pump & Drilling","phone":"(208) 772-7867","website":null,"address":"3125 W Hayden Ave, Hayden, ID 83835","zip":"83835","rating":{"value":5,"count":3},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/hayden/united-crown-pump-and-drilling-reviews-478783.htm"},{"type":"listing","url":"https://www.zoominfo.com/c/united-pump-co/355416817"},{"type":"listing","url":"https://wellowner.org/find-a-contractor/washington/spokane/"}],"note":"Very small review sample (3 reviews). A second phone number, (208) 772-3230, appears on wellowner.org - confirm which is current. BBB lists an A+ rating but notes the business is not BBB-accredited.","desc":"Well drilling and pump company in Hayden, ID offering residential, commercial and municipal well drilling, well abandonment, and emergency pump service.","rank":4,"groupSize":6},{"id":"pf85","category":"Septic & Well Services","name":"R.C. Worst & Co.","phone":null,"website":"https://rcworst.com","address":"Service area: Inland Northwest, including documented well-pump work in Post Falls, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://rcworst.com/blog/Post-Falls-Well-2A-Project"},{"type":"website","url":"https://rcworst.com/pages/inland-northwestern-us-service-contracting-r-c-worst-co"}],"note":"No star rating or review count found on any platform. Included on the strength of a documented Post Falls well-pump project and stated 24/7 emergency pump service; verify current local service terms directly.","desc":"Regional well pump sales/service and 24/7 emergency pump service company covering the Inland Northwest, including North Idaho.","rank":5,"groupSize":6},{"id":"pf86","category":"Septic & Well Services","name":"Little Stinker Septic Service","phone":"(208) 772-7562","website":null,"address":"49866 N Old Highway 95 (address listed inconsistently under both Rathdrum and Hayden)","zip":null,"rating":{"value":3,"count":23},"ratingSource":"Yelp","sources":[{"type":"listing","url":"https://startpage.mapquest.com/us/idaho/little-stinker-septic-service-10236757"},{"type":"listing","url":"https://www.septic.com/septic-services/idaho/coeur-d-alene/little-stinker-septic-service/"}],"note":"Address is listed inconsistently (Rathdrum vs. Hayden) across sources; an alternate phone, (844) 833-8105, also appears under a different city listing. A separate BBB-listed 'Little Stinkers Septic Service Inc' (B- rating) may or may not be the same entity - confirm before booking. Lowest-rated septic provider found in this research.","desc":"Septic pumping service operating in the Rathdrum/Coeur d'Alene area since 1998.","rank":6,"groupSize":6},{"id":"pf87","category":"Pest Control","name":"Pointe Pest Control","phone":null,"website":"https://pointepest.com/post-falls-id-pest-control","address":"Service area: Post Falls, Coeur d'Alene and North Idaho (dedicated Post Falls service page); in business since 1998","zip":null,"rating":{"value":4.9,"count":3765},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://reviews.birdeye.com/pointe-pest-control-156230182443733?page=38"},{"type":"listing","url":"https://match.angi.com/rated.senske.137472575.html"}],"note":"Rating varies notably by platform: Birdeye shows 4.9 (review counts seen as both 3,765 and 3,608 across snapshots), while Angi shows a lower 4.5 from 183 reviews. This is a large regional/national pest control franchise with a local Post Falls service page, not a small independent shop.","desc":"Full-service residential pest control franchise with a dedicated Post Falls, ID service page; offers general pest, rodent and other treatments.","rank":1,"groupSize":7},{"id":"pf88","category":"Pest Control","name":"Organix Pest Control","phone":null,"website":null,"address":"3931 N Schreiber Way, Coeur d'Alene, ID 83815","zip":"83815","rating":{"value":5,"count":428},"ratingSource":"Google","sources":[{"type":"listing","url":"https://business.google.com/v/organix-pest-control/017732031899746889261/d2b5/_"},{"type":"listing","url":"https://thumbtack.com/id/post-falls/exterminators/organix-pest-control/service/526932769212137477"}],"note":"No phone number found in available sources; company describes itself as North Idaho's top choice for eco-friendly pest control, which is marketing language, not an independent claim. Serves Post Falls, Hayden and Spokane per its listing.","desc":"Eco-friendly pest control company based in Coeur d'Alene serving North Idaho including Post Falls.","rank":2,"groupSize":7},{"id":"pf89","category":"Pest Control","name":"Oasis Pest Control (Oasis Lawn and Pest)","phone":null,"website":null,"address":"4838 W Palmwood Ln, Post Falls, ID (per Yext); BBB lists a different address, 8732 N Meyer Rd, Post Falls, ID 83854","zip":"83854","rating":{"value":4.9,"count":102},"ratingSource":"Birdeye","sources":[{"type":"listing","url":"https://directory.yext.com/en/oasis-lawn-and-pest-2095863003"},{"type":"listing","url":"https://reviews.birdeye.com/oasis-pest-control-156229612264352"}],"note":"Street address conflicts between Yext (4838 W Palmwood Ln) and BBB (8732 N Meyer Rd) - business may have moved, or one listing is outdated. Yext shows 4.9 from 84 reviews vs. Birdeye's 4.9 from 102; no phone number found.","desc":"Pest control (and lawn) service based in Post Falls serving Post Falls, Coeur d'Alene, Hayden, Hauser, Rathdrum and Athol.","rank":3,"groupSize":7},{"id":"pf90","category":"Pest Control","name":"KB Pest and Lawn Solutions","phone":null,"website":null,"address":"PO Box 1056, Post Falls, ID 83854 (mailing address; no street address found)","zip":"83854","rating":{"value":5,"count":32},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/kb-pest-and-lawn-solutions-reviews-1.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.KBPestandLawn.88415521.html"}],"note":"Only a PO Box is listed; no phone number found. Owner listed as Kyle Bozarth; small, owner-operated outfit.","desc":"Small, owner-operated pest and lawn care company serving Post Falls, ID.","rank":4,"groupSize":7},{"id":"pf91","category":"Pest Control","name":"WD Brock Pest Control","phone":null,"website":null,"address":"Service area: Coeur d'Alene, ID (no street address found)","zip":null,"rating":{"value":4.9,"count":13},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/cleaning.htm"}],"note":"Very small review sample (13 reviews). In business since 2011 per listing; no address or phone confirmed in available sources.","desc":"Pest control company serving the Coeur d'Alene area since 2011.","rank":5,"groupSize":7},{"id":"pf92","category":"Pest Control","name":"Croach Pest Control (Hayden branch)","phone":"208-262-8224","website":"https://croach.com/service-locations/hayden-id-pest-control/","address":"11626 North Tracey Road, Hayden, ID","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://croach.com/service-locations/hayden-id-pest-control/"},{"type":"listing","url":"https://www.guildquality.com/pro/croach-pest-control-hayden"},{"type":"listing","url":"https://bestcompany.com/pest-control/croach"}],"note":"No standard 5-star platform rating found for the Hayden branch specifically; BestCompany shows an aggregate company score of 7.6/10 on a different scale, so it is not reported here as a star rating. Company self-describes as 'licensed, bonded, and insured' - this is an unverified, self-reported claim, not a verified badge. A separate listing shows a different phone number (+1 477-814-1190) tied to a Post Falls office - confirm before calling.","desc":"Regional pest control franchise with a Hayden, ID branch serving Coeur d'Alene-area homes since 2009.","rank":6,"groupSize":7},{"id":"pf93","category":"Pest Control","name":"Bug Blasters","phone":null,"website":null,"address":"Service area: Post Falls / Coeur d'Alene area (no street address found)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"search","url":"https://todayshomeowner.com/near-me/idaho/post-falls/pest-control/"}],"note":"A third-party roundup page listed this business at roughly 4.9 from 241 reviews, but the originating review platform could not be confirmed, so the rating is omitted here per sourcing rules. No address, phone, or website could be independently verified.","desc":"Pest control company reportedly serving the Post Falls/Coeur d'Alene area; details could not be independently confirmed beyond a roundup listing.","rank":7,"groupSize":7},{"id":"pf94","category":"Housekeeping","name":"Wonder Woman Cleaning Service","phone":null,"website":null,"address":"11717 E Lenora Dr, Coeur d'Alene, ID","zip":null,"rating":{"value":5,"count":109},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/tloc/Coeur-d-alene-ID/Maid-Service/"}],"note":"Angi shows a slightly different figure (4.94 from 87 reviews) for what appears to be the same underlying review pool - likely a different snapshot. No phone number found. In business since 1997; serves Coeur d'Alene, Hayden, Post Falls, and Rathdrum. Holds an Angi Super Service Award per listing.","desc":"Residential house cleaning / maid service operating in the Coeur d'Alene area since 1997.","rank":1,"groupSize":6},{"id":"pf95","category":"Housekeeping","name":"CDA Home Cleaning","phone":null,"website":null,"address":"1940 West Riverstone Drive, Coeur d'Alene, ID (directory-sourced; not independently confirmed)","zip":null,"rating":{"value":4.7,"count":65},"ratingSource":"Angi","sources":[{"type":"listing","url":"https://www.angi.com/companylist/us/id/coeur-d-alene/house-cleaning.htm"},{"type":"listing","url":"https://www.homeadvisor.com/rated.cdahomecleaning.158893812.html"}],"note":"Rating and review count were inconsistent across snapshots of what appears to be the same Angi/HomeAdvisor listing: seen variously as 4.7/65, 5.0/37, 5.0/69, and 5.0/80. No phone number or standalone company website found. Offers recurring residential/commercial cleaning plus short-term rental turnover cleaning; serves Coeur d'Alene, Hayden, Post Falls, Rathdrum.","desc":"Residential (and short-term rental) house cleaning service based in Coeur d'Alene, serving North Idaho.","rank":2,"groupSize":6},{"id":"pf96","category":"Housekeeping","name":"Victory Maids LLC","phone":"(208) 603-7304","website":null,"address":"12845 W Riverview Dr, Post Falls, ID 83854 (per Angi/HomeAdvisor; BBB lists only city/ZIP, no street address)","zip":"83854","rating":{"value":4.5,"count":null},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.bbb.org/us/id/dover/category/maid-service"},{"type":"listing","url":"https://angi.com/companylist/us/id/post-falls/victory-maids-reviews-1.htm"}],"note":"Review count was not available in sources found, so weighting against competitors is uncertain. Serves Post Falls and the Spokane/Spokane Valley, WA area.","desc":"Residential maid/house cleaning service based in Post Falls, also serving the Spokane, WA area.","rank":3,"groupSize":6},{"id":"pf97","category":"Housekeeping","name":"Elite Clean, LLC","phone":null,"website":null,"address":"PO Box 457 (mailing address only; Coeur d'Alene area)","zip":null,"rating":{"value":4.1,"count":68},"ratingSource":"HomeAdvisor","sources":[{"type":"listing","url":"https://www.homeadvisor.com/rated.EliteCleanLLC.68192871.html"}],"note":"Sources disagree on founding year (2021 vs. 2005 appear in different listings). No phone number or street address found. Serves Coeur d'Alene, Hayden, Post Falls, Rathdrum.","desc":"Residential house cleaning company serving the Coeur d'Alene area.","rank":4,"groupSize":6},{"id":"pf98","category":"Housekeeping","name":"NW Maids","phone":null,"website":"https://nwmaids.com/locations/post-falls-id/","address":"Service area: Post Falls, ID (no local street address found)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://nwmaids.com/locations/post-falls-id/"}],"note":"No independent review rating found; available text was the company's own marketing description ('vetted and insured'), which is a self-reported, unverified claim, not an independent rating or badge.","desc":"House cleaning / maid service company with a dedicated Post Falls, ID service page.","rank":5,"groupSize":6},{"id":"pf99","category":"Housekeeping","name":"Merry Maids of Coeur d'Alene","phone":null,"website":"https://merrymaids.com/coeur-dalene","address":"Service area: Coeur d'Alene, ID (national franchise; local branch street address not found)","zip":null,"rating":null,"ratingSource":null,"sources":[{"type":"website","url":"https://merrymaids.com/coeur-dalene"},{"type":"website","url":"https://merrymaids.com/home-cleaners-post-falls-id"}],"note":"No independent review rating found for the local Coeur d'Alene/Post Falls branch in available sources. This is a local branch of a national franchise brand rather than an independent local business.","desc":"Local branch of the national Merry Maids residential house cleaning franchise serving Coeur d'Alene and Post Falls.","rank":6,"groupSize":6}];

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
