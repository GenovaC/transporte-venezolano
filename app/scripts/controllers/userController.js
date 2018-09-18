app.controller('userController', ['$scope', '$http', function ($scope, $http) {

    function cargarData() {

        $http.get('http://localhost:3000/usuarios')
        .then(function (r) {
            $scope.modaleishon = r.data[0];
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarData();

}]);