const allBtn = document.querySelectorAll("button");
const btnHandler = function () {
    this.innerText = "clicked";
    console.log("Clicked");

    this.removeEventListener("click", btnHandler);
};

allBtn.forEach(function (btn) {
    btn.addEventListener("click", btnHandler);
});
