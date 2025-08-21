function handleClick(event) {
    event.target.textContent = "clicked";
    
    console.log("clicked");

    event.target.removeEventListener('click', handleClick);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick)
});