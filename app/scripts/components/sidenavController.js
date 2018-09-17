app.controller('sidenavController', function( $scope ) {
   $scope.chofer = false;

   $scope.soyCliente = function(){
      $scope.chofer = false;
   };

   $scope.soyChofer = function(){
    $scope.chofer = true;
 };
});