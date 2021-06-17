//  Rozwiązanie 1

// document.querySelector('button').addEventListener('click' , function() {
//     console.log('clicked');
// })


//  Rozwiązanie 2


const btn = document.querySelectorAll('button');

const addConsoleLog = function() {
  console.log('clicked');
}

btn.forEach( function(element) {
    element.addEventListener('click' , addConsoleLog);
})