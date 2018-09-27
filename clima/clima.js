const axios = require('axios');

const getClima = async(lat, lng) => {
    //axios

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b853033e75ab039c941a7fc360024f6c`)

    // if (respuesta.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la ciudad ${direccion}`);
    // }

    let datos = respuesta.data.main.temp;

    return datos
}

module.exports = {
    getClima
}