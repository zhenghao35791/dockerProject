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
      /*.state('main.application', {
        url: "/application",
        templateUrl: 'view/application/application.html',
        controller: 'applicationCtrl'
      })*/
      .state('main.appStore', {
        url: "/appStore",
        templateUrl: 'view/application/appStore.html',
        controller: 'appStoreCtrl'
      })
      .state('main.appModule', {
        url: "/appModule",
        templateUrl: 'view/application/appModule.html',
        controller: 'appModuleCtrl'
      })
      .state('main.appInstance', {
        url: "/appInstance",
        templateUrl: 'view/application/appInstance.html',
        controller: 'appInstanceCtrl'
      })
      .state('main.docker', {
        url: "/docker",
        templateUrl: 'view/resource/docker.html',
        controller: 'dockerCtrl'
      })
  }]);
/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appInstanceCtrl', ['$http', '$scope', function($http, $scope){
  var vm = $scope.vm = {};
  vm.page = {
    size: 5,
    index: 1
  };
  vm.sort = {
    column: 'id',
    direction: -1,
    toggle: function(column) {
      if (column.sortable === false)
        return;

      if (this.column === column.name) {
        this.direction = -this.direction || -1;
      } else {
        this.column = column.name;
        this.direction = -1;
      }
    }
  };
  // 构建模拟数据
  vm.columns = [
    {
      label: 'ID',
      name: 'id',
      type: 'string'
    },
    {
      label: '姓名',
      name: 'name',
      type: 'string'
    },
    {
      label: '粉丝数',
      name: 'followers',
      type: 'number'
    },
    {
      label: '收入',
      name: 'income',
      type: 'currency'
    },
    {
      label: '',
      name: 'actions',
      sortable: false
    }
  ];
  // 供页面中使用的函数
  vm.age = function(birthday) {
    return moment().diff(birthday, 'years');
  };

  vm.items = [];
  var MAX_NUM = 10 * 1000;
  function rand(min, max) {
    return min + Math.round(Math.random() * (max-min));
  }
  for (var i = 0; i < MAX_NUM; ++i) {
    var id = rand(0, MAX_NUM);
    vm.items.push({
      id: i + 1,
      name: 'Name' + id, // 字符串类型
      followers: rand(0, 100 * 1000 * 1000), // 数字类型
      birthday: moment().subtract('day', rand(365, 365 * 50)).toDate(), // 日期类型
      summary: '这是一个测试' + i,
      income: rand(1000, 100000) // 金额类型
    });
  }
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appInstanceCtrl', ['$http', '$scope', function($http, $scope){

}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appStoreCtrl', ['$http', '$scope', function($http, $scope){
  $scope.appStores = [
    {
      "name" : "chrome",
      "desc" : "远程chrome浏览器"
    },
    {
      "name" : "chrome",
      "desc" : "远程chrome浏览器"
    },
    {
      "name" : "chrome",
      "desc" : "远程chrome浏览器"
    },


    {
      "name" : "tomcat",
      "desc" : "Tomcat服务器是一个免费的开放源代码的Web应用服务器"
    },
    {
      "name" : "tomcat",
      "desc" : "Tomcat服务器是一个免费的开放源代码的Web应用服务器"
    },
    {
      "name" : "tomcat",
      "desc" : "Tomcat服务器是一个免费的开放源代码的Web应用服务器"
    },


    {
      "name" : "redis",
      "desc" : "Redis是一个开源的支持网络的日志型Key-Value数据库"
    },
    {
      "name" : "redis",
      "desc" : "Redis是一个开源的支持网络的日志型Key-Value数据库"
    },
    {
      "name" : "redis",
      "desc" : "Redis是一个开源的支持网络的日志型Key-Value数据库"
    },

    {
      "name" : "nginx",
      "desc" : "Nginx是开源的代理、负载均衡、http cache、Web服务"
    },
    {
      "name" : "nginx",
      "desc" : "Nginx是开源的代理、负载均衡、http cache、Web服务"
    },
    {
      "name" : "nginx",
      "desc" : "Nginx是开源的代理、负载均衡、http cache、Web服务"
    }
  ]
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
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('breadcrumb', ['$http', function($http){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/application/breadcrumb.html',
    scope: {
      title: '@',
      image: '@'
    },
    link:function($scope){

    }
  };
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
