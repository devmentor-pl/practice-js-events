
const mainFn = function() {
    const divElement = document.querySelector('div');
    if(!divElement) {
        return

    } else {
        const mouseMove = function() {
            console.log('You are in the square');
        }
         const mouseLeave = function() {
            console.log('You are out of the square')
        }
        divElement.addEventListener('mousemove', mouseMove);
        divElement.addEventListener('mouseleave', mouseLeave);
    }

}
document.addEventListener('DOMContentLoaded', mainFn); 

// jeśli skrypt ładujący js w head to uzywam DOMContentLoaded
// jeśli jest w body to nie potrzebuję go uzywać
