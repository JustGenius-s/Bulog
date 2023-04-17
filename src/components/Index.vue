<script setup lang="ts">
import { ref } from 'vue';
import { register } from './app/index';
import { customThemeFromColor, applyCustomTheme } from './theme/theme';

const variant = ref('');

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
    <select v-model="variant">
        <option value="elevated">default</option>
        <option value="outlined">outlined</option>
        <option value="text">text</option>
    </select>
    <b-button class="my-5 mx-5" icon :variant="variant">
            <p slot="icon">icon</p>
        button
    </b-button>
    <button>
        Hello
        <state-layer contentColor="#88a0ee"></state-layer>
    </button>
</template>

<style scoped>
button {
    position: relative;
}
</style>
