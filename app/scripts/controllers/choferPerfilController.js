app.controller('choferPerfilController', ['$scope', '$http', function ($scope, $http) {

    function cargarDatosChofer() {

        $http.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            $scope.model = r.data;
            $scope.myChofer = $scope.model[0]; 
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


    $scope.cargarCifras = function (id) {

        $http.get('http://localhost:3000/viajes?idChofer='+id)        
        .then(function (r) { 
            $scope.totalViajes = r.data.length;
            $scope.totalRecorrido = 0;

            angular.forEach(r.data, function(result){
                $scope.totalRecorrido += parseFloat(result.km);
            });

            $scope.totalRecorrido = Number($scope.totalRecorrido.toFixed(2)); //Redondeando km recorridos

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })


        $http.get('http://localhost:3000/lista_vehiculos?idPropietario='+id)        
        .then(function (r) { 
            $scope.totalVehiculos = r.data.length;

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    };


    $scope.updateChofer= function () {
        
        var data = $.param({
    
          name: $scope.myChofer.name,
          lastname: $scope.myChofer.lastname,
          phone: $scope.myChofer.phone,

          email: $scope.myChofer.email,
          user: $scope.myChofer.user,

          fullname: $scope.myChofer.name + " " + $scope.myChofer.lastname,
          
          homeaddress:  $scope.myChofer.homeaddress,
          city:  $scope.myChofer.city,
          state:  $scope.myChofer.state,
          country:  $scope.myChofer.country,
          aboutme:  $scope.myChofer.aboutme,

          horario: $scope.selected
      });

    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    $http.patch('http://localhost:3000/usuarios/'+$scope.myChofer.id, data, config)
    .then(function (data, status, headers, config) {
        //$scope.PostDataResponse = data;
        alert("Correctamente actualizado");
    })
    .catch(function (data, status, header, config) {
      console.log('Ha ocurrido un error:',status, data);
       alert("NO se pudo actualizar el registro");
    });
};

    $scope.updatePago= function () {
            
        var data = $.param({

        banco:  $scope.myChofer.banco,
        tipoCuenta:  $scope.myChofer.typeaccount,
        account:  $scope.myChofer.account,
        codesecurity: $scope.myChofer.codesecurity
    });

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        $http.patch('http://localhost:3000/usuarios/'+$scope.myChofer.id, data, config)
        .then(function (data, status, headers, config) {
            //$scope.PostDataResponse = data;
            alert("Correctamente actualizado");
        })
        .catch(function (data, status, header, config) {
        console.log('Ha ocurrido un error:',status, data);
        alert("NO se pudo actualizar el registro");
        });
    };


}]);