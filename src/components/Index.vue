<script setup lang="ts">
import { register } from './app/index';
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
register();
</script>

<template>
    <b-button class="my-5 mx-5" icon> button </b-button>
    <button variant="hello"></button>
</template>

<style scoped>

</style>
