console.log('aa');


$(function () {
  $(window).scroll(function () {
    var posTop = $(".view").scrollTop() - $('.container').offset().top
  });
});

$('.grid').masonry({
  columnWidth: 350,
  itemSelector: '.grid__item',
  gutter: 50
});


