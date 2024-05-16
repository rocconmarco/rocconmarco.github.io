window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    var navbarContainer = document.getElementById("navbar-container");
    var logo = document.getElementById("logo");
    var navbarRightSection = document.getElementById("navbar-right-section");

    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        navbarContainer.style.height = "100px";
        logo.style.height = "100px";
        logo.src = "assets/images/alternative-logo-reduced.svg";

    } else {
        navbarContainer.style.height = "170px";
        logo.style.height = "100%";
        logo.src = "assets/images/alternative-logo.svg";

    }
}