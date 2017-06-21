/**
 * Created by Weetao on 2017-05-16.
 */
// var app = angular.module('myApp', []);
angular.module('myApp').controller('baseCtrl',['$scope',function ($scope) {
    alert('hhh');
    console.log('sss');
    $scope.GGG=function(){
        alert('ddd');
    }
}]);
