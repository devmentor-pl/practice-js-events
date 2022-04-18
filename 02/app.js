console.log('ZAD 2')

const init = function() {
    const div = document.querySelector('div')
    console.log(div)

    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'

    // move on DIV
    // -----------
    let counter = 0
    div.addEventListener('mousemove', function() {
        console.log('cursor is moving on element DIV')
        counter++
        this.innerText = 'cursor is moving on element DIV '+counter
    })

    // out of DIV
    // -----------
    div.addEventListener('mouseout', function() {
        console.log('cursor left the element DIV')
        this.innerHTML = 'cursor left the element DIV'
        counter = 0
    })
    // or
    // div.addEventListener('mouseleave', function() {
    //     console.log('cursor left the element DIV')
    //     this.innerHTML = 'cursor left the element DIV'
    // })

}

document.addEventListener('DOMContentLoaded', init)















