let siteData = getData();

window.onload = RunScripts();

function RunScripts() {
    updateFooter();
    GenerateContent();
}

function updateFooter() {
    let currentDate = new Date();
    document.getElementById("footerText").innerHTML = `Design & Coding by Arek, Copyright &#169; ${currentDate.getFullYear()}`
}

function switchNavbar() {
    let navbar = document.getElementById("navBar");
    let navbtn = document.getElementById("navbtn");

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
    var email= document.getElementById('email').value;
    var category = document.getElementById('category').value;
    var subject = encodeURIComponent(document.getElementById('subject').value);
    var message = encodeURIComponent(document.getElementById('message').value);
    var link = "mailto:yourEmail@domain.com"
             + "?subject=[" + category + "] " + subject
             + "&body=" + "Dear Mr/Ms,%0D%0A" + message + "%0D%0A%0D%0A" + 
             + "Best Regards " + fname + " " + lname + "%0D%0A" + email;
    window.location.href = link;
}

function GenerateContent() {
    let eventsInfo = document.getElementById("events");
    let attractionsInfo = document.getElementById("attractions");
    let guesthousesInfo = document.getElementById("guesthouses");
    let hotelsInfo = document.getElementById("hotels");
    let cafeInfo = document.getElementById("cafe");
    let wineInfo = document.getElementById("wine");
    let pubInfo = document.getElementById("pub");
    let restInfo = document.getElementById("rest");

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
    siteData.events.forEach(element => {
        target.innerHTML += GenerateEventCard(element);
    });
}

function GenerateAttractions(target){
    siteData.attractions.forEach(element => {
        target.innerHTML += GenerateCard(element,"attractions");
    });
}

function GenerateGuesthouses(target){
    siteData.stay.guesthouses.forEach(element => {
        target.innerHTML += GenerateCard(element,"stay");
    });
}

function GenerateHotels(target) {
    siteData.stay.hotels.forEach(element => {
        target.innerHTML += GenerateCard(element,"stay");
    });
}

function GenerateCafe(target) {
    siteData.drink.coffee.forEach(element => {
        target.innerHTML += GenerateCard(element,"drink");
    });
}

function GenerateWine(target) {
    siteData.drink.wine.forEach(element => {
        target.innerHTML += GenerateCard(element,"drink");
    });
}

function GeneratePub(target) {
    siteData.drink.beer.forEach(element => {
        target.innerHTML += GenerateCard(element,"drink");
    });
}

function GenerateRest(target) {
    siteData.eat.forEach(element => {
        target.innerHTML += GenerateCard(element,"drink");
    });
}

function GenerateCard(element, imageFolder) {
    let name = element.name;
    let description = element.description;
    let address = element.address;
    let phone = element.phone;
    let email = element.email;
    let image = element.image;
    let website = element.website;
    let location = element.locaton;

    let htmlString = (`
        <div class="card">
            <header>
                <h3>${name}</h3>
            </header>
            <div class="cardContent clearfix">
                <p>
                    <a href="${location}"><i class="fas fa-map-marker-alt"></i>${address}</a>
                    <a href="tel:${phone.replace(/\s/g, '')}"><i class="fas fa-phone"></i>${phone}</a>
                    <a href="mailto:${email}"><i class="fas fa-envelope"></i>${email}</a>                    
                </p>
                <p>
                </p>
                <hr>
                <img src="images/${imageFolder}/${image}">
                <p>${description}</p><br>
            </div>
            <div>
                <a href="${website}" target="_blank">Go to the website</a>
            </div>
        </div>
        `);
    return htmlString;
}

function GenerateEventCard(element){
    let name = element.name;
    let description = element.description;
    let date = element.date;
    let venue = element.venue;
    let image = element.image;
    let website = element.website;

    let htmlString = (`
    <div class="card">
        <header>
            <h3>${name}</h3>
        </header>
        <div class="cardContent clearfix">
            <p>${date}</p>
            <p>${venue}</p>
            <hr>
            <img src="images/events/${image}">
            <p>${description}</p><br>
        </div>
        <div>
            <a href="${website}" target="_blank">Visit event website</a>
        </div>
    </div>
    `);
    return htmlString;
}

function getData() {
    let data = JSON.parse(`
    {
        "events": [
            {
                "name": "Quarter Block Party",
                "description": "Presented by Makeshift Ensemble and Southern Hospitality Board for the fifth year running, the festival will sprawl through the city's streets and venues with over 50 music, art and theatre performances.",
                "date": "08 Feb - 10 Feb 2019",
                "venue": "Various venues",
                "image": "ev1.png",
                "website": "http://quarterblockparty.com/"
            },
            {
                "name": "Cork French Film Festival",
                "description": "The Cork French Film Festival screens the best in French and international features, documentaries and short films. Our programme includes Irish premières and provides direct access to top international film-makers with Q&A screenings and master classes.",
                "date": "24 Feb - 04 Mar 2019",
                "venue": "Various venues",
                "image": "ev2.jpg",
                "website": "https://www.corkfrenchfilmfestival.com/"
            },
            {
                "name": "Ortus Chamber Music Festival",
                "description": "Come to a superb programme of chamber music in Cork City and County performed by an outstanding line-up of Irish and international musicians - Mairéad Hickey, Patrick Rafter and American William Hagen on violin, Sinéad O'Halloran and Ella van Poucke from the Netherlands on cello, the celebrated Irish pianist Michael McHale, UK violist Timothy Ridout, clarinettist Jessie Grimes and Clare piper Fergal Breen. From much loved Beethoven and Schumann to recent compositions by Irish composers, it is a musical treat on our doorstep not to be missed!",
                "date": "March 1st 2019 Friday – 8pm",
                "venue": "Aula Maxima, University College Cork",
                "image": "ev3.png",
                "website": "http://ortusfestival.ie/"
            },
            {
                "name": "St. Patrick's Day Festival",
                "description": "The 4 day family event, which runs from 17-20 March, will be visual feast with a kaleidoscope of colour and pageantry in celebration of the National holiday. It is expected to attract over 80,000 people to the City over the weekend.",
                "date": "15 Mar - 18 Mar 2019",
                "venue": "Various venues",
                "image": "ev4.jpg",
                "website": "https://www.corkcity.ie/en/cork-st-patrick-s-festival/"
            }
        ],
        "attractions":[
            {
                "name": "CIT Blackrock Castle Observatory",
                "description": "Housed in a historic 16th century fort with panoramic views of Cork harbour, Blackrock Castle is today home to a research observatory, science centre and a beautiful café/restaurant serving lunch and dinner.",
                "address": "Castle Rd, Blackrock, Cork",
                "phone": "+353 21 435 7917",
                "email": "info@bco.ie",
                "website": "http://www.bco.ie/",
                "image": "at1.jpg",
                "locaton": "https://goo.gl/maps/SgeGmAqFDuT2"
            },
            {
                "name": "Cork City Gaol",
                "description": "This Cork heritage centre is renowned for its wax figures. Step back in time to see what 19th / early 20th Century life was like in Cork - inside and outside the prison walls. Amazingly lifelike wax figures, furnished cells, sound effects and fascinating exhibitions.",
                "address": "Sunday's Well, Cork City",
                "phone": "+353 21 430 5022",
                "email": "info@corkcitygaol.com",
                "website": "http://www.corkcitygaol.com/",
                "image": "at2.jpg",
                "locaton": "https://goo.gl/maps/kG5EmYz2oP82"
            }
        ],
        "stay": {
            "guesthouses": [
                {
                    "name": "Garnish Guesthouse",
                    "description": "Enjoy your bed & breakfast in our attractive Georgian Guest House right opposite the beautiful grounds of UCC, the University College Cork, ideally located for city shoppers, lovers of nightlife or those who prefer quieter pursuits such as leisurely strolls along the river bank, parks and historic sites of Cork City. Our luxury B&B on Western Road Cork.",
                    "address": "18 Western Rd, Mardyke, Cork",
                    "phone": "+353 21 427 5111",
                    "email": "info@garnish.ie",
                    "website": "http://www.garnish.ie/",
                    "image": "gh1.jpg",
                    "locaton": "https://goo.gl/maps/Yw79aReUhVz"
                },
                {
                    "name": "Redclyffe Guesthouse",
                    "description": "Overlooking Fitzgerald Park, The Redclyffe Guesthouse is opposite University College Cork. Cork city centre is a 10-minute walk and Redclyffe offers free Wi-Fi, free parking and traditional breakfasts.",
                    "address": "1 Western Rd, Mardyke, Cork",
                    "phone": "+353 21 427 3220",
                    "email": "info@redclyffe.com",
                    "website": "http://www.redclyffe.com/",
                    "image": "gh2.jpg",
                    "locaton": "https://goo.gl/maps/PhCAjcCGCzA2"
                }
            ],
            "hotels": [
                {
                    "name": "Ambassador Hotel & Health Club Cork",
                    "description": "For anyone wishing to experience the true essence of the wonderful City of Cork, what better hotel to stay than at the elegant newly refurbished Ambassador Hotel & Health Club, Cork. Presiding with an air of grandness from the top of Military Hill in the historic area of St. Luke’s, this is the perfect location for business or leisure in the heart of Cork City.",
                    "address": "Military Hill, St Luke's, Cork",
                    "phone": "+353 21 453 9000",
                    "email": "info@ambassadorhotel.ie",
                    "website": "http://www.ambassadorhotel.ie/",
                    "image": "ho1.jpg",
                    "locaton": "https://goo.gl/maps/uNE3Ngu3z5M2"
                },
                {
                    "name": "Clayton Hotel Cork City",
                    "description": "Clayton Hotel Cork City is Cork's premier 4 Star city centre hotel and is superbly located overlooking Cork's famous River Lee and facing the inspired architecture of City Hall.",
                    "address": "Lapp's Quay, Centre, Cork",
                    "phone": "+353 21 422 4900",
                    "email": "res.corkcity@claytonhotels.com",
                    "website": "https://www.claytonhotelcorkcity.com/",
                    "image": "ho2.jpg",
                    "locaton": "https://goo.gl/maps/cuzyyvDfYXE2"
                },
                {
                    "name": "Jurys Inn Cork",
                    "description": "Whether you’re exploring the local sights, visiting for business or catching a ferry from the port, Jurys Inn Cork is ideally located for your stay in this beautiful coastal city. We know the little details matter, and that’s why we have everything from stylish yet comfortable rooms, on-site restaurants, events spaces and more at our hotel in Cork.",
                    "address": "Anderson's Quay, Cork",
                    "phone": "+353 21 494 3000",
                    "email": "jurysinncork@jurysinns.com",
                    "website": "https://www.jurysinns.com/hotels/cork",
                    "image": "ho3.jpg",
                    "locaton": "https://goo.gl/maps/Vsbc4WuLr5B2"
                }
            ]
        },
        "drink": {
            "wine": [
                {
                    "name": "Meades Wine Bar",
                    "description": "Meades Wine bar is serving excellent wines and local produce in an authentic Georgian ambience.",
                    "address": "126 Oliver Plunkett St, Cork",
                    "phone": "+353 21 427 1530",
                    "email": "info@meades126.com",
                    "website": "http://www.meades126.com/",
                    "image": "wb1.jpg",
                    "locaton": "https://goo.gl/maps/J4s8o4ws1Cz"
                },
                {
                    "name": "L’ATITUDE 51 Wine Café",
                    "description": "Award-winning fully-licenced Wine Bar in Cork City, open for morning coffee, lunch and light evening meals. We serve a wide selection of organic, biodynamic & natural wine and honest and simple food based on traditional home-cooking found in French Bistros and Italian Trattorias. We choose wines and ingredients that respect the environment in which they are grown and that taste of their origin, making every effort to work with seasons. We work with local producers wherever we can.",
                    "address": "1 Union Quay, Cork",
                    "phone": "+353 21 239 0219",
                    "email": "info@latitude51.ie",
                    "website": "http://www.latitude51.ie/",
                    "image": "wb2.jpg",
                    "locaton": "https://goo.gl/maps/rt2wEHyxb1n"
                }
            ],
            "beer": [
                {
                    "name": "The Oliver Plunkett",
                    "description": "We are a traditional Irish pub named after the famous Oliver Plunkett street in Cork City. Famous for the atmosphere built on music and dance that has long been a sweet spot for many looking for a great night out.",
                    "address": "116 Oliver Plunkett Street, Cork",
                    "phone": "+353 21 422 2779",
                    "email": "info@theoliverplunkett.com",
                    "website": "https://www.theoliverplunkett.com/",
                    "image": "br1.jpg",
                    "locaton": "https://goo.gl/maps/ZVHWGhHKDru"
                },
                {
                    "name": "Dennehy's Bar",
                    "description": "Opened in 1957 & on Cork’s Cornmarket Street (Coal Quay) is one of the last few remaining original authentic old pubs in Cork City. In the Dennehy family for over 60 Years & run entirely by Mary Dennehy & Sons, it has seen many changes to its surrounding environment. Amid developments, progress and technology, Dennehy’s has remained true to the tradition and heritage of what a real traditional Irish pub should be, while embracing new light through old windows.",
                    "address": "11 Cornmarket St, Cork",
                    "phone": "+353 21 427 2343",
                    "email": "info@dennehysbar.com",
                    "website": "http://www.dennehysbar.com",
                    "image": "br2.jpg",
                    "locaton": "https://goo.gl/maps/16LwBCFg7nn"
                }
            ],
            "coffee": [
                {
                    "name": "Perry St Market Cafe",
                    "description": "Take a seat at Perry St and relax over breakfast, lunch or one of our famous cakes and a coffee! We have a super space for you to chill out and watch the world go by. Check out our Facebook page for some mouth watering visuals! So if it is some locally sourced produce prepared simply and served with gusto then this is the place for you!",
                    "address": "Perry St, Cork",
                    "phone": "+353 21 427 8776",
                    "email": "info@perrystreet.ie",
                    "website": "http://www.perrystreet.ie/",
                    "image": "ca1.jpg",
                    "locaton": "https://goo.gl/maps/f8SdS15uCjx"
                },
                {
                    "name": "Cafe Gusto",
                    "description": "afé Gusto continues a long tradition of selling coffee at 3 Washington Street. The site was converted to a café from an antique shop in the summer of 1941, when the O’Brien family took up the lease at a rent of £11 per month. Not only was their coffee renowned but also their ice cream was every kid’s dream, especially when made up into their divine birthday cakes.",
                    "address": "3 Washington Street, Cork",
                    "phone": "+353 21 425 4446",
                    "email": "info@cafegusto.com",
                    "website": "http://cafegusto.com/",
                    "image": "ca2.jpg",
                    "locaton": "https://goo.gl/maps/w5tAZgzRq2S2"
                }
            ]
        },
        "eat": [
            {
                "name": "Ninja Sushi Bento",
                "description": "Set in the heart of Cork, Ireland, NINJA SUSHI BENTO is proud to offer the finest selection of sushi and Japanese cuisine. Our mission is to deliver a delicious yet affordable dining experience to our customers. Our chefs are focused on creating distinctive dishes made with the freshest ingredients. NINJA’s menu features everything from traditional sashimi to terriyaki chicken, katsu, specialty rolls, and tempura.",
                "address": "1 Grand Parade Cork",
                "phone": "+353 21 241 1878",
                "email": "NinjaSushiBento@hotmail.com",
                "website": "http://ninjasushibento.ie/",
                "image": "re1.jpg",
                "locaton": "https://goo.gl/maps/vLohvywn6YM2"
            },
            {
                "name": "Ichigo Ichie",
                "description": "Guests will experience Japanese haute-cuisine as Chef Miyazaki performs his kaiseki multi-course tasting menu with elaborately prepared dishes that represent the seasons.",
                "address": "No5 Sheares St, Cork",
                "phone": "+353 21 427 9997",
                "email": "info@ichigoichie.ie",
                "website": "https://ichigoichie.ie/",
                "image": "re2.jpg",
                "locaton": "https://goo.gl/maps/S1WGDLHbyg72"
            }
        ]
    }
    `);
    console.log(data);
    return data;
}
