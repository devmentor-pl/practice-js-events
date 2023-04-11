const buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", handleClick);
});

function handleClick(e) {
  console.log("clicked");
  e.currentTarget.innerText = "clicked";
  e.currentTarget.removeEventListener("click", handleClick);
}
