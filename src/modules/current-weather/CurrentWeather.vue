<script setup lang="ts">
import { onMounted } from 'vue';
import { weatherData, weatherActions, imageByWeather } from './current.store';

onMounted(() => {
  weatherActions.getWeather();
})
</script>

<template>
  <div v-if="weatherData">
    <h2>{{weatherData.name}}:</h2> {{new Date()}}
    <h2>Current weather: {{ weatherData.main.temp }} -> <span>feels like: {{weatherData.main.feels_like}}</span></h2>
    <h3>Min: {{ weatherData.main.temp_min }} - Max: {{ weatherData.main.temp_max }}</h3>
    <h3>{{weatherData.weather[0].main}} -> <span>{{weatherData.weather[0].description}}</span></h3>
    <img :src="imageByWeather" alt="Weather image" crossorigin="anonymous"/>
  </div>
  <router-link to="/forecast">Go to Forecast</router-link>
</template>
