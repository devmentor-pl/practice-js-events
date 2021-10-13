const buttons = document.querySelectorAll('button')
const afterClick = function(){
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', afterClick);

}

if(buttons){
    buttons.forEach(item =>{
        item.addEventListener('click', afterClick)
    })
}