/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('dockerCtrl', ['$http', '$scope', function($http, $scope){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'id',
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
      label: 'ID',
      name: 'id'
    },
    {
      label: '容器名称',
      name: 'docker_name'
    },
    {
      label: '容器状态',
      name: 'status'
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
      label: '监控状态',
      name: 'monitor_status'
    },
    {
      label: '主机',
      name: 'mirror'
    },{
      label: '镜像',
      name: 'order'
    },{
      label: '命令',
      name: 'docker_name'
    },{
      label: '操作',
      name: 'docker_name',
      sortable: false
    }
  ];
  // 构建模拟数据
  vm.items = [
    {
      id: '33717b1fcb4f',
      docker_name: '	2-api-gateway-1',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.107',
      monitor_status:'正常',
      host:'agent1803',
      mirror:'centos',
      order:'/bin/bash',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: 'f008675832d4',
      docker_name: 'yingyong-tomcat-1',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.104',
      monitor_status:'正常',
      host:'agent1804',
      mirror:'tomcat:9.0.0.M18-jre8-alpine',
      order:'catalina.sh run',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: '33717b1fcb43',
      docker_name: '2-api-gateway-2',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.108',
      monitor_status:'正常',
      host:'agent1803',
      mirror:'centos',
      order:'/bin/bash',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: 'f008675832d4',
      docker_name: 'yingyong-tomcat-1',
      status:'运行中',
      label:'license = GPLv2',
      ip:'192.168.18.104',
      monitor_status:'正常',
      host:'agent1804',
      mirror:'tomcat:9.0.0.M18-jre8-alpine',
      order:'catalina.sh run',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    },
    {
      id: '5801ea4d289a',
      docker_name: 'yingyong-service-discovery-1',
      status:'运行中',
      label:'name = ubuntu Base Image',
      ip:'192.168.18.111',
      monitor_status:'正常',
      host:'agent1803',
      mirror:'ubuntu',
      order:'/bin/bash',
      action_one:'上传文件',
      action_two:'保存镜像',
      action_three:'改名'
    }
  ];
}]);
