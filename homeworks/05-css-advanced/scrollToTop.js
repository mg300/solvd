function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
document.querySelector(".top-btn").addEventListener("click", scrollToTop);
