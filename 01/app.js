const init = function(btn) {
    console.log("DOM został wczytany");

};
const btn = document.querySelector('button'); //?dev Jak to zrobić jakbym chhciał to umieścić w row 4?

if(btn) {
    btn.addEventListener('click', viewClicked);
};

function viewClicked(){
    console.log("clicked btn")
};

document.addEventListener('DOMContentLoaded', init);