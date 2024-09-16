const divs = document.querySelectorAll("[data-time]");

function handleClick(e){
    // console.log("e.target: ", e.target)
    // console.log("e.currentTarget: ", e.currentTarget)
    const time = e.currentTarget.dataset.time;
    const target = e.target;
    const currentTarget = e.currentTarget;

    if(target.dataset.time !== "1000"){
        e.stopPropagation();
    } 

    function addClass(){
        currentTarget.classList.add("clicked")
    }
    setTimeout(addClass, time);
    
    
}

function removeClass(e){
    // console.log("e.target: ", e.target)
    // console.log("e.currentTarget: ", e.currentTarget)
    divs.forEach(function(div){
        if(e.target === e.currentTarget){
            div.classList.remove("clicked");
        }
    })
}
divs.forEach(function(div){
    div.addEventListener("click", handleClick)
});

document.body.addEventListener("click", removeClass)