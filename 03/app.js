const btn = document.querySelectorAll('button');
console.log(btn)


// zle const clickBtn = function () {
//     this.innerText = 'clicked';
//     console.log('clicked')

//     btn.forEach(function (btnItem) {
//         btnItem.removeEventListener('click', clickBtn)

//     })
// }


const clickBtn = function () {
    this.innerText = 'clicked';
    this.removeEventListener('click', clickBtn)
    console.log('clicked')
}



btn.forEach(function (btnItem) {
    btnItem.addEventListener('click', clickBtn)

})