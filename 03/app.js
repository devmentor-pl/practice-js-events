
const buttonList = document.querySelectorAll('button')


function handleClick () {
  const text = this.textContent = 'clicked'
  console.log('clicked')
  if(text) {
    this.removeEventListener('click', handleClick);
  }
}

if(buttonList.length > 0) {
  buttonList.forEach(item => {
    item.addEventListener('click', handleClick)
  })
}



