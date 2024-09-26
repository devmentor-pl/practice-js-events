const divEl = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

const addClass = function (e) {
    
    const this1 = this
        
    setTimeout(function () {
        this1.classList.add("clicked");
    }, this1.dataset.time);
};

const removeClass = function (e) {
    
    if(e.target === e.currentTarget) {
        divEl.forEach(function(element){
            element.classList.remove("clicked")
        });
    }
};

if(divEl && bodyEl) {
    divEl.forEach(function(element) {
        element.addEventListener("click", addClass);
    });
    
    bodyEl.addEventListener("click", removeClass, true);
};