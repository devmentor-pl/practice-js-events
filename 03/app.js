const btnsList = document.querySelectorAll('button');
const addText = function(e) {
    e.currentTarget.innerText = 'clicked';
    console.log(e.currentTarget.innerText)
}
btnsList.forEach(function(item) {
    item.addEventListener('click', addText)
})

