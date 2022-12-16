//------------- Home page.js -------------//
$(document).ready(function() {
    //$('#slider').removeClass('hided');
    /*Init revolution slider*/
    jQuery('.slider-inner').revolution(
    {
        dottedOverlay:"none",
        delay:9000,
        startwidth:1170,
        startheight:450,
        hideThumbs:10,
        navigationType:"bullet",
        navigationArrows:"solo",
        navigationStyle:"preview1",
        touchenabled:"on",
        onHoverStop:"on",
        
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
                                
        parallax:"mouse",
        parallaxBgFreeze:"on",
        parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
                                
        keyboardNavigation:"on",
        hideTimerBar:"on",
        
        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:20,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,
                
        shadow:0,
        fullWidth:"on",
        fullScreen:"off",

        spinner:"spinner1",
        
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,

        shuffle:"off",
        
        autoHeight:"off",
    });

    //Testimonials carousel
    $("#testimonials-carousel").owlCarousel({
        lazyLoad : true,
        navigation : true,
        slideSpeed : 500,
        paginationSpeed : 1000,
        singleItem:true,
        autoPlay: 7000,
        stopOnHover: true,
        navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    }); 

    //Customers carousel
    $("#customers-carousel").owlCarousel({
        items: 4,
        lazyLoad : true,
        navigation : false,
        slideSpeed : 500,
        paginationSpeed : 1000,
        autoPlay: 7000,
        stopOnHover: true,
    }); 

});