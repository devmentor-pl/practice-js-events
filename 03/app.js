const btnsArr = document.querySelectorAll('button');
const changeText = function (e) {
	this.innerText = 'clicked';
	console.log('clicked');
};

btnsArr.forEach((el) => {
	el.addEventListener('click', changeText, { once: true });
});
