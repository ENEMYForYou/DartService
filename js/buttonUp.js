$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('.home_btn').fadeIn();
  } else {
  $('.home_btn').fadeOut();
  }
  });
  $('.home_btn').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
});
