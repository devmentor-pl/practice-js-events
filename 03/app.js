document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const btnList = document.querySelectorAll('button');
    btnList.forEach(function(btn) {
        btn.addEventListener('click', handleClick);
    });
}

const TEXT = 'clicked';


function handleClick() {
    const element = this;

    console.log(TEXT);
    element.innerText = TEXT;
    element.removeEventListener('click', handleClick);
}