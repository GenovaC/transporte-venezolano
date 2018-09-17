app.controller('hourChoferEstadisticController', function($scope){
        $scope.chartData = {
            type: 'bar',  // Specify your chart type here.
            globals: {
                shadow: false,
                fontFamily: "Kosugi",
                fontWeight: "100",
                fontSize: "13px"
            },
            scaleY:{
                values: [
                    5,10,20,30,40,50,60
                ]
            },
            scaleX:{
                values: [
                    "6 am", "8 am", "10 am", "12 m", "2 pm", "4 pm", "6pm", "10 pm", "12 am", "2am", "4 am"
                ]
            },
            legend: {
                layout: "x3",
                position: "center",
                borderColor: "transparent",
                marker: {
                    borderRadius: 10,
                    borderColor: "transparent"
                }
            }, // Creates an interactive legend
            series: [{  // Insert your series data here.
                values: [50,31,26,24,22,21,22,20,29,36,49],
                text: "Valor largos"
            }, { 
                text: "Viajes cortos",
                values: [47,50,42,45,42,31,42,53,16,3,14]
            }]
          };
    });