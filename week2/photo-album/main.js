//마우스 호버시 이미지 설명 표시

const hoverImages = document.querySelectorAll("section.cute > div");

hoverImages.forEach((image) => {
  image.addEventListener("mouseenter", onHover);
  image.addEventListener("mouseleave", outHover);
});

function onHover(e) {
  e.target.children[0].style.filter = "brightness(0.5)";
  e.target.children[1].style.display = "inline";
  e.target.children[2].style.display = "inline";
}

function outHover(e) {
  e.target.children[0].style.filter = "brightness(1)";
  e.target.children[1].style.display = "none";
  e.target.children[2].style.display = "none";
}

//탑버튼 불투명 효과
const topBtn = document.getElementById("top_button_wrapper");

window.addEventListener("scroll", function () {
  topBtn.style.opacity = window.scrollY / 2000;
});
