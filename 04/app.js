const divElements = document.querySelectorAll('div');

divElements.forEach(function (item) {
	item.addEventListener('click', addClass);
});

function addClass(e) {
    let time = this.dataset.time;
	const thisDiv = this;
	setTimeout(function () {
        thisDiv.classList.add('clicked');
	}, time);
}

function removeClass(e) {
    if (e.target === e.currenTarget) {
        divElements.forEach(function (item) {
            item.classList.remove('clicked');
		});
	}
}

document.body.addEventListener('click', removeClass);
