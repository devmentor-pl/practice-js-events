const clickButton = function () {

    const button = document.querySelector('button')


    if (button) {


        button.addEventListener(
            'click',
            function () {
                console.log('clicked')
            }
        )
    }
}

clickButton()