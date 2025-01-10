
const divs = document.querySelectorAll('div');
const body = document.body;


divs.forEach(div => {
    div.addEventListener('click', function (e) {
        e.stopPropagation(); 
        const target = e.currentTarget;
        const delay = target.dataset.time;

        setTimeout(() => {
            target.classList.add('clicked');
        }, delay);
    });
});

body.addEventListener('click', function () {
    divs.forEach(div => {
        div.classList.remove('clicked');
    });
});


divs.forEach(div => {
    div.addEventListener('click', function (e) {
        e.stopPropagation();

        let currentDiv = e.currentTarget;
        const handleCascadingEffect = (div) => {
            const delay = div.dataset.time;
            setTimeout(() => {
                div.classList.add('clicked');
            }, delay);
        };

        while (currentDiv) {
            handleCascadingEffect(currentDiv);
            currentDiv = currentDiv.parentElement;
            if (!currentDiv || !currentDiv.dataset.time) break;
        }
    });
});