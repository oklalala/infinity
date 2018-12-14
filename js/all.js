<<<<<<< HEAD
const loading = document.querySelector('.loading');
window.addEventListener('load', function (event) {
  setInterval(() => {
    loading.className = "loading animated fadeOut";
  }, 8000);
});
=======
// const loading = document.querySelector('.loading');
// window.addEventListener('load', function (event) {
//   setInterval(() => {
//     loading.className += " animated fadeOut";
//   }, 10000);
// });
>>>>>>> scroll-top

$(function () {
  $.scrollify({
    section: ".scroll__section",
    sectionName: "section-name",
    scrollSpeed: 1100,
    overflowScroll: true,
    setHeights: false
  });
});

$('.grid').masonry({
  columnWidth: 350,
  itemSelector: '.grid__item',
  gutter: 50,
});