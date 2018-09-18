
    app.controller('listaUsuarioViajesController', ['$scope', '$http', function ($scope, $http) {


        function cargarData() {

            $http.get('http://localhost:3000/viajes_usuario?longitud=Estado a otro&longitud=Ciudad a otra').then(function (r) {
                $scope.model = r.data;
            })
            
            $http.get('http://localhost:3000/viajes_usuario?longitud=Misma ciudad').then(function (r1) {
                $scope.model2 = r1.data;
                $scope.modaleishon = r1.data[0];
            })
        }
        cargarData();

        $scope.onViajeUser = function (id) {
            $http.get('http://localhost:3000/viajes_chofer?id='+id).then(function (rr1) {
                $scope.modaleishon = rr1.data[0];
                console.log(JSON.stringify($scope.modaleishon));                
            })
        } 
    }]);