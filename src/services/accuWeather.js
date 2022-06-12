import axios from 'axios';
import store from '../store'


export default class accuWeather {

    #apiKey = process.env.VUE_APP_API_KEY;
    async suggestLocation(query) {
        let url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
        let results = await axios.get(url, {
            params: {
                apikey: this.#apiKey,
                q: query
            }
        })
        return results.data
    }

    async getFiveDayForecast(locationKey) {
        let url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`
        let results = await axios.get(url, {
            params: {
                apikey: this.#apiKey,
                details: true,
                metric: store.state.isMetric

            }
        })
        return results.data['DailyForecasts']
    }

    async getFavouriteData(locationKey) {
        let url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}`
        let results = await axios.get(url, {
            params: {
                apikey: this.#apiKey,
                details: true,
                metric: store.state.isMetric

            }
        })
        return results.data['DailyForecasts']
    }

}