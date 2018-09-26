angular.module('app.factories', [])

    .factory('HttpVerbs', ['$http', function ($http) {
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return {
            get: function(url){
                return $http.get(url)
            },
            delete: function(url){ 
                return $http.delete(url)
            },
            agregar: function(url, data){
                return $http.post(url, data, config)
            },
            modificar: function(url, data){
                return $http.patch(url, data, config)
            }
        }
    }]);