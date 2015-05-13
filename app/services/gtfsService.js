/**
 * Created by lamphanviet on 9/1/14.
 */
app.factory('gtfsService', [function() {
    var map = null;
    var mapOptions = (function() {
        return {
            zoom: Number(localStorage.getItem("mapOption.zoom") || 8),
            center: new google.maps.LatLng(Number(localStorage.getItem("mapOption.center.lat") || -34.397),
                Number(localStorage.getItem("mapOption.center.lng") || 150.644))
        }
    })();

    function getMap() {
        return map;
    }

    function getMapOptions() {
        return mapOptions;
    }

    function saveMapOptions() {
        localStorage.setItem("mapOption.zoom", mapOptions.zoom);
        localStorage.setItem("mapOption.center.lat", mapOptions.center.lat());
        localStorage.setItem("mapOption.center.lng", mapOptions.center.lng());
    }

    var agencies = [];
    var stops = [];
    var routes = [];
    var trips = [];
    var stopTimes = [];
    var calendars = [];
    var calendarDates = [];
    var fareAttributes = [];
    var fareRules = [];
    var shapes = [];
    var frequencies = [];
    var transfers = [];
    var feedInfo = [];

    function getAgencyById(agencyId) {
        return getObjectHavingPropertyValue(agencies, 'agency_id', agencyId);
    }

    function getRouteById(routeId) {
        return getObjectHavingPropertyValue(routes, 'route_id', routeId);
    }

    function getRoutesByAgencyId(agencyId) {
        return getObjectsHavingPropertyValue(routes, 'agency_id', agencyId);
    }

    function getTripById(tripId) {
        return getObjectHavingPropertyValue(trips, 'trip_id', tripId);
    }

    function getTripsByRouteId(routeId) {
        return getObjectsHavingPropertyValue(trips, 'route_id', routeId);
    }

    function getObjectHavingPropertyValue(array, property, value) {
        for (var i = 0; i < array.length; i++)
            if (array[i][property] == value)
                return array[i];
        return null;
    }

    function getObjectsHavingPropertyValue(array, property, value) {
        var result = [];
        for (var i = 0; i < array.length; i++)
            if (array[i][property] == value)
                result.push(array[i]);
        return result;
    }

    function createAgency() {
        var agency = new Agency();
        agencies.push(agency);
    }

    function createRoute(agency) {
        var route = new Route();
        route.setAgency(agency);
        routes.push(route);
    }



    (function go() {
        for (var i = 0; i < 3; i++) {
            var agency = new Agency();
            agencies.push(agency);
            for (var j = 0; j < 5; j++)
                createRoute(agency);
        }
    })();

    return {
        getMap: getMap,
        getMapOptions: getMapOptions,
        saveMapOptions: saveMapOptions,

        agencies: agencies,
        stops: stops,
        routes: routes,
        trips: trips,
        stopTimes: stopTimes,
        calendars: calendars,
        calendarDates: calendarDates,
        fareAttributes: fareAttributes,
        fareRules: fareRules,
        shapes: shapes,
        frequencies: frequencies,
        transfers: transfers,
        feedInfo: feedInfo
    };
}]);