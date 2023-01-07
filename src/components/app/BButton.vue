<script setup lang="ts">
import StateLayer from './StateLayer.vue';

interface Props {
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    icon?: boolean;
}

const { variant, icon } = defineProps<Props>();

const container = $computed(() => {
    switch (variant) {
        case 'elevated':
            return 'bg-surface';
        case 'filled':
            return 'bg-primary';
        case 'tonal':
            return 'bg-secondary-container';
        case 'outlined':
            return 'bg-surface';
        case 'text':
            return 'bg-transparent';
        default:
            return 'bg-surface';
    }
});

const content = $computed(() => {
    switch (variant) {
        case 'elevated':
            return 'text-primary';
        case 'filled':
            return 'text-on-primary';
        case 'tonal':
            return 'text-on-secondary-container';
        case 'outlined':
            return 'text-primary';
        case 'text':
            return 'text-primary';
        default:
            return 'text-primary';
    }
});

const contentColor = $computed(() => {
    switch (variant) {
        case 'elevated':
            return 'bg-primary';
        case 'filled':
            return 'bg-on-primary';
        case 'tonal':
            return 'bg-on-secondary-container';
        case 'outlined':
            return 'bg-primary';
        case 'text':
            return 'bg-primary';
        default:
            return 'bg-primary';
    }
});

const elevation = $computed(() => {
    switch (variant) {
        case 'elevated':
            return 'shadow-0.5';
        default:
            return '';
    }
});

const outline = $computed(() => {
    switch (variant) {
        case 'outlined':
            return ['border-outline', 'border'];
        default:
            return '';
    }
});

const style = [container, content, elevation, outline];

const iconSize = $computed(() => {
    switch (icon) {
        case false:
            return ['w-0'];
        case true:
            return ['w-4'];
        default:
            return ['w-0'];
    }
});

</script>

<template>
    <div class="container" :class="style" id="container">
        <state-layer :content-color="contentColor" rounded="rounded-full"></state-layer>
        <div class="ml-4 text-center" :class="iconSize">
            <slot name="icon"></slot>
        </div>
        <div class="ml-2 mr-6">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    @apply capitalize font-medium h-10 w-fit leading-10 rounded-full relative flex flex-row transition duration-150;
}
</style>