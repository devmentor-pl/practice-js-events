const buttonsList = document.querySelectorAll('button');

const showText = function(e){
    this.innerText = 'clicked';
    console.log(this.innerText);

    // Lub

    // e.currentTarget.innerText = 'clicked';
    // console.log(e.currentTarget.innerText)
}

buttonsList.forEach(function(btn){
    btn.addEventListener('click', showText);
})