window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs_item");
        play_btn = document.querySelector('#play_video'),
        video = document.querySelector('#video');
    play_btn.addEventListener('click', function () {
        video.play();
        video.setAttribute('controls', 'controls');
        play_btn.style.display = "none";
    });
    video.addEventListener('ended', function () {
        this.src = this.src;
        play_btn.style.display = "block";
        video.removeAttribute('controls');
    });
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs_item_active")) {
                    otherItem.classList.remove("tabs_item_active");
                }
            })
            elem.classList.add("tabs_item_active")
        });
    });
    $('.team_carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="carousel_arrow carousel_arrow_prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel_arrow carousel_arrow_next"><i class="fas fa-chevron-right"></i></div>',
    });
    $('#buyNowBtn').on('click', popupOpen);
    $('#tryForBtn').on('click', popupOpen);
    $('.popup_close').on('click', () => {
        $('.popup').removeClass('popup_active');
        $('body').css('overflow', 'visible')
    })
    function popupOpen() {
        $('.popup').addClass('popup_active');
        $('.popup_done').hide();
        $('.popup_wrap').show();
        $('body').css('overflow', 'hidden')
    }    
});
    $(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
});
