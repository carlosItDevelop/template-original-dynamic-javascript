//------------- portfolio.js -------------//
$(document).ready(function() {

    $('.portfolio').mixItUp({
        callbacks: {
            onMixEnd: function(state){
                stickyFooter();
            }
        }
    });

});

//make footer sticky to the bottom
function stickyFooter() {

    $footer = $("#footer");
    var pagewrapper = $('#content');

    if ( (pagewrapper.height() + 30) + ($footer.height()) < $(window).height()) {
        $footer.css({
            position: "absolute"
        });
    } else {
        $footer.css({
            bottom: "auto"
        });
    }
}