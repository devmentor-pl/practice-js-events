function scripts() {
	const div = document.querySelector('div');

	function mouseMove() {
		console.log(`movemove is working`);
	}

	function mouseLeave() {
		console.log(`moseleave activated: u left object`);
	}
	if (div) {
		div.addEventListener('mousemove', mouseMove);
		div.addEventListener('mouseleave', mouseLeave);
	}
}
window.addEventListener('DOMContentLoaded', scripts);
