const btnList = document.querySelectorAll('button')

const clicked = function (e) {
    console.log('clicked')
    e.currentTarget.textContent = 'clicked'
    e.currentTarget.removeEventListener('click', clicked)
}

btnList.forEach(function (item) {
    item.addEventListener('click', clicked)
})
