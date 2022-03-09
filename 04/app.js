document.addEventListener('DOMContentLoaded', init);


function init() {
    console.log('DOM');

    const divList = document.querySelectorAll('div');
    const body = document.querySelector('body');

    divList.forEach(function (el) {
        el.addEventListener('click', function() {
            const time = this.dataset.time;

            const self = this;
            setTimeout(function() {
                self.classList.add('clicked');
            }, time);
        });
    });

    body.addEventListener('click', function(e) {
        console.log('click on body', e.target, e.currentTarget);

        if(e.target === e.currentTarget) {
            divList.forEach(function(el) {
                el.classList.remove('clicked');
            });
        }
    })
}