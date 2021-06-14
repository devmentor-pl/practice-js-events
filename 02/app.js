const aboveOrBeyond = function() {
    const divEl = document.querySelector('div');

    divEl.addEventListener('mousemove' , function() {
        console.log('above divEl');
    } )

    divEl.addEventListener('mouseleave' , function() {
        console.log('beyond divEl');
    } )
}


document.addEventListener('DOMContentLoaded', aboveOrBeyond);
