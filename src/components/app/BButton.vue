<script setup lang="ts">
import StateLayer from './StateLayer.vue';

interface Props {
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    icon?: boolean;
    disabled?: boolean;
}

const { variant, icon, disabled } = defineProps<Props>();

const component = $computed(() => {
    if (disabled) return ['cursor-not-allowed', 'pointer-events-none'];
});

const container = $computed(() => {
    if (disabled) return ['bg-on-surface', 'opacity-12'];
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
    if (disabled) return ['text-on-surface', 'opacity-38'];
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

const styleOfComponent = [component, elevation, outline];
const styleOfContainer = [container];
const styleOfContent = [content];

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
    <div class="component" :class="styleOfComponent">
        <state-layer v-if="!disabled" :content-color="contentColor"></state-layer>
        <div class="content">
            <div class="ml-4 text-center" :class="iconSize">
                <slot name="icon"></slot>
            </div>
            <div class="ml-2 mr-6" :class="styleOfContent">
                <slot></slot>
            </div>
        </div>
        <div class="container z-n-1" :class="styleOfContainer"></div>
    </div>
</template>

<style scoped>
.component {
    @apply relative h-10 w-fit rounded-full flex flex-row overflow-hidden transition duration-150;
}

.container {
    @apply absolute w-full h-full top-0 left-0;
}

.content {
    @apply capitalize font-medium leading-10 flex flex-row;
}
</style>