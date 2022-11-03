<script setup lang="ts">
import Headers from './components/Index.vue';
</script>

<template>
  <div id="root">
    <headers></headers>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
