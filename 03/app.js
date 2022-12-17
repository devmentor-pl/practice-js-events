
const btnList = document.querySelectorAll('button');


const buttonTextChange = function() {
    this.innerText = 'clicked';
    console.log(this.innerText);
    this.removeEventListener('click', buttonTextChange);
}


btnList.forEach(function(el) {
    el.addEventListener('click', buttonTextChange);
})


