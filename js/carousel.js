"use strict";
let carousel = document.querySelector(".our-productions__img");
let carMain = document.querySelector(".carousel");
let carouselWrapper = document.querySelector(".carousel-wrapper");
let carousels = document.querySelectorAll(".carousel-one .carousel-two .carousel-three .carousel-four");
let carouselOne = document.querySelector(".carousel-one");
let carouselTwo = document.querySelector(".carousel-two");
let carouselThree = document.querySelector(".carousel-three");
let carouselFour = document.querySelector(".carousel-four");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let width = 0;

let carouselWrap = carouselWrapper.offsetWidth;
let carMainWidth = carMain.offsetWidth;
let slideWidth = carouselOne.offsetWidth;
console.log(slideWidth + 'px');

let carouselWidth = carousel.offsetWidth;
//alert(carouselWidth);
let left = carMainWidth;

console.log(carMainWidth);
/*
carousel.addEventListener("mouseover", function () {
    console.log('mouseover');
    if (document.documentElement.clientWidth < 1760) {
        function carouselLeft() {


        }

        carouselLeft();

    }


})*/


    carouselWrapper.onmousedown = function (event) {

        let shiftX = event.clientX - carouselWrapper.getBoundingClientRect().left;
        document.querySelector(".our-productions__img").style.overflow = "hidden";


        moveAt(event.pageX);

        // переносит мяч на координаты (pageX),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX) {
            carouselWrapper.style.left = pageX - shiftX + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX);
        }

        // передвигаем мяч при событии mousemove
        document.addEventListener('mousemove', onMouseMove);

        // отпустить мяч, удалить ненужные обработчики
        carouselWrapper.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            carouselWrapper.onmouseup = null;
        };
        carouselWrapper.ondragstart = function () {
            return false;
        };


 /*       document.addEventListener("mouseup", onMouseUp);

        function onMouseUp () {

            adjustBallCoords();
            document.removeEventListener("mousemove", moveAt);
            document.removeEventListener("mouseup", onMouseUp);

            function adjustBallCoords () {

                let coords = ball.getBoundingClientRect();
                let left;
                let top;
                let clientWidth = document.documentElement.clientWidth;
                let clientHeight = document.documentElement.clientHeight;

                if (coords.left < 0) {
                    left = 0;
                } else if (coords.right > clientWidth) {
                    left = clientWidth - coords.width;
                }

                if (coords.top < 0) {
                    top = 0;
                } else if (coords.bottom > clientHeight) {
                    top = clientHeight - coords.height;
                }

                ball.style.left = left + "px";
                //ball.style.top = top + "px";
            }
        }*/





    };



