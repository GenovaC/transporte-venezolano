app.controller('listaAutosController', ['$scope', '$http', function ($scope, $http) {
 
    function cargarData() {

        $http.get('http://localhost:3000/lista_vehiculos?status=Asignado')        
        .then(function (r) {
            $scope.asignados = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        
        $http.get('http://localhost:3000/lista_vehiculos?status=Propio')
        .then(function (r1) {
            $scope.propios = r1.data;
        })
        .catch(function (r1){
            console.log('Ha ocurrido un error:', r1.status, r1.data);
        })
    }

    cargarData();

}]);