const btnElement = document.querySelector('button')

const handleClick = function(e) {
    console.log('clicked')
}

if(btnElement) {
    btnElement.addEventListener('click', handleClick)
}