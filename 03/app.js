const btnList = document.querySelectorAll('button');

function showInfo(e) {
  this.innerText = 'clicked';
  console.log('clicked');
  e.target.removeEventListener('click', showInfo);
}
btnList.forEach((btn) => {
  btn.addEventListener('click', showInfo);
});
