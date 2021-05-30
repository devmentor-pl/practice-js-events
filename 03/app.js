const btns = document.querySelectorAll('button');

const changeName = function (e) {
    e.target.textContent = 'clicked';
    console.log(e.target.textContent);
}

btns.forEach(btn => {
    btn.addEventListener('click', changeName);
})