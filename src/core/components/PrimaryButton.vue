<script setup lang="ts">
    const props = defineProps({
    text: String
    })
</script>

<template>
    <button
        class="self-center h-9 bg-cyan-500 text-white rounded-3xl shadow-lg px-2 py-1 hover:shadow-md hover:bg-cyan-400 transition-all ease-in-out delay-150"
        type="button"
        @click="$emit('click-btn')"
    >
        {{text}}
    </button>
</template>
