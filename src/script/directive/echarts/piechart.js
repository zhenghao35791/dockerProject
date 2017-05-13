/**
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('piechart', ['$http', function($http){
  return {
    scope: {
      id: "@",
      text: "@",
      legend: "=",
      item: "=",
      data: "="
    },
    restrict: 'E',
    template: '<div class="overview-chart"></div>',
    replace: true,
    link: function($scope, element, attrs, controller) {
      var option = {
        title : {
          text: $scope.text,
          textStyle: {
            color: '#999999',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // 图例
        legend: {
          orient: 'horizontal',
          right:'0%',
          top:'10%',
          data: $scope.legend
        },
        // 数据内容数组
        series: [
          {
          name:$scope.text,
          type:'pie',
          center: ['45%', '60%'],
          radius: ['38%', '54%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data:[
            {value:0.34, name:'B域'},
            {value:0.46, name:'O域'},
            {value:0.20, name:'M域'}
          ]
        }
        ],
        color:['#75E85B','#46BDFB','#FBDE66']
      };
      var myChart = echarts.init(document.getElementById($scope.id),'macarons');
      myChart.setOption(option);
    }
  };
}]);
