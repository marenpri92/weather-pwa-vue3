<script setup lang="ts">
import { appActions } from '../../store/app.store';
</script>

<template>
    <img src="../../../assets/logo.png" alt="Logo" />
    <h1>PWA Weather App</h1>
    <button type="button" @click="appActions.getGeolocalization()">Get your location</button>
</template>
