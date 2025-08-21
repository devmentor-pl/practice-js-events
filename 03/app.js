const buttonsList = document.querySelectorAll('button');


const addValue = function () {
    this.innerText = 'clicked';
    console.log(this.innerText);
    let value = Number(this.value);
    this.value = value + 1;
    if (value >= 0) {
        this.removeEventListener('click', addValue);

    }

}



buttonsList.forEach(function (element) {

element.addEventListener('click', addValue);

});