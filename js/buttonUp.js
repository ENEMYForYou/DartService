$(function () {
 $(document).ready(function(){
   var scroll_pos = 0;
   var footer = $('footer');
    $(document).scroll(function() { 
       w = Math.floor( $(window).scrollTop() );
   $('.remove').css( 'background-color', '' ); 
    if(w<=$('.home_btn').offset().top){
         $('.home_btn').css( 'color', 'black' );
    }else{
         $('.home_btn').css( 'color', 'blue' );
    }
});
    //     scroll_top = $(this).scrollTop();
    //     if(scroll_top > 640) { 
    //         $(".home_btn").css('color', 'white');
    //     } else {
    //         $(".home_btn").css('color', 'black');
    //     }
    // });
});
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
