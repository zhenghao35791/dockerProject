/**
 * Created by zhenghao on 2017/4/21.
 */
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
  /*$http.get('/data/positionList.json').then(function(resp){
    $scope.list = resp.data;
  });*/
  $scope.currentType = 'home';
  $scope.changeTab = function(type){
    $scope.currentType = type;
  };
  //line1的数据
  $scope.legend1 = ["CPU使用趋势", "内存使用趋势",'磁盘使用趋势'];
  $scope.item1 = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00','22:00','23:00'];
  $scope.data1 = [
    [0.12, 0.1, 0.13, 0.17, 0.13, 0.16, 0.18, 0.16, 0.15, 0.19, 0.14, 0.2],
    [0.21, 0.12, 0.1, 0.24, 0.23, 0.11, 0.13, 0.26, 0.11, 0.09, 0.04, 0.02],
    [0.02, 0.01, 0.03, 0.07, 0.10, 0.06, 0.08, 0.06, 0.05, 0.09, 0.04, 0.12]
  ];
  //pie1的数据
  $scope.legend2 = ["B域", "O域",'M域'];
  $scope.legend3 = ["B域", "O域",'M域','空余'];
  $scope.data = [{value:0.27, name:'B域'}, {value:0.12, name:'O域'}, {value:0.37, name:'M域'}, {value:0.24, name:'空闲'}];
  $scope.data2 = [{value:0.32, name:'B域'}, {value:0.19, name:'O域'}, {value:0.21, name:'M域'}, {value:0.15, name:'空闲'}];

  $scope.data3 = [{value:0.09, name:'B域'}, {value:0.89, name:'O域'}, {value:0.02, name:'M域'}];
  $scope.data4 = [{value:0.60, name:'B域'}, {value:0.21, name:'O域'}, {value:0.19, name:'M域'}];
  //barchart1的数据
  $scope.barchartItem1 = ['NPS', '雅典娜', 'DAE', 'B域', '和more', 'O域', 'PDM','ORM','DPI','EMOS'];
  $scope.barchartData1 = [63,73,65,58,40,37,38,63,59,40];
  //barchart2的数据
  $scope.barchartItem2 = ['STD层', '基础层', '轻度汇总层', '挖掘模型', '应用层', '其他'];
  $scope.barchartData2 = [45,85,85,60,83,50];
  //barchart3的数据
  $scope.barchartItem3 = ['MR', 'EOMS', '路测', '网优', '拔测', 'BOSS','DPI','CRM','极客','数据网'];
  $scope.barchartData3 = [80,94,81,75,50,45,41,42,84,74,51];

//linebar1的数据
  $scope.linedata1 = [2,1,8,17];
  $scope.linelegend1 = ['伸缩中','重启中','停止','正在运行'];
  //linebar2的数据
  $scope.linedata2 = [0.37,0.69];
  $scope.linelegend2 = ['CPU','内存'];
}]);
