const button = document.querySelector('button')

const handleClick = function (e) {
    console.log('clicked')
}

if (button) {
    button.addEventListener('click', handleClick)
}