/**
 * Created by zhenghao on 2017/5/9.
 */
angular.module('app').filter('paging', function() {
  return function (items, index, pageSize) {
    if (!items)
      return [];

    var offset = (index - 1) * pageSize;
    return items.slice(offset, offset + pageSize);
  }
});