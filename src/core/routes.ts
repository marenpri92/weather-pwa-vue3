import CurrentWeather from "../modules/current-weather/CurrentWeather.vue";
import Forecast from "../modules/forecast/Forecast.vue";
import ForecastView from "../modules/forecast/ForecastView.vue";

const routes = [
  { path: "/", component: CurrentWeather },
  {
    path: "/forecast",
    component: Forecast,
    children: [{ path: "view", component: ForecastView }],
  },
];

export default routes;
