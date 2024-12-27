const btns = document.querySelectorAll("button");

const handleClick = (e) => {
  console.log("clicked");
  e.target.innerText = "clicked";

  e.target.removeEventListener("click", handleClick);
};

btns.forEach((btn) => btn.addEventListener("click", handleClick));
