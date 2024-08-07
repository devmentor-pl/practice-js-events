//#04.01
const divs = document.querySelectorAll("div");

addClassToElement = function (event) {
    event.stopPropagation();

  const className = "clicked";
  this.classList.add(className);
};

divs.forEach((div) => {
  if (div) {
    div.addEventListener("click", addClassToElement);
  }
});



//04.02
const body = document.querySelector('body')

removeClassFromElement = function () {
    const className = 'clicked'
    divs.forEach(div => {
        div.classList.remove(className)
    });
}

if (body) {
    body.addEventListener('click', removeClassFromElement)
}
