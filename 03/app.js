function onLoadedCont() {
  const btnList = document.querySelectorAll('button')

  if (btnList.length > 0) {
    btnList.forEach(item => {
      item.addEventListener('click', addNewText);
    });
  }
}

function addNewText() {
  this.innerText = 'clicked';
  console.log('clicked')
  if (this.innerText === 'clicked') {
    this.removeEventListener('click', addNewText)
  }
}

document.addEventListener('DOMContentLoaded', onLoadedCont)