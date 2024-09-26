const allDivs = document.querySelectorAll('div');
const bodyOnly = document.querySelector('body');


allDivs.forEach(function (item) {
    item.addEventListener('click', function () {

        const time = this.dataset.time;

        const self = this;
        setTimeout(function () {
            self.classList.add('clicked');

        }, time);
    });
});

bodyOnly.addEventListener('click', function (e) {
    console.log('click on body', e.target, e.currentTarget);

    if (e.target === e.currentTarget) {
        allDivs.forEach(function (item) {

            item.classList.remove('clicked');
        })
    }
})
