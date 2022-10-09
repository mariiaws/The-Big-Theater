"use strict"

function animateHamburger() {
    let hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {

        document.querySelector(".nav").classList.toggle("nav-open")
        document.querySelector(".hamburger").classList.toggle("button-hamburger")
        document.querySelector(".line-top").classList.toggle("line-top-animate");
        document.querySelector(".line-middle").classList.toggle("line-middle-animate");
        document.querySelector(".line-bottom").classList.toggle("line-bottom-animate");

    });


    let openHamburger = document.querySelector(".hamburger");

    openHamburger.addEventListener("click", function () {

        document.querySelector(".hamburger-wrapper").classList.toggle("hamburger-open");

    });

}

animateHamburger();


//slider

function sliderZIndex() {
    let laScala = document.querySelector(".img-wrapper__la-scala").style.zIndex = "10";
    let gradient = document.querySelector(".img-background").style.zIndex = "9";

    document.querySelector(".arrows-previous").addEventListener("click", function () {

        if (laScala <= 8) {
            laScala = document.querySelector(".img-wrapper__la-scala").style.zIndex = "10";

        }

    });

    document.querySelector(".arrows-next").addEventListener("click", function () {
console.log("click");
        if (laScala >= 10) {
            laScala = document.querySelector(".img-wrapper__la-scala").style.zIndex = "8";

        }
    });

}

sliderZIndex();










