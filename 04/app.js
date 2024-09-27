// 4.01
const divList = document.querySelectorAll('div')
console.log(divList)
const body = document.querySelector('body')


if (divList) {
    divList.forEach(function (item) {
        item.addEventListener('click', function (e) {
            const currentDiv = this
            const time = currentDiv.dataset.time
            setTimeout(function () {
                currentDiv.classList.add('clicked')
            }
                , time)
            if (currentDiv.parentElement === body) {
                e.stopImmediatePropagation()
            }
        }
        )
    })
}


const removeClicked = function (e) {
    divList.forEach(function (item) {
        item.classList.remove('clicked')
    })

}
if (divList) {
    body.addEventListener('click', removeClicked)
}