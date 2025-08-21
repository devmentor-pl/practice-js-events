const div = document.querySelector("div")

const onMouse = function () {
  console.log("Mouse enter and moving")
}

const onLeave = function () {
  console.log("Mouse leave")
}

div.addEventListener("mousemove", onMouse)

div.addEventListener("mouseleave", onLeave)

// const div = document.querySelector("div")

// const handleMouseEvent = function (event) {
//   if (event.type === "mouseenter") {
//     console.log("Mouse Enter")
//   } else if (event.type === "mousemove") {
//     console.log("Mouse moving")
//   }
// }

// const onLeave = function () {
//   console.log("Mouse leave")
// }

// div.addEventListener("mouseenter", handleMouseEvent)

// div.addEventListener("mousemove", handleMouseEvent)

// div.addEventListener("mouseleave", onLeave)

// const div = document.querySelector("div")

// const handleMouseEvents = function (event) {
//   switch (event.type) {
//     case "mouseenter":
//       console.log("Mouse Enter")
//       break
//     case "mousemove":
//       console.log("Mouse moving")
//       break
//     case "mouseleave":
//       console.log("Mouse leave")
//       break
//   }
// }

// const eventTypes = ["mouseenter", "mousemove", "mouseleave"]
// eventTypes.forEach((type) => {
//   div.addEventListener(type, handleMouseEvents)
// })
