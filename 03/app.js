document.querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', () => {
        element.textContent = 'clicked';
        console.log('clicked');
    },{ once: true})
})

