app.controller('listaChoferesController', ['$scope', '$http', function ($scope, $http) {
 
  function cargarListaChoferes() {

    $http.get('http://localhost:3000/lista_choferes')
      .then(function (r) {
          $scope.model = r.data;
      })
      .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
    }

  cargarListaChoferes();

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