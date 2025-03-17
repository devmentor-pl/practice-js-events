const buttonElements = document.querySelectorAll('button')

const handleClick = function (e) {
    const button = e.target
    console.log('clicked')

    button.removeEventListener('click', handleClick)
}

buttonElements.forEach(function(button) {
    button.addEventListener('click', handleClick)
})
