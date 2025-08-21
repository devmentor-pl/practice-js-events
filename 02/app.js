const divEl = document.querySelector('div');
const pEl = document.querySelector('p');

divEl.addEventListener('mousemove', function() {
    pEl.textContent = 'coursor is on div';
});

divEl.addEventListener('mouseleave', function() {
    pEl.textContent = 'cursor is out of div';
});




