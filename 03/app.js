const allButtons = document.querySelectorAll('button');

const onClick = function(e){
    this.innerText = 'clicked';
    console.log('clicked')
    this.removeEventListener('click', onClick)
}

allButtons.forEach(function(item){
    if(allButtons){
        item.addEventListener('click', onClick)
        }
    }
);