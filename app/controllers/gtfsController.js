/**
 * Created by lamphanviet on 9/1/14.
 */
app.controller('gtfsController', ['$scope', 'gtfsService', function ($scope, gtfsService) {
    $scope.agencies = gtfsService.agencies;
    $scope.stops = gtfsService.stops;
    $scope.routes = gtfsService.routes;
    $scope.trips = gtfsService.trips;
    $scope.stopTimes = gtfsService.stopTimes;
    $scope.calendars = gtfsService.calendars;
    $scope.calendarDates = gtfsService.calendarDates;
    $scope.fareAttributes = gtfsService.fareAttributes;
    $scope.fareRules = gtfsService.fareRules;
    $scope.shapes = gtfsService.shapes;
    $scope.frequencies = gtfsService.frequencies;
    $scope.transfers = gtfsService.transfers;
    $scope.feedInfo = gtfsService.feedInfo;

    $scope.selectedAgency = null;
    $scope.selectedRoute = null;

    $scope.setSelectedAgency = function(agency) {
        $scope.selectedAgency = agency;
        console.log("Selected agency: " + agency.agency_name);
    }

    $scope.setSelectedRoute = function(route) {
        $scope.selectedRoute = route;
        console.log("Selected route: " + route.route_short_name);
    }


    $scope.addOrSaveAgency = function() {

    };

    $scope.removeAgency = function() {

    };

    $scope.addOrSaveRoute = function() {

    };

    $scope.removeRoute = function() {

    };

    $scope.addOrSaveTrip = function() {

    };

    $scope.removeTrip = function() {

    };

    $scope.addOrSaveStop = function() {

    };

    $scope.removeStop = function() {

    };

    $scope.msg = "gtfsController";
}]);