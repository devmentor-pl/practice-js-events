const containers = document.querySelectorAll("div");
const body = document.querySelector("body");

containers.forEach(function (div) {
  div.addEventListener("click", function () {
    const time = this.dataset.time;
    console.log("clicked", this);
    setTimeout(() => {
      this.classList.add("clicked");
    }, time);
  });
});

body.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    containers.forEach(function (div) {
      div.classList.remove("clicked");
    });
  }
});