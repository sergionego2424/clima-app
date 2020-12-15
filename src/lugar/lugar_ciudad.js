
const getLugarLatLong = async (dir) => {
	const axios = require('axios');

	const encodeURL = encodeURI(dir);

	const instance = axios.create({
		baseURL : `http://api.openweathermap.org/data/2.5/weather?q=${encodeURL}&appid=dca358214f2144eee414ea676d6237cb`,
		headers : { 'appid' : 'dca358214f2144eee414ea676d6237cb' }
	})

	const respuesta = await instance.get();

	if(!respuesta) {
		throw new Error(`No hay informacion para ${dir}`);
	}

	const direccion = respuesta.data.name;
	const lat1 = respuesta.data.coord.lat;
	const lon1 = respuesta.data.coord.lon;

	return {
		direccion,
		lat1,
		lon1
	}
}

module.exports = {
	getLugarLatLong
}
