var buttonMinus = document.getElementById("minus")
var buttonPlus = document.getElementById("plus")
var buttonInput = document.getElementById("input")
var dollar = document.getElementById("dollar")
buttonMinus.setAttribute("disabled", "disabled")
var valuecount
var dollar = document.getElementById("dollar").innerText
function totalPrice() {
    var total = valuecount * dollar;
    document.getElementById("dollar").innerText = total;
}
buttonPlus.addEventListener("click", function () {
    valuecount = document.getElementById("input").value;
    valuecount++;
    document.getElementById("input").value = valuecount;
    if (valuecount > 1) {
        document.getElementById("minus").removeAttribute("disabled");
        document.getElementById("minus").classList.remove("disabled");
    }
    totalPrice();
});
buttonMinus.addEventListener("click", function () {
    valuecount = document.getElementById("input").value;
    valuecount--;
    document.getElementById("input").value = valuecount;
    if (valuecount == 1) {
        document.getElementById("minus").setAttribute("disabled", "disabled");
    }
    totalPrice();
});

var wrapper = document.querySelector(".wrapper")
var example = document.querySelector(".example")

function openPop() {
    wrapper.classList.add("close")
    example.classList.add("open")

    setTimeout(() => {
        window.location.href="./index2.html"
    }, 5000);
}