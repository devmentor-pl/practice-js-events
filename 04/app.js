const divList = document.querySelectorAll("div");
const body = document.querySelector("body");

divList.forEach(colorSquares);

body.addEventListener("click", function (e) {
  if (e.target !== this) {
    return null;
  }
  divList.forEach(function (element) {
    element.classList.remove("clicked");
  });
});

function colorSquares(element) {
  if (element.getAttribute("class") === "child") {
    element.addEventListener("click", ColorAllSquares);
  } else {
    element.addEventListener("click", ColorTheSquare);
  }
}

function ColorAllSquares(e) {
  e.stopPropagation();
  divList.forEach(function (ele) {
    const timer = ele.dataset.time;
    setTimeout(() => {
      ele.classList.add("clicked");
    }, timer);
  });
}

function ColorTheSquare(e) {
  e.stopPropagation();
  const timer = this.dataset.time;
  setTimeout(() => {
    this.classList.add("clicked");
  }, timer);
}
