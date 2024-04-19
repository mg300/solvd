const element = document.querySelector(".profile-img");
element.addEventListener("click", animateBorder);

function animateBorder() {
  const colors = ["#ffab00", "#2d2d2d", "#fa6400", "#333333", "#fbc02d"];
  element.style.boxShadow = "0px 0px 10px 10px " + colors[0];

  colors.slice(1).forEach(function (color, index) {
    setTimeout(function () {
      element.style.boxShadow = "0px 0px 10px 10px " + color;
    }, (index + 1) * 500);
  });

  setTimeout(function () {
    element.style.boxShadow = "0px 0px 0px";
  }, colors.length * 500);
}
