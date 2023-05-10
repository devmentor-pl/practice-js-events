const buttonsList = [...document.getElementsByTagName('button')];

buttonsList.forEach(function(el) {
    el.addEventListener('click', changeText);
})

function changeText() {
    if(this.innerText === "clicked") {
        this.removeEventListener('click', changeText);
        return;
    } 
    this.innerText = "clicked";
    console.log('clicked');
};