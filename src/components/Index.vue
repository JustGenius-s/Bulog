<script setup lang="ts">
import BDrawer from './app/BDrawer.vue';

const count = $ref(false);
</script>

<template>
    <b-drawer :init-state="count" direction="left"></b-drawer>
    <button class="uppercase" @click="() => (count = !count)">switch</button>
</template>

<style scoped></style>
