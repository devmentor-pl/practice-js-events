document.addEventListener('DOMContentLoaded', function () { // załadowanie funkcji po DOM

const divEl = document.querySelector('div');

const onMove = function () {
    divEl.textContent = 'move...'; // zdarzenie z prezentacji 
    console.log('move...');
};
const onLeave = function () {
    divEl.textContent = 'cursor left...'; // zdarzenie z prezentacji 
    console.log('cursor left...');
};


if (divEl) {
   divEl.addEventListener('mousemove', onMove);
    divEl.addEventListener('mouseleave', onLeave);
  }
});


// Uproszczony kod

document.addEventListener('DOMContentLoaded', () => {

    const divEl2 = document.querySelector('div');

    if(divEl2){
        divEl2.addEventListener('mousemove', () => {
            divEl2.textContent = 'move 2...';
            console.log('move 2....');
        });

        divEl2.addEventListener('mouseleave', () => {
            divEl2.textContent = 'cursor left 2...';
            console.log('cursor left 2...');
        });
    }
});