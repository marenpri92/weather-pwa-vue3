import { currentWeather } from '../../modules/current-weather/interfaces/current-weather.interface';
import { forecastWeather } from '../../modules/forecast/interfaces/forecast-weather.interface';

export const getCurrentWeather = async (query: string): Promise<currentWeather> => {
    try {
        const resp = await fetch(`${import.meta.env.VITE_BASE_URL}/weather?${query}&APPID=${import.meta.env.VITE_API_KEY}&units=metric`);
        const json = await resp.json();

        return json;

    } catch (error) {
        throw (error);
    }
};

export const getForecastWeather = async (query: string): Promise<forecastWeather> => {
    try {
        const resp = await fetch(`${import.meta.env.VITE_BASE_URL}/forecast?${query}&APPID=${import.meta.env.VITE_API_KEY}&units=metric`);
        const json = await resp.json();
        console.log('weather json', json);
        return json;

    } catch (error) {
        throw (error);
    }
}
