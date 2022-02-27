import { ref, reactive } from 'vue';

import { getCurrentWeather } from '../../core/api/api-requests';
import geolocalization from '../../core/tools/geolocalization';
import { currentWeather } from './interfaces/current-weather.interface';

export const weatherData = ref<currentWeather | null>(null);
export const fetchedData = ref<Date>();
export const imageByWeather = ref<String>();

export const action = reactive({
  getWeather: async () => {
    if(!fetchedData.value) {
        const { coords } = await geolocalization();
        const weather: currentWeather = await getCurrentWeather(`lat=${coords.latitude}&lon=${coords.longitude}`);
        fetchedData.value = new Date();
        weatherData.value = weather;
        imageByWeather.value = `${import.meta.env.VITE_API_ICON}/${weatherData.value?.weather[0]?.icon}@2x.png`;
    }
  }
});
