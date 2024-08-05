/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


export default {
	GetCiudad: function (city) {
		return axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
              q: city,
              appid: apiKey,
              units: 'metric',
            }
        })
	},
  async GetTemperatureInThreeDays(city) {
    try {
      let data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric',
        }
      })
      
      const currentDate = new Date();
      
      const dateOne = new Date(currentDate.setDate(currentDate.getDate() + 1));
      const dateTwo = new Date(currentDate.setDate(currentDate.getDate() + 2));
      const dateThree = new Date(currentDate.setDate(currentDate.getDate() + 3));

      const dateOneTimestamp = Math.floor(dateOne.getTime() / 1000);
      const dateTwoTimestamp = Math.floor(dateTwo.getTime() / 1000);
      const dateThreeTimestamp = Math.floor(dateThree.getTime() / 1000);

      const currentTimestamp = Math.floor(Date.now() / 1000);

      
      if (!data.data.list) {
        throw new Error('The response does not contain the "list" property');
      }

      const forecastsInRange = {
        dayOne: null,
        dayTwo: null,
        dayThree: null
      }

      forecastsInRange.dayOne = await data.data.list.find(item => item.dt >= currentTimestamp && item.dt < dateOneTimestamp);
      forecastsInRange.dayTwo = await data.data.list.find(item => item.dt >= dateOneTimestamp && item.dt < dateTwoTimestamp);
      forecastsInRange.dayThree = await data.data.list.find(item => item.dt >= dateTwoTimestamp && item.dt < dateThreeTimestamp);
      
      if (forecastsInRange.dayOne !== null) {
        return forecastsInRange
      } else {
        throw new Error('No forecast data available for the specified date');
      }
    } catch (error) {
      console.log(error);
      
      throw new Error('No forecast data available for the specified date');
    }
  }
}