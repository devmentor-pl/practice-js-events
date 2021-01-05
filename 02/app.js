
const init = function() {
    const divEl = document.querySelector("div");
 
    console.log("The DOM has been loaded");  
    console.log(divEl);
    
    const onMove = function() {
            console.log("move");
        };
    const onLeave = function() {
            console.log("leave");
    };
    
    if(divEl) {
        divEl.addEventListener('mousemove', onMove);
    divEl.addEventListener('mouseleave', onLeave);
    };
};



    const divTest = document.querySelector("div");
    console.log(divTest); //?dev Zupełnie nie rozumiem dlaczego sie wykonuje pierw 17 a potem reszta 
    console.log("testowy");







document.addEventListener('DOMContentLoaded', init);