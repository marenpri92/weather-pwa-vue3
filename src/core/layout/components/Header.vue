<script setup lang="ts">
import { appActions } from '../../store/app.store';
</script>

<template>
    <div class="flex h-16 content-center justify-between px-4 py-2 bg-slate-300">
        <div class="flex">
            <img class="h-14 w-14" src="../../../assets/logo.png" alt="Logo" />
            <h1 class="self-center font-semibold text-lg">PWA Weather App</h1>
        </div>
        <button class="self-center h-9 bg-cyan-500 text-white rounded-3xl shadow-lg px-2 py-1 hover:shadow-md hover:bg-cyan-400" type="button" @click="appActions.getGeolocalization()">Get your location</button>
    </div>
</template>
