const btnEl = document.querySelector('button');

if(btnEl){
    btnEl.addEventListener('click', handleClick);
}

function handleClick() {
    console.log('clicked');
}
