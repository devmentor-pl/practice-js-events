const buttonList = document.querySelectorAll('button')

const eventFn = function() {
    this.innerText = 'clicked'
    console.log('clicked')
    this.removeEventListener('click', eventFn)
}

buttonList.forEach(function(btn) {
    btn.addEventListener('click', eventFn)
})