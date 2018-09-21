app.controller('userPerfilController', ['$scope', '$http', function ($scope, $http) {
    
    function cargarClientes() {
        $http.get('http://localhost:3000/usuarios?cliente=true')
        .then(function (r) {
            $scope.clientes = r.data;
            $scope.myCliente = $scope.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarClientes();

}]);