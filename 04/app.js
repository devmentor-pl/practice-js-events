const divE1 = document.querySelectorAll('div');

const showClick = function(event) {
    const dataTime = parseInt(this.dataset.time || 0);
    setTimeout(() => {
        if (this.tagName === 'DIV') {
            this.classList.add('clicked');
        }
    }, dataTime);
};

const deleteClick = function() {
    divE1.forEach( function(div) {
        div.classList.remove('clicked');
    });   
}

divE1.forEach( function(item) {
    item.addEventListener('click', showClick);
});

document.body.addEventListener('click', deleteClick);

