/* 入口文件app.js，对模块依赖的声明*/
var mainapp = angular.module('app',['ui.router','ngCookies','validation','ngAnimate']);
/**
 * Created by zhenghao on 2017/4/21.
 */
/**
 * config/router.js，对于uirouter的配置信息，采用[]显式声明（避免压缩有问题）
 */
angular.module('app').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('main'); //默认跳转，转发
    $stateProvider
      .state('main',{
        url:'/main',// /main:id 传参id
        templateUrl:'view/main.html',
        /*views:{
        'nav':{templateUrl:'view/leftNav.html'},
        'header':{templateUrl:'view/header.html'},
        'body':{templateUrl:'view/dashboard.html'}
        },*/
        controller:'mainCtrl' //命名方式为，url+Ctrl，页面的逻辑放在controller里面
      })
      .state('main.application', {
        url: "/application",
        templateUrl: 'view/appControl/application.html',
        controller: 'applicationCtrl'
      })
      .state('main.service', {
        url: "/service",
        templateUrl: 'view/appControl/service.html',
        controller: 'serviceCtrl'
      })
      .state('main.docker', {
        url: "/docker",
        templateUrl: 'view/appControl/docker.html',
        controller: 'dockerCtrl'
      })
  }]);
/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('applicationCtrl', ['$http', '$scope', function($http, $scope){
  
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('dockerCtrl', ['$http', '$scope', function($http, $scope){

}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
  /*$http.get('/data/positionList.json').then(function(resp){
    $scope.list = resp.data;
  });*/
  $scope.currentType = 'home';
  $scope.changeTab = function(type){
    $scope.currentType = type;
  };
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('serviceCtrl', ['$http', '$scope', function($http, $scope){

}]);

/**
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('appDashboard', ['$http', function($http){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/dashboard.html',
    scope: {
    },
    link:function($scope){

    }
  };
}]);

/**
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('appHeader', ['$http', function($http){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/header.html',
    scope: {
    },
    link:function($scope){

    }
  };
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').directive('leftNav', [function(){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/leftNav.html',
    link: function($scope){
    }
  };
}]);
