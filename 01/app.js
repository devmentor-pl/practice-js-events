const handleClick = function () {
    console.log('clicked');
}
const clickMeButton = document.querySelector('button')
    
    if(clickMeButton) {
        clickMeButton.addEventListener('click', handleClick)}