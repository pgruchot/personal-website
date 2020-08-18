const textArray = document.querySelectorAll(".text-container");
const navArray = document.querySelectorAll(".page-nav-link");
const menuLinks = document.querySelectorAll(".menu-link");
let flag = true;
let index = 0;
let timer = 10000;
let currentActiveText = textArray[0];
let currentActiveNav = navArray[0];
export function ChangeFlag() {
  flag = false;
}
function CarouselLogic() {
  textArray[index].classList.remove("active");
  navArray[index].classList.remove("page-nav-link-active");
  if (index == textArray.length - 1) {
    textArray[0].classList.add("active");
    currentActiveText = textArray[0];
    navArray[0].classList.add("page-nav-link-active");
    currentActiveNav = navArray[0];
    index = 0;
  } else {
    textArray[index + 1].classList.add("active");
    currentActiveText = textArray[index + 1];
    navArray[index + 1].classList.add("page-nav-link-active");
    currentActiveNav = navArray[index + 1];
    index++;
  }
}
function TriggerCarousel() {
  setInterval(() => {
    if (flag) {
      CarouselLogic();
    }
  }, timer);
}
navArray.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    ChangeFlag();
    const indexOfNav = [...nav.parentElement.children].indexOf(nav);
    console.log(indexOfNav);
    currentActiveText.classList.remove("active");
    currentActiveNav.classList.remove("page-nav-link-active");
    if (indexOfNav == 0) index = textArray.length - 1;
    else index = indexOfNav - 1;
    CarouselLogic();
  });
});
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    ChangeFlag();
    const indexOfNav = [...link.parentElement.children].indexOf(link);
    console.log(indexOfNav);
    currentActiveText.classList.remove("active");
    currentActiveNav.classList.remove("page-nav-link-active");
    if (indexOfNav == 0) index = textArray.length - 1;
    else if (indexOfNav == menuLinks.length - 1) {
    } else index = indexOfNav - 1;
    CarouselLogic();
  });
});

TriggerCarousel();
