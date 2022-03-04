import { ref, reactive } from 'vue';

import geolocalization from '../../core/tools/geolocalization';
import { weatherActions } from '../../modules/current-weather/current.store';

export const appActions = reactive({
    getGeolocalization: async () => {
        try {
            const { coords } = await geolocalization();
            window.localStorage.setItem('geoCoords', JSON.stringify({
                latitude: coords.latitude,
                longitude: coords.longitude
            }));
            weatherActions.getWeather();
        } catch (error) {
            console.log('error in action', error)
        }
        
    }
});
