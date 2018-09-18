app.controller('listaChoferViajesController', ['$scope', '$http', function ($scope, $http) {

    function cargarData() {

        $http.get('http://localhost:3000/viajes_chofer?longitud=Estado a otro&longitud=Ciudad a otra')        
        .then(function (r) {
            $scope.model = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        
        $http.get('http://localhost:3000/viajes_chofer?longitud=Misma ciudad')
        .then(function (r1) {
            $scope.model2 = r1.data;
            $scope.modaleishon = r1.data[0];
        })
        .catch(function (r1){
            console.log('Ha ocurrido un error:', r1.status, r1.data);
        })
    }
    cargarData();

    $scope.onViajeChofer = function (id) {
        $http.get('http://localhost:3000/viajes_chofer?id='+id).then(function (rr1) {
            $scope.modaleishon = rr1.data[0];
            console.log($scope.model2.length);                
        })
    } 
    }]);