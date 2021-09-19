$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header_nav_item').click(function(event) {
        $('.header__burger,.header_nav').removeClass('active');
        $('body').removeClass('lock');
    });
});