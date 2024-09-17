
const btn = document.querySelector('button');

function showInfo () {
  console.log('clicked')
}

if(btn) {
  btn.addEventListener('click', showInfo);
}