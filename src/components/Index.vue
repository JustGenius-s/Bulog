<script setup lang="ts">
import BDrawer from './app/BDrawer.vue';
import BButton from './app/BButton.vue';

const count = $ref(false);
</script>

<template>
    <b-drawer :init-state="count" direction="left"></b-drawer>
    <b-button variant="elevated" class="my-10 mx-5">button</b-button>
    <button class="uppercase" @click="() => (count = !count)">switch</button>
</template>

<style scoped></style>
