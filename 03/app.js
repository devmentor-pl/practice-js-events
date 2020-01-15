document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelectorAll('button');
    button.forEach(e => {
        e.addEventListener('click', () => {
            const text = e.innerText === 'send' ?
                e.innerText = "clicked" : e.innerText = "send";
            console.log('clicked');
            return text;
        })
    })
});
