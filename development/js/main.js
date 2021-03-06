(function($){
    "use strict";
    /*  [ Sticky Menu ] */
    $('.stick-header').sticky({ topSpacing: 0 });
    
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('#return-to-top').addClass('td-scroll-up-visible');
        } else {
            $('#return-to-top').removeClass('td-scroll-up-visible');
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
    });

    // Slide Carousel
    $(document).ready(function() {
        $(".owl-carousel").each(function(index, el) {
        var config = $(this).data();
        config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
        config.smartSpeed="800";
        if($(this).hasClass('owl-style2')){
            config.animateOut="fadeOut";
            config.animateIn="fadeIn";    
        }
        if($(this).hasClass('dotsData')){
            config.dotsData="true";
        }
        $(this).owlCarousel(config);
        });
    });

    $('.header .navbar-toggle').click(function () {
        $('.header .block-menu .menu').toggle('slow');
    });
})(jQuery); // End of use strict