
const divElements = document.querySelectorAll('div');
if(divElements) {
    divElements.forEach(function(item) {
        item.addEventListener('click', addNewClass);
    });
}
document.body.addEventListener('click', removeClickedFromDivs);

function addNewClass(e) {
    //pokazanie rónicy pomiędzy e.target a e.currentTarget
    // console.log('kliknięto na: ') 
    // console.log(e.target)
    // console.log('gdzie jest callback: ')
    // console.log(e.currentTarget);
    const divElement = e.currentTarget;
    const timeout = e.currentTarget.dataset.time
    
    setTimeout(function() {
        divElement.classList.add('clicked')
    }, e.currentTarget.dataset.time)

    // e.currentTarget.classList.add('clicked') // lub mozna uzyć this -> console.log(this === e.currentTarget)
    // this.classList.add('clicked')
}

function removeClickedFromDivs(e) {
    if(e.target.tagName === 'BODY') {
        divElements.forEach(function(div) {
            div.classList.remove('clicked')
        })
    }
}