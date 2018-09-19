app.controller('hourChoferEstadisticController', ['$scope', '$http', function ($scope, $http) {
        
    function cargarHorasEstadistica() {

        $http.get('http://localhost:3000/hourEstadistics')
        .then(function (r) {
           // $scope.est = r.data;
           $scope.chartData = r.data;
           //console.log(JSON.stringify($scope.myJson));
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarHorasEstadistica();

    }]);