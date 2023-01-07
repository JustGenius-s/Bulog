<script setup lang="ts">
import BDrawer from './app/BDrawer.vue';
import BButton from './app/BButton.vue';
import BFab from './app/BFab.vue';
import { customThemeFromColor, applyCustomTheme } from './theme/theme';

const theme = customThemeFromColor({
    primary: '#006b62',
    secondary: '#fcb170',
    tertiary: '#928cb2',
}, [
    {
        value: '#77baff',
        name: 'coff',
        blend: false
    }
])

applyCustomTheme(theme, {
    dark: false,
});

console.log(theme);

const count = $ref(false);
</script>

<template>
    <b-drawer :init-state="count" direction="left"></b-drawer>
    <b-button variant="outlined" class="my-5 mx-5"> button </b-button>
    <b-fab class="my-5 mx-5">😄</b-fab>
    <button class="uppercase" @click="() => (count = !count)">switch</button>
</template>

<style scoped>

</style>
