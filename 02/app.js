document.addEventListener('DOMContentLoaded', init)


function init() {

    const div = document.querySelector('div')

    // div.addEventListener(
    //     'mouseenter',
    //     function(){
    //         div.innerText = 'mouse enter on div area'
    //     }
    // )

    if (div) {
        div.addEventListener(
            'mousemove',
            function (e) {
                console.log('mousemove', e)
                div.innerText = 'mouse on div area'
            }
        )
        div.addEventListener(
            'mouseleave',
            function () {
                console.log('mouseleave')
                div.innerText = 'mouse leave div area'
            })
    }
}