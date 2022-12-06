const btns = document.querySelectorAll('button');

const showText = function() {
    console.log('clicked');
}

btns.forEach(function(item) {
    item.addEventListener('click', showText);
})

