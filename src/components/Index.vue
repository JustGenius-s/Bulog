<script setup lang="ts">
import { ref } from 'vue';
import { register } from './app/index';
import { useRouter } from 'vue-router';
import { customThemeFromColor, applyCustomTheme } from './theme/theme';

const variant = ref('elevated');
const router = useRouter();

const theme = customThemeFromColor({
    primary: '#008ced',
    secondary: '#b16800',
    tertiary: '#948cb1',
    neutral: '#87bdf9'
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
        <option value="filled">filled</option>
        <option value="tonal">tonal</option>
        <option value="text">text</option>
    </select>
    <b-button class="m-l-10" :variant="variant" icon>
        <div slot="icon" class="i-material-symbols-add text-2xl"></div>
        {{ variant }}
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
