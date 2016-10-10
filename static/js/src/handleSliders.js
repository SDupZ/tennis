/*
     *	Hero slider
     */
    (function ($) {

        var $heroSlider = $("#heroSlider");

        $heroSlider.slick({
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            arrows: true,
            fade: true,
            touchMove: true,
            adaptiveHeight: true,
            autoplay: false,
            autoplaySpeed: 5000,
            lazyLoad: 'ondemand',
        });


    })(jQuery);
