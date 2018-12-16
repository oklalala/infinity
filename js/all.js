// const loading = document.querySelector('.loading');
// window.addEventListener('load', function (event) {
//   setInterval(() => {
//     loading.className = "loading animated fadeOut";
//   }, 8000);
// });

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

$('.grid').masonry({
  columnWidth: 350,
  itemSelector: '.grid__item',
  gutter: 50,
});