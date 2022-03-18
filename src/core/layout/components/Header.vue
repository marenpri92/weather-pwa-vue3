<script setup lang="ts">
import { appActions } from '../../store/app.store';
import PrimaryButton from "../../components/PrimaryButton.vue";
</script>

<template>
    <div class="flex h-16 content-center justify-between px-4 py-2 bg-slate-300">
        <div class="flex">
            <img class="h-14 w-14" src="../../../assets/logo.png" alt="Logo" />
            <h1 class="self-center font-semibold text-lg">PWA Weather App</h1>
        </div>
        <PrimaryButton text="Get your location" @click-btn="appActions.getGeolocalization()"/>
    </div>
</template>
