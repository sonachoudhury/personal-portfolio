var elements = [document.querySelector("footer"), document.getElementById("ieImg"), document.getElementById("wrapper"), document.getElementById("thank"), document.getElementById("y"), document.getElementById("ou")];
var alertBlue = document.querySelector(".alertBlue");
var alertRed = document.querySelector(".alertRed");
var btn = document.querySelector("footer .btn");

btn.addEventListener("mousedown", function () {
    document.getElementById("top").classList.add("top-click");
    document.getElementById("body").classList.add("body-click");
    alertBlue.classList.remove("active");
}, false);

btn.addEventListener("click", function () {
    alertRed.classList.add("active");
    window.setTimeout(activate, 400);
}, false);

function activate() {
    requestAnimationFrame(function () {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("active");
        }

        window.setTimeout(function () {
            alertBlue.classList.add("active");
            document.getElementById("top").classList.remove("top-click");
            document.getElementById("body").classList.remove("body-click");
            alertRed.classList.remove("active");
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove("active");
            }
        }, 7500);
    })
}