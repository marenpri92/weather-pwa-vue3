<script setup lang="ts">
    const props = defineProps({
    text: String,
    link: String
    })
</script>

<template>
    <router-link :to="link">
        <button
            class="self-center h-9 text-cyan-500 px-2 py-1 hover:text-cyan-400 transition-all ease-in-out delay-150"
            type="button"
        >
            {{text}}
        </button>
    </router-link>
</template>