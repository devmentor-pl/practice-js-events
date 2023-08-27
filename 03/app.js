const btnList = document.querySelectorAll('button');

const changeText = function () {
	this.innerText = 'clicked';
	console.log('clicked');
	this.removeEventListener('click', changeText);
};

btnList.forEach(function (btn) {
	btn.addEventListener('click', changeText);
});
