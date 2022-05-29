const buttonsList = document.querySelectorAll('button')
console.log(buttonsList)

if (buttonsList) {
    buttonsList.forEach(function (item) {
        item.addEventListener('click', function () {

            if (item.innerText !== 'clicked') {
                console.log('clicked')
                item.innerText = 'clicked'
            }
        })
    }
    )
}
