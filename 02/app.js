const divEl = document.querySelector("div");

if (divEl) {
	divEl.addEventListener("mousemove", function () {
		console.log("mouse is on the div");
	});

	divEl.addEventListener("mouseleave", function () {
		console.log("mouse is away from the div");
	});
}
