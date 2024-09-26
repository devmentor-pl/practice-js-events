const div = document.querySelectorAll('div');

const addClass = function (e) {

    if (this.classList.contains('child')) {

        div.forEach(function (item) {
            const timeout = item.dataset.time;
            setTimeout(() => {
                item.classList.add('clicked');

            }, timeout)
        })

    } else if (e.target === this) {
        this.classList.add('clicked');
    }
}

const removeClass = function (e) {

    if (e.target === this) {
        div.forEach(function (item) {
            item.classList.remove('clicked')
        })
    }
}

div.forEach(function (item) {
    item.addEventListener('click', addClass);
    document.body.addEventListener('click', removeClass);
})