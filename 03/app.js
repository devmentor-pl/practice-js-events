const btnsList = document.querySelectorAll('button')
const button = document.querySelector('button')

const buttonClicked = function(e) {
    console.log('Clicked')
    this.innerText = 'clicked'
}

btnsList.forEach(function(item) {
    item.addEventListener('click', buttonClicked)
})
