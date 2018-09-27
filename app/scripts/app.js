
angular

    .module('app', [
        'ngRoute',
        'app.controllers',
        'app.components',
        'app.factories',
        'app.directives',
        'zingchart-angularjs', 
        'checklist-model'
    ])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller: 'mainController'
            })

            .when('/info', {
                templateUrl : 'views/info.html',
                controller: 'infoController'
            })

            .when('/principal', {
                templateUrl : 'views/home.html',
                controller: 'mainController'
            })

            .when('/maps', {
                templateUrl : 'views/chofer/maps.html',
                controller: 'MapController'
            })

            .when('/vehiculos', {
                templateUrl : 'views/chofer/vehiculos.html',
                controller: 'listaAutosController',
            })

            .when('/planificar', {
                templateUrl : 'views/usuario/planificar.html',
                controller: 'planificacionController'
            })

            .when('/viajesU', {
                templateUrl : 'views/usuario/table.html',
                controller: 'listaUsuarioViajesController'
            })

            .when('/viajesC', {
                templateUrl : 'views/chofer/table.html',
                controller: 'listaChoferViajesController'
            })

            .when('/perfilU', {
                templateUrl : 'views/usuario/user.html',
                controller: 'userPerfilController'
            })

            .when('/perfilC', {
                templateUrl : 'views/chofer/user.html',
                controller: 'choferPerfilController'
            })

            .when('/estadisticasU', {
                templateUrl : 'views/usuario/estadisticas.html',
                controller: 'estadisticUserController'
            })

            .when('/estadisticasC', {
                templateUrl : 'views/chofer/estadisticas.html',
                controller: 'estadisticChoferController'
            })

            .otherwise({
                redirectTo: '/'
            });
    }]);
 

    



