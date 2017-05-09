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