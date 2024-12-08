const btns = document.querySelector('button');


const showText = function() {
    console.log('clicked');
}

if(btns !== null) {
    btns.addEventListener('click', showText);
}


