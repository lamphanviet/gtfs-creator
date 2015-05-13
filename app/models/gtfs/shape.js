/**
 * Created by lamphanviet on 9/1/14.
 */
// Optional
function Shape() {
    this.shape_id = 0;
    this.latLongs = [];
    this.distanceTravels = []; // metres
}

// https://developers.google.com/maps/documentation/javascript/reference#LatLng
Shape.prototype.addLatLong = function(latLong) {
    this.latLongs.push(latLong);
}

Shape.prototype.calculateDistanceTravels = function() {
    distanceTravels = [];
    distanceTravels.push(0);
    for (var i = 1; i < latLongs.length; i++) {
        var distance = google.maps.geometry.spherical.computeDistanceBetween (latLongs[i - 1], latLongs[i]);
        distanceTravels.push(distance);
    }
}