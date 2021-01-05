
const init = function() {
    console.log("The DOM has been loaded");  
};

const divByTag = document.getElementsByTagName('div'); //?dev To  jest dla mnie kosmos przecież getEl... działa szybciej niż query, więc dlaczego on nam tu działa a quert nie .... ? ;|
console.log(divByTag);

const divEl = document.querySelector("div");
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

    const divTest = document.querySelector("div");
    console.log(divTest); //?dev Zupełnie nie rozumiem dlaczego sie wykonuje pierw 17 a potem reszta 
    console.log("testowy");







document.addEventListener('DOMContentLoaded', init);