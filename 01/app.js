const btn = document.querySelector("button");

function handleClick() {
  console.log("clicked");
}

if (btn) {
  btn.addEventListener("click", handleClick);
}
