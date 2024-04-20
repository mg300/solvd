function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
const darkModeToggle = document.querySelector(".theme-btn");
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", toggleDarkMode);
}
