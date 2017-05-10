/* 入口文件app.js，对模块依赖的声明*/
var mainapp = angular.module('app',['ui.bootstrap','ui.router','ngCookies','validation','ngAnimate']);
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
      .state('main.localMirror', {
        url: "/localMirror",
        templateUrl: 'view/resource/localMirror.html',
        controller: 'localMirrorCtrl'
      })
      .state('main.mirrorStore', {
        url: "/mirrorStore",
        templateUrl: 'view/resource/mirrorStore.html',
        controller: 'mirrorStoreCtrl'
      })
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
/**
 * Created by zhenghao on 2017/5/9.
 */
angular.module('app').filter('paging', function() {
  return function (items, index, pageSize) {
    if (!items)
      return [];

    var offset = (index - 1) * pageSize;
    return items.slice(offset, offset + pageSize);
  }
});
/**
 * Created by zhenghao on 2017/5/9.
 */
angular.module('app').filter('size', function() {
  return function (items) {
    if (!items)
      return 0;

    return items.length || 0
  }
});
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
      model_name:'chrome',
      model_version:'577d622',
      label:'lastest',
      host:'vlan18',
      docker_num:'3',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '222222',
      status: '已部署',
      model_name:'chrome',
      model_version:'577d622',
      label:'lastest',
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
      label:'lastest',
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
      label:'lastest',
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
    },
    {
      instance_name: 'gggg',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'sdfsdfas',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'6',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'test001',
      status: '部署中',
      model_name:'redis',
      model_version:'0000v1',
      label:'lastest',
      host:'vlan8',
      docker_num:'2',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'test002',
      status: '部署中',
      model_name:'redis',
      model_version:'0000v1',
      label:'lastest',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'test003',
      status: '部署中',
      model_name:'redis',
      model_version:'0000v1',
      label:'lastest',
      host:'vlan8',
      docker_num:'6',
      action_one:'删除',
      action_two:'升级'
    }
  ];
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appModuleCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'model_name',
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
  vm.columns = [
    {
      label: '模版名称',
      name: 'model_name'
    },
    {
      label: '创建时间',
      name: 'create_time'
    },
    {
      label: '实例个数',
      name: 'instance_num'
    },
    {
      label: '描述',
      name: 'desc',
      sortable: false
    }
  ];
// 构建模拟数据
  vm.items = [
    {
      model_name: '11111',
      create_time: '2017-05-05 15:13:27',
      instance_num:'4',
      desc:'自定义模版'
    },
    {
      model_name: 'CICD',
      create_time: '2017-05-07 12:11:23',
      instance_num:'3',
      desc:'持续集成套装',
      label:'lastest'

    },
    {
      model_name: 'redis_test',
      create_time: '2017-05-02 11:11:27',
      instance_num:'6',
      desc:'redis测试集群'
    },
    {
      model_name: 'testtest',
      create_time: '2017-05-01 21:24:11',
      instance_num:'2',
      desc:'测试测试测试'
    },
    {
      model_name: 'zhenghao',
      create_time: '2017-05-04 09:34:27',
      instance_num:'1',
      desc:'测试基础模版'
    },
    {
      model_name: 'helloword',
      create_time: '2017-05-07 22:13:38',
      instance_num:'3',
      desc:'helloword模版',
      label:'lastest'
    },
    {
      model_name: 'new_model',
      create_time: '2017-05-04 15:56:12',
      instance_num:'3',
      desc:'新建自定义模版'
    },
    {
      model_name: '11111',
      create_time: '2017-05-06 15:13:27',
      instance_num:'3',
      desc:'仅用于测试用'
    }];
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
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
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
  vm.refresh = function(){
    $window.location.reload();
  };
  // 构建模拟数据
  vm.columns = [
    {
      label: 'ID',
      name: 'id'
    },
    {
      label: '容器名称',
      name: 'docker_name'
    },
    {
      label: '容器状态',
      name: 'status'
    },
    {
      label: '标签',
      name: 'label'
    },
    {
      label: 'IP地址',
      name: 'ip'
    },
    {
      label: '监控状态',
      name: 'monitor_status'
    },
    {
      label: '主机',
      name: 'mirror'
    },{
      label: '镜像',
      name: 'order'
    },{
      label: '命令',
      name: 'docker_name'
    },{
      label: '操作',
      name: 'docker_name',
      sortable: false
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      id: '33717b1fcb4f',
      docker_name: '	2-api-gateway-1',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.107',
      monitor_status:'正常',
      host:'agent1803',
      mirror:'centos',
      order:'/bin/bash',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: 'f008675832d4',
      docker_name: 'yingyong-tomcat-1',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.104',
      monitor_status:'正常',
      host:'agent1804',
      mirror:'tomcat:9.0.0.M18-jre8-alpine',
      order:'catalina.sh run',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: '33717b1fcb43',
      docker_name: '2-api-gateway-2',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.108',
      monitor_status:'正常',
      host:'agent1803',
      mirror:'centos',
      order:'/bin/bash',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: 'f008675832d4',
      docker_name: 'yingyong-tomcat-1',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.104',
      monitor_status:'正常',
      host:'agent1804',
      mirror:'tomcat:9.0.0.M18-jre8-alpine',
      order:'catalina.sh run',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: '5801ea4d289a',
      docker_name: 'yingyong-service-discovery-1',
      status:'运行中',
      label:'name = ubuntu Base Image',
      ip:'192.168.18.111',
      monitor_status:'正常',
      host:'agent1803',
      mirror:'ubuntu',
      order:'/bin/bash',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    }
  ];
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('hostCtrl', ['$http', '$scope', function($http, $scope){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'hostname',
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
      label: '名称',
      name: 'hostname'
    },
    {
      label: '标签',
      name: 'label'
    },
    {
      label: 'IP地址',
      name: 'ip'
    },
    {
      label: 'Docker',
      name: 'docker'
    },
    {
      label: '主机状态',
      name: 'status'
    },
    {
      label: 'CPU使用率',
      name: 'memory_per'
    },
    {
      label: '内存使用量',
      name: 'memory_num'
    },
    {
      label: '运行中的容器',
      name: 'docker_run'
    },
    {
      label: '停止的容器',
      name: 'docker_stop'
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      hostname: 'agent1803',
      label:'dev = true',
      ip:'192.168.18.3',
      docker:'1.9.1-csphere.2',
      status:'正常',
      memory_per:'0.50%',
      memory_num:'903 MB',
      docker_run:'1',
      docker_stop:'0'
    },
    {
      hostname: 'agent1804',
      label:'dev = false',
      ip:'192.168.18.4',
      docker:'1.9.1-csphere.4',
      status:'正常',
      memory_per:'4.50%',
      memory_num:'903 MB',
      docker_run:'2',
      docker_stop:'0'
    },
    {
      hostname: 'agent1805',
      label:'dev = true',
      ip:'192.168.18.5',
      docker:'1.9.1-csphere.2',
      status:'正常',
      memory_per:'1.20%',
      memory_num:'800 MB',
      docker_run:'3',
      docker_stop:'1'
    }
  ];
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
mainapp.controller('localMirrorCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.page = {
    size: 5,
    index: 1
  };
  vm.maxSize = 7;    // ...上面都讲了 ， 往上找
  vm.totalItems = 99;
  vm.currentPage = 1;
  vm.bigTotalItems = 180;
  vm.bigCurrentPage = 1;

  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
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
  vm.refresh = function(){
    $window.location.reload();
  };
  // 构建模拟数据
  vm.columns = [
    {
      label: '',
      name: ''
    },
    {
      label: 'ID',
      name: 'id'
    },
    {
      label: '名称',
      name: 'name'
    },
    {
      label: '主机',
      name: 'host'
    },
    {
      label: '创建时间',
      name: 'create_time'
    },
    {
      label: '大小',
      name: 'size'
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
      id: '02d589ee821d',
      name: 'centos:7.0.1406',
      host:'agent1803',
      create_time:'8 个月前',
      size:'200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '03a1bf51079a',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'8 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '	0ac5b09d8536',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'1 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '0ccb67a3d347',
      name: 'ubuntu:precise-20160318',
      host:'agent1803',
      create_time:'1 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3a89fcd57f05',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'2 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3b2afe9f9768',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'1 个月前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026f0',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'5 个月前',
      size:'80MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'60MB',
      action_one:'删除',
      action_two:'运行'
    }
    ,
    {
      id: '673a32f021b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'70MB',
      action_one:'删除',
      action_two:'运行'
    },{
      id: '02d589ee821d',
      name: 'centos:7.0.1406',
      host:'agent1803',
      create_time:'8 个月前',
      size:'200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '03a1bf51079a',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'8 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '	0ac5b09d8536',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'1 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '0ccb67a3d347',
      name: 'ubuntu:precise-20160318',
      host:'agent1803',
      create_time:'1 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3a89fcd57f05',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'2 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3b2afe9f9768',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'1 个月前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026f0',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'5 个月前',
      size:'80MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'60MB',
      action_one:'删除',
      action_two:'运行'
    }
    ,
    {
      id: '673a32f021b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'70MB',
      action_one:'删除',
      action_two:'运行'
    },{
      id: '02d589ee821d',
      name: 'centos:7.0.1406',
      host:'agent1803',
      create_time:'8 个月前',
      size:'200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '03a1bf51079a',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'8 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '	0ac5b09d8536',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'1 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '0ccb67a3d347',
      name: 'ubuntu:precise-20160318',
      host:'agent1803',
      create_time:'1 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3a89fcd57f05',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'2 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3b2afe9f9768',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'1 个月前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026f0',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'5 个月前',
      size:'80MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'60MB',
      action_one:'删除',
      action_two:'运行'
    }
    ,
    {
      id: '673a32f021b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'70MB',
      action_one:'删除',
      action_two:'运行'
    }
  ];
}]);

/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('mirrorStoreCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'storeName',
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
      label: '镜像名称',
      name: 'storeName'
    },
    {
      label: '服务器',
      name: 'host'
    },
    {
      label: '用户名',
      name: 'userName'
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
      storeName: 'Docker Hub Public Registry',
      host:'https://registry.hub.docker.com',
      userName:'docker_test',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'vlan16-registry',
      host:'http://192.168.16.121',
      userName:'docker_test',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'vlan17-registry',
      host:'https://registry.hub.docker.com',
      userName:'tester',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'mini-master',
      host:'	https://reg.cloud.com',
      userName:'master',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'mini-master',
      host:'	https://reg.cloud.com',
      userName:'master',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '微镜像',
      host:'http://192.168.16.121',
      userName:'master',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试镜像',
      host:'http://192.168.16.123',
      userName:'suyan',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '微镜像2',
      host:'http://192.168.16.121',
      userName:'master2',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试镜像2',
      host:'http://192.168.16.124',
      userName:'suyan',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试',
      host:'http://192.168.16.131',
      userName:'suyan_test',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试2',
      host:'http://192.168.16.132',
      userName:'suyan_test',
      action_one:'删除',
      action_two:'编辑'
    }
  ];
}]);
