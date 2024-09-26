const divEl = document.querySelector("div");
if (divEl) {
  divEl.addEventListener("mousemove", () => console.log("mouse move"));
  divEl.addEventListener("mouseleave", () => console.log("mouse leave"));
}
