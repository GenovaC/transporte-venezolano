angular.module('app.controllers', [])

  .controller('estadisticUserController', ['$scope','HttpVerbs', function ($scope, HttpVerbs) {
  
      $scope.user = {};  

      function cargarTortaEstadistica() {

          $scope.myJson = {
              idUsuario: 1,
              globals: {
                shadow: false,
                fontFamily: "Kosugi",
                fontWeight: 100,
                fontSize: "13 px"
              },
              type: "pie",
              backgroundColor: "#fff",
              legend: {
                layout: "x4",
                position: "center",
                borderColor: "transparent",
                marker: {
                  borderRadius: 10,
                  borderColor: "transparent"
                }
              },
              tooltip: {
                text: "%v viajes"
              },
              plot: {
                refAngle: "-90",
                borderWidth: "0px",
                valueBox: {
                  placement: "in",
                  text: "%npv %",
                  fontSize: "15px",
                  textAlpha: "2"
                }
              },
              series: [
                {
                  text: "Misma ciudad",
                  values: [5],
                  backgroundColor: "#d2527f #db0a5b"
                },
                {
                  text: "Ciudad a otra",
                  values: [1],
                  backgroundColor: "#2ecc71 #00b16a"
                },
                {
                  text: "Estado a otro",
                  values: [6],
                  backgroundColor: "#e9d460 #f5ab35"
                }
              ]
            }
      }

      function cargarCifrasEstadisticas() {

           HttpVerbs.get('http://localhost:3000/viajes?idUsuario='+1)        
           .then(function (r) { 
              $scope.datos = r.data;

              $scope.totalViajes = $scope.datos.length;

              $scope.totalEsperado = 0;
              $scope.totalRecorrido = 0;

              angular.forEach($scope.datos, function(result){
                  $scope.totalRecorrido += parseFloat(result.km);
                  $scope.totalEsperado += parseFloat(result.tiempoEspera);
              });

              $scope.totalRecorrido = Number($scope.totalRecorrido.toFixed(2)); //Redondeando km recorridos
              $scope.totalEsperado = $scope.totalEsperado/$scope.totalViajes; //Promedio de esperado

              $scope.totalEsperado = Number($scope.totalEsperado.toFixed(2)); //Redondeando tiempo esperado
          })
          .catch(function (r){
              console.log('Ha ocurrido un error:', r.status, r.data);
          })
      }

      function cargarChoferesDestacados() {

        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')        
          .then(function (r) { 
              $scope.choferesDestacados = r.data;

          })
          .catch(function (r){
              console.log('Ha ocurrido un error:', r.status, r.data);
          })
      }

      cargarTortaEstadistica();
      cargarCifrasEstadisticas();
      cargarChoferesDestacados();

      $scope.submitTaxi = function () {
          // use $.param jQuery function to serialize data from JSON 
          var data = $.param({

              cliente: $scope.cliente,
              origen: $scope.origen,
              destino: $scope.destino,
              hora: $scope.hora,
              fecha: $scope.fecha,
              
              //Esto no esta en el formulario de mi taxi asi que lo pondré por defecto asiii             
              
              idUsuario: 1,
              longitud: "Misma ciudad",
              chofer: "Arturo López",
              ciudad: "Puerto Ordaz",
              vehiculo: "Fiat Palio",
              km: "12",
              tiempoEspera: "5",
              pasajeros: "5",
              precio: "20",
              idChofer: 2

          });

          HttpVerbs.agregar('http://localhost:3000/viajes', data)
          .then(function () {
              //$scope.PostDataResponse = data;
              alert("Se guardo tu información 'satisfactoriamente'");
            })
          .catch(function () {
              alert("NO guardo tu información");
          });
          location.reload();
      };

    }])

  .controller('estadisticChoferController', ['$scope', 'HttpVerbs',function ($scope, HttpVerbs) {
    
    function cargarTortaEstadistica() {

        HttpVerbs.get('http://localhost:3000/configuracionTorta?idUsuario='+2)
        .then(function (r) {
           $scope.torta = r.data[0];
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }  

    function cargarHorasEstadistica() {

        HttpVerbs.get('http://localhost:3000/hourEstadistics')
        .then(function (r) {
            $scope.hour = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    function cargarLineEstadistica() {

        HttpVerbs.get('http://localhost:3000/lineEstadistics')
        .then(function (r) {
           // $scope.est = r.data;
           $scope.line = r.data;
           //console.log(JSON.stringify($scope.myJson));
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
      }

    cargarHorasEstadistica();
    cargarLineEstadistica();
    cargarTortaEstadistica();
  
  }])

  .controller('listaAutosController', ['$scope', 'HttpVerbs', function ($scope, HttpVerbs) {
   
    $scope.cargarVehiculos = function(id) {
        HttpVerbs.get('http://localhost:3000/lista_vehiculos?idPropietario='+id)
        .then(function (r) {
            $scope.model = r.data;
        })
        .catch(function (r){

            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    $scope.onVehicle = function (id) {
        HttpVerbs.get('http://localhost:3000/lista_vehiculos?id='+id)
        .then(function (r) {
            $scope.modaleishon = r.data[0];             
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 

    function cargarChoferes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            $scope.choferes = r.data;
            $scope.myChofer = $scope.choferes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarChoferes();
  }])

  .controller('listaChoferViajesController', ['$scope', 'HttpVerbs',function ($scope, HttpVerbs) {

    $scope.cargarViajes = function(id) {

      HttpVerbs.get('http://localhost:3000/viajes?longitud=Estado a otro&longitud=Ciudad a otra&idChofer='+id)        
      .then(function (r) {
          $scope.model = r.data;   
      })
      .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
      
      HttpVerbs.get('http://localhost:3000/viajes?longitud=Misma ciudad&idChofer='+id)
      .then(function (r1) {
          $scope.model2 = r1.data;
      })
      .catch(function (r1){
          console.log('Ha ocurrido un error:', r1.status, r1.data);
      })
    }

    $scope.onViajeChofer = function (id) {
        HttpVerbs.get('http://localhost:3000/viajes?id='+id)
        .then(function (r) {
            $scope.modaleishon = r.data[0];             
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 
  
    function cargarChoferes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            $scope.choferes = r.data;
            $scope.myChofer = $scope.choferes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarChoferes();

    $scope.delete = function (id) {
        HttpVerbs.delete('http://localhost:3000/viajes/'+id)
        .then(function (r) {
            alert("Eliminado con exito viaje codigo "+id)               
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        location.reload();
    } 
    
  }])

  .controller('listaUsuarioViajesController', ['$scope', 'HttpVerbs',function ($scope, HttpVerbs) {
    
    function cargarClientes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=true')
        .then(function (r) {
            $scope.clientes = r.data;
            $scope.myCliente = $scope.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarClientes();

    $scope.cargarViajes = function(id) {

        HttpVerbs.get('http://localhost:3000/viajes?longitud=Estado a otro&longitud=Ciudad a otra&idUsuario='+id)
        .then(function (r) {
            $scope.model = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        
        HttpVerbs.get('http://localhost:3000/viajes?longitud=Misma ciudad&idUsuario='+myCliente.id)
        .then(function (r1) {
            $scope.model2 = r1.data;
        })
        .catch(function (r1){
            console.log('Ha ocurrido un error:', r1.status, r1.data);
        })
    }

    $scope.onViajeUser = function (id) {
        HttpVerbs.get('http://localhost:3000/viajes?id='+id)
        .then(function (r) {
            $scope.modaleishon = r.data[0];
            //  $scope.modaleishon = console.log(JSON.stringify($scope.mmm));                
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 

    $scope.delete = function (id) {
        HttpVerbs.delete('http://localhost:3000/viajes/'+id)
        .then(function (r) {
            alert("Eliminado con exito viaje codigo "+id)               
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        location.reload();
    } 

  }])

  .controller('mainController', ['$scope', 'HttpVerbs', function ($scope,HttpVerbs) {

      function cargarChoferes() {

        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false&_limit=3') //Trayendo 3 choferes
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
  
      cargarChoferes();
      cargarFecha();  
  
      $scope.submitUsuario= function () {
          
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

            HttpVerbs.agregar('http://localhost:3000/usuarios', data)
            .then(function (data, status, headers, config) {
                alert("Correctamente registrado");
            })
            .catch(function (data, status, header, config) {  
                alert("NO se pudo hacer el registro");
            });
            location.reload();
        };
    
  }])

  .controller('infoController', ['$scope', 'HttpVerbs', function ($scope,HttpVerbs) {

    function cargarChoferes() {

      HttpVerbs.get('http://localhost:3000/usuarios?cliente=false') 
      .then(function (r) {
          $scope.model = r.data;
      })
      .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
    }

    cargarChoferes();
}])

  .controller('MapController', function() {

    var myLatlng = new google.maps.LatLng(8.315160, -62.714940);

    var mapOptions = {
        zoom: 10,
        center: myLatlng
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
    
  })

  .controller('planificacionController', ['$scope', 'HttpVerbs', function ($scope,HttpVerbs) {
    
    conocerDistancia = function(){
        if ( ($scope.stateOrigen).localeCompare($scope.stateDestino) != 0 ) 
            $scope.distanciaViaje = "Estado a Otro";

        else if ( ($scope.cityOrigen).localeCompare($scope.cityDestino) != 0) 
            $scope.distanciaViaje = "Ciudad a otra"; 

        else  $scope.distanciaViaje = "Misma Ciudad"; 
    }

    $scope.submitViaje= function () {    

        conocerDistancia();

        // use $.param jQuery function to serialize data from JSON 
        var data = $.param({

            cliente: $scope.myCliente.fullname,            
            idUsuario: $scope.myCliente.id, 

            vehiculo: "Fiat Palio",             
            idChofer: $scope.myChofer.id,
            chofer: $scope.myChofer.fullname,

            hora: $scope.hora,
            fecha: $scope.fecha,
            pasajeros: $scope.pasajeros,
            km: $scope.km,
            precio: $scope.precio,
            tiempoEspera: "1",

            ciudad: $scope.cityOrigen,
            origen: $scope.cityOrigen,
            destino: $scope.cityDestino,
            direccionInicial: $scope.direccionOrigen,
            direccionFinal: $scope.direccionDestino,

            longitud:  $scope.distanciaViaje,

        });
    

        HttpVerbs.agregar('http://localhost:3000/viajes', data)
        .then(function (data, status, headers, config) {
            alert("Se guardo tu información 'satisfactoriamente'");
        })
        .catch(function (data, status, header, config) {
            alert("Error");
        });
        location.reload();
    };

    function cargarDatosUsuario() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=true')
        .then(function (r) {
            $scope.clientes = r.data;
            $scope.myCliente = $scope.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    function cargarDatosChoferes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            $scope.choferes = r.data;
            $scope.myChofer = $scope.choferes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarDatosChoferes();
    cargarDatosUsuario();

  }])

  .controller('choferPerfilController', ['$scope', 'HttpVerbs', function ($scope,HttpVerbs) {
    
    function cargarDatosChofer() {

        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
           $scope.model = r.data;
           $scope.myChofer = $scope.model[0]; 
        })
        .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
    }

    cargarDatosChofer();

    $scope.dias = [
        'Lun', 
        'Mar', 
        'Mie', 
        'Jue',
        'Vie',
        'Sab',
        'Dom'
    ];
      
    $scope.selected = [];


    $scope.cargarCifras = function (id) {

        HttpVerbs.get('http://localhost:3000/viajes?idChofer='+id)        
        .then(function (r) { 
            $scope.totalViajes = r.data.length;
            $scope.totalRecorrido = 0;

            angular.forEach(r.data, function(result){
                $scope.totalRecorrido += parseFloat(result.km);
            });

            $scope.totalRecorrido = Number($scope.totalRecorrido.toFixed(2)); //Redondeando km recorridos

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })


        HttpVerbs.get('http://localhost:3000/lista_vehiculos?idPropietario='+id)        
        .then(function (r) { 
            $scope.totalVehiculos = r.data.length;

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    };


    $scope.updateChofer= function () {
        
        var data = $.param({
    
          name: $scope.myChofer.name,
          lastname: $scope.myChofer.lastname,
          phone: $scope.myChofer.phone,

          email: $scope.myChofer.email,
          user: $scope.myChofer.user,

          fullname: $scope.myChofer.name + " " + $scope.myChofer.lastname,
          
          homeaddress:  $scope.myChofer.homeaddress,
          city:  $scope.myChofer.city,
          state:  $scope.myChofer.state,
          country:  $scope.myChofer.country,
          aboutme:  $scope.myChofer.aboutme,

          horario: $scope.selected
      });


    HttpVerbs.modificar('http://localhost:3000/usuarios/'+$scope.myChofer.id, data)
    .then(function (data, status, headers, config) {
        //$scope.PostDataResponse = data;
        alert("Correctamente actualizado");
    })
    .catch(function (data, status, header, config) {
      console.log('Ha ocurrido un error:',status, data);
      alert("NO se pudo actualizar el registro");
    });
    };

    $scope.updatePago= function () {
            
        var data = $.param({

            banco:  $scope.myChofer.banco,
            tipoCuenta:  $scope.myChofer.typeaccount,
            account:  $scope.myChofer.account,
            codesecurity: $scope.myChofer.codesecurity
        });

        HttpVerbs.modificar('http://localhost:3000/usuarios/'+$scope.myChofer.id, data)
        .then(function (data, status, headers, config) {
            //$scope.PostDataResponse = data;
            alert("Correctamente actualizado");
        })
        .catch(function (data, status, header, config) {
            console.log('Ha ocurrido un error:',status, data);
            alert("NO se pudo actualizar el registro");
        });
    };

    }])

  .controller('userPerfilController', ['$scope', 'HttpVerbs',function ($scope,HttpVerbs) {
    
    function cargarClientes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=true')
        .then(function (r) {
            $scope.clientes = r.data;
            $scope.myCliente = $scope.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarClientes();

    $scope.cargarCifras = function (id) {

        HttpVerbs.get('http://localhost:3000/viajes?idUsuario='+id)        
        .then(function (r) { 
            $scope.totalViajes = r.data.length;
            $scope.totalInvertido = 0;
            $scope.totalRecorrido = 0;

            angular.forEach(r.data, function(result){
                $scope.totalRecorrido += parseFloat(result.km);
                $scope.totalInvertido += parseFloat(result.precio);
            });

            $scope.totalRecorrido = Number($scope.totalRecorrido.toFixed(2)); //Redondeando km recorridos
            $scope.totalInvertido = Number($scope.totalInvertido.toFixed(2)); //Redondeando invertido

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    };

    $scope.updateUsuario= function () {
        
        var data = $.param({
        
            name: $scope.myCliente.name,
            lastname: $scope.myCliente.lastname,
            phone: $scope.myCliente.phone,

            email: $scope.myCliente.email,
            user: $scope.myCliente.user,
            password: $scope.myCliente.password,
            cliente: $scope.myCliente.cliente,

            fullname: $scope.myCliente.name + " " + $scope.myCliente.lastname,
            
            portada: $scope.myCliente.portada,
            perfil: $scope.myCliente.perfil,
            
            homeaddress:  $scope.myCliente.homeaddress,
            city:  $scope.myCliente.city,
            state:  $scope.myCliente.state,
            country:  $scope.myCliente.country,
            aboutme:  $scope.myCliente.aboutme,
            
        });

        HttpVerbs.modificar('http://localhost:3000/usuarios/'+$scope.myCliente.id, data)
        .then(function (data, status, headers, config) {
            alert("Correctamente actualizado");
        })
        .catch(function (data, status, header, config) {
        console.log('Ha ocurrido un error:',status, data);
            alert("NO se pudo actualizar el registro");
        });
        location.reload();
    };

    $scope.updatePago= function () {
            
        var data = $.param({        
            banco:  $scope.myCliente.banco,
            fvencimiento:  $scope.myCliente.fvencimiento,
            creditcard:  $scope.myCliente.creditcard,
            codesecurity: $scope.myCliente.codesecurity
        });

        HttpVerbs.modificar('http://localhost:3000/usuarios/'+$scope.myCliente.id, data)
        .then(function (data, status, headers, config) {
            alert("Correctamente actualizado");
        })
        .catch(function (data, status, header, config) {
            console.log('Ha ocurrido un error:',status, data);
            alert("NO se pudo actualizar el registro");
        });
        
        location.reload();
    };

  }]);



