document.addEventListener("DOMContentLoaded", init);

function init() {
	const boxElement = document.querySelector("div");

	if (boxElement) {
		boxElement.addEventListener("mousemove", function () {
			console.log("Poruszasz się wewnątrz elementu");
		});

		boxElement.addEventListener("mouseleave", function () {
			console.log("Wyjechałeś poza dozwolony obszar!");
		});
	}
}
