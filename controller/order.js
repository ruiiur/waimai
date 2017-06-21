/**
 * Created by Weetao on 2017-05-22.
 */
angular.module('myApp').controller('orderCtrl',['$scope',function ($scope) {
    console.log('这是订餐部分');
    $scope.items=[
        {
            'foodNum':'2',
            'foodName':'套餐'
        },
        {
            'foodNum':'0',
            'foodName':'法式小面包'
        },
        {
            'foodNum':'0',
            'foodName':'意大利餐'
        }
    ]

}]);