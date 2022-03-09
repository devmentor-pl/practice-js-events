const btnList = document.querySelectorAll('button');

const showInfo = function() {
    this.innerText = 'clicked';
    console.log('clicked');
    if(this.innerText === 'clicked') {
        this.removeEventListener('click', showInfo);
    }
}

btnList.forEach(function(item) {
    item.addEventListener('click', showInfo);
})