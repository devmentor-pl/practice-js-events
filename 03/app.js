const btnsList = document.querySelectorAll('button');

const showText = function (e) {
	e.target.innerText = 'clicked';
	console.log('clicked');

	let value = 1;
	value++;
	if (value > 1) {
		e.target.removeEventListener('click', showText);
	}
};

btnsList.forEach(function (item) {
	item.addEventListener('click', showText);
});
