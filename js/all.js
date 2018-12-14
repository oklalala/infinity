window.addEventListener('load', function(event) {
  setInterval(() => {
    console.log('All resources finished loading!');
  }, 5000);
});

$(function() {
  $(window).scroll(function() {
    var posTop = $('.view').scrollTop() - $('.container').offset().top;
  });
});

$('.grid').masonry({
  columnWidth: 350,
  itemSelector: '.grid__item',
  gutter: 50,
});
