const btn = document.querySelector("button");

const handleClick = () => console.log("clicked");

if (btn) {
  btn.addEventListener("click", handleClick);
}
