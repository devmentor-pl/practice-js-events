const div = document.querySelector("div");
console.log(div);

const enter = function () {
  console.log("Mouse entered the div!");
  div.style.backgroundColor = "pink";
};

const leave = function () {
  console.log("Mouse left the div!");
  div.style.backgroundColor = "yellow";
};

if (div) {
  div.addEventListener("mouseenter", enter);
  div.addEventListener("mouseleave", leave);
}
