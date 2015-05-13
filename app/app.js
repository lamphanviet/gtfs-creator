/**
 * Created by lamphanviet on 8/20/14.
 */
var app = angular.module('app',[
    'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'app/views/about.html',
            controller: 'aboutController'
        })
        .when('/gtfs', {
            templateUrl: 'app/views/gtfs.html',
            controller: 'gtfsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);