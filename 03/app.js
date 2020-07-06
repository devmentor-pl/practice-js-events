const btn = document.querySelectorAll('button');
console.log(btn)


const clickBtn = function () {
    this.innerText = 'clicked';
    console.log('clicked')
}

btn.forEach(function (btnItem) {

    btnItem.addEventListener('click', clickBtn)

})