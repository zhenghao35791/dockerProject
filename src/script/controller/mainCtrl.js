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
