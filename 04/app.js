const divs = document.querySelectorAll("div");
const body = document.querySelector("body");


const myFunction = function (event, element) {
    
    element = this;
    //event.stopPropagation();
    setTimeout(function() {element.classList.add("clicked")}, element.dataset.time)
    if (divs[2].className.includes('clicked') === true) {
        console.log("dziala")
        event.stopPropagation();
        /*divs.forEach(function(element) {
            element = this;
            setTimeout(function() {
                element.classList.add("clicked")}, element.dataset.time)
        }); */
    }
}
divs.forEach(function(element) {
    element.addEventListener("click", myFunction)
});



const secondFunction = function () {

    divs.forEach(function(element) {
        element.classList.remove("clicked");
    })
    }
    
    


body.addEventListener("click", secondFunction);

