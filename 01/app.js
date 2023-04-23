const clickButton = function (){

    const button = document.querySelector('button')

    button.addEventListener(
        'click',
        function(){
            console.log('clicked')
        }
    )
}

clickButton()