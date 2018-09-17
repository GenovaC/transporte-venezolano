
    app.controller('listaUsuarioViajesController', function() {
        var viajes = this;
        viajes.viajesLargos = [
            {id:'6', chofer: 'Doris Greene', precio: '20 bs S', origen: 'Maracaibo', destino: 'Acarigua'},
            {id:'7', chofer: 'Minerva Hooper', precio: '50 bs S', origen: 'Maturín', destino: 'Caracas'},
            {id:'8', chofer: 'Dakota Rice', precio: '25 bs S', origen: 'Puerto Ordaz', destino: 'Maracay'},
            {id:'9', chofer: 'Sage Rodriguez',  precio: '50 bs S', origen: 'Valencia', destino: 'Puerto La Cruz'},
            {id:'10', chofer: 'Philip Chaney',  precio: '55 bs S', origen: 'Castillito', destino: 'Maracaibo'},
        ];

        viajes.viajesCortos = [
            {id:'1', chofer: 'Doris Greene', ciudad: 'Puerto Ordaz', precio: '20 bs S', origen: 'Alta Vista', destino: 'La churuata'},
            {id:'2', chofer: 'Minerva Hooper',  ciudad: 'Puerto Ordaz', precio: '50 bs S', origen: 'San Felix', destino: 'Unare'},
            {id:'3', chofer: 'Dakota Rice',  ciudad: 'Puerto Ordaz', precio: '25 bs S', origen: 'Unare', destino: 'Castillito'},
            {id:'4', chofer: 'Sage Rodriguez',  ciudad: 'Puerto Ordaz', precio: '50 bs S', origen: 'Alta Vista', destino: 'Core 8'},
            {id:'5', chofer: 'Philip Chaney',  ciudad: 'Puerto Ordaz', precio: '55 bs S', origen: 'Castillito', destino: 'Las teodokildas'},
        ];
    });