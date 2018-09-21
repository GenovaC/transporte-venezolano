app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
 
    function cargarListaChoferes() {

    $http.get('http://localhost:3000/lista_choferes')
      .then(function (r) {
          $scope.model = r.data;
      })
      .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
    }

    function cargarFecha(){
        $scope.dt = new Date();
    }

    cargarListaChoferes();
    cargarFecha();


    $scope.submitUsuario= function () {
        
      //  if (($scope.pwd).localeCompare($scope.pwd2) == 0) {
                var data = $.param({
            
                name: $scope.name,
                lastname: $scope.lastname,
                phone: $scope.cel,

                email: $scope.email,
                user: $scope.user,
                password: $scope.pwd,
                cliente: !$scope.cliente,

                fullname: $scope.name + " " + $scope.lastname,
               
                portada: "images/ciudad-nocturna.jpg",
                perfil: "images/faces/face-3.jpg",
               
                homeaddress:  "",
                city:  "",
                state:  "",
                country:  "",
                aboutme:  "",
                
                banco:  "",
                fvencimiento:  "",
                creditcard:  "",
                codesecurity: ""
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            $http.post('http://localhost:3000/usuarios', data, config)
            .then(function (data, status, headers, config) {
                //$scope.PostDataResponse = data;
                console.log("Se guardo tu información 'satisfactoriamente'");
                alert("Correctamente registrado");
            })
            .catch(function (data, status, header, config) {

                console.log("NO guardo tu información");
                /*$scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
                */
               alert("NO se pudo hacer el registro");
            });
       // } else alert("Las contraseñas no coinciden");
     };
    
  
 /*   $scope.submit = function() {
       var stat="false";
   angular.forEach($scope.mydata, function(item) {
       //Comparando los usuarios a ver si uno de ellos coincide con los datos proporcionados en la página
        if( (item.user==$scope.regObj.user) && (item.password==$scope.regObj.password) ) {
            stat="true";
        }
    });

   $scope.regObj.user="";
   $scope.regObj.password="";

     if(stat=="true"){
       alert("Identificado satisfactoriamente");
     }
     else
       alert("Datos incorrectos");
     };
     
    //Volver a vaciar los datos?
    $scope.regObj = {
        "user" : "",
        "password" : ""        
    };

    $scope.mydata;

    //De aquí obtengo los datos
     $http.get("http://localhost:3000/usuarios")
     .then(function(response) {
        $scope.mydata = response.data;
        angular.forEach($scope.mydata, function(item){
        })         
     });*/

}]);