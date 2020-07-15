const backedUrls =["https://pixabay.com/get/55e1d74a4956ac14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bb9_1280.jpg","https://pixabay.com/get/50e9d54a4d57b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc659_1280.jpg","https://pixabay.com/get/57e5d0434f52ad14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bb9_1280.jpg","https://pixabay.com/get/5ee4d1414a55b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc659_1280.jpg","https://pixabay.com/get/57e7d34b4257ab14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bba_1280.jpg","https://loremflickr.com/400/400/poor?seed=8670","https://pixabay.com/get/5ee5d54a4d53b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65a_1280.jpg","https://pixabay.com/get/55e0d544495ba914f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbb_1280.jpg","https://pixabay.com/get/5ee4d0444a5bb108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65b_1280.jpg","https://loremflickr.com/400/400/volunteering?seed=8343","https://pixabay.com/get/57e6d2434850ae14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbc_1280.jpg","https://pixabay.com/get/52e2dd4a4b5aa914f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbc_1280.jpg","https://pixabay.com/get/5ee6d44b435bb108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65d_1280.jpg","https://pixabay.com/get/54e9d6424256aa14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbd_1280.jpg","https://pixabay.com/get/54e4d4444e57ac14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbe_1280.png","https://pixabay.com/get/57e8d7414d52a814f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbe_1280.jpg","https://pixabay.com/get/5ee5d7474851b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65f_1280.jpg","https://pixabay.com/get/53e9d6404b51b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65f_1280.jpg","https://pixabay.com/get/5ee5d54a4e5ab108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65a_1280.jpg","https://pixabay.com/get/5ee1d2404c5bb108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65f_1280.jpg","https://pixabay.com/get/5ee4d1414b53b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc650_1280.jpg","https://pixabay.com/get/57e7d2464851a514f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bb9_1280.jpg","https://pixabay.com/get/57e2d14b4357a914f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bb0_1280.jpg","https://pixabay.com/get/5ee6dc414850b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc651_1280.jpg","https://pixabay.com/get/5fe6dd454f55b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc651_1280.jpg","https://pixabay.com/get/55e2d7424252b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc158_1280.jpg","https://pixabay.com/get/5ee5d747485ab108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65d_1280.jpg","https://pixabay.com/get/57e6d1434e54ac14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55cb8_1280.jpg","https://loremflickr.com/400/400/children?seed=9291","https://pixabay.com/get/54e8d1444f52a414f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbf_1280.jpg","https://loremflickr.com/400/400/veteran?seed=882","https://pixabay.com/get/57e8d5444f50a814f6da8c7dda7936791636d9ed50556c4870267fdc9348c55cbb_1280.jpg","https://loremflickr.com/400/400/foodbank?seed=5951","https://pixabay.com/get/57e4d1414a51a814f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bb9_1280.jpg","https://loremflickr.com/400/400/national?seed=1510","https://loremflickr.com/400/400/poor?seed=2718","https://pixabay.com/get/57e7dc444e52ad14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55cbd_1280.jpg","https://loremflickr.com/400/400/meal?seed=7584","https://pixabay.com/get/51e5d7424f51b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc651_1280.jpg","https://loremflickr.com/400/400/usda?seed=5355","https://loremflickr.com/400/400/meal?seed=4018","https://pixabay.com/get/50e5d7464c52b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc15e_1280.jpg","https://loremflickr.com/400/400/army?seed=9394","https://pixabay.com/get/5fe1dd45495bb108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc659_1280.jpg","https://loremflickr.com/400/400/helping?seed=3914","https://pixabay.com/get/57e1d64a4a56ae14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbb_1280.jpg","https://loremflickr.com/400/400/homeless?seed=8720","https://pixabay.com/get/57e2d1424253ab14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbe_1280.jpg","https://pixabay.com/get/5ee6d6434c51b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc151_1280.jpg","https://loremflickr.com/400/400/refugee?seed=6939","https://pixabay.com/get/5ee1d2404c5ab108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65f_1280.jpg","https://pixabay.com/get/53e4d2424a57b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc058_1280.jpg","https://pixabay.com/get/5ee1d2404c57b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65f_1280.jpg","https://pixabay.com/get/50e0d2434d4fad0bffd8992cc62f34771237dde14e50744071277fd19748c5_1280.jpg","https://pixabay.com/get/5ee5d7474851b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc158_1280.jpg","https://pixabay.com/get/57e0d5404e50b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc059_1280.jpg","https://loremflickr.com/400/400/vegetables?seed=7829","https://pixabay.com/get/57e8d7444a51ad14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55db9_1280.jpg","https://pixabay.com/get/53e1dd434950b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65b_1280.jpg","https://pixabay.com/get/5ee4d1414b53b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65d_1280.jpg","https://pixabay.com/get/5ee4d0444a5bb108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc659_1280.jpg","https://loremflickr.com/400/400/refugee?seed=3738","https://loremflickr.com/400/400/army?seed=1027","https://pixabay.com/get/5ee5d54a4e5bb108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc15e_1280.jpg","https://loremflickr.com/400/400/meal?seed=7922","https://pixabay.com/get/57e7d4444b5bae14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55dbb_1280.jpg","https://pixabay.com/get/5fe1d6444d52b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc151_1280.jpg","https://pixabay.com/get/57e5d0434f52ad14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55dbb_1280.jpg","https://pixabay.com/get/55e5d1434851aa14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55dbb_1280.jpg","https://loremflickr.com/400/400/helping?seed=9844","https://loremflickr.com/400/400/poor?seed=7707","https://pixabay.com/get/52e9d5454c54af14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbc_1280.jpg","https://pixabay.com/get/57e1d74a4356a514f6da8c7dda7936791636d9ed50556c4870267fdc9348c55dbc_1280.jpg","https://loremflickr.com/400/400/helping?seed=5835","https://loremflickr.com/400/400/homeless?seed=4646","https://pixabay.com/get/5fe3d2454c57b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc05d_1280.jpg","https://loremflickr.com/400/400/meal?seed=3461","https://loremflickr.com/400/400/homeless?seed=1771","https://loremflickr.com/400/400/homelessness?seed=6088","https://pixabay.com/get/5ee4d0444a5bb108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc65f_1280.jpg","https://pixabay.com/get/54e5d74a4352ab14f6da8c7dda7936791636d9ed50556c4870267fdc9348c55dbb_1280.jpg","https://pixabay.com/get/54e3d24b4d57a414f6da8c7dda7936791636d9ed50556c4870267fdc9348c55bbd_1280.jpg","https://loremflickr.com/400/400/homeless?seed=2418","https://loremflickr.com/400/400/homeless?seed=9895","https://loremflickr.com/400/400/refugee?seed=9745","https://loremflickr.com/400/400/poor?seed=7396","https://pixabay.com/get/5fe9dd4a4c54b108f5d084609629307d1c38d6e6574c704c7c2b73d0924dc659_1280.jpg","https://loremflickr.com/400/400/volunteering?seed=8494","https://loremflickr.com/400/400/refugee?seed=5412","https://pixabay.com/get/54e9d5454e57a414f6da8c7dda7936791636d9ed50556c4870267fdc9348c55cbd_1280.jpg","https://loremflickr.com/400/400/homeless?seed=5532","https://loremflickr.com/400/400/hunger?seed=5712"]

const api = {
    "www.cdc.gov/coronavirus/2019-ncov/community/homeless-shelters/index.html": {
        "title": "Communities, Schools, Workplaces, & Events",
        "summary": ""
    },
    "www.elkgrovecity.org/city_hall/departments_divisions/housing_loans/homelessness_in_elk_grove/resources_for_the_homeless": {
        "title": "Resources for the Homeless",
        "summary": "A 9 week program which empowers women who are homeless with skills to secure a job, create a healthy lifestyle and regain a home"
    },
    "www.hhs.gov/programs/social-services/homelessness/resources/index.html": {
        "title": "Resources",
        "summary": "This webpage contains information on efforts by the Office of Early Childhood Development to expand early care and education services for children experiencing homelessness"
    },
    "endhomelessness.org/how-to-get-help-experiencing-homelssness/": {
        "title": "How to Get Help If You Are Experiencing Homelessness",
        "summary": "If your community doesn’t have a single access point, or you are unable to find it, you will have to identify various providers and determine if they have an available shelter bed or other resources like food and health care"
    },
    "www.shra.org/emergency-housing-and-other-homeless-resources": {
        "title": "Emergency Housing and Homeless Resources",
        "summary": "If you need assistance with emergency housing, food services, counseling, employment, or other services please contact 211 using one of the options listed below:"
    },
    "www.homelessshelterdirectory.org/cgi-bin/id/city.cgi?city=Rocklin&state=CA": {
        "title": "Homeless Help Forum",
        "summary": "Below are all of the homeless shelters and services for the needy that provide help to those in need for Rocklin, CA and surrounding cities"
    },
    "www.hudexchange.info/housing-and-homeless-assistance/": {
        "title": "Need Housing Assistance?",
        "summary": "DOL’s Employment Training page provides a short-term training finder, an education and training finder, a Certification Finder, links to Apprenticeship programs, financial aid, and much more"
    },
    "www.hudexchange.info/homelessness-assistance/": {
        "title": "Homelessness Assistance Programs",
        "summary": "View SNAPS In Focus messages describing SNAPS policy priorities and key information relating to the implementation of the CoC and ESG Programs"
    },
    "www.feedingamerica.org/find-your-local-foodbank": {
        "title": "Find Your Local Food Bank",
        "summary": "3 billion meals each year through food pantries and meal programs throughout the United States and leads the nation to engage in the fight against hunger"
    },
    "www.feedingamerica.org/our-work/food-bank-network": {
        "title": "How Do Food Banks Work?",
        "summary": "The food banks distribute food and grocery items through food pantries and meal programs that serve families, children, seniors and individuals at risk of hunger"
    },
    "placerfoodbank.org": {
        "title": "Placer Food Bank – Nourishing Communities. Ending Hunger",
        "summary": "It will be imperative that we keep up with the demand to ensure there is food on the table for seniors, children, and families in El Dorado, Nevada and Placer Counties"
    },
    "www.samhsa.gov/homelessness-programs-resources": {
        "title": "Homelessness Programs and Resources",
        "summary": ""
    },
    "https://www.cdc.gov": {
        "title": "CDC Works 24/7",
        "summary": ""
    },
    "https://www.cdc.gov/az/": {
        "title": "https://www.cdc.gov/az/",
        "summary": ""
    },
    "https://tools.cdc.gov/medialibrary/index.aspx#/sharecontent/https%3A%2F%2Fwww.cdc.gov%2Findex.htm": {
        "title": "Public Health Media Library",
        "summary": ""
    },
    "https://www.adobe.com": {
        "title": "Creative, marketing and document management solutions",
        "summary": ""
    },
    "http://www.elkgrovehart.org/": {
        "title": "Elk Grove HART",
        "summary": "Recognizing this desperate situation, HART has distributed informational street sheets to help inform the homeless of how they can better protect themselves and those in our community"
    },
    "http://www.thehotline.org/": {
        "title": "National Domestic Violence Hotline",
        "summary": ""
    },
    "http://traffickingresourcecenter.org/": {
        "title": "National Human Trafficking Hotline",
        "summary": ""
    },
    "http://www.prainc.com/soar/": {
        "title": "SOAR Works!",
        "summary": ""
    },
    "http://www.samhsa.gov": {
        "title": "Substance Abuse and Mental Health Services Administration",
        "summary": ""
    },
    "http://www.ssa.gov": {
        "title": "The United States Social Security Administration",
        "summary": "Check out your Social Security Statement, change your address & manage your benefits online today"
    },
    "http://www.acf.hhs.gov/programs/ecd/expanding-early-care-and-education-for-homeless-children": {
        "title": "Expanding Early Care and Education for Children Experiencing Homelessness",
        "summary": " Supporting the well-being of these young children and their families is an urgent task and one that is critical to improving the long-term educational outcomes of children nationwide"
    },
    "http://www.acf.hhs.gov/programs/ecd": {
        "title": "Home",
        "summary": "will act as a catalyst to create collective impact and support early learning and care of our nation's children and their families"
    },
    "http://datawarehouse.hrsa.gov/topics/primaryHealthCare.aspx#chart": {
        "title": "Explore Data and Maps on HRSA’s Health Care Programs",
        "summary": ""
    },
    "https://resources.hud.gov/": {
        "title": "HUD Resource Locator",
        "summary": "Press the F5 key to refresh the page and you should see a dialog box labeled \"Would you like to share your location with hud"
    },
    "http://www.211.org/": {
        "title": "211.org",
        "summary": ""
    },
    "http://nationalhomeless.org/references/need-help/": {
        "title": "National Coalition for the Homeless",
        "summary": "In addition, Russell Sjoblom, who was homeless with his family, has compiled a list of suggestions for people who are in danger of becoming homeless"
    },
    "https://www.va.gov/HOMELESS/NationalCallCenter.asp": {
        "title": "Veterans Affairs",
        "summary": ""
    },
    "http://www.nchv.org/index.php/help/help/locate_organization/": {
        "title": "National Coalition for Homeless Veterans",
        "summary": ""
    },
    "http://nchv.org/index.php/help": {
        "title": "National Coalition for Homeless Veterans",
        "summary": "If you are a homeless veteran or a veteran at risk of becoming homeless, these pages provide information that you can use to seek help"
    },
    "https://www.veteranscrisisline.net/ChatTermsOfService.aspx?account=Veterans%20Chat": {
        "title": "24/7 Confidential Help – Veterans Crisis Line",
        "summary": "If you’re a Veteran in crisis or Service member in crisis — or you're concerned about one — there are caring, qualified VA responders standing by to help 24 hours a day, 7 days a week"
    },
    "http://www.thehotline.org": {
        "title": "National Domestic Violence Hotline",
        "summary": ""
    },
    "http://www.thehotline.org/help/path-to-safety/": {
        "title": "National Domestic Violence Hotline",
        "summary": ""
    },
    "https://www.nhchc.org/resources/grantees/national-hch-grantee-directory/": {
        "title": "National Health Care for the Homeless Council",
        "summary": ""
    },
    "http://www.feedingamerica.org/find-your-local-foodbank/": {
        "title": "Find Your Local Food Bank",
        "summary": "3 billion meals each year through food pantries and meal programs throughout the United States and leads the nation to engage in the fight against hunger"
    },
    "http://www.211sacramento.org/211/": {
        "title": "Connecting you with local services",
        "summary": ""
    },
    "https://sacramentostepsforward.org/resources/find-help/": {
        "title": "Sacramento Steps Forward",
        "summary": "Families experiencing homelessness can self-register for County of Sacramento emergency shelter services by visiting the County of Sacramento’s family shelter reservation website and answering a few questions"
    },
    "https://www.coronavirus.gov/": {
        "title": "Coronavirus Disease 2019 (COVID-19)",
        "summary": "Alert President Trump has unveiled Guidelines for Opening Up America Again, a three-phased approach based on the advice of public health experts"
    },
    "http://www.fns.usda.gov/": {
        "title": "USDA Food and Nutrition Service",
        "summary": "The https:// means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely"
    },
    "https://www.doleta.gov/jobseekers/": {
        "title": "Employment & Training Administration (ETA)",
        "summary": ""
    },
    "http://www.jobcorps.gov/": {
        "title": "Job Corps",
        "summary": ""
    },
    "http://www.va.gov/homeless/": {
        "title": "Veterans Affairs",
        "summary": "Veterans who are homeless or at imminent risk of homelessness are strongly encouraged to contact the National Call Center for Homeless Veterans"
    },
    "http://www.veteranscrisisline.net/": {
        "title": "Suicide Prevention Hotline, Text & Chat",
        "summary": ""
    },
    "http://veterans.gov/": {
        "title": "Veterans' Employment and Training Service (VETS) - U.S. Department of Labor",
        "summary": ""
    },
    "http://www.va.gov/directory/guide/home.asp?isflash=1": {
        "title": "Veterans Affairs",
        "summary": ""
    },
    "http://www.va.gov/HOMELESS/crrc-list.asp": {
        "title": "Veterans Affairs",
        "summary": ""
    },
    "http://www.nchv.org/": {
        "title": "National Coalition for Homeless Veterans",
        "summary": ""
    },
    "https://www.hudexchange.info/housing-and-homeless-assistance/homeless-help/": {
        "title": "Need Homeless Assistance?",
        "summary": ""
    },
    "https://www.hudexchange.info/homelessness-assistance/diseases": {
        "title": "Disease Risks and Homelessness",
        "summary": "People experiencing homelessness often have a higher risk for exposure to communicable diseases and have little access to health care systems and treatment in their communities"
    },
    "https://www.hudexchange.info/trainings/courses/corporation-for-national-and-community-service-cncs-webinar/": {
        "title": "Corporation for National and Community Service (CNCS) Webinar",
        "summary": ""
    },
    "https://www.hudexchange.info/homelessness-assistance/disaster-recovery-homelessness-toolkit/": {
        "title": "Disaster Recovery Homelessness Toolkit",
        "summary": "This toolkit is for communities that want to address effectively the needs of homeless and vulnerable populations through comprehensive disaster planning, response and recovery, and long-term recovery"
    },
    "https://secure.feedingamerica.org/site/Donation2?df_id=26876&26876_donation=form1&mfc_pref=T&s_onsite_promo=MainNav_Donate": {
        "title": "Join me in ending hunger",
        "summary": ""
    },
    "https://secure.feedingamerica.org/site/Donation2?df_id=26876&26876_donation=form1&mfc_pref=T&s_onsite_promo=MainNav_Today": {
        "title": "Join me in ending hunger",
        "summary": ""
    },
    "http://help.feedingamerica.org/site/Donation2?df_id=26130&26130_donation=form1&s_onsite_promo=MainNav_Monthly": {
        "title": "Join me in ending hunger",
        "summary": "By making your generous gift you'll receive periodic updates about the Feeding America network's critical work to help families struggling with hunger and how your support makes a difference"
    },
    "https://www.feedingamerica.org/need-help-find-food": {
        "title": "Need Help? Find Food",
        "summary": "The Feeding America network of 200 food banks and 60,000 food pantries and meal programs serve virtually every community in all 50 states, Washington, D"
    },
    "https://www.feedingamerica.org/find-your-local-foodbank": {
        "title": "Find Your Local Food Bank",
        "summary": "3 billion meals each year through food pantries and meal programs throughout the United States and leads the nation to engage in the fight against hunger"
    },
    "https://www.facebook.com/placerfoodbank/": {
        "title": "Placer Food Bank",
        "summary": ""
    },
    "https://www.linkedin.com/company/756229?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A756229%2Cidx%3A2-1-2%2CtarId%3A1477249827378%2Ctas%3Aplacer%20food": {
        "title": "https://www.linkedin.com/company/756229?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A756229%2Cidx%3A2-1-2%2CtarId%3A1477249827378%2Ctas%3Aplacer%20food",
        "summary": ""
    },
    "https://www.instagram.com/placerfoodbank/": {
        "title": "Placer Food Bank Instagram",
        "summary": ""
    },
    "http://placerfoodbank.org": {
        "title": "Placer Food Bank – Nourishing Communities. Ending Hunger",
        "summary": "Our staff, retail and hunger-relief partners are working hard to prepare for and address an increased need of food assistance in the weeks and possibly months to come"
    },
    "http://placerfoodbank.org/about-us-landing/": {
        "title": "About",
        "summary": ""
    },
    "http://placerfoodbank.org/our-history/": {
        "title": "Our History",
        "summary": "The Placer Food Bank has been distributing food and nourishing our community since our beginning as the Community Resource Council in 1970"
    },
    "http://placerfoodbank.org/our-impact/": {
        "title": "Our Impact",
        "summary": ""
    },
    "http://placerfoodbank.org/our-leadership-team/": {
        "title": "Our Leadership Team",
        "summary": ""
    },
    "http://placerfoodbank.org/board-of-directors/": {
        "title": "Board of Directors",
        "summary": ""
    },
    "http://placerfoodbank.org/partners-vital-to-our-mission/": {
        "title": "Partners Vital to Our Mission",
        "summary": ""
    },
    "http://placerfoodbank.org/what-we-do/": {
        "title": "What We Do",
        "summary": ""
    },
    "http://placerfoodbank.org/how-we-work/": {
        "title": "How We Work",
        "summary": ""
    },
    "http://placerfoodbank.org/our-programs-landing/": {
        "title": "Our Programs",
        "summary": ""
    },
    "http://placerfoodbank.org/feed-our-future-program/": {
        "title": "Feed Our Future Program",
        "summary": "The BackPack Program was created to provide these children with nutritious, easy-to-prepare food for weekends and holidays when school is not in session"
    },
    "http://placerfoodbank.org/calfresh/": {
        "title": "CalFresh",
        "summary": ""
    },
    "http://placerfoodbank.org/help-us-landing/": {
        "title": "Ways To Give",
        "summary": ""
    },
    "http://placerfoodbank.org/volunteer/": {
        "title": "Volunteer",
        "summary": ""
    },
    "https://secure.qgiv.com/for/pfb": {
        "title": "Placer Food Bank",
        "summary": ""
    },
    "http://placerfoodbank.org/power-of-one-individual-giving/": {
        "title": "Power of One – Individual Giving",
        "summary": ""
    },
    "http://placerfoodbank.org/bingo/": {
        "title": "Bingo",
        "summary": ""
    },
    "http://smile.amazon.com/ch/94-1740316": {
        "title": "You shop. Amazon gives",
        "summary": ""
    },
    "http://placerfoodbank.org/donate-food/": {
        "title": "Donate Food",
        "summary": ""
    },
    "http://placerfoodbank.org/host-fund-food-drive/": {
        "title": "Host a Food Drive",
        "summary": ""
    },
    "http://placerfoodbank.org/other-ways-to-help/": {
        "title": "Other Ways to Help",
        "summary": "There are a number of ways you can support Placer Food Bank in our mission to end hunger in our community"
    },
    "http://placerfoodbank.org/power-of-many/": {
        "title": "Power of Many",
        "summary": ""
    },
    "http://placerfoodbank.org/get-food/": {
        "title": "Get Food",
        "summary": ""
    },
    "http://placerfoodbank.org/events/": {
        "title": "In the News",
        "summary": "Important CalFresh News - People on CalFresh who aren't getting the maximum allotment for their household size could see a boost in their benefits in April or May"
    },
    "http://placerfoodbank.org/blog-2/": {
        "title": "Campaigns & Events",
        "summary": ""
    },
    "http://placerfoodbank.org/contact-us/": {
        "title": "Contact Us",
        "summary": ""
    },
    "https://donate.placerfoodbank.org/for/pfb?_ga=2.168769441.1692671111.1585586084-667740226.1583304010": {
        "title": "Placer Food Bank",
        "summary": ""
    },
    "http://placerfoodbank.org/covid-19-update/": {
        "title": "COVID-19 UPDATE",
        "summary": "Placer Food Bank and hunger relief partners are essential services, and it is critical that we remain operational while implementing the best available safety precautions"
    },
    "https://youtu.be/4kGqDEUmmVw": {
        "title": "PFB Welcome Video",
        "summary": ""
    },
    "http://placerfoodbank.org/50th-anniversary/": {
        "title": "50th Anniversary",
        "summary": "This will ensure that our operations and outreach programs remain sustainable and relevant to address hunger-relief for the next 50 years and beyond"
    },
    "http://placerfoodbank.org/stories-we-tell/": {
        "title": "Stories We Tell",
        "summary": "Help us build our file of stories about hunger and how Placer Food Bank is helping those in our communities throughout El Dorado, Placer and Nevada Counties"
    },
    "http://placerfoodbank.org/hunger-is-happening/": {
        "title": "Hunger is Happening",
        "summary": "According to the USDA's 2019 Household Food Insecurity in the United States Report, more than 37 million people in the United States struggle with hunger"
    }
}
;(async () => {
	const app = document.getElementById('app')
	const loader = document.getElementById('loader')
	const assetLoader = loader.querySelector('h2')

	const fetch_xml = (route, options={}) => {
		let xhr = new XMLHttpRequest()
		xhr.open(options.method || 'GET', `https://cors-anywhere.herokuapp.com/${route}`)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.send(JSON.stringify(options.body || {}))
		return new Promise((resolve, reject) => {
			xhr.onload = () => {
				if(xhr.status === 200){
					let response = JSON.parse(xhr.responseText)
					resolve(response)
				}
				else if(xhr.status) reject(xhr.responseText)
			}
		})
	}
	const init = toAppend => {
		toAppend.forEach(elem => app.appendChild(elem))
		const images = document.querySelectorAll('[data-src]')
		const imgArray = Array.from(images)

		const checkImage = (image, index) => {
			if (image.getBoundingClientRect().top < window.innerHeight * 1.25) {
				image.setAttribute('src', image.getAttribute('data-src'))
				image.onload = () => image.removeAttribute('data-src')
				image.onerror = () => image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlAA9xSFyL6drb7mlB9fjhV59btrHZlXlt7A&usqp=CAU'
				imgArray.splice(index, 1)
			}
		}
		let move
		const scrollHandler = () => {
			imgArray.forEach(checkImage)
			if (!imgArray.length) {
				clearInterval(move)
			}
		}
		move = setInterval(scrollHandler, 300)
		imgArray.forEach(checkImage)
	}


	const convert = params => {
		let esc = encodeURIComponent
		return Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&')
	}

	let toAppend = [],
		used = [],
		saved = []
	
	let assetLength = Object.keys(api).length
	let index = 0

	try {
		saved = JSON.parse(window.localStorage.getItem('saved'))
		window.localStorage.setItem(JSON.stringify(saved))
	}
	catch(e) {
		saved = backedUrls
	}
	
	let pass = saved.length >= assetLength

	for(const [key, val] of Object.entries(api)) {
		let src
		if(pass) {
			src = saved[index]
		}
		else {
			let keywords = val.title.split(' ')[0].toLowerCase()
			let possible = [keywords, 'homeless', 'veteran', 'homelessness', 'homeless', 'foodbank', 'vegetables', 'helping', 'volunteering', 'meal', 'refugee', 'army', 'poor', 'children']
			
			let params = convert({
				key: '17397834-d06bf1535286fc48ae3d887bc',
				q: possible[Math.floor(Math.random() * possible.length)],
				image_type: 'photo',
				page: Math.floor(Math.random() * 3) + 1,
				per_page: 4
			})
			
			let toFetch = `https://pixabay.com/api/?${params}`
			
			try {
				src = await fetch_xml(toFetch)
			}
			catch(e) {
				src = {hits: 0}
			}

			const generateLink = () => `https://loremflickr.com/400/400/${possible[Math.floor(Math.random() * possible.length)] || 'homelessness'}?seed=${Math.floor(Math.random() * 10000)}`

			src = src.hits.length > 0 ? src.hits[Math.floor(Math.random() * src.hits.length)].largeImageURL : generateLink()

			if(used.includes(src)) src = generateLink()
			
			used.push(src)
		}

		let div = document.createElement('div')
		div.className = 'card'
		div.setAttribute('data-title', val.summary == '' ? val.title : val.summary)

		let a = document.createElement('a')
		a.href = key.includes('http') ? key : `https://${key}`

		let image = document.createElement('img')
		image.setAttribute('data-src', src)

		a.appendChild(image)
		div.appendChild(a)
		toAppend.push(div)

		index++
		assetLoader.innerHTML = `${index}/${assetLength} <br>Fetching images...`
	}

	loader.className = 'fade-out'
	loader.onanimationend = () => {
		init(toAppend)
		loader.remove()
		window.localStorage.setItem('saved', JSON.stringify(used))
	}
})()