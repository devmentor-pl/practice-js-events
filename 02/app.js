function moveEvent() {
    console.log('Mouse moving inside element');
}

function leaveEvent() {
    console.log('Mouse leave the element');
}

const init = function () {
    const div = document.querySelector('div');

    if (div) {
        div.addEventListener('mousemove', moveEvent)
        div.addEventListener('mouseleave', leaveEvent)
    }
}


document.addEventListener('DOMContentLoaded', init)