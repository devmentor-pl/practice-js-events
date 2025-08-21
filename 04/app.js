const allDivs = document.querySelectorAll('div')
const bodyElement = document.querySelector('body')

const removeClass = function (e) {

    allDivs.forEach(function (e) {
        e.classList.remove('clicked')
    })
}

allDivs.forEach(function (div) {

    div.addEventListener('click',
        function () {

            const time = Number(div.dataset.time)
            const self = this
            setTimeout(function (e) {
                self.classList.add('clicked')
            }, time)
          
        })

})


bodyElement.addEventListener('click', removeClass)



