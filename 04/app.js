const init = function() {

const divsList = document.querySelectorAll('div');
const bodyEl = divsList[0].parentElement;
//console.log(bodyEl) //?dev Czemu jak robie tego consol.log tutaj to jest okay a wpisuje to samo polecenie w consoli to wyskakuje błąd że jest nie zdefiniowane ? 
//infO Aaaa chyba mnie olśmiło... dlatego że to jest umieszczone w funkcji init i przez to nie mogę się do tego dostać z consoli przeglądarki?

divsList.forEach(function(divEl) {
    divEl.addEventListener('click', addClassName);
});

bodyEl.addEventListener('click', removedClasses);
};



document.addEventListener('DOMContentLoaded', init);
//?dev W którym miejscu sobie dawać te deklaracje funkcji ?  Przed DOMContent? Po nim? Czy w ciele init fn?

function addClassName(event) {       //?dev Może to tak być? Czy z jakiś względów lepiej byłoby to zapisać jako wyrażenie fn? 
    if(event.target === event.currentTarget){
        // this.setAttribute('class', 'clicked') //infO to nam nie zadziała bo nam się usuną pozostałe klasy - ew można to dodać z getAtt
        this.classList.add('clicked');
    };
}
function removedClasses(event){
    if(event.target === event.currentTarget){
        const divsListOfClassClicked = this.querySelectorAll('div.clicked');
        if(divsListOfClassClicked.length !== 0){
            divsListOfClassClicked.forEach(function(divEl){
                divEl.classList.remove('clicked');
            });
        };
    };
};
