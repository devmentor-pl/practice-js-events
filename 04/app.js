const divElements = document.querySelectorAll('div');

divElements.forEach(function (item) {
	item.addEventListener('click', addClass);
});

function addClass() {
	let time = this.dataset.time;
	const thisDiv = this;
	setTimeout(function () {
		thisDiv.classList.add('clicked');
	}, time);
}

document.body.addEventListener('click', function (e) {
	if (e.target === e.currentTarget) {
		divElements.forEach(function (el) {
			el.classList.remove('clicked');
		});
	}
});
