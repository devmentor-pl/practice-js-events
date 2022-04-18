(function () {
    const allDivs = document.querySelectorAll('div')
    const bodyElement = document.querySelector('body')

    // add clicked class to div after click
    const addClickedClass = function (e) {
        setTimeout(() => {
            e.target.classList.add('clicked')
        }, Number(this.getAttribute('data-time')))
    }

    const removeClickedClass = function (e) {
        if (e.target === bodyElement) {
            allDivs.forEach(div => div.classList.remove('clicked'))
        }
    }

    allDivs.forEach(div => div.addEventListener('click', addClickedClass))
    bodyElement.addEventListener('click', removeClickedClass)
}
)()