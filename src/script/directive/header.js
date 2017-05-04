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
