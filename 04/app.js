let divs = document.querySelectorAll('div');
let body = document.querySelector('body');

const addClassInTime = (target) => {
	setTimeout(() => {
		target.classList.add('clicked');
	}, target.getAttribute('data-time'));
	target.parentElement.getAttribute('data-time') && addClassInTime(target.parentElement);
};

const divClickHandle = (e) => {
	addClassInTime(e.target);
};

const bodyClickHandle = (e) => {
	if (e.target === body) {
		divs.forEach((d) => d.classList.remove('clicked'));
	}
};

divs.forEach((div) => div.addEventListener('click', divClickHandle));

body.addEventListener('click', bodyClickHandle);
