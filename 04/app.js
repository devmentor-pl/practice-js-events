const boxList = document.querySelectorAll('div')

const handleClick = function(e) {
    this.classList.add('clicked')
}

boxList.forEach(function(item) {
    item.addEventListener('click', handleClick)
})