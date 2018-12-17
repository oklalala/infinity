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
$(".works__home").click(function () {
  document.querySelector(".works__text__title").innerHTML = "WORKS";
  document.querySelector(".works__text__subtitle").innerHTML = "作品";
})

$(".works__check__text").click(function () {
  document.querySelector(".works__text__subtitle").innerHTML = "";
  let works__text__title = document.querySelector(".works__text__title");
  let data_rel = $(this).attr('data-rel');
  switch (data_rel) {
    case "worklist":
      works__text__title.innerHTML = "工作項目";
      break;
    case "photographer":
      works__text__title.innerHTML = "攝影師";
      break;
    case "stylist":
      works__text__title.innerHTML = "造型師";
      break;
    case "director":
      works__text__title.innerHTML = "導演";
      break;
    default:
      works__text__title.innerHTML = "";
  }
})