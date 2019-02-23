// MapInit - инициализация карт

function initialize() {
    let mapOptions = {
        center: new google.maps.LatLng(28.1823294, -82.352912),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        draggable: false,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
    };
    let map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);