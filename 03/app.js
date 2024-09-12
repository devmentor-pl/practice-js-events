const buttons = document.querySelectorAll("button")

const handleClick = function (e) {
    e.target.textContent = 'clicked'

    console.log('clicked')

    e.target.removeEventListener('click', handleClick)
}

buttons.forEach((btn) => {
    btn.addEventListener('click', handleClick)
})