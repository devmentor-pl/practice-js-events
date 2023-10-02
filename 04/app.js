const divs = document.querySelectorAll("div");

divs.forEach(div => {
    div.addEventListener("click", function() {
        // Dodaj klasę "clicked" do aktualnie klikniętego elementu
        this.classList.add("clicked");
    });
});

// 2
document.body.addEventListener("click", function(e) {
    
    if (e.target === document.body) {
    
        divs.forEach(div => {
            div.classList.remove("clicked");
        });
    }
});