$(function(){
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
        dots: true,
        fade: true,
    });

    $(window).scroll(function () {
        if($(window).scrollTop() > 300) {
          $(".navbar").addClass('sticky-menu');
        } else {
          $(".navbar").removeClass('sticky-menu');
        }
    });

})




var html_body = $('html, body');
$('.collapse a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 140
            }, 1500);
            return false;
        }
    }
})



