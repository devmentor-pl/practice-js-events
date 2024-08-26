function handleClick(event) {
    event.stopPropagation();

    const targetDiv = event.currentTarget;

    const delay = parseInt(targetDiv.dataset.time, 10);

    setTimeout(() => {
        targetDiv.classList.add('clicked');
    }, delay);
}

function handleBodyClick(event) {

    if (event.target === document.body) {
        document.querySelectorAll('div.clicked').forEach(div => {
            div.classList.remove('clicked');
        });
    }
}

const allDivs = document.querySelectorAll('div');
allDivs.forEach(div => {
    div.addEventListener('click', handleClick);
});

document.body.addEventListener('click', handleBodyClick);