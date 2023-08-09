const sidebar = document.querySelector(".sidebar");
const button = document.querySelector(".button");
const header = document.querySelector(".header");

const buttonBackground = document.querySelector(".button__background");

let x = 0;
button.addEventListener("click", function (e) {
  console.log(e);

  //   sidebar.style.backgroundColor = "red";

  if (x === 0) {
    sidebar.style.flex = "0 0 5rem";
    header.style.left = "5rem";
    x = 1;
  } else if (x === 1) {
    sidebar.style.flex = "0 0 25rem";
    header.style.left = "25rem";
    x = 0;
  }
});
