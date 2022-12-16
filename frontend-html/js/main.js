//------------- main.js -------------//

//Template options
var templateOptions = {
    fixed_header: true, //make header fixed
    accordion: {
        toggleIcon: 'l-arrows-minus s16 collapse-icon',//toggle icon for accrodion (put additional class "collapse-icon" to prevent random icon deletition)
        collapseIcon: 'l-arrows-plus s16 collapse-icon'//collapse icon for accrodion
    }
}

// make console.log safe to use
window.console||(console={log:function(){}});

//Internet Explorer 10 in Windows 8 and Windows Phone 8 fix
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

//Android stock browser
var nua = navigator.userAgent
var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {
  $('select.form-control').removeClass('form-control').css('width', '100%')
}

//attach fast click
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

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

//Accordions funciton
function accordions () {
    var acc = $('.accordion'); //get all accordions
    acc.collapse();//activate it

    //function to put icons
    accPutIcon = function  () {
        acc.each(function(index) {
           accExp = $(this).find('.panel-collapse.in');
           accExp.prev('.panel-heading').addClass('content-in').find('a.accordion-toggle').append('<i class="' + templateOptions.accordion.toggleIcon + '"></i>');
           accNor = $(this).find('.panel-collapse').not('.panel-collapse.in');
           accNor.prev('.panel-heading').find('a.accordion-toggle').append('<i class="' + templateOptions.accordion.collapseIcon + '"></i>');
        });
    }

    //function to update icons
    accUpdIcon = function  () {
        acc.each(function(index) {
           accExp = $(this).find('.panel-collapse.in');
           accExp.prev('.panel-heading').find('i.collapse-icon').remove();
           accExp.prev('.panel-heading').addClass('content-in').find('a.accordion-toggle').append('<i class="' + templateOptions.accordion.toggleIcon + '"></i>');

           accNor = $(this).find('.panel-collapse').not('.panel-collapse.in');
           accNor.prev('.panel-heading').find('i.collapse-icon').remove();
           accNor.prev('.panel-heading').removeClass('content-in').find('a.accordion-toggle').append('<i class="' + templateOptions.accordion.collapseIcon + '"></i>');
        });
    }

    accPutIcon();

    $('.accordion').on('shown.bs.collapse', function () {
        accUpdIcon();
        stickyFooter();
    }).on('hidden.bs.collapse', function () {
        accUpdIcon();
        stickyFooter();
    });
}

//doc ready function
$(document).ready(function() {

    //------------- Fix header on scroll -------------//
    if (templateOptions.fixed_header) {
        $('body').addClass('header-fixed');
    }

    //Disable certain links
    $('a[href^=#]').click(function (e) {
        e.preventDefault()
    })

    //------------- Bootstrap tooltips -------------//
    $("[data-toggle=tooltip]").tooltip ({container:'body'});
    $(".tip").tooltip ({placement: 'top', container: 'body'});
    $(".tipR").tooltip ({placement: 'right', container: 'body'});
    $(".tipB").tooltip ({placement: 'bottom', container: 'body'});
    $(".tipL").tooltip ({placement: 'left', container: 'body'});
    //------------- Bootstrap popovers -------------//
    $("[data-toggle=popover]").popover ();


    //remove nav hover on mobile.
    if (!$('html').hasClass('touch')) {
        $('.site-nav  li.dropdown').hover(function() {
          $(this).delay(200).addClass('open');
        }, function() {
          $(this).delay(200).removeClass('open');
        });
    }

    //get images and put it as background
    $('.bg-img-holder').each(function(){
        var img = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + img + '")');
        $(this).children('img').hide();
        $(this).css('background-position', '50% 50%');
    });  

    //Back to top
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $("#back-to-top").fadeIn(200);
        } else{
            $("#back-to-top").fadeOut(200);
        }
    });
    
    $('#back-to-top, .back-to-top').click(function() {
        $('html, body').animate({ scrollTop:0 }, '800');
        return false;
    });

    //morphing search
    (function() {
        var morphSearch = document.getElementById( 'morphsearch' ),
            input = morphSearch.querySelector( 'input.morphsearch-input' ),
            ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
            overlay = document.getElementById( 'overlay' ),
            isOpen = isAnimating = false,
            // show/hide search area
            toggleSearch = function(evt) {
                // return if open and the input gets focused
                if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

                var offsets = morphsearch.getBoundingClientRect();
                if( isOpen ) {
                    classie.remove( morphSearch, 'open' );
                    
                    setTimeout(function() {
                        classie.remove( overlay, 'open');
                        if (templateOptions.fixed_header) {
                            $('body , #header').addClass('header-fixed');
                        }  
                        $('body').removeClass('ovh');
                    }, 400);               

                    // trick to hide input text once the search overlay closes 
                    // todo: hardcoded times, should be done after transition ends
                    if( input.value !== '' ) {
                        setTimeout(function() {
                            classie.add( morphSearch, 'hideInput' );
                            setTimeout(function() {
                                classie.remove( morphSearch, 'hideInput' );
                                input.value = '';
                            }, 300 );
                        }, 500);
                    }
                    
                    input.blur();
                }
                else {
                    if (templateOptions.fixed_header) {
                        $('body , #header').removeClass('header-fixed');
                    }
                    $('body').addClass('ovh');
                    classie.add( morphSearch, 'open' );
                    classie.add( overlay, 'open');
                }
                isOpen = !isOpen;
            };

        // events
        input.addEventListener( 'focus', toggleSearch );
        ctrlClose.addEventListener( 'click', toggleSearch );
        // esc key closes search overlay
        // keyboard navigation events
        document.addEventListener( 'keydown', function( ev ) {
            var keyCode = ev.keyCode || ev.which;
            if( keyCode === 27 && isOpen ) {
                toggleSearch(ev);
            }
        } );

        /***** for demo purposes only: don't allow to submit the form *****/
        morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );

    })();

    //------------- Accordions -------------//
    accordions();
    
    //------------- Scroll events -------------//
    $(window).scroll(function() {
        stickyFooter();
    });

    //------------- Resize events -------------//
    $(window).resize(function() {
        stickyFooter();
    });

    //------------- Responsvie button------------//
    $('.responsive-menu-toggle').click(function(event) {
        _this = $(this);
        if ($(this).hasClass('menu-open')) {
            //close menu
            $('#header .site-nav').slideUp('250', 'swing', function() {
                _this.removeClass('menu-open');
            });
        } else {
            //open menu
            $('#header .site-nav').slideDown('250', 'swing', function() {
                _this.addClass('menu-open');
            });
        }
    });

});

//window load functions
$(window).load(function(){
    $('.bg-img-holder').addClass('animated fadeIn');
    //execute sticky footer
    stickyFooter();
});