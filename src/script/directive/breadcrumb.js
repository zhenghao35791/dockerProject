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
