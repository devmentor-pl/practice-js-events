//1
const divCollection = [...document.querySelectorAll('div')];

// function changeColor()  {
//    this.classList.add('clicked')
// }

// divCollection.forEach(div => div.addEventListener('click', changeColor))

//2
const body = document.querySelector('body');

const removeColor = (e) => {
if (e.target === body) {
divCollection.forEach((div) => div.classList.remove('clicked'));
}
    
}

body.addEventListener('click', removeColor)

//3

function colorTimer() {
    const that = this
    const time = this.dataset.time * 1;
   setTimeout(function() {
that.classList.add('clicked')
   }, time );
    
}



divCollection.forEach((div) => div.addEventListener('click', colorTimer));
