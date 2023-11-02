const divList = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");
divList.forEach(function (element) {
    element.addEventListener("click", function () {
        console.log("click", this);

        const time = this.dataset.time;
        const myDiv = this;
        setTimeout(function () {
            myDiv.classList.add("clicked");
        }, time);
    });
});

bodyEl.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
        divList.forEach(function (element) {
            element.classList.remove("clicked");
        });
    }
});
