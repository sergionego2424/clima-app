const axios = require('axios');

const getClima = async (lat, lon) => {
	const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=dca358214f2144eee414ea676d6237cb&units=metric`)


	return respuesta.data.main.temp;

}


module.exports = {
	getClima
}