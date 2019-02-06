window.onload = RunScripts();

function RunScripts() {
    updateFooter();
    GenerateEvents();
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

function GenerateEvents() {
    let eventsInfo = document.getElementById("events");
    let eventData = JSON.parse(`
    {
        "events":[
            {
                "name": "Quarter Block Party",
                "description": "Presented by Makeshift Ensemble and Southern Hospitality Board for the fifth year running, the festival will sprawl through the city's streets and venues with over 50 music, art and theatre performances.",
                "date" : "08 Feb - 10 Feb 2019",
                "venue" : "Various venues",
                "image" : "ev1.png",
                "website" : "http://quarterblockparty.com/"
            },
            {
                "name": "Cork French Film Festival",
                "description": "The Cork French Film Festival screens the best in French and international features, documentaries and short films. Our programme includes Irish premières and provides direct access to top international film-makers with Q&A screenings and master classes.",
                "date" : "24 Feb - 04 Mar 2019",
                "venue" : "Various venues",
                "image" : "ev2.jpg",
                "website" : "https://www.corkfrenchfilmfestival.com/"
            },
            {
                "name": "Ortus Chamber Music Festival",
                "description": "Come to a superb programme of chamber music in Cork City and County performed by an outstanding line-up of Irish and international musicians - Mairéad Hickey, Patrick Rafter and American William Hagen on violin, Sinéad O'Halloran and Ella van Poucke from the Netherlands on cello, the celebrated Irish pianist Michael McHale, UK violist Timothy Ridout, clarinettist Jessie Grimes and Clare piper Fergal Breen. From much loved Beethoven and Schumann to recent compositions by Irish composers, it is a musical treat on our doorstep not to be missed!",
                "date" : "March 1st 2019 Friday – 8pm",
                "venue" : "Aula Maxima, University College Cork",
                "image" : "ev3.png",
                "website" : "http://ortusfestival.ie/"
            },
            {
                "name": "St. Patrick's Day Festival",
                "description": "The 4 day family event, which runs from 17-20 March, will be visual feast with a kaleidoscope of colour and pageantry in celebration of the National holiday. It is expected to attract over 80,000 people to the City over the weekend.",
                "date" : "15 Mar - 18 Mar 2019",
                "venue" : "Various venues",
                "image" : "ev4.jpg",
                "website" : "https://www.corkcity.ie/en/cork-st-patrick-s-festival/"
            }
        ]
    }
    `);
    console.log(eventData);
    eventData.events.forEach(element => {
        let name = element.name;
        let description = element.description;
        let date = element.date;
        let venue = element.venue;
        let image = element.image;
        let website = element.website;
        // etc...
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
                <a href="${website}">Visit event website</a>
            </div>
        </div>
        `);
        eventsInfo.innerHTML += htmlString;

    });
}

function blach() {
    $.ajax({
        dataType: "json",
        url: "events.json",
    }).done(function (resp) {
        for (var p in resp) {
            if (!resp.hasOwnProperty(p)) continue;
            var title = resp[p].title;
            var description = resp[p].description;
            // etc...
            console.log(title + " " + description);
        }
    });
}

function blech() {
    $.getJSON("events.json")
        .done(function (data) {
            $.each(data.items, function (i, item) {
                var title = item.title;
                var content = item.content;
                var date = item.date;
                var author = item.author;
                var image = item.image;

                // Here you can create each blog post and add append it into your blog

                // example:
                var title = $("<div/>", {
                    "class": "blog-title",
                    "text": title
                }).appendTo(container);
            });
        });
}