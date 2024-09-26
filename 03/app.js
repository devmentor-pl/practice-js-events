const allButtons = document.querySelectorAll('button');
const buttonElement = document.querySelector('button')

allButtons.forEach(function (item) {
    if (allButtons) {

        item.addEventListener('click', clickFunction);
        function clickFunction(e) {
            item.innerText = 'clicked';
            console.log('clicked');
            item.removeEventListener('click', clickFunction);

        }

    }
})
