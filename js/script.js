document.addEventListener("DOMContentLoaded", () => {

  // Set Year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  // Smooth Scroll (Click)git status

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const offset = target.offsetTop;

      window.scrollTo({
        top: offset - 30,
        behavior: "smooth"
      });

      // set active manually
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Scroll Spy (best version)
  function activateMenuOnScroll() {
    let scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        const id = section.getAttribute("id");

        navLinks.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateMenuOnScroll);
  activateMenuOnScroll(); // Run on load
});

// timeline 
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.4
    });

    items.forEach(item => observer.observe(item));
});
