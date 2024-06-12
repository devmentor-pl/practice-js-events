function printMessage(message) {
    console.log(message);
}

function main() {
    const divEl = document.querySelector('div');

    if (!divEl) {
        throw new Error('No div found!');
    }

    divEl.addEventListener('mousemove', e => {
        printMessage(e.type);
    });

    divEl.addEventListener('mouseleave', e => {
        printMessage(e.type);
    });
}

document.addEventListener('DOMContentLoaded', main);
