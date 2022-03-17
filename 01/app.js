const btn = document.querySelector('button');

const btnClick = function(){
    console.log('clicked');
}

if (btn) {
     btn.addEventListener('click',btnClick);
}