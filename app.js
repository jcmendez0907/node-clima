const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${direccion} es de ${ temp}`;
    } catch {
        return `no se pudo determinar el clima en ${direccion}`;
    }

}



getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {

    })