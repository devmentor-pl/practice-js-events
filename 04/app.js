
const tagDiv = document.querySelectorAll('div');
const tagBody = document.querySelector('body');

const addClassClicked = (target) => {
	setTimeout(() => {
		target.classList.add('clicked');
	}, target.getAttribute('data-time'));
};

const tagDivClick = (e) => {
	addClassClicked(e.target);
};

const tagBodyClick = (e) => {
	if (e.target === tagBody) {
		for (let i = 0; i < tagDiv.length; i++) {
			tagDiv[i].classList.remove('clicked');
		}
	}
};

for (let i = 0; i < tagDiv.length; i++) {
	tagDiv[i].addEventListener('click', tagDivClick);
}

tagBody.addEventListener('click', tagBodyClick);
