// rozwiazanie nr 1

const btnEl = document.querySelector('button');
if (btnEl) {
    btnEl.addEventListener('click', function () {
        console.log('button was clicked!');
    })
}

// Rozwiazanie nr 2

const handleClick = function () {
    console.log('button was clicked!');
}

const btnEl2 = document.querySelector('button');
if (btnEl2) {

    btnEl2.addEventListener('click', handleClick)
}