const divEl = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

const addCliClass = function () {
    const el = this;
    const time = el.dataset.time;

    setTimeout(function () {
        el.classList.add("clicked");
    
    }, time);
};

const removCliClass = function (e) {
    if (bodyEl === e.currentTarget) {
        divEl.forEach(function (divElement) {
            divElement.classList.remove("clicked");
        });
    }
};

divEl.forEach(function (divElement) {
    divElement.addEventListener("click", addCliClass);
});

bodyEl.addEventListener("click", removCliClass);
