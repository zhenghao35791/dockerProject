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
