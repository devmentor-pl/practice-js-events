const btnsElement = document.querySelectorAll('button');

for(let i=0; i < btnsElement.length; i++ ) {
    console.log(btnsElement[i]);
};

const clickClick = function() {
    this.innerText = 'clicked';
    console.log('clicked');
}

btnsElement.forEach(function(btnsElement){
    btnsElement.addEventListener('click', clickClick);
});

















