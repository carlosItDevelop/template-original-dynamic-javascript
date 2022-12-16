//------------- about.js -------------//
$(document).ready(function() {

    //skills progressbars show on waypoint enter
    //animate bar only when reach the bottom of screen
    $('.animated-bar .progress-bar').waypoint(function(direction) {
        $(this).progressbar({display_text: 'fill'});
    }, { offset: 'bottom-in-view' });

    //------------- CounTo for stats -------------//
    $('.stats-number').countTo({
        speed: 1000,
        refreshInterval: 50
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
		
});