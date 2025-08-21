/////1
const allDivs = document.querySelectorAll('div')

function divClicked() {
    const delay = this.dataset.time
    if(!this.classList.contains('clicked')) {
        setTimeout(() => {
            this.classList.add('clicked')
        },delay)
        
    }
}

allDivs.forEach((div) => {
    div.addEventListener('click', divClicked)
})

//////2
const body = document.querySelector('body')

body.addEventListener('click', function(e) {
    if(e.target === body) {
        console.log("you clicked the body only")
        allDivs.forEach((div) => {
            div.classList.remove('clicked')
        })
    }
})
///////3
///editiiong the divClickedfunction