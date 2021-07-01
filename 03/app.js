const btnsList = document.querySelectorAll('button');
console.log(btnsList);

const changeText = function() {
    this.innerText = 'clicked';
    this.removeEventListener('click', changeText);
}

btnsList.forEach(function(btn) {
    btn.addEventListener('click', changeText);
})