const buttons = document.querySelectorAll('button')
const clicked = function() {
    this.innerText = 'clicked'
    console.log('clicked')
    this.removeEventListener('click',clicked)
}
buttons.forEach(button => {
    button.addEventListener('click',clicked)
});