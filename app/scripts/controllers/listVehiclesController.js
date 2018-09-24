app.controller('listaAutosController', ['$scope', '$http', function ($scope, $http) {
 
    $scope.cargarVehiculos = function(id) {

        $http.get('http://localhost:3000/lista_vehiculos?idPropietario='+id)        
        .then(function (r) {
            $scope.model = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    $scope.onVehicle = function (id) {
        $http.get('http://localhost:3000/lista_vehiculos?id='+id)
        .then(function (r) {
            $scope.modaleishon = r.data[0];             
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 

    function cargarChoferes() {
        $http.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            $scope.choferes = r.data;
            $scope.myChofer = $scope.choferes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarChoferes();

}]);