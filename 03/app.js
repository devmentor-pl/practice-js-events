const buttonElements = document.querySelectorAll('button')

const changeText = function () {

    this.innerText = 'clicked'
    console.log('clicked')

    if (this.innerText === 'clicked') {
        this.removeEventListener('click', changeText)
    }
}

buttonElements.forEach(function (element) {
    element.addEventListener('click', changeText)

})






