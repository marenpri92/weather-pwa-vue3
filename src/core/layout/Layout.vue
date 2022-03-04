<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Header />
        <div class="p-4 h-96">
            <router-view></router-view>
        </div>
    <Footer />
</template>
