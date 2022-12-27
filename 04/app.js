const divList = document.querySelectorAll('div')

divList.forEach(function(element) {
    element.addEventListener(
        'click',
        handleClick
    )
});

function handleClick() {
    this.classList.add('clicked')
};
