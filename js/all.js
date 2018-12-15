console.log('aa');


$(function () {
  $(window).scroll(function () {
    var posTop = $(".view").scrollTop() - $('.container').offset().top
  });
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

