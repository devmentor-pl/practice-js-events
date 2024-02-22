const setStatus = function(e) {
    this.innerText = 'clicked';
}

const buttons = document.querySelectorAll('button')

if(buttons) {
    buttons.forEach(function(item){
        item.addEventListener('click', setStatus)
    })
}
