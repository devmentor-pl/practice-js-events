const init = function() {
    const btns = document.querySelectorAll('button');
    const onClick = function (e) {
        const btnClicked = e.target;
        btnClicked.innerText = 'clicked';
        console.log(btnClicked, 'clicked');        
       
        btnClicked.removeEventListener('click', onClick);
    }

    btns.forEach(btn => {
        btn.addEventListener('click', onClick);
    })
}
document.addEventListener('DOMContentLoaded', init);
