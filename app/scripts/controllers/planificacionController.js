app.controller('planificacionController', ['$scope', '$http', function ($scope, $http) {

    $scope.viaje = {};

    $scope.submitViaje= function () {
        // use $.param jQuery function to serialize data from JSON 
         var data = $.param({

            cliente: $scope.cliente,
            hora: $scope.hora,
            fecha: $scope.fecha,
            pasajeros: $scope.pasajeros,
            km: $scope.km,
            precio: $scope.precio,
            tiempoEspera: "1",

            ciudad: $scope.cityOrigen,
            origen: $scope.cityOrigen,
            destino: $scope.cityDestino,
            direccionInicial: $scope.direccionOrigen,
            direccionFinal: $scope.direccionDestino,

            /*largoViaje = function(){

            if ( ($scope.ciudadOrigen).localeCompare($scope.ciudadDestino) == 0) 
                return "Misma ciudad"
            if ( ($scope.stateOrigen).localeCompare($scope.stateDestino) != 0 ) 
                return "Estado a Otro"
            if ( ( ($scope.stateOrigen).localeCompare($scope.stateDestino) == 0 )  && 
                 ( ($scope.ciudadOrigen).localeCompare($scope.ciudadDestino) == 0) )
                return "Ciudad a otra" 
            },*/

             //Esto no esta en el formulario de mi taxi asi que lo pondré por defecto asiii            
             
            longitud: "Estado a otro", //No deberia
            idUsuario: 1, //Puede cambiar 

             vehiculo: "Fiat Palio",             
             idChofer: 2,
             chofer: "Arturo López"

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
         })
         .catch(function (data, status, header, config) {

            console.log("NO guardo tu información");
             /*$scope.ResponseDetails = "Data: " + data +
                 "<hr />status: " + status +
                 "<hr />headers: " + header +
                 "<hr />config: " + config;
            */
         });
     };
       


}]);