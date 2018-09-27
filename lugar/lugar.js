const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let datos = respuesta.data.results[0];

    return {
        direccion: datos.formatted_address,
        lat: datos.geometry.location.lat,
        lng: datos.geometry.location.lng

    }
}

module.exports = {
    getLugarLatLng
}