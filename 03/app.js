const btn = document.querySelectorAll('button')
const arr = [...btn]
const handleClick = function () {

    item.innerText = 'clicked'

}


arr.forEach(function (item) {
    item.addEventListener('click', handleClick)
    item.removeEventListener('click', handleClick)
})
