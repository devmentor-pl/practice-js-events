const allBtn = document.querySelectorAll('button')

function isClicked() {
    this.innerText = 'clicked'
    console.log('clicked')
    this.removeEventListener('click', isClicked)
}

allBtn.forEach((btn) => {
    btn.addEventListener('click', isClicked)
})