const divsList = document.querySelectorAll("div");

divsList.forEach(function (div) {
  div.addEventListener("click", function () {
    const divEl = this;
    addClass(divEl);
  });
});

function addClass(target) {
  const time = target.dataset.time;
  setTimeout(function () {
    target.classList.add("clicked");
  }, time);
}

const body = document.body;
console.log(body);

body.addEventListener("click", function (e) {
  if (e.target === document.body) {
    divsList.forEach(function (el) {
      el.classList.remove("clicked");
    });
  }
});
