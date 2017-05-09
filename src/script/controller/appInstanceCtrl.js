/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('appInstanceCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.showFilter = false;
  vm.toggleFilter = function(){
    vm.showFilter = !vm.showFilter;
  };
  vm.sort = {
    column: 'instance_name',
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
      label: '实例名称',
      name: 'instance_name'
    },
    {
      label: '部署状态',
      name: 'status'
    },
    {
      label: '模版名称',
      name: 'model_name'
    },
    {
      label: '模版版本',
      name: 'model_version'
    },
    {
      label: '主机分组',
      name: 'host'
    },
    {
      label: '容器数目',
      name: 'docker_num'
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
      instance_name: '11111',
      status: '已部署',
      model_name:'chrome浏览器',
      model_version:'577d600',
      host:'vlan18',
      docker_num:'3',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '222222',
      status: '已部署',
      model_name:'chrome浏览器',
      model_version:'577d622',
      host:'vlan18',
      docker_num:'2',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '333333',
      status: '已部署',
      model_name:'CICD',
      model_version:'5234123',
      host:'vlan112',
      docker_num:'6',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '444444',
      status: '已部署',
      model_name:'CICD',
      model_version:'5234144',
      host:'vlan1',
      docker_num:'2',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'asdsd',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'033366a',
      host:'vlan18',
      docker_num:'3',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'aasfasw',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'033366a',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'f4213',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'033366a',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: '5gdfsd',
      status: '已部署',
      model_name:'Ngnix',
      model_version:'0333231',
      host:'vlan2',
      docker_num:'1',
      action_one:'删除',
      action_two:'升级'
    },
    {
      instance_name: 'dasfwq21',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    }
    ,
    {
      instance_name: 'gggg',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'4',
      action_one:'删除',
      action_two:'升级'
    }
    ,
    {
      instance_name: 'sdfsdfas',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'6',
      action_one:'删除',
      action_two:'升级'
    }
    ,
    {
      instance_name: 'dasfwq22',
      status: '已部署',
      model_name:'redis',
      model_version:'241ad2',
      host:'vlan8',
      docker_num:'2',
      action_one:'删除',
      action_two:'升级'
    }
  ];
}]);
