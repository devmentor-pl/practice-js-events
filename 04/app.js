const boxes = document.querySelectorAll('div');

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        e.stopPropagation();
        e.currentTarget.classList.add('clicked')
    })
})

document.querySelector('body').addEventListener('click', () => {
    boxes.forEach(box => box.classList.remove('clicked'))
})