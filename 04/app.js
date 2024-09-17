const divList = document.querySelectorAll('[data-time]');


function addClass (e) {
  const element = e.currentTarget
  // e.stopPropagation();
  setTimeout(function () {
    element.classList.add('clicked');
  }, element.dataset.time)
}



function removeClass (e) {
  if(e.target.tagName === 'DIV') {
    e.stopImmediatePropagation()
  } else {
    divList.forEach(function (item) {
      if(item.classList.contains('clicked')) {
        item.classList.remove('clicked');
      }
    })
  }
}


if(divList.length > 0) {
    divList.forEach(item => {
      item.addEventListener('click', addClass);
    })
}


document.addEventListener('click', removeClass);


