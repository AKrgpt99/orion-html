window.addEventListener("DOMContentLoaded", () => {
  const headerMenuWrapper = document.querySelector("#header-menu-wrapper"),
    primaryMenuWrapper = document.querySelector("#primary-menu-wrapper");

  headerMenuWrapper.addEventListener("mouseenter", () => {
    primaryMenuWrapper.classList.remove("menu-animation-exit");
    primaryMenuWrapper.classList.add("menu-animation-enter");
  });

  headerMenuWrapper.addEventListener("mouseleave", () => {
    primaryMenuWrapper.classList.remove("menu-animation-enter");
    primaryMenuWrapper.classList.add("menu-animation-exit");
  });

  anime({
    targets: ".menu-animation-enter",
    translateX: "-110%",
  });

  anime({
    targets: ".menu-animation-exit",
    translateX: "0%",
  });
});
