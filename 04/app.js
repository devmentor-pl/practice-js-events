const boxes = document.querySelectorAll('div');

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        const currBox = e.currentTarget;
        setTimeout(() => currBox.classList.add('clicked'), currBox.dataset.time);
    })
})

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        boxes.forEach(box => box.classList.remove('clicked'))
    }
})