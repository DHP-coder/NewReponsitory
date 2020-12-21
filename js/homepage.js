$(document).ready(function() {
    $(".home-about__typo a").hover(function() {
        $(".home-about__typo a img").addClass("icon-read-more");
    }, function() {
        $(".home-about__typo a img").removeClass("icon-read-more");
    });

    $(".owl-carousel").owlCarousel({

        autoPlay: 3000,
        items: 3,

        center: true,
        nav: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});

$(window).resize(function() {

    var width = $(window).width();

    if (width < 768) {
        $('.logo-product img').addClass('logo-product-responsive');
    } else {
        $('.logo-product img').removeClass('logo-product-responsive');
    }
});