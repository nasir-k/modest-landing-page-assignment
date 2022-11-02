const navs = document.querySelectorAll(".navitem");
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log(sectionTop);

    if (scrollY >= sectionTop) {
      navs.forEach((nav) => {
        if ("#" + section.getAttribute("id") === nav.getAttribute("href")) {
          nav.classList.add("active");
        } else {
          nav.classList.remove("active");
        }
      });
    }
  });
};

const handleNavClick = (nav) => {
  navs.forEach((nav) => nav.classList.remove("active"));
  nav.classList.add("active");
};

navs.forEach((nav, idx, navs) =>
  nav.addEventListener("click", handleNavClick.bind(null, nav, navs))
);
