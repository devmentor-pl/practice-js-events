const containers = document.querySelectorAll('div')
const body = document.querySelector('body')

function clickEventHandler() {

    const time = this.dataset.time
    const self = this

    setTimeout(function() {
        self.classList.add('clicked')
    }, time)

}

function clickBodyEventHandler(e) {

    if(e.target === e.currentTarget) {
        containers.forEach(function(item){
            item.classList.remove('clicked')
        })
    }
}

containers.forEach(function(item){

    item.addEventListener(
        'click',
        clickEventHandler
    )
})

body.addEventListener(
    'click',
    clickBodyEventHandler
)