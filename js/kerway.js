const loading = document.querySelector('.loading');
window.addEventListener('load', function (event) {
  setInterval(() => {
    loading.className = "loading animated fadeOut";
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
  $('.center__arrow').on('click', function () {
    $.scrollify.move("#parallax");
  })
});

$('.waterfall').masonry({
  columnWidth: 350,
  itemSelector: '.waterfall__item',
  gutter: 50
});

function hamburgerToggle(x) {
  x.classList.toggle("change");
}
var scene = document.getElementById('welcome');
var parallaxInstance = new Parallax(scene);