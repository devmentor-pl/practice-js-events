const btnElement = document.querySelector('button');

const btnClicked = function() {
    console.log('clicked')
}

btnElement.addEventListener('click', btnClicked)