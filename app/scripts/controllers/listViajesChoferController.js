app.controller('listaChoferViajesController', ['$scope', '$http', function ($scope, $http) {

    $scope.cargarViajes = function(id) {

        $http.get('http://localhost:3000/viajes?idChofer='+id+'&longitud=Estado a otro&longitud=Ciudad a otra')        
        .then(function (r) {
            $scope.model = r.data;   
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        
        $http.get('http://localhost:3000/viajes?idChofer='+id+'&longitud=Misma ciudad')
        .then(function (r1) {
            $scope.model2 = r1.data;
        })
        .catch(function (r1){
            console.log('Ha ocurrido un error:', r1.status, r1.data);
        })
    }


    $scope.onViajeChofer = function (id) {
        $http.get('http://localhost:3000/viajes?id='+id)
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

    $scope.delete = function (id) {
        $http.delete('http://localhost:3000/viajes/'+id)
        .then(function (r) {
            alert("Eliminado con exito viaje codigo "+id)               
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 
    

    }]);