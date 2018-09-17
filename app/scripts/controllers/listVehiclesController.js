app.controller('listaAutosController', function() {
        var autos = this;
        autos.listaAsignados = [
            {name:'Modelo 1', img: 'images/automoviles/1.jpg' },
            {name:'Modelo 2', img: 'images/automoviles/2.jpg'},
            {name:'Modelo 3', img: 'images/automoviles/3.jpg'}
        ];

        autos.listaPropios = [
            {name:'Modelo 4', img: 'images/automoviles/4.jpg' },
            {name:'Modelo 5', img: 'images/automoviles/5.jpg'},
            {name:'Modelo 6', img: 'images/automoviles/6.jpg'}
        ];

        autos.listaActuales = [
            {name:'Modelo 7', img: 'images/automoviles/8.jpg' },
            {name:'Modelo 8', img: 'images/automoviles/9.jpg'},
            {name:'Modelo 9', img: 'images/automoviles/10.jpg'}
        ];
    });