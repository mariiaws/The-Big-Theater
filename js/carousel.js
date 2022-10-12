"use strict";

let carousel = document.querySelector(".carousel-wrapper");

carousel.onmousedown = function (event) {

    let shiftX = event.clientX - carousel.getBoundingClientRect().left;

    moveAt(event.pageX);

    // переносит мяч на координаты (pageX),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX) {
        carousel.style.left = pageX - shiftX + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
    }

    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);

    // отпустить мяч, удалить ненужные обработчики
    carousel.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        carousel.onmouseup = null;

    };

    //отпускает карусель когда выходит за пределы
    if (carousel.onmousedown) {
        carousel.onmouseout = function () {
            document.removeEventListener('mousemove', onMouseMove);
            carousel.onmouseup = null;
        }
    }

    carousel.ondragstart = function () {
        return false;
    };

};

function hoverLoupe() {
    let backgroundLoupeOne = document.querySelector(".background-loupe-one");
    let backgroundLoupeTwo = document.querySelector(".background-loupe-two");
    let backgroundLoupeThree = document.querySelector(".background-loupe-three");
    let backgroundLoupeFour = document.querySelector(".background-loupe-four");

    let loupe = document.querySelectorAll(".loupe-one, .loupe-two, .loupe-three, .loupe-four");
    let loupeOne = document.querySelector(".loupe-one");
    let loupeTwo = document.querySelector(".loupe-two");
    let loupeThree = document.querySelector(".loupe-three");
    let loupeFour = document.querySelector(".loupe-four");


    loupe.forEach(item => {
        item.style.display = "none";
    })

    function showLoupe() {
        backgroundLoupeOne.onmouseover = function () {
            loupeOne.style.display = "flex";
        }

        backgroundLoupeTwo.onmouseover = function () {
            loupeTwo.style.display = "flex";
        }

        backgroundLoupeThree.onmouseover = function () {
            loupeThree.style.display = "flex";
        }

        backgroundLoupeFour.onmouseover = function () {
            loupeFour.style.display = "flex";
        }
    }
    showLoupe();

    function hideLoupe() {
        backgroundLoupeOne.onmouseout = function () {
            loupeOne.style.display = "none"
        }

        backgroundLoupeTwo.onmouseout = function () {
            loupeTwo.style.display = "none"
        }

        backgroundLoupeThree.onmouseout = function () {
            loupeThree.style.display = "none"
        }

        backgroundLoupeFour.onmouseout = function () {
            loupeFour.style.display = "none"
        }
    }
    hideLoupe();
}

hoverLoupe();
