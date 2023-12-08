const btnEl = document.querySelector('button');
console.log(btnEl);

const showClick = function() {
    console.log("clicked");

}
   
if(btnEl) {
    btnEl.addEventListener('click', showClick);
}