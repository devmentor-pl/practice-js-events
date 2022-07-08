const init = function () {
	const div = document.querySelector("div");
	function showInfoMoving() {
		console.log(`Mouse is moving on div`);
	}
	function showInfoLeaving() {
		console.log("mouse moved out of the div");
	}
if (div !== null) {
	div.addEventListener("mousemove", showInfoMoving);
	div.addEventListener("mouseleave", showInfoLeaving);
}

};

document.addEventListener("DOMContentLoaded", init);
