/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('tomcatCtrl', ['$http', '$scope', function($http, $scope){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'name',
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
      label: '服务名称',
      name: 'name'
    },
    {
      label: '所属中间件',
      name: 'tomcat_name'
    },
    {
      label: '镜像',
      name: 'mirror'
    },
    {
      label: '服务地址',
      name: 'service_address'
    },
    {
      label: '创建时间',
      name: 'create_time'
    },
    {
      label: '操作',
      name: 'actions'
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      name: 'agent1803',
      tomcat_name:'tomcat',
      mirror:'10.132.49.100/tenxuser/hello-world:latest',
      service_address:'10.132.49.103:14557',
      create_time:'20 天前',
      action_one:'删除',
      action_two:'查看'
    },
    {
      name: 'agent-1',
      tomcat_name:'tomcat',
      mirror:'10.132.51.100/tenxuser/tomcat:latest',
      service_address:'10.132.49.100:8080',
      create_time:'1 天前',
      action_one:'删除',
      action_two:'查看'
    },
    {
      name: 'weblogic_test',
      tomcat_name:'weblogic',
      mirror:'10.123.12.100/user/weblogic:latest',
      service_address:'10.132.49.114:3000',
      create_time:'20 天前',
      action_one:'删除',
      action_two:'查看'
    },
    {
      name: 'weblogicweblogic',
      tomcat_name:'weblogic',
      mirror:'10.123.11.100/user/weblogic:latest',
      service_address:'10.132.49.111:3000',
      create_time:'4 天前',
      action_one:'删除',
      action_two:'查看'
    }
  ];
}]);
