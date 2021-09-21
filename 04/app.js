const divsArr = document.querySelectorAll('div');

// 4.1
function addClass(e) {
	this.classList.add('clicked');
	e.stopPropagation();
}
divsArr.forEach((el) => {
	el.addEventListener('click', addClass);
});

// 4.2
const body = document.querySelector('body');
function deleteClass() {
	divsArr.forEach((el) => {
		el.classList.remove('clicked');
	});
}
body.addEventListener('click', deleteClass);
