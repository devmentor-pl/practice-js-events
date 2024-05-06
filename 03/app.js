/* New simplified code  */
const buttons = document.querySelectorAll("button")

function handleClick() {
  console.log("clicked")
  this.textContent = "clicked"
  this.removeEventListener("click", handleClick)
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick)
})

/* New code */
// const buttons = document.querySelectorAll("button")

// buttons.forEach((button) => {
//   const handleClick = function () {
//     console.log("clicked")
//     button.textContent = "clicked"
//     button.removeEventListener("click", handleClick)
//   }

//   button.addEventListener("click", handleClick)
// })

/* Old code */
// const buttons = document.querySelectorAll("button")

// buttons.forEach((button) => {
//   button.addEventListener(
//     "click",
//     function () {
//       console.log("clicked")
//       button.textContent = "clicked"
//     },
//funkcja nieobsługiwana "once" event listener option
//     { once: true }
//   )
// })
