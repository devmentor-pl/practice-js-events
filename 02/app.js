const init = function() {

    const div = document.querySelector('div');

    if(dil) {
        div.addEventListener(`mouseover`, function (){
            div.textContent = "jesteś w divi";
        });
        div.addEventListener(`mouseout`, function (){
            div.textContent = "jesteś poza divem";
        });
    }
}
document.addEventListener('DOMContentLoaded', init);