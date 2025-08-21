const divElementsList = document.querySelectorAll('div')

divElementsList.forEach(function (element) {
    element.addEventListener(
        'click',
        function () {
            const time = this.dataset.time

            const self = this

            setTimeout(function () {
                self.classList.add('clicked')
            }, time)
        }
    )
})

const body = document.querySelector('body')

body.addEventListener(
    'click',
    (element) => {
        console.log('click on body')

        if (element.target === element.currentTarget) {
            divElementsList.forEach((element) => {
                element.classList.remove('clicked')
            })
        }

    }
)

// 4.03

