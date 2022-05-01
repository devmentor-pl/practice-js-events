const btnList = document.querySelectorAll('button')

const handleClick = function(e) {
    this.textContent = 'clicked'
    console.log('clicked')
    this.removeEventListener('click', handleClick)
}

btnList.forEach(function(item) {
    item.addEventListener('click', handleClick)
})