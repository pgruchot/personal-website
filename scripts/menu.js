import { tiles } from "./tiles.js";
const menu = document.querySelector(".menu-container");
const menuLines = document.getElementsByClassName("line");
const menuTextBox = document.querySelector(".menu-links");
const menuLinks = document.getElementsByClassName("menu-link");
let openFlag = false;
menu.addEventListener("click", () => {
  menuFunctionality();
});
for (let index = 0; index < menuLinks.length; index++) {
  const element = menuLinks[index];
  element.addEventListener("click", (e) => {
    if (index == menuLinks.length - 1)
      window.location.href = "https://github.com/pgruchot";
    menuFunctionality();
  });
}
function menuFunctionality() {
  openFlag = !openFlag;
  for (let index = 0; index < menuLines.length; index++) {
    menuLines[index].classList.toggle(`line${index + 1}`);
  }
  tiles(openFlag);
  menuTextBox.classList.remove("disabled");
  for (let index = 0; index < menuLinks.length; index++) {
    let link = menuLinks[index];
    link.classList.remove("disabled");
    setTimeout(function () {
      link.classList.toggle("menu-link-active");
    }, 500 * index);
    setTimeout(function () {
      if (!openFlag) menuTextBox.classList.add("disabled");
    }, 500 * menuLinks.length - 1);
  }
}
export function enableMenu() {
  setTimeout(function () {
    menu.classList.remove("disabled");
  }, 2500);
}
