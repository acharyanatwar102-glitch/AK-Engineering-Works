document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Project Category Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      projectCards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Demo RFQ Form Submission
  const rfqForm = document.getElementById("rfqForm");
  const formStatus = document.getElementById("formStatus");

  if (rfqForm && formStatus) {
    rfqForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const service = document.getElementById("service").value;
      formStatus.textContent = `Thank you, ${name}. Your inquiry for ${service} has been recorded (Demo Mode).`;
      rfqForm.reset();
    });
  }
});
