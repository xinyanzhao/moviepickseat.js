var app = angular.module('seatReservationApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'views/home.html',
            controller: 'home'
        })
        .when('/pickSeat',{
            templateUrl:'views/pickSeat.html',
            controller:'pickSeat'
        })
        .when('/finish',{
            templateUrl:'views/finish.html',
            controller:'finish'
        })
}]);