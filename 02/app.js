const divEl = document.querySelector("div");

divEl.addEventListener("mousemove", function () {
	console.log("mouse is on the div");
});

divEl.addEventListener("mouseleave", function () {
	console.log("mouse is away from the div");
});
