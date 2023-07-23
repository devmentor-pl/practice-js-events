const divList = document.querySelectorAll('div');
const bodyEl = document.querySelector('body');

const handleAction = function(el){
  const item = el.currentTarget;
  // const item = el.target;
  const time = item.getAttribute('data-time')
  setTimeout(handleAddClass, time, item)
}

const handleAddClass = function(item){
  item.classList.add('clicked');
}

const handleRemoveClass = function(e){
  if (e.target.matches('body')) {
    divList.forEach(element => {
      element.classList.remove('clicked')
    })
  }
}

divList.forEach(element => {
  element.addEventListener('click', handleAction)
})

bodyEl.addEventListener('click', handleRemoveClass)