const buttons = document.querySelectorAll('button')

const changeButtonText = function (e) {
    
    console.log('clicked')
    this.innerText = 'clicked'

    if (this.innerText === 'clicked') {
        this.removeEventListener('click', changeButtonText)
    }
}

buttons.forEach(function (button) {
    button.addEventListener('click', changeButtonText)
})