const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    function () {
      console.log("clicked")
      button.textContent = "clicked"
    },
    { once: true }
  )
})
