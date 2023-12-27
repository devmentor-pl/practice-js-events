const buttonList = document.querySelectorAll("button");
console.log(buttonList);

const handleClick = (e) => {
	if (!e.target.clicked) {
		e.currentTarget.textContent = "clicked";
        console.log("clicked");
        console.log( e.currentTarget.clicked = true);
	}else{
        console.log((e.currentTarget.clicked = false));
    }
};

buttonList.forEach((btn) => {
	btn.addEventListener("click", handleClick);
});
