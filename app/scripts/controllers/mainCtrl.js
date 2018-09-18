app.controller('listaChoferesController', ['$scope', '$http', function ($scope, $http) {
 
  function cargarData() {

    $http.get('http://localhost:3000/lista_choferes')
      .then(function (r) {
          $scope.model = r.data;
      })
      .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
  }
  cargarData();

}]);