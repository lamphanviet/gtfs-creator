/**
 * Created by lamphanviet on 8/20/14.
 */
app.controller('mapController', ['$scope', 'gtfsService', function($scope, gtfsService) {
    var map = gtfsService.getMap();
    var mapOptions = gtfsService.getMapOptions();

    function initialize() {
        console.log("initialize map");
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


        google.maps.event.addListener(map, 'center_changed', saveMapOptions);
        google.maps.event.addListener(map, 'zoom_changed', saveMapOptions);
    }

    function saveMapOptions() {
        mapOptions.zoom = map.getZoom();
        mapOptions.center = map.getCenter();
        gtfsService.saveMapOptions();
    }



    (function() {
        initialize();
    })();
}]);