app.controller('listaChoferViajesController', function() {
        var viajes = this;
        viajes.viajesCortos = [
            {id:'6', cliente: 'Doris Greene', vehiculo: 'Fiat Palio', ciudad: 'Puerto Ordaz',precio: '20 bs S', origen: 'Alta Vista', destino: 'La churuata'},
            {id:'7', cliente: 'Minerva Hooper', vehiculo: 'Fiat Palio', ciudad: 'Puerto Ordaz',precio: '50 bs S', origen: 'San Felix', destino: 'Unare'},
            {id:'8', cliente: 'Dakota Rice', vehiculo: 'Toyota Corolla', ciudad: 'Puerto Ordaz',precio: '25 bs S', origen: 'Unare', destino: 'Castillito'},
            {id:'9', cliente: 'Sage Rodriguez', vehiculo: 'Volkswagen Golf', ciudad: 'Puerto Ordaz',precio: '50 bs S', origen: 'Alta Vista', destino: 'Core 8'},
            {id:'10', cliente: 'Philip Chaney', vehiculo: 'Ford Escort', ciudad: 'Puerto Ordaz',precio: '55 bs S', origen: 'Castillito', destino: 'Las teodokildas'},
        ];

        viajes.viajesLargos = [
            {id:'1', cliente: 'Doris Greene', vehiculo: 'Fiat Palio', precio: '20 bs S', origen: 'Caracas', destino: 'Guanare'},
            {id:'2', cliente: 'Minerva Hooper', vehiculo: 'Fiat Palio', precio: '50 bs S', origen: 'Maracay', destino: 'Merida'},
            {id:'3', cliente: 'Dakota Rice', vehiculo: 'Toyota Corolla', precio: '25 bs S', origen: 'Maturin', destino: 'Puerto Ayacucho'},
            {id:'4', cliente: 'Sage Rodriguez', vehiculo: 'Volkswagen Golf', precio: '50 bs S', origen: 'Puerto Ordaz', destino: 'Valencia'},
            {id:'5', cliente: 'Philip Chaney', vehiculo: 'Ford Escort', precio: '55 bs S', origen: 'El Callao', destino: 'Puerot Ordaz'},
        ];
    });