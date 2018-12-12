console.log('aa');


$(function () {
  $(window).scroll(function () {
    var posTop = $(".view").scrollTop() - $('.container').offset().top
  });
});