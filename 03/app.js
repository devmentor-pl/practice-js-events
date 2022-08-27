const btnList = document.querySelectorAll('button');
console.log(btnList);


btnList.forEach(function(btn){
    btn.addEventListener('click', onClick);
});

function onClick(e){
    console.log('clicked');
    e.currentTarget.innerText = 'clicked';
    e.currentTarget.removeEventListener('click', onClick)
}