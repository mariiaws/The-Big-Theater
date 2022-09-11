

"use strict"


let click = document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".line-top").classList.toggle("opened");
  document.querySelector(".line-middle").classList.toggle("opened");
    document.querySelector(".line-bottom").classList.toggle("opened");
    this.setAttribute('aria-expanded',
        this.classList.contains('opened'));
});



