/**
 * Created by zhenghao on 2017/5/3.
 */
angular.module('app').directive('barchart', ['$http', function($http){
  return {
    scope: {
      text:'@',
      id: "@",
      item: "=",
      data: "=",
      colorfrom: "@",
      colorto: "@"
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
        textStyle: {
          color: '#9AA1B0'
        },
        tooltip: {
          trigger: 'axis'
        },

       /* legend: {
          data: $scope.legend
        },*/
        /*toolbox: {
          show : true,
          feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },*/
        calculable : true,
        xAxis : [
          {
            type : 'category',
            data : $scope.item,
            axisLabel: {
              rotate: -40,
              interval:0
            },
            axisLine: {
              lineStyle: {
                color: '#2d3f64'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLine: {
              lineStyle: {
                color: '#2d3f64'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#cccccc',
                type: 'dotted'
              }
            }
          }
        ],
        /*xAxis : [
          {
            type : 'category',
            data : $scope.item
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],*/
        // 数据内容数组
        series : [
          {
            name:'CPU',
            type:'bar',
            data:$scope.data,
            barWidth:'40%',
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: $scope.colorfrom
                  }, {
                    offset: 1, color: $scope.colorto
                  }]
                },
                barBorderRadius: [10, 10, 0, 0]
              }
            }
            /* markPoint : {
               data : [
                 {type : 'max', name: '最大值'},
                 {type : 'min', name: '最小值'}
               ]
             },
             markLine : {
               data : [
                 {type : 'average', name: '平均值'}
               ]
             }*/
          }/*,
          {
            name:'内存',
            type:'bar',
            data:$scope.data2,
            markPoint : {
              data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
              ]
            },
            markLine : {
              data : [
                {type : 'average', name : '平均值'}
              ]
            }
          }*/
        ]
      };
      var myChart = echarts.init(document.getElementById($scope.id),'macarons');
      myChart.setOption(option);
    }
  };
}]);
