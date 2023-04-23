const buttonsArray = Array.from(document.querySelectorAll('button'))

// const buttonClick = function () {
//     button.innerText = 'Clicked'
// }

for (let i = 0; i < buttonsArray.length; i++) {

    const button = buttonsArray[i]

    const onClick = function () {
        button.innerText = 'Clicked'
        console.log('Clicked')

        button.removeEventListener('click', onClick)
    }
        button.addEventListener('click', onClick)

}

