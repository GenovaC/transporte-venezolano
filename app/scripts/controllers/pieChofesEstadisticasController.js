app.controller('pieChoferEstadisticController', ['$scope', '$http', function ($scope, $http) {

    function cargarTortaEstadistica() {

        $http.get('http://localhost:3000/configuracionTorta?idUsuario=2')
        .then(function (r) {
           // $scope.est = r.data;
           $scope.myJson = r.data[0];
           //console.log(JSON.stringify($scope.myJson));
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarTortaEstadistica();
    }]);