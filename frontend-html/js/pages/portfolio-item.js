//------------- portfolio-item.js -------------//
$(document).ready(function() {

    //portfolio carousel
    $("#portfolio-carousel").owlCarousel({
        items: 3,
        lazyLoad : true,
        navigation : false,
        slideSpeed : 500,
        paginationSpeed : 1000,
        autoPlay: 7000,
        stopOnHover: true,
    }); 
		
});