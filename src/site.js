"use strict";

var siteData = getData();
window.onload = RunScripts();

function RunScripts() {
  updateFooter();
  GenerateContent();
}

function updateFooter() {
  var currentDate = new Date();
  document.getElementById("footerText").innerHTML = "Design & Development Arkadiusz Czernecki, Copyright &#169; ".concat(currentDate.getFullYear());
}

function switchNavbar() {
  var navbar = document.getElementById("navBar");
  var navbtn = document.getElementById("navbtn");

  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }

  if (navbtn.className === "fa fa-bars") {
    navbtn.className = "fas fa-times";
  } else {
    navbtn.className = "fa fa-bars";
  }
}

function Submit() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var category = document.getElementById('category').value;
  var subject = encodeURIComponent(document.getElementById('subject').value);
  var message = encodeURIComponent(document.getElementById('message').value);
  var link = "mailto:info@corkcitypromotion.org" + "?subject=[" + category + "] " + subject + "&body=" + "Dear Mr/Ms,%0D%0A" + message + "%0D%0A%0D%0A" + "Best Regards%0D%0A" + fname + " " + lname + "%0D%0A" + email;
  window.location.href = link;
}

function GenerateContent() {
  var eventsInfo = document.getElementById("events");
  var attractionsInfo = document.getElementById("attractions");
  var guesthousesInfo = document.getElementById("guesthouses");
  var hotelsInfo = document.getElementById("hotels");
  var cafeInfo = document.getElementById("cafe");
  var wineInfo = document.getElementById("wine");
  var pubInfo = document.getElementById("pub");
  var restInfo = document.getElementById("rest");

  if (eventsInfo) {
    GenerateEvents(eventsInfo);
  }

  if (attractionsInfo) {
    GenerateAttractions(attractionsInfo);
  }

  if (guesthousesInfo) {
    GenerateGuesthouses(guesthousesInfo);
  }

  if (hotelsInfo) {
    GenerateHotels(hotelsInfo);
  }

  if (cafeInfo) {
    GenerateCafe(cafeInfo);
  }

  if (pubInfo) {
    GeneratePub(pubInfo);
  }

  if (wineInfo) {
    GenerateWine(wineInfo);
  }

  if (restInfo) {
    GenerateRest(restInfo);
  }
}

function GenerateEvents(target) {
  siteData.events.forEach(function (element) {
    target.innerHTML += GenerateEventCard(element);
  });
}

function GenerateAttractions(target) {
  siteData.attractions.forEach(function (element) {
    target.innerHTML += GenerateCard(element, "attractions");
  });
}

function GenerateGuesthouses(target) {
  siteData.stay.guesthouses.forEach(function (element) {
    target.innerHTML += GenerateCard(element, "stay");
  });
}

function GenerateHotels(target) {
  siteData.stay.hotels.forEach(function (element) {
    target.innerHTML += GenerateCard(element, "stay");
  });
}

function GenerateCafe(target) {
  siteData.drink.coffee.forEach(function (element) {
    target.innerHTML += GenerateCard(element, "drink");
  });
}

function GenerateWine(target) {
  siteData.drink.wine.forEach(function (element) {
    target.innerHTML += GenerateCard(element, "drink");
  });
}

function GeneratePub(target) {
  siteData.drink.beer.forEach(function (element) {
    target.innerHTML += GenerateCard(element, "drink");
  });
}

function GenerateRest(target) {
  siteData.eat.forEach(function (element) {
    target.innerHTML += GenerateCard(element, "drink");
  });
}

function GenerateCard(element, imageFolder) {
  var name = element.name;
  var description = element.description;
  var address = element.address;
  var phone = element.phone;
  var email = element.email;
  var image = element.image;
  var website = element.website;
  var location = element.locaton;
  var htmlString = "\n        <div class=\"card\">\n            <header>\n                <h3>".concat(name, "</h3>\n            </header>\n            <div class=\"cardContent clearfix\">\n                <p>\n                    <a href=\"").concat(location, "\" target=\"_blank\"><i class=\"fas fa-map-marker-alt\"></i>").concat(address, "</a>\n                    <a href=\"tel:").concat(phone.replace(/\s/g, ''), "\"><i class=\"fas fa-phone\"></i>").concat(phone, "</a>\n                    <a href=\"mailto:").concat(email, "\"><i class=\"fas fa-envelope\"></i>").concat(email, "</a>                    \n                </p>\n                <p>\n                </p>\n                <hr>\n                <img src=\"images/").concat(imageFolder, "/").concat(image, "\" alt=\"").concat(name, " poster or advertisement\">\n                <p>").concat(description, "</p><br>\n            </div>\n            <div>\n                <a href=\"").concat(website, "\" target=\"_blank\">Go to the website</a>\n            </div>\n        </div>\n        ");
  return htmlString;
}

function GenerateEventCard(element) {
  var name = element.name;
  var description = element.description;
  var date = element.date;
  var venue = element.venue;
  var image = element.image;
  var website = element.website;
  var htmlString = "\n    <div class=\"card\">\n        <header>\n            <h3>".concat(name, "</h3>\n        </header>\n        <div class=\"cardContent clearfix\">\n            <p>").concat(date, "</p>\n            <p>").concat(venue, "</p>\n            <hr>\n            <img src=\"images/events/").concat(image, "\">\n            <p>").concat(description, "</p><br>\n        </div>\n        <div>\n            <a href=\"").concat(website, "\" target=\"_blank\">Visit event website</a>\n        </div>\n    </div>\n    ");
  return htmlString;
}

function getData() {
  var data = JSON.parse("\n    {\n        \"events\": [\n            {\n                \"name\": \"Quarter Block Party\",\n                \"description\": \"Presented by Makeshift Ensemble and Southern Hospitality Board for the fifth year running, the festival will sprawl through the city's streets and venues with over 50 music, art and theatre performances.\",\n                \"date\": \"08 Feb - 10 Feb 2019\",\n                \"venue\": \"Various venues\",\n                \"image\": \"ev1.png\",\n                \"website\": \"http://quarterblockparty.com/\"\n            },\n            {\n                \"name\": \"Cork French Film Festival\",\n                \"description\": \"The Cork French Film Festival screens the best in French and international features, documentaries and short films. Our programme includes Irish premi\xE8res and provides direct access to top international film-makers with Q&A screenings and master classes.\",\n                \"date\": \"24 Feb - 04 Mar 2019\",\n                \"venue\": \"Various venues\",\n                \"image\": \"ev2.jpg\",\n                \"website\": \"https://www.corkfrenchfilmfestival.com/\"\n            },\n            {\n                \"name\": \"Ortus Chamber Music Festival\",\n                \"description\": \"Come to a superb programme of chamber music in Cork City and County performed by an outstanding line-up of Irish and international musicians - Mair\xE9ad Hickey, Patrick Rafter and American William Hagen on violin, Sin\xE9ad O'Halloran and Ella van Poucke from the Netherlands on cello, the celebrated Irish pianist Michael McHale, UK violist Timothy Ridout, clarinettist Jessie Grimes and Clare piper Fergal Breen. From much loved Beethoven and Schumann to recent compositions by Irish composers, it is a musical treat on our doorstep not to be missed!\",\n                \"date\": \"March 1st 2019 Friday \u2013 8pm\",\n                \"venue\": \"Aula Maxima, University College Cork\",\n                \"image\": \"ev3.png\",\n                \"website\": \"http://ortusfestival.ie/\"\n            },\n            {\n                \"name\": \"St. Patrick's Day Festival\",\n                \"description\": \"The 4 day family event, which runs from 17-20 March, will be visual feast with a kaleidoscope of colour and pageantry in celebration of the National holiday. It is expected to attract over 80,000 people to the City over the weekend.\",\n                \"date\": \"15 Mar - 18 Mar 2019\",\n                \"venue\": \"Various venues\",\n                \"image\": \"ev4.jpg\",\n                \"website\": \"https://www.corkcity.ie/en/cork-st-patrick-s-festival/\"\n            }\n        ],\n        \"attractions\":[\n            {\n                \"name\": \"CIT Blackrock Castle Observatory\",\n                \"description\": \"Housed in a historic 16th century fort with panoramic views of Cork harbour, Blackrock Castle is today home to a research observatory, science centre and a beautiful caf\xE9/restaurant serving lunch and dinner.\",\n                \"address\": \"Castle Rd, Blackrock, Cork\",\n                \"phone\": \"+353 21 435 7917\",\n                \"email\": \"info@bco.ie\",\n                \"website\": \"http://www.bco.ie/\",\n                \"image\": \"at1.jpg\",\n                \"locaton\": \"https://goo.gl/maps/SgeGmAqFDuT2\"\n            },\n            {\n                \"name\": \"Cork City Gaol\",\n                \"description\": \"This Cork heritage centre is renowned for its wax figures. Step back in time to see what 19th / early 20th Century life was like in Cork - inside and outside the prison walls. Amazingly lifelike wax figures, furnished cells, sound effects and fascinating exhibitions.\",\n                \"address\": \"Sunday's Well, Cork City\",\n                \"phone\": \"+353 21 430 5022\",\n                \"email\": \"info@corkcitygaol.com\",\n                \"website\": \"http://www.corkcitygaol.com/\",\n                \"image\": \"at2.jpg\",\n                \"locaton\": \"https://goo.gl/maps/kG5EmYz2oP82\"\n            }\n        ],\n        \"stay\": {\n            \"guesthouses\": [\n                {\n                    \"name\": \"Garnish Guesthouse\",\n                    \"description\": \"Enjoy your bed & breakfast in our attractive Georgian Guest House right opposite the beautiful grounds of UCC, the University College Cork, ideally located for city shoppers, lovers of nightlife or those who prefer quieter pursuits such as leisurely strolls along the river bank, parks and historic sites of Cork City. Our luxury B&B on Western Road Cork.\",\n                    \"address\": \"18 Western Rd, Mardyke, Cork\",\n                    \"phone\": \"+353 21 427 5111\",\n                    \"email\": \"info@garnish.ie\",\n                    \"website\": \"http://www.garnish.ie/\",\n                    \"image\": \"gh1.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/Yw79aReUhVz\"\n                },\n                {\n                    \"name\": \"Redclyffe Guesthouse\",\n                    \"description\": \"Overlooking Fitzgerald Park, The Redclyffe Guesthouse is opposite University College Cork. Cork city centre is a 10-minute walk and Redclyffe offers free Wi-Fi, free parking and traditional breakfasts.\",\n                    \"address\": \"1 Western Rd, Mardyke, Cork\",\n                    \"phone\": \"+353 21 427 3220\",\n                    \"email\": \"info@redclyffe.com\",\n                    \"website\": \"http://www.redclyffe.com/\",\n                    \"image\": \"gh2.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/PhCAjcCGCzA2\"\n                }\n            ],\n            \"hotels\": [\n                {\n                    \"name\": \"Ambassador Hotel & Health Club Cork\",\n                    \"description\": \"For anyone wishing to experience the true essence of the wonderful City of Cork, what better hotel to stay than at the elegant newly refurbished Ambassador Hotel & Health Club, Cork. Presiding with an air of grandness from the top of Military Hill in the historic area of St. Luke\u2019s, this is the perfect location for business or leisure in the heart of Cork City.\",\n                    \"address\": \"Military Hill, St Luke's, Cork\",\n                    \"phone\": \"+353 21 453 9000\",\n                    \"email\": \"info@ambassadorhotel.ie\",\n                    \"website\": \"http://www.ambassadorhotel.ie/\",\n                    \"image\": \"ho1.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/uNE3Ngu3z5M2\"\n                },\n                {\n                    \"name\": \"Clayton Hotel Cork City\",\n                    \"description\": \"Clayton Hotel Cork City is Cork's premier 4 Star city centre hotel and is superbly located overlooking Cork's famous River Lee and facing the inspired architecture of City Hall.\",\n                    \"address\": \"Lapp's Quay, Centre, Cork\",\n                    \"phone\": \"+353 21 422 4900\",\n                    \"email\": \"res.corkcity@claytonhotels.com\",\n                    \"website\": \"https://www.claytonhotelcorkcity.com/\",\n                    \"image\": \"ho2.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/cuzyyvDfYXE2\"\n                },\n                {\n                    \"name\": \"Jurys Inn Cork\",\n                    \"description\": \"Whether you\u2019re exploring the local sights, visiting for business or catching a ferry from the port, Jurys Inn Cork is ideally located for your stay in this beautiful coastal city. We know the little details matter, and that\u2019s why we have everything from stylish yet comfortable rooms, on-site restaurants, events spaces and more at our hotel in Cork.\",\n                    \"address\": \"Anderson's Quay, Cork\",\n                    \"phone\": \"+353 21 494 3000\",\n                    \"email\": \"jurysinncork@jurysinns.com\",\n                    \"website\": \"https://www.jurysinns.com/hotels/cork\",\n                    \"image\": \"ho3.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/Vsbc4WuLr5B2\"\n                }\n            ]\n        },\n        \"drink\": {\n            \"wine\": [\n                {\n                    \"name\": \"Meades Wine Bar\",\n                    \"description\": \"Meades Wine bar is serving excellent wines and local produce in an authentic Georgian ambience.\",\n                    \"address\": \"126 Oliver Plunkett St, Cork\",\n                    \"phone\": \"+353 21 427 1530\",\n                    \"email\": \"info@meades126.com\",\n                    \"website\": \"http://www.meades126.com/\",\n                    \"image\": \"wb1.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/J4s8o4ws1Cz\"\n                },\n                {\n                    \"name\": \"L\u2019ATITUDE 51 Wine Caf\xE9\",\n                    \"description\": \"Award-winning fully-licenced Wine Bar in Cork City, open for morning coffee, lunch and light evening meals. We serve a wide selection of organic, biodynamic & natural wine and honest and simple food based on traditional home-cooking found in French Bistros and Italian Trattorias. We choose wines and ingredients that respect the environment in which they are grown and that taste of their origin, making every effort to work with seasons. We work with local producers wherever we can.\",\n                    \"address\": \"1 Union Quay, Cork\",\n                    \"phone\": \"+353 21 239 0219\",\n                    \"email\": \"info@latitude51.ie\",\n                    \"website\": \"http://www.latitude51.ie/\",\n                    \"image\": \"wb2.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/rt2wEHyxb1n\"\n                }\n            ],\n            \"beer\": [\n                {\n                    \"name\": \"The Oliver Plunkett\",\n                    \"description\": \"We are a traditional Irish pub named after the famous Oliver Plunkett street in Cork City. Famous for the atmosphere built on music and dance that has long been a sweet spot for many looking for a great night out.\",\n                    \"address\": \"116 Oliver Plunkett Street, Cork\",\n                    \"phone\": \"+353 21 422 2779\",\n                    \"email\": \"info@theoliverplunkett.com\",\n                    \"website\": \"https://www.theoliverplunkett.com/\",\n                    \"image\": \"br1.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/ZVHWGhHKDru\"\n                },\n                {\n                    \"name\": \"Dennehy's Bar\",\n                    \"description\": \"Opened in 1957 & on Cork\u2019s Cornmarket Street (Coal Quay) is one of the last few remaining original authentic old pubs in Cork City. In the Dennehy family for over 60 Years & run entirely by Mary Dennehy & Sons, it has seen many changes to its surrounding environment. Amid developments, progress and technology, Dennehy\u2019s has remained true to the tradition and heritage of what a real traditional Irish pub should be, while embracing new light through old windows.\",\n                    \"address\": \"11 Cornmarket St, Cork\",\n                    \"phone\": \"+353 21 427 2343\",\n                    \"email\": \"info@dennehysbar.com\",\n                    \"website\": \"http://www.dennehysbar.com\",\n                    \"image\": \"br2.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/16LwBCFg7nn\"\n                }\n            ],\n            \"coffee\": [\n                {\n                    \"name\": \"Perry St Market Cafe\",\n                    \"description\": \"Take a seat at Perry St and relax over breakfast, lunch or one of our famous cakes and a coffee! We have a super space for you to chill out and watch the world go by. Check out our Facebook page for some mouth watering visuals! So if it is some locally sourced produce prepared simply and served with gusto then this is the place for you!\",\n                    \"address\": \"Perry St, Cork\",\n                    \"phone\": \"+353 21 427 8776\",\n                    \"email\": \"info@perrystreet.ie\",\n                    \"website\": \"http://www.perrystreet.ie/\",\n                    \"image\": \"ca1.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/f8SdS15uCjx\"\n                },\n                {\n                    \"name\": \"Cafe Gusto\",\n                    \"description\": \"af\xE9 Gusto continues a long tradition of selling coffee at 3 Washington Street. The site was converted to a caf\xE9 from an antique shop in the summer of 1941, when the O\u2019Brien family took up the lease at a rent of \xA311 per month. Not only was their coffee renowned but also their ice cream was every kid\u2019s dream, especially when made up into their divine birthday cakes.\",\n                    \"address\": \"3 Washington Street, Cork\",\n                    \"phone\": \"+353 21 425 4446\",\n                    \"email\": \"info@cafegusto.com\",\n                    \"website\": \"http://cafegusto.com/\",\n                    \"image\": \"ca2.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/w5tAZgzRq2S2\"\n                }\n            ]\n        },\n        \"eat\": [\n            {\n                \"name\": \"Ninja Sushi Bento\",\n                \"description\": \"Set in the heart of Cork, Ireland, NINJA SUSHI BENTO is proud to offer the finest selection of sushi and Japanese cuisine. Our mission is to deliver a delicious yet affordable dining experience to our customers. Our chefs are focused on creating distinctive dishes made with the freshest ingredients. NINJA\u2019s menu features everything from traditional sashimi to terriyaki chicken, katsu, specialty rolls, and tempura.\",\n                \"address\": \"1 Grand Parade Cork\",\n                \"phone\": \"+353 21 241 1878\",\n                \"email\": \"NinjaSushiBento@hotmail.com\",\n                \"website\": \"http://ninjasushibento.ie/\",\n                \"image\": \"re1.jpg\",\n                \"locaton\": \"https://goo.gl/maps/vLohvywn6YM2\"\n            },\n            {\n                \"name\": \"Ichigo Ichie\",\n                \"description\": \"Guests will experience Japanese haute-cuisine as Chef Miyazaki performs his kaiseki multi-course tasting menu with elaborately prepared dishes that represent the seasons.\",\n                \"address\": \"No5 Sheares St, Cork\",\n                \"phone\": \"+353 21 427 9997\",\n                \"email\": \"info@ichigoichie.ie\",\n                \"website\": \"https://ichigoichie.ie/\",\n                \"image\": \"re2.jpg\",\n                \"locaton\": \"https://goo.gl/maps/S1WGDLHbyg72\"\n            }\n        ]\n    }\n    ");
  console.log(data);
  return data;
}