const btnsList = document.querySelectorAll('button');

const showText = function (e) {
	e.target.innerText = 'clicked';
	console.log('clicked');
	e.target.removeEventListener('click', showText);
};

btnsList.forEach(function (item) {
	item.addEventListener('click', showText);
});
