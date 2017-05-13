/**
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('linechart', ['$http', function($http){
  return {
    scope: {
      id: "@",
      legend: "=",
      item: "=",
      data: "="
    },
    restrict: 'E',
    template: '<div style="height:400px;"></div>',
    replace: true,
    link: function($scope, element, attrs, controller) {
      var option = {
        // 提示框，鼠标悬浮交互时的信息提示
        tooltip : {
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        // 图例
        legend: {
          data: $scope.legend
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // 横轴坐标轴
        xAxis: [{
          type: 'category',
          boundaryGap : false,
          data: $scope.item
        }],
        // 纵轴坐标轴
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: function (value) {
              return value * 100 + '%';
            }
          }
        }],
        // 数据内容数组
        series: function(){
          var serie=[];
          for(var i=0;i<$scope.legend.length;i++){
            var item = {
              name : $scope.legend[i],
              type: 'line',
              data: $scope.data[i]
            };
            serie.push(item);
          }
          return serie;
        }()
      };
      var myChart = echarts.init(document.getElementById($scope.id),'macarons');
      myChart.setOption(option);
    }
  };
}]);
