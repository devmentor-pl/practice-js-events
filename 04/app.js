const init = function () {

    const divList = document.querySelectorAll('div');
    const body = document.querySelector('body');

    divList.forEach(function (div) {
        div.addEventListener(
            'click',
            function () {
                const self = this;
                const time = div.dataset.time;
                setTimeout(function () {
                    self.classList.add('clicked');
                }, time);
            }
        );
    });

    body.addEventListener(
        'click',
        function (e) {
            if (e.target === e.currentTarget) {
                divList.forEach(function (div) {
                    div.classList.remove('clicked');
                });
            };
        }
    );
};

document.addEventListener('DOMContentLoaded', init);