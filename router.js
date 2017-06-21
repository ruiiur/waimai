/**
 * Created by Weetao on 2017-05-16.
 */
var app = angular.module('myApp', [
    'ui.router','ionic'
]);
angular.module('myApp').config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //ionic全局配置
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    //路由配置
    $urlRouterProvider.otherwise('/');
    $stateProvider
        //首页
        .state('main', {
            url: '/',
            templateUrl: "views/waimai.html",
            controller:'mainCtrl'
        })
        //点餐页
        .state('main.order', {
            url: 'order',
            views:{
                'order':{
                    templateUrl: "views/order.html",
                    controller:'orderCtrl'
                }
            }
        })
        //点餐页之菜单页
        .state('main.order.menu', {
            url: '/menu',
            views:{
                'menu':{
                    templateUrl: "views/menu.html",
                }
            }
        })
        //购物车页
        .state('main.car', {
            url: 'car',
            views:{
                'car':{
                    templateUrl: "views/car.html"
                }
            }
        })
        //个人中心页
        .state('main.mine', {
            url: 'mine',
            views:{
                'mine':{
                    templateUrl: "views/mine.html"
                }
            }
        })
}]);
