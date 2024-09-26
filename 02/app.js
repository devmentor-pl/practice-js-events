const container = document.querySelector(".container");

container.addEventListener("mousemove", () => {
    console.log("Myszka jest na divie");
});

container.addEventListener("mouseleave",()=>{
    console.log("myszka nie jest na divie");
});
