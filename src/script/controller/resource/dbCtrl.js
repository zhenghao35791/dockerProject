/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('dbCtrl', ['$http', '$scope', function($http, $scope){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'dbname',
    direction: -1,
    toggle: function(column) {
      if (column.sortable === false)
        return;
      if (this.column === column.name) {
        this.direction = -this.direction || -1;
      } else {
        this.column = column.name;
        this.direction = -1;
      }
    }
  };
  vm.refresh = function(){
    $window.location.reload();
  };
  // 构建模拟数据
  vm.columns = [
    {
      label: '数据库名称',
      name: 'dbname'
    },
    {
      label: '数据库类型',
      name: 'type'
    },
    {
      label: '状态',
      name: 'status'
    },
    {
      label: '副本数',
      name: 'fu_num'
    },
    {
      label: '创建时间',
      name: 'create_time'
    },
    {
      label: '存储大小',
      name: 'size'
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      dbname: 'dbfbfb1',
      type:'mysql',
      status:'运行中',
      fu_num:'2',
      create_time:'2017-05-01 09:50:08',
      size:'700MB'
    },
    {
      dbname: 'dbdbdbdbdb2',
      type:'redis',
      status:'运行中',
      fu_num:'1',
      create_time:'2017-05-03 03:50:38',
      size:'700MB'
    },
    {
      dbname: 'db_test3',
      type:'mysql',
      status:'运行中',
      fu_num:'3',
      create_time:'2017-05-01 04:54:48',
      size:'300MB'
    },
    {
      dbname: 'redis_test_cluster',
      type:'redis',
      status:'运行中',
      fu_num:'4',
      create_time:'2017-05-02 02:20:08',
      size:'400MB'
    }
  ];
}]);
