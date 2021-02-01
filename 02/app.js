

function contentLoaded() {
    const divEl = document.querySelector('div');
    if (divEl) {
        
        divEl.addEventListener('mouseenter', onEnter);
        divEl.addEventListener('mouseleave', onLeave);
    }

}
const onEnter = function () {
    console.log('You are in a div');
}

const onLeave = function () {
    console.log('You leave a div');
}

document.addEventListener('DOMContentLoaded', contentLoaded);