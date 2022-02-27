import { ref, reactive } from 'vue';

import { getCurrentWeather } from '../../core/api/api-requests';
import { currentWeather } from './interfaces/current-weather.interface';

export const weatherData = ref<currentWeather | null>(null);
export const fetchedData = ref<Date | null>(null);
export const imageByWeather = ref("");

export const weatherActions = reactive({
  getWeather: async () => {
    const geoCoords = window.localStorage?.getItem('geoCoords');
    
    if(!fetchedData.value && geoCoords) {
        const coords = JSON.parse(geoCoords);
        
        const weather: currentWeather = await getCurrentWeather(`lat=${coords.latitude}&lon=${coords.longitude}`);
        fetchedData.value = new Date();
        weatherData.value = weather;
        const imgUrl = `${import.meta.env.VITE_API_ICON}/${weatherData.value?.weather[0]?.icon}@2x.png`;
        
        imageByWeather.value = imgUrl;
    }
  }
});
