app.controller('pieUserEstadisticController', function($scope) {
        $scope.myJson = {
            globals: {
                shadow: false,
                fontFamily: "Kosugi",
                fontWeight: "100",
                fontSize: "13px"
            },

            type: "pie",
            backgroundColor: "#fff",
    
            legend: {
                layout: "x4",
                position: "center",
                borderColor: "transparent",
                marker: {
                    borderRadius: 10,
                    borderColor: "transparent"
                }
            },
            tooltip: {
                text: "%v viajes"
            },
            plot: {
                refAngle: "-90",
                borderWidth: "0px",
                valueBox: {
                    placement: "in",
                    text: "%npv %",
                    fontSize: "15px",
                    textAlpha: 2,
                }
            },
            series: [{
                text: "Misma ciudad",
                values: [17],
                backgroundColor: "#d2527f #db0a5b",
            }, {
                text: "Ciudad a otra",
                values: [7],
                backgroundColor: "#2ecc71 #00b16a"
            }, {
                text: "Cancelados",
                values: [4],
                backgroundColor: "#4183d7 #3a539b "
            }, {
                text: "Estado a otro",
                values: [3],
                backgroundColor: "#e9d460 #f5ab35"
            }]
        }; 
    });