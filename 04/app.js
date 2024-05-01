document.querySelectorAll("div").forEach((div) => {
  div.addEventListener("click", function () {
    setTimeout(() => {
      this.classList.add("clicked")
    }, parseInt(this.dataset.time))
  })
})

document.body.addEventListener("click", function (e) {
  if (e.target === document.body) {
    document.querySelectorAll(".clicked").forEach((div) => {
      div.classList.remove("clicked")
    })
  }
})

const childDiv = document.querySelector(".child")
childDiv.addEventListener("click", function () {
  //this odnosi się do klikniętego pojedynczego elementu div
  let presentDiv = this
  while (presentDiv && presentDiv !== document.body) {
    //while-nie jest znana z góry ilość iteracji.
    let divToChange = presentDiv
    setTimeout(() => {
      divToChange.classList.add("clicked")
    }, parseInt(presentDiv.dataset.time))
    presentDiv = presentDiv.parentElement
  }
})
