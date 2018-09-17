app.controller('lineChoferEstadisticController', function($scope) {

        $scope.chartData = {
          backgroundColor: "#FFF",
          globals: {
            shadow: false,
            fontFamily: "Arial"
          },
          type: "line",
          scaleX: {
            maxItems: 8,
            lineColor: "black",
            lineWidth: "1px",
            tick: {
              lineColor: "black",
              lineWidth: "1px"
            },
            item: {
              fontColor: "black"
            },
            guide: {
              visible: false
            }
          },
          scaleY: {
            maxItems: 6,
            lineColor: "black",
            lineWidth: "1px",
            tick: {
              lineColor: "black",
              lineWidth: "1px"
            },
            guide: {
              lineStyle: "solid",
              lineColor: "#d2d7d3"
            },
            item: {
              fontColor: "black"
            },
          },
          tooltip: {
            visible: false
          },
          crosshairX: {
            lineColor: "#4d13d1",
            scaleLabel: {
              backgroundColor: "#fff",
              fontColor: "#323232"
            },
            plotLabel: {
              backgroundColor: "#fff",
              fontColor: "#323232",
              text: "%v",
              borderColor: "transparent"
            }
          },
          plot: {
            lineWidth: "2px",
            lineColor: "#FFF",
            aspect: "spline",
            marker: {
              visible: false
            }
          },
          series: [{
            lineWidth: "3px",
            lineColor: "#4d13d1",
            values: [353,453,461,528,294,346,493,678,619,536,614,756]
          }]
        }
      });