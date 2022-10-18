"use strict";

let carousel = document.querySelector(".carousel-wrapper");

carousel.onmousedown = function (event) {

    let shiftX = event.clientX - carousel.getBoundingClientRect().left;

    moveAt(event.pageX);

    // переносит карусель на координаты (pageX),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX) {
        carousel.style.left = pageX - shiftX + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
    }

    // передвигаем карусель при событии mousemove
    document.addEventListener('mousemove', onMouseMove);

    // отпустить карусель, удалить ненужные обработчики
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


let carouselMain = document.querySelector(".carousel");

carousel.ontouchstart = function () {

    console.log("ontouchmove");

    carouselMain.style.overflow = "scroll";
    carouselMain.style.overflowY = "hidden";

}


let backgroundLoupeOne = document.querySelector(".background-loupe-one");
let backgroundLoupeTwo = document.querySelector(".background-loupe-two");
let backgroundLoupeThree = document.querySelector(".background-loupe-three");
let backgroundLoupeFour = document.querySelector(".background-loupe-four");

let loupeTextOne = document.querySelector(".loupe-text-one");
let loupeTextTwo = document.querySelector(".loupe-text-two");
let loupeTextThree = document.querySelector(".loupe-text-three");
let loupeTextFour = document.querySelector(".loupe-text-four");

let loupe = document.querySelectorAll(".loupe-one, .loupe-two, .loupe-three, .loupe-four");
let loupeOne = document.querySelector(".loupe-one");
let loupeTwo = document.querySelector(".loupe-two");
let loupeThree = document.querySelector(".loupe-three");
let loupeFour = document.querySelector(".loupe-four");

let scrollNo;

function hoverLoupe() {

    loupe.forEach(item => {
        item.style.display = "none";
    })

    function showLoupe() {
        backgroundLoupeOne.onmouseover = function () {
            loupeOne.style.display = "flex";
            loupeTextOne.style.opacity = "0"
        }

        backgroundLoupeTwo.onmouseover = function () {
            loupeTwo.style.display = "flex";
            loupeTextTwo.style.opacity = "0"

        }

        backgroundLoupeThree.onmouseover = function () {
            loupeThree.style.display = "flex";
            loupeTextThree.style.opacity = "0"

        }

        backgroundLoupeFour.onmouseover = function () {
            loupeFour.style.display = "flex";
            loupeTextFour.style.opacity = "0"

        }
    }

    showLoupe();

    function hideLoupe() {
        backgroundLoupeOne.onmouseout = function () {
            loupeOne.style.display = "none"
            loupeTextOne.style.opacity = "1"

        }

        backgroundLoupeTwo.onmouseout = function () {
            loupeTwo.style.display = "none"
            loupeTextTwo.style.opacity = "1"

        }

        backgroundLoupeThree.onmouseout = function () {
            loupeThree.style.display = "none"
            loupeTextThree.style.opacity = "1"

        }

        backgroundLoupeFour.onmouseout = function () {
            loupeFour.style.display = "none"
            loupeTextFour.style.opacity = "1"

        }
    }

    hideLoupe();

}

hoverLoupe();


loupeOne.addEventListener("click", function () {

    let winDialog = document.createElement("div");
    winDialog.className = "window-dialog";
    winDialog.innerHTML = " <div class=\"window-background\"></div>\n" +
        " <span class=\"button-close\"></span>\n" +
        " <div class=\"window-dialog-wrapper\">\n" +
        "<img src=\"img/oscar-2020.png\" height=\"600\" width=\"443\" class=\"window-image\" alt=\"Оскар 2020\"/>\n" +
        " </div>\n" +
        " </div>";

    document.body.append(winDialog);

    let winBack = document.querySelector(".window-dialog");
    scrollNo = document.body.style.overflowY = "hidden";

    winBack.addEventListener("click", function () {
        winDialog.remove();
        scrollNo = document.body.style.overflowY = "";

    })

})


loupeTwo.addEventListener("click", function () {

    let winDialog = document.createElement("div");
    winDialog.className = "window-dialog";
    winDialog.innerHTML = " <div class=\"window-background\"></div>\n" +
        " <span class=\"button-close\"></span>\n" +
        " <div class=\"window-dialog-wrapper\">\n" +
        " <img src=\"img/general-staff.png\" height=\"600\" width=\"443\" class=\"window-image\" alt=\"Здание главного штаба\"/>\n" +
        " </div>\n" +
        " </div>";

    document.body.append(winDialog);

    let winBack = document.querySelector(".window-dialog");
    scrollNo = document.body.style.overflowY = "hidden";

    winBack.addEventListener("click", function () {
        winDialog.remove();
        scrollNo = document.body.style.overflowY = "";

    })
})

loupeThree.addEventListener("click", function () {
    console.log("click");

    let winDialog = document.createElement("div");
    winDialog.className = "window-dialog";
    winDialog.innerHTML = " <div class=\"window-background\"></div>\n" +
        "        <span class=\"button-close\"></span>\n" +
        "        <div class=\"window-dialog-wrapper\">\n" +
        "        <img src=\"img/golden-gramophone.png\" class=\"window-image\" height=\"600\" width=\"443\" alt=\"Золотой граммофон\"/>\n" +
        "        </div>\n" +
        "    </div>";

    document.body.append(winDialog);

    let winBack = document.querySelector(".window-dialog");
    scrollNo = document.body.style.overflowY = "hidden";

    winBack.addEventListener("click", function () {
        winDialog.remove();
        scrollNo = document.body.style.overflowY = "";

    })
})


loupeFour.addEventListener("click", function () {

    let winDialog = document.createElement("div");
    winDialog.className = "window-dialog";
    winDialog.innerHTML = " <div class=\"window-background\"></div>\n" +
        " <span class=\"button-close\"></span>\n" +
        " <div class=\"window-dialog-wrapper\">\n" +
        " <img src=\"img/nutcracker.png\" height=\"600\" width=\"443\" class=\"window-image\" alt=\"Щелкунчик\"/>\n" +
        " </div>\n" +
        " </div>";

    document.body.append(winDialog);

    let winBack = document.querySelector(".window-dialog");
    scrollNo = document.body.style.overflowY = "hidden";

    winBack.addEventListener("click", function () {
        winDialog.remove();
        scrollNo = document.body.style.overflowY = "";

    })
})



