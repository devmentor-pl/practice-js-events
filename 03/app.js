const btn = document.querySelectorAll('button')
const arr = [...btn]
const handleClick = function () {

    item.innerText = 'clicked'
    item.removeEventListener('click', handleClick)
}


arr.forEach(function (item) {
    item.addEventListener('click', handleClick)

})
