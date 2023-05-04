const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", clickHandler);
});

const TEXT = "clicked";

function clickHandler(e) {
  const element = e.currentTarget;
  console.log(TEXT);
  element.innerText = TEXT;
  element.removeEventListener("click", clickHandler);
}
