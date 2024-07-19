<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const navigate = () => {
  router.push("/forecast/view");
};
</script>

<template>
  <router-link to="/">Back to Current</router-link>
  <h1>Forecast page</h1>
  <button type="button" @click="navigate">Navigate</button>
  <router-view />
</template>
