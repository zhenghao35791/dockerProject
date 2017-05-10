/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('mirrorStoreCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'storeName',
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
      label: '镜像名称',
      name: 'storeName'
    },
    {
      label: '服务器',
      name: 'host'
    },
    {
      label: '用户名',
      name: 'userName'
    },
    {
      label: '操作',
      name: 'action',
      sortable: false
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      storeName: 'Docker Hub Public Registry',
      host:'https://registry.hub.docker.com',
      userName:'docker_test',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'vlan16-registry',
      host:'http://192.168.16.121',
      userName:'docker_test',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'vlan17-registry',
      host:'https://registry.hub.docker.com',
      userName:'tester',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'mini-master',
      host:'	https://reg.cloud.com',
      userName:'master',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: 'mini-master',
      host:'	https://reg.cloud.com',
      userName:'master',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '微镜像',
      host:'http://192.168.16.121',
      userName:'master',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试镜像',
      host:'http://192.168.16.123',
      userName:'suyan',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '微镜像2',
      host:'http://192.168.16.121',
      userName:'master2',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试镜像2',
      host:'http://192.168.16.124',
      userName:'suyan',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试',
      host:'http://192.168.16.131',
      userName:'suyan_test',
      action_one:'删除',
      action_two:'编辑'
    },
    {
      storeName: '苏研测试2',
      host:'http://192.168.16.132',
      userName:'suyan_test',
      action_one:'删除',
      action_two:'编辑'
    }
  ];
}]);
