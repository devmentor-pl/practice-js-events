const init = function() {

const btnsList = document.querySelectorAll('button');
console.log(btnsList);

const addText = function(event) {

    if(event){};
    this.innerText = 'clicked';
    console.log('clicked');
};

btnsList.forEach(function(btnEl, index) {
    if(btnEl){
        btnEl.addEventListener('click', addText, {once: true});
    };
});

};
document.addEventListener('DOMContentLoaded', init);

