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


//Validation form

let form = document.forms[0];
let name = form.elements.name;
let tell = form.elements.tel;

let mail = form.elements.email;
let btn = form.elements.btn;

let re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$/u;
let telReg = "^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$";


function checkTell() {
    window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(document.querySelectorAll(".form-label__input-tel"), function (input) {
            let keyCode;

            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                let matrix = "+7 (___)-___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a //ищет и заменяет
                    });
                i = new_value.indexOf("_");
                if (i != -1) { //тут убираются чёрточки у маски
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i);
                }
                let reg = matrix.substr(0, this.value.length).replace(/_+/g, //заменяет циферки на чёрточки
                    function (a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");//подставляет циферки в регулярку
                reg = new RegExp("^" + reg + "$");//создаёт сво регулярку
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5) this.value = "";//ничего не ввёл и ушёл с элемента, тогда в поле ввода пусто

                tell.onchange = function () {
                    if (new_value.length < 18) {
                        tell.style.border = "1px solid #ff0000";

                    } else tell.style.border = "";

                }


            }


            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)

        });

    });

}

checkTell()


function email() {
    let dog;
    mail.onblur = mail.style.border = "";
    dog = mail.value.includes("@");

    if (!dog) {
        mail.style.border = "1px solid #ff0000";
    } else mail.style.border = "";


}

email()

btn.addEventListener("click", (event) => event.preventDefault())

