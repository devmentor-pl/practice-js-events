const divList = document.querySelectorAll("div");
const body = document.querySelector("body");

/*const addClassClicked = function (e) {
  if (e.target === e.currentTarget) {
    setTimeout(function () {
      e.target.classList.add("clicked");
      //console.log(e.target);
    }, e.target.getAttribute("data-time"));
  }
};*/

const addClassClicked = function (e) {
  if (e.target === e.currentTarget) {
    setTimeout(function () {
      e.target.classList.add("clicked");
      //console.log(e.target);
    }, e.target.getAttribute("data-time"));
  }
};

divList.forEach(function (div) {
  div.addEventListener("click", addClassClicked);
});

const removeClassClicked = function (e) {
  if (e.target === e.currentTarget) {
    divList.forEach((div) => {
      div.classList.remove("clicked");
    });
  }
};

body.addEventListener("click", removeClassClicked);
