const btnsList = document.querySelectorAll('button')

const handleClick = function (e) {
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', handleClick)

}

btnsList.forEach(function (item) {
    item.addEventListener('click', handleClick)

})
