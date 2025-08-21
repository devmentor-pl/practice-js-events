const body = document.querySelector('body');
const dives = document.querySelectorAll('div');

function addClassName(e) {
	const timer = this.dataset.time;
	const delayPainting = () => {
		if (this.tagName === 'DIV') {
			this.classList.add('clicked');
			e.stopPropagation();
		}
	};
	setTimeout(delayPainting, timer);
}
function removeClassName() {
	dives.forEach(div => {
		div.classList.remove('clicked');
	});
}

dives.forEach(function (div) {
	div.addEventListener('click', addClassName);
});
body.addEventListener('click', removeClassName);
