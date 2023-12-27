document.addEventListener("DOMContentLoaded", function () {
	const divEl = document.querySelector("div");
	console.log(divEl);

	divEl.addEventListener("mousemove", () => {
		console.log("Poruszm myszką po DIV-ie");
	});

	divEl.addEventListener("mouseleave", () => {
		console.log("Opuszczam DIV");
	});
});
