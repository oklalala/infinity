const loading = document.querySelector('.loading');
window.addEventListener('load', function (event) {
  setInterval(() => {
    loading.className = "loading animated fadeOut";
    loading.style.display = "none";
  }, 8000);
});

$(function () {
  $.scrollify({
    section: ".scroll__section",
    sectionName: "section-name",
    scrollSpeed: 1100,
    overflowScroll: true,
    target: '.view',
    setHeights: false
  });
  $('.gotobanner').on('click', function () {
    $.scrollify.move("#parallax");
  })
});

function hamburgerToggle(x) {
  x.classList.toggle("change");
}
var scene = document.getElementById('welcome');
var parallaxInstance = new Parallax(scene);