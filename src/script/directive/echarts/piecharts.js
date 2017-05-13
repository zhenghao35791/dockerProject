/**
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('piecharts', ['$http', function($http){
  return {
    scope: {
      id: "@",
      text: "@",
      legend: "=",
      item: "=",
      data: "=",
      data2: "="
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
          center: ['25%', '60%'],
          radius: ['30%', '40%'],
          avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '24',
                  fontWeight: 'bold'
                }
              }
            },
          labelLine: {
            show: false
            /*normal: {
              smooth: 0.2,
              length: 1
            },
            emphasis: {
              smooth: 0.2,
              length: 5
            }*/
          },
          data:$scope.data
        },
          {
            name:$scope.text,
            type:'pie',
            center: ['80%', '60%'],
            radius: ['30%', '40%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '24',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              show: false
              /*normal: {
                smooth: 0.2,
                length: 1
              },
              emphasis: {
                smooth: 0.2,
                length: 5
              }*/
            },
            data:$scope.data2
          }
        ],
        color:['#75E85B','#46BDFB','#FBDE66', '#E4E4E4']
      };
      var myChart = echarts.init(document.getElementById($scope.id),'macarons');
      myChart.setOption(option);
    }
  };
}]);
