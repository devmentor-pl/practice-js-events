const btn = document.querySelector("button");

const showTextEvent = function () {
  console.log("clicked");
};

btn.addEventListener("click", showTextEvent);
