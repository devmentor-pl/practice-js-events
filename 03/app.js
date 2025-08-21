const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach(function(item) {

    const buttonClicked = function() {
    
        console.log('clicked')
        item.innerText = 'clicked'
    
        item.removeEventListener (
            'click',
            buttonClicked
        )

    }

    item.addEventListener(
        'click',
        buttonClicked
    )

})