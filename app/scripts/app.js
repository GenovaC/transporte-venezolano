
angular

    .module('app', [
        'ngRoute',
        'app.controllers',
        'app.components',
        'app.factories',
        'zingchart-angularjs', 
        'checklist-model'
    ])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'partials/home.html',
                controller: 'mainController'
            })

            .when('/info', {
                templateUrl : 'partials/info.html',
                controller: 'infoController'
            })

            .when('/principal', {
                templateUrl : 'partials/home.html',
                controller: 'mainController'
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
                templateUrl : 'partials/usuario/planificar.html',
                controller: 'planificacionController'
            })

            .when('/viajesU', {
                templateUrl : 'partials/usuario/table.html',
                controller: 'listaUsuarioViajesController'
            })

            .when('/viajesC', {
                templateUrl : 'partials/chofer/table.html',
                controller: 'listaChoferViajesController'
            })

            .when('/perfilU', {
                templateUrl : 'partials/usuario/user.html',
                controller: 'userPerfilController'
            })

            .when('/perfilC', {
                templateUrl : 'partials/chofer/user.html',
                controller: 'choferPerfilController'
            })

            .when('/estadisticasU', {
                templateUrl : 'partials/usuario/estadisticas.html',
                controller: 'estadisticUserController'
            })

            .when('/estadisticasC', {
                templateUrl : 'partials/chofer/estadisticas.html',
                controller: 'estadisticChoferController'
            })

            .otherwise({
                redirectTo: '/'
            });
    }]);
 

    



