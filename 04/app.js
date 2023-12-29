const divEl = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

const addCliClass = function () {
    const el = this;
    const time = el.dataset.time;

    setTimeout(function () {
        el.classList.add("clicked");
    
    }, time);
};

