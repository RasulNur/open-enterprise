const headerMenu = document.querySelector(".header__menu");
const navList = document.querySelector(".header__nav-list");

function setDraggableOff(tag) {
    const arr = document.querySelectorAll(`${tag}`);

    arr.forEach((el) => {
        el.setAttribute("draggable", false);
    });
}

setDraggableOff("img");
setDraggableOff("a");

headerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    navList.classList.toggle("active");

    if (navList.classList.contains("active")) {
        document.body.style.userSelect = "none";
        document.body.classList.add("noscroll");
    } else {
        document.body.classList.remove("noscroll");
        document.body.style.userSelect = "auto";
    }
});

const headerLinks = document.querySelectorAll(".header__list-link");

headerLinks.forEach((link) => {
    link.addEventListener("click", () => {
        headerMenu.classList.remove("active");
        navList.classList.remove("active");
        document.body.classList.remove("noscroll");
    });
});
