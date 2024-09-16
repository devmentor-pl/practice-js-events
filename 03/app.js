const btnElements = document.querySelectorAll('button');


const changeTextValue = function (e) {
    const btn = e.target;
        btn.textContent = "clicked";
        console.log('clicked')
        btn.removeEventListener('click', changeTextValue)
}
btnElements.forEach(function(btn) {
    btn.addEventListener('click', changeTextValue)
})