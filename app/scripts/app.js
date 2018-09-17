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
    });

      //Angular App Module and Controller
    /*app.controller('MapController', function ($scope) {

        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(40.0000, -98.0000),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];
        
        var infoWindow = new google.maps.InfoWindow();
        
        var createMarker = function (info){
            
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            
            $scope.markers.push(marker);
            
        }  
        
        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

    }); */

    