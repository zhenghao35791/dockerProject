/**
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('linebar', ['$http', function($http){
  return {
    scope: {
      id: "@",
      text: "@",
      legend: "=",
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

        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:  {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#666'
            }
          },
          boundaryGap: [0, 0.01],
          splitLine:{
            show:false
          }
        },
        yAxis: {
          type: 'category',
          data: $scope.legend,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#666'
            }
          },
          splitLine:{
            show:true,
            lineStyle:{
              type:'dotted',
              color:'#cccccc'
            }
          }
        },
        // 数据内容数组
        series: [
          {
            type: 'bar',
            barWidth:'15px',
            axisLine: {
              lineStyle: {
                width: 10
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                //定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  var colorList = ['#EF92EA','#A586FC','#F4A686','#75E85B'];
                  return colorList[params.dataIndex]
                }
              }
            },
            data: $scope.data
          }
        ]
/*
        color: ['#75E85B','#F4A686','#A586FC','#EF92EA']
*/
      };
      var myChart = echarts.init(document.getElementById($scope.id),'macarons');
      myChart.setOption(option);
    }
  };
}]);
