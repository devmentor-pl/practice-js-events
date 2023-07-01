const btnContainer = document.querySelector(".btn-actions");

btnContainer.addEventListener("click", (e) => {
  const isBtn = e.target.classList.contains("btn");
  if (!isBtn) return;

  e.target.innerText = "sent";
  console.log("sent");
});
