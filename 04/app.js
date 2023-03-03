const divList = document.querySelectorAll("div");

const addClass = function (e) {
  e.currentTarget.classList.add("clicked");
  console.log(e.currentTarget);
  console.log(e.target);
};

const timeOut = function (e) {
  time = this.getAttribute("data-time");
  setTimeout(addClass, time);
};

const removeClass = function () {
  divList.forEach(function (div) {
    div.classList.remove("clicked");
  });
};

const propagation = function (e) {
  if (this.tagName === "DIV") {
    e.stopImmediatePropagation();
  }
  if (this.tagName === "BODY") {
    removeClass();
  }
};

divList.forEach(function (div) {
  div.addEventListener("click", timeOut);
  div.addEventListener("click", addClass);
  div.addEventListener("click", propagation);
  document.body.addEventListener("click", propagation);
});

const child = document.querySelector(".child");

child.addEventListener("click", function () {
  divList.forEach(function (div) {
    //div.addEventListener("click", timeOut);
    div.classList.add("clicked");
  });
});
