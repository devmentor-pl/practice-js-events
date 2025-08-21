const btnList = document.querySelectorAll('button');

btnList.forEach(function(btn) {
    btn.addEventListener(
        'click',
        handleClick
    )
});

function handleClick(element) {
    console.log('clicked')
    element.currentTarget.innerText = 'clicked';
    element.currentTarget.removeEventListener(
        'click',
        handleClick
    )
};
