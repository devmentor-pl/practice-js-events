const boxes = document.querySelectorAll('div');

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        e.stopPropagation();
        const currBox = e.currentTarget;

        if (currBox.classList.contains('child')) {
            boxes.forEach(box => {
                setTimeout(() => box.classList.add('clicked'), box.dataset.time)
            });
        } else {
            setTimeout(() => currBox.classList.add('clicked'), currBox.dataset.time);
        }
    })
})

document.querySelector('body').addEventListener('click', () => {
    boxes.forEach(box => box.classList.remove('clicked'))
})