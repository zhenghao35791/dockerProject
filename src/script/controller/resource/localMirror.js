/**
 * Created by zhenghao on 2017/4/21.
 */
mainapp.controller('localMirrorCtrl', ['$http', '$scope', '$window',function($http, $scope, $window){
  var vm = $scope.vm = {};
  vm.page = {
    size: 5,
    index: 1
  };
  vm.maxSize = 7;    // ...上面都讲了 ， 往上找
  vm.totalItems = 99;
  vm.currentPage = 1;
  vm.bigTotalItems = 180;
  vm.bigCurrentPage = 1;

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
      label: '',
      name: ''
    },
    {
      label: 'ID',
      name: 'id'
    },
    {
      label: '名称',
      name: 'name'
    },
    {
      label: '主机',
      name: 'host'
    },
    {
      label: '创建时间',
      name: 'create_time'
    },
    {
      label: '大小',
      name: 'size'
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
      id: '02d589ee821d',
      name: 'centos:7.0.1406',
      host:'agent1803',
      create_time:'8 个月前',
      size:'200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '03a1bf51079a',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'8 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '	0ac5b09d8536',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'1 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '0ccb67a3d347',
      name: 'ubuntu:precise-20160318',
      host:'agent1803',
      create_time:'1 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3a89fcd57f05',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'2 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3b2afe9f9768',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'1 个月前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026f0',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'5 个月前',
      size:'80MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'60MB',
      action_one:'删除',
      action_two:'运行'
    }
    ,
    {
      id: '673a32f021b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'70MB',
      action_one:'删除',
      action_two:'运行'
    },{
      id: '02d589ee821d',
      name: 'centos:7.0.1406',
      host:'agent1803',
      create_time:'8 个月前',
      size:'200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '03a1bf51079a',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'8 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '	0ac5b09d8536',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'1 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '0ccb67a3d347',
      name: 'ubuntu:precise-20160318',
      host:'agent1803',
      create_time:'1 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3a89fcd57f05',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'2 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3b2afe9f9768',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'1 个月前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026f0',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'5 个月前',
      size:'80MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'60MB',
      action_one:'删除',
      action_two:'运行'
    }
    ,
    {
      id: '673a32f021b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'70MB',
      action_one:'删除',
      action_two:'运行'
    },{
      id: '02d589ee821d',
      name: 'centos:7.0.1406',
      host:'agent1803',
      create_time:'8 个月前',
      size:'200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '03a1bf51079a',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'8 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '	0ac5b09d8536',
      name: 'centos:centos5.11',
      host:'agent1803',
      create_time:'1 个月前',
      size:'120MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '0ccb67a3d347',
      name: 'ubuntu:precise-20160318',
      host:'agent1803',
      create_time:'1 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3a89fcd57f05',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'2 年前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '3b2afe9f9768',
      name: '	ubuntu:15.10',
      host:'agent1801',
      create_time:'1 个月前',
      size:'1200MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026f0',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'5 个月前',
      size:'80MB',
      action_one:'删除',
      action_two:'运行'
    },
    {
      id: '673a64f026b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'60MB',
      action_one:'删除',
      action_two:'运行'
    }
    ,
    {
      id: '673a32f021b8',
      name: 'tomcat:9.0.0.M18-jre8-alpine',
      host:'agent1801',
      create_time:'4 个月前',
      size:'70MB',
      action_one:'删除',
      action_two:'运行'
    }
  ];
}]);
