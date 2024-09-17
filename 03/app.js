document.addEventListener(
    'DOMContentLoaded',
    init
)

function init() {
    const buttonList = document.querySelectorAll('button')
    buttonList.forEach(function (button) {
        button.addEventListener(
            'click',
            click
        )
    })
}

const click = function (e) {
    console.log('Clicked')
    e.currentTarget.innerText = 'clicked'
    e.currentTarget.removeEventListener(
        'click',
        click
    )
}