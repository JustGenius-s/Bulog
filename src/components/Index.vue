<script setup lang="ts">
import { ref } from 'vue';
import { register } from './app/index';
import { useRouter } from 'vue-router';
import { customThemeFromColor, applyCustomTheme } from './theme/theme';

const variant = ref('');
const router = useRouter();

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

function gotoGarden() {
    router.push({ name: 'garden' });
}

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
    <b-button class="my-5 mx-5" icon :variant="variant" @click="gotoGarden">
        Go
    </b-button>
</template>

<style scoped>
select {
    margin-bottom: 1rem;
}

button {
    position: relative;
}
</style>
