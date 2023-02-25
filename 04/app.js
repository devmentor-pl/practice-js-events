document.addEventListener('DOMContentLoaded', init);

function init () {
    const div = document.querySelectorAll('div');
    const body = document.querySelector('body');

    
    const addClassToElement = function (e) {
        const className = 'clicked';
        const dataTime = this.dataset.time;
        const self = this;
        setTimeout(function () {
            self.classList.add(className);
        }, dataTime);
    }
    
    const removeClassFromElement = function () {
        div.forEach(el => {
            el.classList.remove('clicked');
        });
    }
    
    div.forEach(el => {
        el.addEventListener('click', addClassToElement);
    })

    body.addEventListener('click', removeClassFromElement, true);
}