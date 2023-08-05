document.addEventListener('DOMContentLoaded', init);

function init() {
    const btnList = document.querySelectorAll('button');
    
    const clickHandler = function(e) {
        console.log('clicked')
        e.currentTarget.innerText = 'clicked';
        e.currentTarget.removeEventListener('click', clickHandler)
    }
    
    btnList.forEach(function(btn){
        btn.addEventListener('click', clickHandler)
    })
}
