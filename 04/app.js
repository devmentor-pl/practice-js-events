const divsList = document.querySelectorAll("div");

const addClass = function () {
  const timeDelay = this.dataset.time;
  const self = this;
  setTimeout(function () {
    self.classList.add("clicked");
  }, timeDelay);
};

const removeClass = function (e) {
  if (e.target === e.currentTarget) {
    divsList.forEach(function (divEl) {
      divEl.classList.remove("clicked");
    });
  }
};

divsList.forEach(function (divEl) {
  divEl.addEventListener("click", addClass);
});

document.body.addEventListener("click", removeClass);
