let buttons = document.querySelectorAll('button')

// for each element of btn, via THIS
buttons.forEach(el => {
  el.addEventListener('click', event => {
    el.innerText = 'clicked';
    console.log('clicked');
  }, {once:true});
});

// Wykonaj zadanie w taki sposób, że na każdym z przycisków, callback ma być wywołany tylko raz.
// Co to znaczy? Czy chodzi
