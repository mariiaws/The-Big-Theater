"use strict";

let carousel = document.querySelector(".carousel");


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


    if (carousel.onmousedown){
        carousel.onmouseout = function () {
            document.removeEventListener('mousemove', onMouseMove);
            carousel.onmouseup = null;
        }
    }




    carousel.ondragstart = function () {
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



