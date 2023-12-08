
const init = function() {
    
    const divEl = document.querySelector('div');

    if(divEl) {
        divEl.addEventListener(`mouseover`, function (){
            divEl.textContent = "jezdzisz mysza po divie";
        });
        divEl.addEventListener(`mouseout`, function (){
            divEl.textContent = "zjezdzasz mysza z diva";
        });
    }
}
document.addEventListener('DOMContentLoaded', init);


   
