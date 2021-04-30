//1
const divCollection = [...document.querySelectorAll('div')];

// divCollection.forEach((div) => {
//     div.addEventListener('click', function() {
//         this.classList.add('clicked');
//     })
// });


//2
const body = document.querySelector('body');

const removeColor = (e) => {
if (e.target === body) {
divCollection.forEach((div) => div.classList.remove('clicked'));
}
    
}

body.addEventListener('click', removeColor)

//3

const divChild = document.querySelector('div.child')



// divChild.addEventListener('click', function() {
//     const that = this
//     const time = (this.dataset.time)*1
//     setTimeout(time, this.classList.add('clicked'));
// })

divChild.addEventListener('click', function () {
    divCollection.forEach((div) => {
        time = div.dataset.time *1
        setTimeout(time, div.classList.add('clicked'))
    })
//   const time = this.dataset.time * 1;
//   setTimeout(time, this.classList.add('clicked'));
});