app.controller('userPerfilController', ['$scope', '$http', function ($scope, $http) {

    function cargarDatosUsuario() {

        $http.get('http://localhost:3000/usuarios?id=1')
        .then(function (r) {
            $scope.modaleishon = r.data[0];
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarDatosUsuario();

}]);