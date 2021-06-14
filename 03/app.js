const btnList = document.querySelectorAll('button');

const changeText = function() {

    if( this.textContent !== 'clicked') {
        this.textContent = 'clicked';
        console.log('clicked');
    }
}


btnList.forEach( function(el) {
    el.addEventListener('click' , changeText);
} )