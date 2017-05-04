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
