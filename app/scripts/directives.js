angular.module('app.directives', [])

.directive('selectChofer', function () { 
    return { 
        restrict: 'E',
        templateUrl: '../views/partials/selectChofer.html'
      };
})

.directive('selectUser', function () { 
    return { 
        restrict: 'E',
        templateUrl: '../views/partials/selectUsuario.html'
      };
});