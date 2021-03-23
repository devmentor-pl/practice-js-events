document.querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', (e) => {
        element.textContent = 'clicked';
        console.log('clicked');
        e.target.disabled = true;
    })
})

