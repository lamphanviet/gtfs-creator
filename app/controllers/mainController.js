/**
 * Created by lamphanviet on 9/1/14.
 */
app.controller('mainController', ['$scope', '$location', function($scope, $location) {

    $scope.isActive = function(route) {
        return route == $location.path();
    }
}]);