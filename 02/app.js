document.addEventListener('DOMContentLoaded', function () {
	const div = document.querySelector('div');

	div.addEventListener('mousemove', function () {
		console.log('kursor nad divem');
	});

	div.addEventListener('mouseleave', function () {
		console.log('kursor zjechał z diva');
	});
});
