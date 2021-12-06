const btn = document.querySelector('button');
const showText = function(){
    console.log('button was clicked');
}

btn && btn.addEventListener('click', showText);