const loading = document.querySelector('.loading');
window.addEventListener('load', function (event) {
  setInterval(() => {
    loading.className += " animated fadeOut";
  }, 10000);
});

$(function () {

});

$('.grid').masonry({
  columnWidth: 350,
  itemSelector: '.grid__item',
  gutter: 50,
});