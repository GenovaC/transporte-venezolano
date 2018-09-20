app.controller('choferPerfilController', ['$scope', '$http', function ($scope, $http) {

    function cargarDatosChofer() {

        $http.get('http://localhost:3000/usuarios?id=2')
        .then(function (r) {
            $scope.model = r.data[0];
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarDatosChofer();

    $scope.dias = [
        'Lun', 
        'Mar', 
        'Mie', 
        'Jue',
        'Vie',
        'Sab',
        'Dom'
    ];
      
    $scope.selected = [];


}]);