const moveMouse = function(){
   console.log('x');
}


const info = document.createElement('p')

const eventArea = document.querySelector('div')

if(eventArea){
    eventArea.addEventListener('mousemove', function(){
        eventArea.appendChild(info)
        info.innerHTML = 'Mouse move in div'
    })
    eventArea.addEventListener('mouseleave', function(){
        eventArea.appendChild(info)
        info.innerHTML = 'Mouse leave this div'
    })
}



