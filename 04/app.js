const divEl = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

const addClass = function () {
    
    const this1 = this

    setTimeout(function () {
        this1.classList.add("clicked");
    }, this1.dataset.time);
};

const removeClass = function () {
    
    divEl.forEach(function(element){
        element.classList.remove("clicked")
    });
};

if(divEl && bodyEl) {
    divEl.forEach(function(element) {
        element.addEventListener("click", addClass);
    });
    
    bodyEl.addEventListener("click", removeClass, true);
};