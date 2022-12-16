//------------- contact.js -------------//
$(document).ready(function() {

    //------------- Google maps -------------//
    //basic map
    var bmap = new GMaps({
        el: '#gmap',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : true,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false,
        markers: [
            {lat: -12.043333, lng: -77.028333},
        ]
    });

    //add custom marker
    bmap.addMarkers(
        [{
            "lat": "-12.043333",
            "lng": "-77.028333",
            "icon": "http://gmapsmarkergenerator.eu01.aws.af.cm/getmarker?scale=1&color=df6a78"
        }]
    );


});