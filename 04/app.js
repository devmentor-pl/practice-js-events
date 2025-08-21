const divs = document.querySelectorAll('div')
const body = document.querySelector('body')
divs.forEach((div) => {
    div.addEventListener('click', addClicked)
})
body.addEventListener('click', removeClicked)

function addClicked(e) {
    const time = this.dataset.time
    const div = this
    const delay = setTimeout(addClass, time)
    if (this.classList.contains('grandparent')) e.stopPropagation()
    function addClass() {
        div.classList.add('clicked')
        clearTimeout(delay)
    } 
}
function removeClicked() {
    divs.forEach((div) => {
        div.classList.remove('clicked')
    })
}