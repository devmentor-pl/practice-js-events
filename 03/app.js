const buttonElements = document.querySelectorAll('button');

const handleClick = function(e) {
  console.log('clicked')
  // let text = 'clicked';
  // e.target.innerText = text;
  // zastosowałem Twoją propozycję poniżej (textContent), mogłem też zastosować ją w zad 2, ale jak działa to nie ruszam :)
  e.target.textContent = 'clicked'
  e.target.removeEventListener('click', handleClick);
  
}


if(buttonElements) {
  buttonElements.forEach(element => {
    element.addEventListener('click', handleClick)
  })
}


console.log(buttonElements)
