document.addEventListener("DOMContentLoaded", function(){
    const div = document.querySelector('div')
    const body = document.querySelector('body')
    const span = document.createElement('span')
    body.append(span)
    const onMove = function(e) {
        span.innerText = 'Poruszasz myszką wewnątrz div-a'
        span.style.display = 'block'
        span.style.width = '70px'
        span.style.padding = '10px'
        span.style.border = '1px solid #eee'
        span.style.color = '#eee'
        span.style.backgroundColor = '#aaa'
        span.style.position = 'absolute'
        span.style.left = e.x + 25 + 'px'
        span.style.top = e.y - 25 + 'px'
    }
    const onOut = function(e) {
        span.innerText = 'Wyjechałeś poza div-a'
    }
    div.addEventListener('mousemove', onMove)
    div.addEventListener('mouseleave', onOut)
});