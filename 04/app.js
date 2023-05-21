const divList = document.querySelectorAll('div')

const handleClick = function (element, action) {
    element.classList[action]('clicked')
}

divList.forEach(div => {
    div.addEventListener('click', function () {
        const dataTime = div.getAttribute('data-time')
        setTimeout(() => {
            handleClick(div, 'add')
        }, dataTime)
    })

})

document.body.addEventListener('click', function () {
    divList.forEach(div => handleClick(div, 'remove'))
})

