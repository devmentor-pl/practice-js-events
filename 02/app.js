
const init = function () {
    const content = document.querySelector('div');

if (content) {
    content.addEventListener('mousemove', mouseMove);
    content.addEventListener('mouseleave', mouseLeave);    
    }
}

const mouseMove = function () {
    console.log('mouse move');

}

const mouseLeave = function () {
    console.log('mouse leave');

}
document.addEventListener('DOMContentLoaded', init);


