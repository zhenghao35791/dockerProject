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