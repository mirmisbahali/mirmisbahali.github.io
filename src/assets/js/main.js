const navLinks = document.querySelectorAll(".nav-link");

const currentPage = window.location.pathname.slice(1, -1);

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].dataset.page === currentPage) {
    navLinks[i].classList.add("active");
    break;
  }
}

const projectId = "y0zewcru";
const query = `*[_type == "post"]{title, slug, body}`;
const url = `https://${projectId}.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;

fetch(url).then((res) => {
  res.json().then((data) => console.log(data.result[0]));
});
