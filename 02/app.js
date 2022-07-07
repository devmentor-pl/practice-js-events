const init = function () {
	const div = document.querySelector("div");
	function showInfoMoving() {
		console.log(`Mouse is moving on div`);
	}
	function showInfoLeaving() {
		console.log("mouse moved out of the div");
	}

	div.addEventListener("mousemove", showInfoMoving);
	div.addEventListener("mouseleave", showInfoLeaving);
};

document.addEventListener("DOMContentLoaded", init);
