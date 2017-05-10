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
