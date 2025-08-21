const buttons = document.querySelectorAll("button");

function handleClick(){
    if(this.textContent !== "clicked"){
        this.textContent = "clicked";
        console.log("clicked");
    }else {
        this.removeEventListener("click", handleClick)
        console.log(`You can't click on this ${this.tagName} twice.`)
    }
    
}

buttons.forEach( function(button){
    button.addEventListener("click", handleClick)
});

