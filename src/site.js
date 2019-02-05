window.onload = RunScripts();

function RunScripts() {
    updateFooter();

}

function updateFooter() {
    var currentDate = new Date();
    document.getElementById("footerText").innerHTML = `Design & Coding by Arek, Copyright &#169; ${currentDate.getFullYear()}`
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