const buttonList = document.querySelectorAll("button");
console.log(buttonList);

const handleClick = (e) => {
	e.currentTarget.textContent = "clicked"
    console.log('clicked')

    e.currentTarget.removeEventListener('click', handleClick)
};

buttonList.forEach((btn) => {
	btn.addEventListener("click", handleClick);
});
