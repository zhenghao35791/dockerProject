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