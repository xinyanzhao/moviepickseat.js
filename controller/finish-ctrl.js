angular.module('seatReservationApp')
    .controller('finish',function($scope,$location){
        $scope.data = $location.search();
        $scope.data.gender = $scope.data.gender === 0 ? '男' : '女';
    });
