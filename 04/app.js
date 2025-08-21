const divsList = document.querySelectorAll('div');

// 1

/*const addClass = (e) => {
	e.currentTarget.classList.add('clicked');
	e.stopPropagation();
};

divsList.forEach((item) => {
	item.addEventListener('click', addClass);
});*/

// 2

const removeClass = () => {
	divsList.forEach((item) => {
		item.classList.remove('clicked');
	});
};

document.body.addEventListener('click', removeClass, true);

// 3

const addClassWithDelay = (e) => {
	const eventCurrrentTarget = e.currentTarget;
	setTimeout(() => {
		eventCurrrentTarget.classList.add('clicked');
	}, getDelayTime(e));
};

const getDelayTime = (e) => {
	const time = e.currentTarget.dataset.time;
	return time;
};

divsList.forEach((item) => {
	item.addEventListener('click', addClassWithDelay);
});
