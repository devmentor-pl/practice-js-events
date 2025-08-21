const divList = document.querySelectorAll("div");
const body = document.querySelector("body");

divList.forEach(element => {
  element.addEventListener("click", colorSquare);
});

body.addEventListener("click", function (e) {
  if (e.target !== this) {
    return null;
  }
  divList.forEach(function (element) {
    element.classList.remove("clicked");
  });
});

function colorSquare(e) {

  if(e.target.getAttribute('class') === 'parent') {
    e.stopPropagation();
  }

  const timer = this.dataset.time;
  setTimeout(() => {
    this.classList.add("clicked");
  }, timer);
}