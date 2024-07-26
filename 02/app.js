document.addEventListener('DOMContentLoaded', function () {
	const divElements = document.querySelectorAll('div');

	if (divElements.length > 0) {
		divElements.forEach(function (div) {
			div.addEventListener('mousemove', function () {
				console.log('Kursor porusza się nad elementem.');
			});

			div.addEventListener('mouseout', function () {
				console.log('Kursor opuścił element.');
			});
		});
	}
});
