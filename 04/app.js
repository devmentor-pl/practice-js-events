

const divs = document.querySelectorAll('div');
divs.forEach(function (div) {
    div.addEventListener('click', function (e) {
        this.classList.add('clicked');
		// div.classList.add('clicked');
		console.log(e.currentTarget);
		// e.stopPropagation();
	});
});




document.body.addEventListener('click', function (e) {
    if(e.target === document.body) {
        divs.forEach(function (div) {
            div.classList.remove('clicked');
        });
    }
})




document.querySelectorAll('.grandparent, .parent, .child').forEach((div) => {
	div.addEventListener('click', function () {
		// Odczytanie czasu opóźnienia z dataset
		const delay = parseInt(this.dataset.time, 10);

		// Ustawienie timeout, aby opóźnić zmianę koloru
		setTimeout(() => {
			// Zmiana koloru tła na losowy
			this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
		}, delay);
	});
});