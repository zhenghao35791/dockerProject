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