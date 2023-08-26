const headerMenu = document.querySelector(".header__menu");
const navList = document.querySelector(".header__nav-list");

headerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    navList.classList.toggle("active");
    if (navList.classList.contains("active"))
        document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
});

const headerLinks = document.querySelectorAll(".header__list-link");

headerLinks.forEach((link) => {
    link.addEventListener("click", () => {
        headerMenu.classList.remove("active");
        navList.classList.remove("active");
    });
});
