//#01 // 
const divElList = document.querySelectorAll('div');

divElList.forEach(function(item) {
    item.addEventListener('click', addNewClass);
})

function addNewClass() {
    this.classList.add('clicked');
}

console.log(divElList);

// #02 po refakturowaniu kodu jest błąd /s.54/
const body = document.querySelector('body');
body.addEventListener('click', removeNewClass);

divElList.forEach(removeNewClass);
    // divParent.classList.remove('class', 'clicked');
    // divChild.classList.remove('class', 'clicked');

function removeNewClass(el) {
    el.classList.remove('class', 'clicked');
    console.log(el);
}
// function removeNewClass() {
//     this.classList.remove('class', 'clicked');
//     // divParent.classList.remove('class', 'clicked');
//     // divChild.classList.remove('class', 'clicked');
// }

// #03 BŁĄD
// divGrandPa.addEventListener('click', setTimeForClassChange);
// divParent.addEventListener('click', setTimeForClassChange);
// divChild.addEventListener('click', setTimeForClassChange);

// const setTimeForClassChange = function setTimeout(addNewClass, 3000);

// function addNewClass() {
//     this.classList.add('clicked');
// }


