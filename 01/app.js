const btn = document.querySelector('button');
function showText(){
    console.log('button was clicked');
}

btn && btn.addEventListener('click',showText);