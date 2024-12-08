const button = document.querySelector('button')

console.log(button)

const clickButton = function() {
    console.log('clicked')
}

button.addEventListener(
    'click',
    clickButton
)