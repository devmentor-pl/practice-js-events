const divs = document.querySelectorAll("div");
const body = document.querySelector("body");

if(divs && body){

divs.forEach(fillColor);

body.addEventListener("click", function (e) {
    divs.forEach(function (element) {
        element.classList.remove("clicked");
    });
});

function fillColor(element) {
    if(element.getAttribute("class") === "child") {
        element.addEventListener("click", allFit);
    } else {
        element.addEventListener("click", singleFit);
    }
}

function singleFit(e){
    e.stopPropagation();
    const timer = this.dataset.time;

    setTimeout(() => {
        this.classList.add("clicked");
    }, timer);
}

function allFit(e){
    e.stopPropagation();

    divs.forEach(function (ele) {
        const timer = ele.dataset.time;

        setTimeout(() => {
            ele.classList.add("clicked");
        }, timer);
    });
}}