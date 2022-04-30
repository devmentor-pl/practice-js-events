const boxList = document.querySelectorAll('div')
const body = document.querySelector('body')

const boxClick = function(e) {
    this.classList.add('clicked')
}

const bodyClick = function(e) {
    if(e.target === e.currentTarget) {
        boxList.forEach(function(item) {
            item.classList.remove('clicked')
        })
    }
}

boxList.forEach(function(item) {
    item.addEventListener('click', boxClick)
})

body.addEventListener('click', bodyClick)