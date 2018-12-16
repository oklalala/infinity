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

$('.waterfall').masonry({
  columnWidth: 350,
  itemSelector: '.waterfall__item',
  gutter: 50
});

//filter function
$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $(".waterfall").fadeTo(100, 0.1);
    $(".waterfall div").not("." + selectedClass).fadeOut();
    setTimeout(function () {
      $("." + selectedClass).fadeIn();
      $(".waterfall").fadeTo(300, 1);
    }, 300);

  });
});

function hamburgerToggle(x) {
  x.classList.toggle("change");
}
