app.controller('userPerfilController', ['$scope', '$http', function ($scope, $http) {
    
    function cargarClientes() {
        $http.get('http://localhost:3000/usuarios?cliente=true')
        .then(function (r) {
            $scope.clientes = r.data;
            $scope.myCliente = $scope.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarClientes();

    $scope.cargarCifras = function (id) {

        $http.get('http://localhost:3000/viajes?idUsuario='+id)        
        .then(function (r) { 
            $scope.totalViajes = r.data.length;
            $scope.totalInvertido = 0;
            $scope.totalRecorrido = 0;

            angular.forEach(r.data, function(result){
                $scope.totalRecorrido += parseFloat(result.km);
                $scope.totalInvertido += parseFloat(result.precio);
            });

            $scope.totalRecorrido = Number($scope.totalRecorrido.toFixed(2)); //Redondeando km recorridos
            $scope.totalInvertido = Number($scope.totalInvertido.toFixed(2)); //Redondeando invertido

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    };

    $scope.updateUsuario= function () {
        
            var data = $.param({
        
            name: $scope.myCliente.name,
            lastname: $scope.myCliente.lastname,
            phone: $scope.myCliente.phone,

            email: $scope.myCliente.email,
            user: $scope.myCliente.user,
            password: $scope.myCliente.password,
            cliente: $scope.myCliente.cliente,

            fullname: $scope.myCliente.name + " " + $scope.myCliente.lastname,
            
            portada: $scope.myCliente.portada,
            perfil: $scope.myCliente.perfil,
            
            homeaddress:  $scope.myCliente.homeaddress,
            city:  $scope.myCliente.city,
            state:  $scope.myCliente.state,
            country:  $scope.myCliente.country,
            aboutme:  $scope.myCliente.aboutme,
            
        });
    
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        $http.patch('http://localhost:3000/usuarios/'+$scope.myCliente.id, data, config)
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
            banco:  $scope.myCliente.banco,
            fvencimiento:  $scope.myCliente.fvencimiento,
            creditcard:  $scope.myCliente.creditcard,
            codesecurity: $scope.myCliente.codesecurity
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