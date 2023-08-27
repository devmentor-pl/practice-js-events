const buttonElement = document.querySelector('button');

const handleClick = function(){
    console.log('clicked');
}

buttonElement.addEventListener('click', handleClick);