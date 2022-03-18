<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <Header />
            <div class="container mx-auto w-full align-center sm:w-3/4 md:w-2/4 rounded-3xl shadow-2xl mt-0">
                <div class="h-96">
                    <router-view></router-view>
                </div>
            </div>
        <Footer />
    </div>
</template>
