const divsArr = document.querySelectorAll('div');

function addClass() {
	this.classList.add('clicked');
}

divsArr.forEach((el) => {
	el.addEventListener('click', addClass);
});

