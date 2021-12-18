const divList = document.querySelectorAll('div');
const body = document.querySelector('body');


const addClass = function() {
        const self = this;
        const time = this.getAttribute('data-time');
        setTimeout(function() {
            self.classList.add("clicked");
            }, time)
}

const removeClass = function() {
        divList.forEach(function(div) {
            div.classList.remove("clicked");
        })
}

divList.forEach( function(div) {
    div.addEventListener('click', addClass);
});

if(body) {
body.addEventListener('click', removeClass);
}


   