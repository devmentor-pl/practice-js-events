let buttons = document.querySelectorAll('button');
const btns = Array.from(buttons);


// for each element of btn, via THIS
// btns.forEach(el => {
//   el.addEventListener('click', e => {
//     el.innerText = 'clicked';
//     console.log('clicked');
//   }, {once:true});
// });

const change = function(e) {
  const self = e.currentTarget;
  self.innerText = 'clicked';
  self.removeEventListener('click', change);
};

btns.forEach(el => el.addEventListener('click', change));

// Wykonaj zadanie w taki sposób, że na każdym z przycisków, callback ma być wywołany tylko raz.
// Co to znaczy? Czy chodzi
