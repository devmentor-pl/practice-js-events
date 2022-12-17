const divElements = document.querySelectorAll('div');
const body = document.querySelector('body');


function addClass() {
    setTimeout(() => {
        this.classList.add('clicked');
    }, this.dataset.time);
}

function removeClass(e) {
    if(e.target === document.body) {
        divElements.forEach( function(el) {
            el.classList.remove('clicked');
        })
    }
}

divElements.forEach(element => {
    element.addEventListener('click', addClass)
  });

document.body.addEventListener('click', removeClass);


