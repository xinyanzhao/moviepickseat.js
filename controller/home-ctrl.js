angular.module('seatReservationApp')
    .controller('home', ['$scope','$location',function($scope,$location){
        $scope.lists = [
            {movie:'images/1.jpg',name:'新木乃伊'},
            {movie:'images/2.jpg',name:'神奇女侠'},
            {movie:'images/3.jpg',name:'异形'},
            {movie:'images/4.jpg',name:'李雷和韩梅梅'},
            {movie:'images/5.jpg',name:'摔跤吧！爸爸'}
        ];
        $scope.pickSeat = function(list){
            $location.path('/pickSeat').search(list);
        };
    }]);