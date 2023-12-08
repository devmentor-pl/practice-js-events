const buttonList = document.querySelectorAll('button');

const changeText = function() {
    this.textContent = "clicked";
    console.log("clicked");
    this.removeEventListener('click', changeText);
}

buttonList.forEach( function(button) {
    button.addEventListener('click', changeText)});
 

 