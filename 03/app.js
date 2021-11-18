const btns = document.querySelectorAll("button");

const oneClickEvent = function () {
  let counter = 0;
  counter++;
  this.innerText = "clicked";
  console.log("clicked");
  if ((counter = 1)) {
    this.removeEventListener("click", oneClickEvent);
  }
};

btns.forEach(function (btnElement) {
  btnElement.addEventListener("click", oneClickEvent);
});
