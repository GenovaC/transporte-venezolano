app.controller('listaUsuarioViajesController', ['$scope', '$http', function ($scope, $http) {

    function cargarData() {

        $http.get('http://localhost:3000/viajes?idUsuario=1&longitud=Estado a otro&longitud=Ciudad a otra')
        .then(function (r) {
            $scope.model = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        
        $http.get('http://localhost:3000/viajes?idUsuario=1&longitud=Misma ciudad')
        .then(function (r1) {
            $scope.model2 = r1.data;
        })
        .catch(function (r1){
            console.log('Ha ocurrido un error:', r1.status, r1.data);
        })
    }

    cargarData();

    $scope.onViajeUser = function (id) {
        $http.get('http://localhost:3000/viajes?id='+id)
        .then(function (r) {
            $scope.modaleishon = r.data[0];
            //  $scope.modaleishon = console.log(JSON.stringify($scope.mmm));                
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 
    }]);