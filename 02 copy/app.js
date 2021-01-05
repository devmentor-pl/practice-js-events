//infO Rozumiem że po prostu wszystko musibyć opakowane tą funkcją init?


const init = function() {
    console.log("The DOM has been loaded");
    
    const divEl = document.querySelector("div");
    console.log(divEl);
    
    const onMove = function() {
        console.log("move");
    };
    const onLeave = function() {
        console.log("leave");
    };
    
    if(divEl) {
    divEl.addEventListener('mousemove', onMove); //?dev Co tak naprawdę zlicza ta funkcja? 
    divEl.addEventListener('mouseleave', onLeave);
    };
};

const divEl = document.querySelector('div')
document.addEventListener('DOMContentLoaded', init); //?dev ale czemu nie to ? Coś tu kurde robie źle ...
console.log(divEl); //?dev To jest traktowane jako funkcja dlatego idzie jako pierwsze?





