window.addEventListener("DOMContentLoaded", () => {
  const div = document.querySelector("div");

  if (div) {
    div.addEventListener("mousemove", (e) => {
      e.target.innerText = "mousemove";
    });

    div.addEventListener("mouseleave", (e) => {
      e.target.innerText = "mouseleave";
    });
  }
});
