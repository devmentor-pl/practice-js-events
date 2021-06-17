const divList = document.querySelectorAll('div');


const addClass = function(e) {
    const self = this;

    setTimeout( function() {
        self.classList.add('clicked');
    }, self.dataset.time )

    if( e.target.className !== "child") {
        e.stopPropagation()
    }
};


divList.forEach( function(el) {
    el.addEventListener('click' , addClass);
});


const removeClass = function() {
    if( this.tagName === 'BODY') {
        divList.forEach( function(el) {
            el.classList.remove('clicked');
        })
    }
}


document.body.addEventListener('click' , removeClass);
