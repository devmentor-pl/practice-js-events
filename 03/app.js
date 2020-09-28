function onLoadedCont() {
  const btnList = document.querySelectorAll('button')
    btnList.forEach(item => {
      item.addEventListener('click', addNewText);
    });
}

function addNewText() {
  this.innerText = 'clicked';
  console.log('clicked')
  this.removeEventListener('click', addNewText)
}

document.addEventListener('DOMContentLoaded', onLoadedCont)