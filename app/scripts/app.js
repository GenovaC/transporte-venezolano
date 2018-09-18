// Define the `app` module
var app = angular.module('app', ['ngRoute', 'zingchart-angularjs']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'partials/home.html',
                controller: 'listaChoferesController'
            })

            .when('/principal', {
                templateUrl : 'partials/home.html',
                controller: 'listaChoferesController'
            })

            .when('/maps', {
                templateUrl : 'partials/chofer/maps.html',
                controller: 'MapController'
            })

            .when('/vehiculos', {
                templateUrl : 'partials/chofer/vehiculos.html',
                controller: 'listaAutosController',
            })

            .when('/planificar', {
                templateUrl : 'partials/usuario/planificar.html'
            })

            .when('/viajesU', {
                templateUrl : 'partials/usuario/table.html',
                controller: 'listaUsuarioViajesController'
            })

            .when('/viajesC', {
                templateUrl : 'partials/chofer/table.html',
                controller: 'listaChoferViajesController'
            })

            .when('/viajes', {
                templateUrl : 'partials/table.html'
            })

            .when('/perfilU', {
                templateUrl : 'partials/usuario/user.html'
            })

            .when('/perfilC', {
                templateUrl : 'partials/chofer/user.html'
            })

            .when('/estadisticasU', {
                templateUrl : 'partials/usuario/estadisticas.html',
                controller: 'pieUserEstadisticController'
            })

            .when('/estadisticasC', {
                templateUrl : 'partials/chofer/estadisticas.html',
                controller: 'hourChoferEstadisticController',
                controller: 'pieChoferEstadisticController',
                controller: 'lineChoferEstadisticController'
            });
    }


);

    