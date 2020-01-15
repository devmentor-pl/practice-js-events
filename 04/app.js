document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('div').forEach(item => {
        const dataTime = item.dataset.time;

        item.addEventListener('click', event => {
            const self = event.currentTarget;
            event.stopPropagation();
            setTimeout(() => {
                self.classList.add('clicked');
            }, parseInt(dataTime));
        });

        document.body.addEventListener('click', () => {
            item.classList.remove('clicked');
        });

    });

});
