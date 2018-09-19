app.controller('lineChoferEstadisticController', ['$scope', '$http', function ($scope, $http) {

  function cargarLineEstadistica() {

    $http.get('http://localhost:3000/lineEstadistics')
    .then(function (r) {
       // $scope.est = r.data;
       $scope.chartData = r.data;
       //console.log(JSON.stringify($scope.myJson));
    })
    .catch(function (r){
        console.log('Ha ocurrido un error:', r.status, r.data);
    })
}

cargarLineEstadistica();

}]);