"use strict"

let animateLinesHamburger = document.querySelector(".hamburger").addEventListener("click", function () {

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



