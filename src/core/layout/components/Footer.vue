<script setup lang="ts">
    import { currentDate } from "../../tools/formatDate";
</script>

<template>
    <div class="flex justify-center p-4 bg-slate-300">
        <p class="text-stone-800">PWA Weather App: {{currentDate()}}</p>
    </div>
</template>
