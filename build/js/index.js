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
      .state('main.host', {
        url: "/host",
        templateUrl: 'view/resource/host.html',
        controller: 'hostCtrl'
      })
  }]);
/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appInstanceCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'instance_name',
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
  vm.refresh = function(){
    $window.location.reload();
  };
  // 构建模拟数据
  vm.columns = [
    {
      label: '实例名称',
      name: 'instance_name'
    },
    {
      label: '部署状态',
      name: 'status'
    },
    {
      label: '模版名称',
      name: 'model_name'
    },
    {
      label: '模版版本',
      name: 'model_version'
    },
    {
      label: '主机分组',
      name: 'host'
    },
    {
      label: '容器数目',
      name: 'docker_num'
    },
    {
      label: '操作',
      name: 'action',
      sortable: false
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      instance_name: '11111',
      status: '已部署',
      model_name:'chrome浏览器',
      model_version:'577d600',
      host:'vlan18',
      docker_num:'3',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '222222',
      status: '已部署',
      model_name:'chrome浏览器',
      model_version:'577d622',
      host:'vlan18',
      docker_num:'2',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '333333',
      status: '已部署',
      model_name:'CICD',
      model_version:'5234123',
      host:'vlan112',
      docker_num:'6',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '444444',
      status: '已部署',
      model_name:'CICD',
      model_version:'5234144',
      host:'vlan1',
      docker_num:'2',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'asdsd',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'033366a',
      host:'vlan18',
      docker_num:'3',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'aasfasw',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'033366a',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'f4213',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'033366a',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '5gdfsd',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'0333231',
      host:'vlan2',
      docker_num:'1',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'dasfwq21',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    }
    ,
    {
      instance_name: 'gggg',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    }
    ,
    {
      instance_name: 'sdfsdfas',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'6',
      action_one:'删除',
      action_two:'升级'
    }
    ,
    {
      instance_name: 'dasfwq22',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'2',
      action_one:'删除',
      action_two:'升级'
    }
  ];
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appModuleCtrl', ['$http', '$scope', function($http, $scope){

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
angular.module('app').controller('hostCtrl', ['$http', '$scope', function($http, $scope){
  $scope.host = [
  ]
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

/**
 * Created by zhenghao on 2017/5/9.
 */
angular.module('app').filter('orderClass', function() {
  return function (direction) {
    if (direction === -1)
      return "glyphicon-chevron-down";
    else
      return "glyphicon-chevron-up";
  }
});