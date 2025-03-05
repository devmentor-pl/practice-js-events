const clickMeButton = document.querySelector('button')

if(clickMeButton) {
    clickMeButton.addEventListener('click', function () {
        console.log('clicked');
    })
}