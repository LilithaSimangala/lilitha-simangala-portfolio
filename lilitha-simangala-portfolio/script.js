const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuButton.textContent = "Close";
  } else {
    menuButton.textContent = "Menu";
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuButton.textContent = "Menu";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();