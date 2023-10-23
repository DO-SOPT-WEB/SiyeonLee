const topBtn = document.getElementById("top_button_wrapper");

window.addEventListener("scroll", function () {
  topBtn.style.opacity = window.scrollY / 2000;
});
