const buttons = document.querySelectorAll(".color-box");
let currentColor = "#48e5c2";
let currentButton = buttons[0];
const colorArray = ["#5de8e5", "#f44d9b", "#e9275b", "#392270"];
for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener("click", (e) => {
    e.preventDefault();
    currentButton.children[0].classList.remove("color-fill-active");
    currentButton = button;
    currentButton.children[0].classList.add("color-fill-active");
    currentColor = colorArray[index];
    document.documentElement.style.setProperty(
      "--firstColor",
      colorArray[index]
    );
  });
}
export function mainColor() {
  return currentColor;
}
