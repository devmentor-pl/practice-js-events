// KONSULTACJE:
// zadanie 2 nie działa, nie mam pomysłu jak poprawić funkcję
// zadanie 3 jak je rozgryźć?


//#01 // DZIAŁA
const divElList = document.querySelectorAll('div');

divElList.forEach(function(item) {
    item.addEventListener('click', addNewClass);
})

function addNewClass() {
    this.classList.add('clicked');
}

console.log('przed kliknięciem w body => ', divElList); // 'clicked' na wszystkich

// #02 NIE DZIAŁA COŚ W .addEventListener()
const body = document.querySelectorAll('body');
checkClick(body);

function checkClick(el) {
    el.addEventListener('click', removeClass);
}

function removeClass() {

        divElList.forEach(function (item) {
            item.classList.remove('clicked');
        })
        }
        
console.log('po kliknięciu w body => ', divElList); // nie usuwa klasy
//rózne próby:
//jeśli <body> zostało kliknięte
// if(body.target){
//     el.forEach(function (item) {
//         item.classList.remove('clicked');
//     });   
// }

// #03 NIE DZIAŁA

// A moze całość rozdzielić tj. 3x addEventListener?
const divElList3 = document.querySelectorAll('div');
const divChild3 = document.querySelectorAll('.child');
const divParent3 = document.querySelectorAll('.parent');
const divGrandpa3 = document.querySelectorAll('.grandparent');
// NodeList


// divChild3.addEventListener('click', init, true); // tu nie moe być NodeList (divChild3)

function init() {
    if(this.dataset === 1000) {
        setTimeout(addNewClassChild)
    }
    if(this.dataset === 2000) {
        setTimeout(addNewClassParent)
    }
    if(this.dataset === 3000) {
        setTimeout(addNewClassGrandpa)
    }
}

function addNewClassChild() {
    divChild3.classList.add('clicked');
}
function addNewClassParent() {
    divParent3.classList.add('clicked');
}
function addNewClassGrandpa() {
   divGrandpa3.classList.add('clicked');
}

console.log('przed kliknięciem => ', divElList3);


