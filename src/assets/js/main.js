const navLinks = document.querySelectorAll(".nav-link");

const currentPage = window.location.pathname.slice(1, -1);

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].dataset.page === currentPage) {
    navLinks[i].classList.add("active");
    break;
  }
}

