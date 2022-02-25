import CurrentWeather from '../modules/current-weather/CurrentWeather.vue';
import Forecast from '../modules/forecast/Forecast.vue';

const routes = [
    { path: '/', component: CurrentWeather },
    { path: '/forecast', component: Forecast }
];

export default routes;
