// const grandparentDiv = document.querySelector('.grandparent')
// const parentDiv = document.querySelector('.parent')
// const childDiv = document.querySelector('.child')

// console.log(grandparentDiv, parentDiv, childDiv, bodyEl);

const divList = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

//funkcja dodająca klase clicked: pkt 01

const addClassClicked = (e) => {
	const clickedElement = e.currentTarget 
	const delayTime = parseInt(e.target.dataset.time, 10) || 0;

	setTimeout(() => {
		clickedElement.classList.add("clicked");
	}, delayTime);
};

// funkcja usuwająca klasę clicked: pkt 02

const removeClassClicked = (e) => {
	if (e.currentTarget.tagName === e.target.tagName) {
		const divClicked = document.querySelectorAll("div.clicked");

		divClicked.forEach((div) => {
			div.classList.remove("clicked");
		});
		console.log(divClicked);
	} 
};

// listenery:
divList.forEach((item) => {
	item.addEventListener("click", addClassClicked);
});
bodyEl.addEventListener("click", removeClassClicked);
