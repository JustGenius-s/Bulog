<script setup lang="ts">
import { computed } from '@vue/reactivity';

interface Props {
    variant: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text' | undefined;
}

const { variant } = defineProps<Props>();

const type = computed(() => {
    switch (variant) {
        case 'elevated':
            return ['rounded-full', 'bg-orange-50', 'shadow-l'];
        case 'filled':
            return ['rounded-full', 'bg-orange-200'];
        case 'tonal':
            return ['rounded-full', 'bg-orange-100'];
        case 'outlined':
            return ['rounded-full', 'border', 'border-black'];
        case 'text':
            return ['bg-transparent'];
        default:
            return ['shadow-l', 'rounded-full', 'bg-orange-50'];
    }
});
</script>

<template>
    <div
        :class="type"
        class="capitalize font-medium h-10 w-fit leading-10 px-6 hover:opacity-70 transition transition-150">
        <slot></slot>
    </div>
</template>

<style scoped>
.shadow-l {
    box-shadow: 0px 0.5px 1.5px 0px #4e4e4f;
}
</style>
