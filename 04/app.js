/*TO DO LIST

 1.CLICK na elemencie <div/>,kliknięcie na dany element 
 dodaję do niego nową klasę 'clicked' (this lub e.currentTarget).

 2.CLICK również na <body/>,i kiedy nastąpi,usuwamy klasę 
 clicked z każego elementu <div/>.

 3.Odstęp czasowy pomiędzy kliknięciem a zmianą koloru,
 setTimeout wykorzystać oraz dane z dataset każego z divów,
 uważaj na kontekts dla 'this' oraz pierwszy parametr callbacka,
 możliwe użycie dodatkowej zmiennej.

 4. Po kliknięciu w nabardziej zagnieźdzony <div/> (zielone obramowanie),
 ma zostać wywołany efekt automatycznego zakolorwoania wszsytkich <divów/> w,
 odpoiwednich odstępach czasowych.
*/


const divEl = document.querySelectorAll('div');
const bodyEl = document.querySelector('body');

const setAtr = function() {
   const attr = parseInt(this.dataset.time);
   setTimeout((this.classList.add('clicked')), attr);
}
divEl.forEach(function(el){
    el.addEventListener('click' ,setAtr )
});

const remove = function() {
    divEl.forEach(function(item){
        item.classList.remove('clicked');
    });
}

bodyEl.addEventListener('click', remove ,true);













       
    
        





