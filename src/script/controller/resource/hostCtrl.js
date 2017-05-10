/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('hostCtrl', ['$http', '$scope', function($http, $scope){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'hostname',
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
      label: '名称',
      name: 'hostname'
    },
    {
      label: '标签',
      name: 'label'
    },
    {
      label: 'IP地址',
      name: 'ip'
    },
    {
      label: 'Docker',
      name: 'docker'
    },
    {
      label: '主机状态',
      name: 'status'
    },
    {
      label: 'CPU使用率',
      name: 'memory_per'
    },
    {
      label: '内存使用量',
      name: 'memory_num'
    },
    {
      label: '运行中的容器',
      name: 'docker_run'
    },
    {
      label: '停止的容器',
      name: 'docker_stop'
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      hostname: 'agent1803',
      label:'dev = true',
      ip:'192.168.18.3',
      docker:'1.9.1-csphere.2',
      status:'正常',
      memory_per:'0.50%',
      memory_num:'903 MB',
      docker_run:'1',
      docker_stop:'0'
    },
    {
      hostname: 'agent1804',
      label:'dev = false',
      ip:'192.168.18.4',
      docker:'1.9.1-csphere.4',
      status:'正常',
      memory_per:'4.50%',
      memory_num:'903 MB',
      docker_run:'2',
      docker_stop:'0'
    },
    {
      hostname: 'agent1805',
      label:'dev = true',
      ip:'192.168.18.5',
      docker:'1.9.1-csphere.2',
      status:'正常',
      memory_per:'1.20%',
      memory_num:'800 MB',
      docker_run:'3',
      docker_stop:'1'
    }
  ];
}]);
