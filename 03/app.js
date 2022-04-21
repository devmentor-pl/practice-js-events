(function () {
    const allBtns = document.querySelectorAll('button');

    const setAsClicked = function () {

        console.log('clicked')
        this.textContent = "clicked"
        this.removeEventListener('click', setAsClicked)
    }

    allBtns.forEach(button => button.addEventListener('click', setAsClicked))
}


)()