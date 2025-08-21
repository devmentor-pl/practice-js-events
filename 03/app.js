const btnsArr = document.querySelectorAll('button');

btnsArr.forEach((el) => {
	el.addEventListener(
		'click',
		function clickFunction() {
			this.innerText = 'clicked';
			console.log('clicked');
			el.removeEventListener('click', clickFunction, false);
		},
		false
	);
});
