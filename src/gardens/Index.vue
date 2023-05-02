<script setup lang="ts">
// This is a gift for my girlfriend. I love you, baby.
// I want to make a garden that remembers the good times we had together.

// Initialize canvas
import { ref, onMounted, onUnmounted } from "vue";

const garden = ref<HTMLCanvasElement>();

// Set canvas to fullscreen
onMounted(() => {
    const canvas = garden.value as HTMLCanvasElement;
    console.log("garden", "->", canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Clear canvas on unmount
onUnmounted(() => {
    const canvas = garden.value as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);
    
});
</script>

<template>
    <!-- Set canvas to fullscreen -->
    <canvas ref="garden"></canvas> 
</template>
