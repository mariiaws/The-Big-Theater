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



