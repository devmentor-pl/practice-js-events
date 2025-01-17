const buttonList = document.querySelectorAll('button');
let counter = 0;

const handleChange = function(){
    console.log('clicked');
    this.innerText = 'clicked';
    counter++;

    if (counter > 0){
        this.removeEventListener('click', handleChange)
    }

}

buttonList.forEach((btn) => {
    btn.addEventListener('click', handleChange);
}) 