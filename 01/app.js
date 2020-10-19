const btnElement = document.querySelector('button');

const handleClick = function(){
    console.log('clicked')
}

if(btnElement){
    btnElement.addEventListener('click', handleClick);
}