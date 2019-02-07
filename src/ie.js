"use strict";

var siteData = getData();

window.onload = RunScripts();

function RunScripts() {
    updateFooter();
    GenerateContent();
}

function updateFooter() {
    var currentDate = new Date();
    document.getElementById("footerText").innerHTML = "Design & Coding by Arek, Copyright &#169; " + currentDate.getFullYear();
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

function GenerateContent() {
    var eventsInfo = document.getElementById("events");
    var attractionsInfo = document.getElementById("attractions");
    var guesthousesInfo = document.getElementById("guesthouses");
    var hotelsInfo = document.getElementById("hotels");

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
}

function GenerateEvents(target) {
    siteData.events.forEach(function (element) {
        var name = element.name;
        var description = element.description;
        var date = element.date;
        var venue = element.venue;
        var image = element.image;
        var website = element.website;
        // etc...
        var htmlString = "\n        <div class=\"card\">\n            <header>\n                <h3>" + name + "</h3>\n            </header>\n            <div class=\"cardContent clearfix\">\n                <p>" + date + "</p>\n                <p>" + venue + "</p>\n                <hr>\n                <img src=\"images/events/" + image + "\">\n                <p>" + description + "</p><br>\n            </div>\n            <div>\n                <a href=\"" + website + "\">Visit event website</a>\n            </div>\n        </div>\n        ";
        target.innerHTML += htmlString;
    });
}

function GenerateGuesthouses(target) {}

function GenerateHotels(target) {
    siteData.stay.hotels.forEach(function (element) {
        var name = element.name;
        var description = element.description;
        var address = element.address;
        var phone = element.phone;
        var email = element.email;
        var image = element.image;
        var website = element.website;
        var location = element.locaton;
        // etc...
        var htmlString = "\n        <div class=\"card\">\n            <header>\n                <h3>" + name + "</h3>\n            </header>\n            <div class=\"cardContent clearfix\">\n                <p>\n                <a href=\"" + location + "\"><i class=\"fas fa-map-marker-alt\"></i>" + address + "</a> tel:" + phone + "\n                <a href=\"" + website + "\"><i class=\"far fa-tv\"></i>" + website + "</a></p>\n                <p>\n                    <a href=\"mailto:" + email + "\"><i class=\"far fa-envelope\"></i> " + email + "</a>\n                </p>\n                <hr>\n                <img src=\"images/stay/" + image + "\">\n                <p>" + description + "</p><br>\n            </div>\n            <div>\n                <a href=\"" + website + "\">Visit event website</a>\n            </div>\n        </div>\n        ";
        target.innerHTML += htmlString;
    });
}

function getData() {
    var data = JSON.parse("\n    {\n        \"events\": [\n            {\n                \"name\": \"Quarter Block Party\",\n                \"description\": \"Presented by Makeshift Ensemble and Southern Hospitality Board for the fifth year running, the festival will sprawl through the city's streets and venues with over 50 music, art and theatre performances.\",\n                \"date\": \"08 Feb - 10 Feb 2019\",\n                \"venue\": \"Various venues\",\n                \"image\": \"ev1.png\",\n                \"website\": \"http://quarterblockparty.com/\"\n            },\n            {\n                \"name\": \"Cork French Film Festival\",\n                \"description\": \"The Cork French Film Festival screens the best in French and international features, documentaries and short films. Our programme includes Irish premi\xE8res and provides direct access to top international film-makers with Q&A screenings and master classes.\",\n                \"date\": \"24 Feb - 04 Mar 2019\",\n                \"venue\": \"Various venues\",\n                \"image\": \"ev2.jpg\",\n                \"website\": \"https://www.corkfrenchfilmfestival.com/\"\n            },\n            {\n                \"name\": \"Ortus Chamber Music Festival\",\n                \"description\": \"Come to a superb programme of chamber music in Cork City and County performed by an outstanding line-up of Irish and international musicians - Mair\xE9ad Hickey, Patrick Rafter and American William Hagen on violin, Sin\xE9ad O'Halloran and Ella van Poucke from the Netherlands on cello, the celebrated Irish pianist Michael McHale, UK violist Timothy Ridout, clarinettist Jessie Grimes and Clare piper Fergal Breen. From much loved Beethoven and Schumann to recent compositions by Irish composers, it is a musical treat on our doorstep not to be missed!\",\n                \"date\": \"March 1st 2019 Friday \u2013 8pm\",\n                \"venue\": \"Aula Maxima, University College Cork\",\n                \"image\": \"ev3.png\",\n                \"website\": \"http://ortusfestival.ie/\"\n            },\n            {\n                \"name\": \"St. Patrick's Day Festival\",\n                \"description\": \"The 4 day family event, which runs from 17-20 March, will be visual feast with a kaleidoscope of colour and pageantry in celebration of the National holiday. It is expected to attract over 80,000 people to the City over the weekend.\",\n                \"date\": \"15 Mar - 18 Mar 2019\",\n                \"venue\": \"Various venues\",\n                \"image\": \"ev4.jpg\",\n                \"website\": \"https://www.corkcity.ie/en/cork-st-patrick-s-festival/\"\n            }\n        ],\n        \"stay\": {\n            \"guesthouses\": [\n                {\n                    \"name\": \"Garnish Guesthouse\",\n                    \"description\": \"Enjoy your bed & breakfast in our attractive Georgian Guest House right opposite the beautiful grounds of UCC, the University College Cork, ideally located for city shoppers, lovers of nightlife or those who prefer quieter pursuits such as leisurely strolls along the river bank, parks and historic sites of Cork City. Our luxury B&B on Western Road Cork.\",\n                    \"address\": \"18 Western Rd, Mardyke, Cork\",\n                    \"phone\": \"+353 21 427 5111\",\n                    \"email\": \"info@garnish.ie\",\n                    \"website\": \"http://www.garnish.ie/\",\n                    \"image\": \"gh1.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/Yw79aReUhVz\"\n                },\n                {\n                    \"name\": \"Redclyffe Guesthouse\",\n                    \"description\": \"Overlooking Fitzgerald Park, The Redclyffe Guesthouse is opposite University College Cork. Cork city centre is a 10-minute walk and Redclyffe offers free Wi-Fi, free parking and traditional breakfasts.\",\n                    \"address\": \"1 Western Rd, Mardyke, Cork, T12 D9P8\",\n                    \"phone\": \"+353 21 427 3220\",\n                    \"email\": \"info@redclyffe.com\",\n                    \"website\": \"http://www.redclyffe.com/\",\n                    \"image\": \"gh2.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/PhCAjcCGCzA2\"\n                }\n            ],\n            \"hotels\": [\n                {\n                    \"name\": \"Ambassador Hotel & Health Club Cork\",\n                    \"description\": \"For anyone wishing to experience the true essence of the wonderful City of Cork, what better hotel to stay than at the elegant newly refurbished Ambassador Hotel & Health Club, Cork. Presiding with an air of grandness from the top of Military Hill in the historic area of St. Luke\u2019s, this is the perfect location for business or leisure in the heart of Cork City.\",\n                    \"address\": \"Military Hill, St Luke's, Cork\",\n                    \"phone\": \"+353 21 453 9000\",\n                    \"email\": \"info@ambassadorhotel.ie\",\n                    \"website\": \"http://www.ambassadorhotel.ie/\",\n                    \"image\": \"ho1.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/uNE3Ngu3z5M2\"\n                },\n                {\n                    \"name\": \"Clayton Hotel Cork City\",\n                    \"description\": \"Clayton Hotel Cork City is Cork's premier 4 Star city centre hotel and is superbly located overlooking Cork's famous River Lee and facing the inspired architecture of City Hall.\",\n                    \"address\": \"Lapp's Quay, Centre, Cork, T12 RD6E\",\n                    \"phone\": \"+353 21 422 4900\",\n                    \"email\": \"res.corkcity@claytonhotels.com\",\n                    \"website\": \"https://www.claytonhotelcorkcity.com/\",\n                    \"image\": \"ho2.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/cuzyyvDfYXE2\"\n                },\n                {\n                    \"name\": \"Jurys Inn Cork\",\n                    \"description\": \"Whether you\u2019re exploring the local sights, visiting for business or catching a ferry from the port, Jurys Inn Cork is ideally located for your stay in this beautiful coastal city. We know the little details matter, and that\u2019s why we have everything from stylish yet comfortable rooms, on-site restaurants, events spaces and more at our hotel in Cork.\",\n                    \"address\": \"Anderson's Quay, Cork, T12 DCR9\",\n                    \"phone\": \"+353 21 494 3000\",\n                    \"email\": \"jurysinncork@jurysinns.com\",\n                    \"website\": \"https://www.jurysinns.com/hotels/cork\",\n                    \"image\": \"ho3.jpg\",\n                    \"locaton\": \"https://goo.gl/maps/Vsbc4WuLr5B2\"\n                }\n            ]\n        }\n    }\n    ");
    console.log(data);
    return data;
}