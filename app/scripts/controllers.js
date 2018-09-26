angular.module('app.controllers', [])

  .controller('estadisticUserController', ['HttpVerbs', function ( HttpVerbs) {
  
      var vm = this;

      vm.user = {};  

      function cargarTortaEstadistica() {

          vm.myJson = {
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
              vm.datos = r.data;

              vm.totalViajes = vm.datos.length;

              vm.totalEsperado = 0;
              vm.totalRecorrido = 0;

              angular.forEach(vm.datos, function(result){
                  vm.totalRecorrido += parseFloat(result.km);
                  vm.totalEsperado += parseFloat(result.tiempoEspera);
              });

              vm.totalRecorrido = Number(vm.totalRecorrido.toFixed(2)); //Redondeando km recorridos
              vm.totalEsperado = vm.totalEsperado/vm.totalViajes; //Promedio de esperado

              vm.totalEsperado = Number(vm.totalEsperado.toFixed(2)); //Redondeando tiempo esperado
          })
          .catch(function (r){
              console.log('Ha ocurrido un error:', r.status, r.data);
          })
      }

      function cargarChoferesDestacados() {

        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')        
          .then(function (r) { 
              vm.choferesDestacados = r.data;

          })
          .catch(function (r){
              console.log('Ha ocurrido un error:', r.status, r.data);
          })
      }

      cargarTortaEstadistica();
      cargarCifrasEstadisticas();
      cargarChoferesDestacados();

      vm.submitTaxi = function () {
          // use $.param jQuery function to serialize data from JSON 
          var data = $.param({

              cliente: vm.cliente,
              origen: vm.origen,
              destino: vm.destino,
              hora: vm.hora,
              fecha: vm.fecha,
              
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

  .controller('estadisticChoferController', ['HttpVerbs',function (HttpVerbs) {
    
    var vm = this;

    function cargarTortaEstadistica() {

        HttpVerbs.get('http://localhost:3000/configuracionTorta?idUsuario='+2)
        .then(function (r) {
           vm.torta = r.data[0];
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }  

    function cargarHorasEstadistica() {

        HttpVerbs.get('http://localhost:3000/hourEstadistics')
        .then(function (r) {
            vm.hour = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    function cargarLineEstadistica() {

        HttpVerbs.get('http://localhost:3000/lineEstadistics')
        .then(function (r) {
           // $scope.est = r.data;
           vm.line = r.data;
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

  .controller('listaAutosController', ['HttpVerbs', function (HttpVerbs) {
   
    var vm = this;

    vm.cargarVehiculos = function(id) {
        HttpVerbs.get('http://localhost:3000/lista_vehiculos?idPropietario='+id)
        .then(function (r) {
            vm.model = r.data;
        })
        .catch(function (r){

            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    vm.onVehicle = function (id) {
        HttpVerbs.get('http://localhost:3000/lista_vehiculos?id='+id)
        .then(function (r) {
            vm.modaleishon = r.data[0];             
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 

    function cargarChoferes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            vm.choferes = r.data;
            vm.myChofer = vm.choferes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarChoferes();
  }])

  .controller('listaChoferViajesController', ['HttpVerbs',function ( HttpVerbs) {

    var vm = this;

    vm.cargarViajes = function(id) {

      HttpVerbs.get('http://localhost:3000/viajes?longitud=Estado a otro&longitud=Ciudad a otra&idChofer='+id)        
      .then(function (r) {
          vm.model = r.data;   
      })
      .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
      
      HttpVerbs.get('http://localhost:3000/viajes?longitud=Misma ciudad&idChofer='+id)
      .then(function (r1) {
          vm.model2 = r1.data;
      })
      .catch(function (r1){
          console.log('Ha ocurrido un error:', r1.status, r1.data);
      })
    }

    vm.onViajeChofer = function (id) {
        HttpVerbs.get('http://localhost:3000/viajes?id='+id)
        .then(function (r) {
            vm.detalle = r.data[0];             
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 
  
    function cargarChoferes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            vm.choferes = r.data;
            vm.myChofer = vm.choferes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarChoferes();

    vm.delete = function (id) {
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

  .controller('listaUsuarioViajesController', ['HttpVerbs',function (HttpVerbs) {
    
    var vm = this;

    function cargarClientes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=true')
        .then(function (r) {
            vm.clientes = r.data;
            vm.myCliente = vm.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarClientes();

    vm.cargarViajes = function(id) {

        HttpVerbs.get('http://localhost:3000/viajes?longitud=Estado a otro&longitud=Ciudad a otra&idUsuario='+id)
        .then(function (r) {
            vm.model = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
        
        HttpVerbs.get('http://localhost:3000/viajes?longitud=Misma ciudad&idUsuario='+myCliente.id)
        .then(function (r1) {
            vm.model2 = r1.data;
        })
        .catch(function (r1){
            console.log('Ha ocurrido un error:', r1.status, r1.data);
        })
    }

    vm.onViajeUser = function (id) {
        HttpVerbs.get('http://localhost:3000/viajes?id='+id)
        .then(function (r) {
            vm.detalle = r.data[0];
            //  $scope.modaleishon = console.log(JSON.stringify($scope.mmm));                
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    } 

    vm.delete = function (id) {
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

  .controller('mainController', ['HttpVerbs', function (HttpVerbs) {

    var vm = this;

      function cargarChoferes() {

        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false&_limit=3') //Trayendo 3 choferes
        .then(function (r) {
            vm.model = r.data;
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
      }
  
      function cargarFecha(){
          vm.dt = new Date();
      }
  
      cargarChoferes();
      cargarFecha();  
  
      vm.submitUsuario= function () {
          
            var data = $.param({
        
                name: vm.name,
                lastname: vm.lastname,
                phone: vm.cel,

                email: vm.email,
                user: vm.user,
                password: vm.pwd,
                cliente: !vm.cliente,

                fullname: vm.name + " " + vm.lastname,
                
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

  .controller('infoController', ['HttpVerbs', function (HttpVerbs) {

    var vm = this;

    function cargarChoferes() {

      HttpVerbs.get('http://localhost:3000/usuarios?cliente=false') 
      .then(function (r) {
          vm.model = r.data;
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

  .controller('planificacionController', ['HttpVerbs', function (HttpVerbs) {
    
    var vm = this;

    conocerDistancia = function(){
        if ( (vm.stateOrigen).localeCompare(vm.stateDestino) != 0 ) 
            vm.distanciaViaje = "Estado a Otro";

        else if ( (vm.cityOrigen).localeCompare(vm.cityDestino) != 0) 
            vm.distanciaViaje = "Ciudad a otra"; 

        else  vm.distanciaViaje = "Misma Ciudad"; 
    }

    vm.submitViaje= function () {    

        conocerDistancia();

        // use $.param jQuery function to serialize data from JSON 
        var data = $.param({

            cliente: vm.myCliente.fullname,            
            idUsuario: vm.myCliente.id, 

            vehiculo: "Fiat Palio",             
            idChofer: vm.myChofer.id,
            chofer: vm.myChofer.fullname,

            hora: vm.hora,
            fecha: vm.fecha,
            pasajeros: vm.pasajeros,
            km: vm.km,
            precio: vm.precio,
            tiempoEspera: "1",

            ciudad: vm.cityOrigen,
            origen: vm.cityOrigen,
            destino: vm.cityDestino,
            direccionInicial: vm.direccionOrigen,
            direccionFinal: vm.direccionDestino,

            longitud:  vm.distanciaViaje,

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
            vm.clientes = r.data;
            vm.myCliente = vm.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    function cargarDatosChoferes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
            vm.choferes = r.data;
            vm.myChofer = vm.choferes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarDatosChoferes();
    cargarDatosUsuario();

  }])

  .controller('choferPerfilController', ['HttpVerbs', function (HttpVerbs) {
    
    var vm = this;

    function cargarDatosChofer() {

        HttpVerbs.get('http://localhost:3000/usuarios?cliente=false')
        .then(function (r) {
           vm.model = r.data;
           vm.myChofer = vm.model[0]; 
        })
        .catch(function (r){
          console.log('Ha ocurrido un error:', r.status, r.data);
      })
    }

    cargarDatosChofer();

    vm.dias = [
        'Lun', 
        'Mar', 
        'Mie', 
        'Jue',
        'Vie',
        'Sab',
        'Dom'
    ];
      
    vm.selected = [];


    vm.cargarCifras = function (id) {

        HttpVerbs.get('http://localhost:3000/viajes?idChofer='+id)        
        .then(function (r) { 
            vm.totalViajes = r.data.length;
            vm.totalRecorrido = 0;

            angular.forEach(r.data, function(result){
                vm.totalRecorrido += parseFloat(result.km);
            });

            vm.totalRecorrido = Number(vm.totalRecorrido.toFixed(2)); //Redondeando km recorridos

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })


        HttpVerbs.get('http://localhost:3000/lista_vehiculos?idPropietario='+id)        
        .then(function (r) { 
            vm.totalVehiculos = r.data.length;

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    };


    vm.updateChofer= function () {
        
        var data = $.param({
    
          name: vm.myChofer.name,
          lastname: vm.myChofer.lastname,
          phone: vm.myChofer.phone,

          email: vm.myChofer.email,
          user: vm.myChofer.user,

          fullname: vm.myChofer.name + " " + vm.myChofer.lastname,
          
          homeaddress:  vm.myChofer.homeaddress,
          city:  vm.myChofer.city,
          state:  vm.myChofer.state,
          country:  vm.myChofer.country,
          aboutme:  vm.myChofer.aboutme,

          horario: vm.selected
      });


    HttpVerbs.modificar('http://localhost:3000/usuarios/'+vm.myChofer.id, data)
    .then(function (data, status, headers, config) {
        //$scope.PostDataResponse = data;
        alert("Correctamente actualizado");
    })
    .catch(function (data, status, header, config) {
      console.log('Ha ocurrido un error:',status, data);
      alert("NO se pudo actualizar el registro");
    });
    };

    vm.updatePago= function () {
            
        var data = $.param({

            banco:  vm.myChofer.banco,
            tipoCuenta:  vm.myChofer.typeaccount,
            account:  vm.myChofer.account,
            codesecurity: vm.myChofer.codesecurity
        });

        HttpVerbs.modificar('http://localhost:3000/usuarios/'+vm.myChofer.id, data)
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

  .controller('userPerfilController', ['HttpVerbs',function (HttpVerbs) {
    
    var vm = this;

    function cargarClientes() {
        HttpVerbs.get('http://localhost:3000/usuarios?cliente=true')
        .then(function (r) {
            vm.clientes = r.data;
            vm.myCliente = vm.clientes[0]; 
        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    }

    cargarClientes();

    vm.cargarCifras = function (id) {

        HttpVerbs.get('http://localhost:3000/viajes?idUsuario='+id)        
        .then(function (r) { 
            vm.totalViajes = r.data.length;
            vm.totalInvertido = 0;
            vm.totalRecorrido = 0;

            angular.forEach(r.data, function(result){
                vm.totalRecorrido += parseFloat(result.km);
                vm.totalInvertido += parseFloat(result.precio);
            });

            vm.totalRecorrido = Number(vm.totalRecorrido.toFixed(2)); //Redondeando km recorridos
            vm.totalInvertido = Number(vm.totalInvertido.toFixed(2)); //Redondeando invertido

        })
        .catch(function (r){
            console.log('Ha ocurrido un error:', r.status, r.data);
        })
    };

    vm.updateUsuario= function () {
        
        var data = $.param({
        
            name: vm.myCliente.name,
            lastname: vm.myCliente.lastname,
            phone: vm.myCliente.phone,

            email: vm.myCliente.email,
            user: vm.myCliente.user,
            password: vm.myCliente.password,
            cliente: vm.myCliente.cliente,

            fullname: vm.myCliente.name + " " + vm.myCliente.lastname,
            
            portada: vm.myCliente.portada,
            perfil: vm.myCliente.perfil,
            
            homeaddress:  vm.myCliente.homeaddress,
            city:  vm.myCliente.city,
            state:  vm.myCliente.state,
            country:  vm.myCliente.country,
            aboutme:  vm.myCliente.aboutme,
            
        });

        HttpVerbs.modificar('http://localhost:3000/usuarios/'+vm.myCliente.id, data)
        .then(function (data, status, headers, config) {
            alert("Correctamente actualizado");
        })
        .catch(function (data, status, header, config) {
        console.log('Ha ocurrido un error:',status, data);
            alert("NO se pudo actualizar el registro");
        });
        location.reload();
    };

    vm.updatePago= function () {
            
        var data = $.param({        
            banco:  vm.myCliente.banco,
            fvencimiento:  vm.myCliente.fvencimiento,
            creditcard:  vm.myCliente.creditcard,
            codesecurity: vm.myCliente.codesecurity
        });

        HttpVerbs.modificar('http://localhost:3000/usuarios/'+vm.myCliente.id, data)
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



