const buttonList = document.querySelectorAll('button');

const clickButton = function(){
    
    const text = 'clicked'
    this.textContent = text;
    console.log(text);
    this.removeEventListener('click', clickButton);

}

buttonList.forEach(function(el){
    el.addEventListener('click', clickButton);
})
