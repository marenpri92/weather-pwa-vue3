<script setup lang="ts">
import { onMounted } from 'vue';
import { weatherData, weatherActions, imageByWeather } from './current.store';
import { formatedDate } from "../../core/tools/formatDate";
import formatTemp from "../../core/tools/formatTemp";
import LinkButton from "../../core/components/LinkButton.vue";

onMounted(() => {
  weatherActions.getWeather();
})
</script>

<template>
  <div v-if="weatherData" class="h-full flex justify-between flex-col">
    <div class="w-full flex justify-between items-center p-4">
      <h2 class="text-2xl font-bold">{{weatherData.name}}</h2>
      <div class="flex items-center">
        <p class="text-2xl">{{ formatTemp(weatherData.main.temp) }}&#8451;</p>
        <div>
          <img :src="imageByWeather" alt="Weather image" crossorigin="anonymous"/>
          <h3>{{weatherData.weather[0].main}} <span class="text-xs">({{weatherData.weather[0].description}})</span></h3>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-b from-white via-slate-300 to-cyan-500 w-full h-40 p-4">
      <div>
        <h3 class="text-stone-800">Weather from: {{formatedDate(weatherData.dt)}}</h3>
      </div>
      <h2>Current weather: {{ weatherData.main.temp }} -> <span>feels like: {{weatherData.main.feels_like}}</span></h2>
      <h3>Min: {{ weatherData.main.temp_min }} - Max: {{ weatherData.main.temp_max }}</h3>
    </div>
    <div class="p-4 flex justify-end">
      <LinkButton text="Go to Forecast" link="/forecast" />
    </div>
  </div>
</template>
