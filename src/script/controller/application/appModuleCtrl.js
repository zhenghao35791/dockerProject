/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appModuleCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'model_name',
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
  vm.columns = [
    {
      label: '模版名称',
      name: 'model_name'
    },
    {
      label: '创建时间',
      name: 'create_time'
    },
    {
      label: '实例个数',
      name: 'instance_num'
    },
    {
      label: '描述',
      name: 'desc',
      sortable: false
    }
  ];
// 构建模拟数据
  vm.items = [
    {
      model_name: '11111',
      create_time: '2017-05-05 15:13:27',
      instance_num:'4',
      desc:'自定义模版'
    },
    {
      model_name: 'CICD',
      create_time: '2017-05-07 12:11:23',
      instance_num:'3',
      desc:'持续集成套装',
      label:'lastest'

    },
    {
      model_name: 'redis_test',
      create_time: '2017-05-02 11:11:27',
      instance_num:'6',
      desc:'redis测试集群'
    },
    {
      model_name: 'testtest',
      create_time: '2017-05-01 21:24:11',
      instance_num:'2',
      desc:'测试测试测试'
    },
    {
      model_name: 'zhenghao',
      create_time: '2017-05-04 09:34:27',
      instance_num:'1',
      desc:'测试基础模版'
    },
    {
      model_name: 'helloword',
      create_time: '2017-05-07 22:13:38',
      instance_num:'3',
      desc:'helloword模版',
      label:'lastest'
    },
    {
      model_name: 'new_model',
      create_time: '2017-05-04 15:56:12',
      instance_num:'3',
      desc:'新建自定义模版'
    },
    {
      model_name: '11111',
      create_time: '2017-05-06 15:13:27',
      instance_num:'3',
      desc:'仅用于测试用'
    }];
}]);
