const divsArr = document.querySelectorAll('div');

// 4.1
/*
function addClass(e) {
	this.classList.add('clicked');
	e.stopPropagation();
}
*/
 
// 4.3
divsArr.forEach((el) => {
	el.addEventListener('click', function () {
		setTimeout(function addClass() {
			el.classList.add('clicked');
		}, el.getAttribute('data-time'));
	});
	console.log(Number(el.getAttribute('data-time')));
});

// 4.2
const body = document.querySelector('body');
function deleteClass() {
	divsArr.forEach((el) => {
		el.classList.remove('clicked');
	});
}
body.addEventListener('click', deleteClass);
