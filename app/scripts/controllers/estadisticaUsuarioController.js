app.controller('pieUserEstadisticController', ['$scope', '$http', function ($scope, $http) {

    $scope.user = {};
     
        

    function cargarTortaEstadistica() {

        $http.get('http://localhost:3000/configuracionTorta?idUsuario=1')
        .then(function (r) {
           // $scope.est = r.data;
           $scope.myJson = r.data[0];
           //console.log(JSON.stringify($scope.myJson));
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    function cargarCifrasEstadisticas() {

        $http.get('http://localhost:3000/viajes?idUsuario=1')        
        .then(function (r) { 
            $scope.datos = r.data;

            $scope.totalViajes = $scope.datos.length;

            $scope.totalEsperado = 0;
            $scope.totalRecorrido = 0;

            angular.forEach($scope.datos, function(result){
                $scope.totalRecorrido += parseFloat(result.km);
                $scope.totalEsperado += parseFloat(result.tiempoEspera);
            });

            $scope.totalRecorrido = Number($scope.totalRecorrido.toFixed(2)); //Redondeando km recorridos
            $scope.totalEsperado = $scope.totalEsperado/$scope.totalViajes; //Promedio de esperado

            $scope.totalEsperado = Number($scope.totalEsperado.toFixed(2)); //Redondeando tiempo esperado
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarTortaEstadistica();
    cargarCifrasEstadisticas();

    $scope.submitTaxi = function () {
        // use $.param jQuery function to serialize data from JSON 
         var data = $.param({

            cliente: $scope.cliente,
            origen: $scope.origen,
            destino: $scope.destino,
            hora: $scope.hora,
            fecha: $scope.fecha,
             
             //Esto no esta en el formulario de mi taxi asi que lo pondré por defecto asiii             
             
             idUsuario: 1,
             longitud: "Misma ciudad",
             chofer: "Arturo López",
             ciudad: "Puerto Ordaz",
             vehiculo: "Fiat Palio",
             km: "12",
             tiempoEspera: "5",
             pasajeros: "5",
             precio: "20",
             idChofer: 2

         });
     
         var config = {
             headers : {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         }

         $http.post('http://localhost:3000/viajes', data, config)
         .then(function (data, status, headers, config) {
             //$scope.PostDataResponse = data;
             console.log("Se guardo tu información 'satisfactoriamente'");
             console.log(" - Status - "+status+" - Data - "+data+" - Headers - "+headers+" - Config - "+config);
         })
         .catch(function (data, status, header, config) {

            console.log("NO guardo tu información");
            console.log(" - Status - "+status+" - Data - "+data+" - Headers - "+header+" - Config - "+config);
             /*$scope.ResponseDetails = "Data: " + data +
                 "<hr />status: " + status +
                 "<hr />headers: " + header +
                 "<hr />config: " + config;
            */
         });
     };
       


}]);