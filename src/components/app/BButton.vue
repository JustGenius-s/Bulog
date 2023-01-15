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
    if (disabled) return ['bg-on-surface', 'disabled-state-container'];
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
    if (disabled) return ['text-on-surface', 'disabled-state-content'];
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
    if (disabled) return 'elevation-0';
    switch (variant) {
        case 'elevated':
            return ['elevation-1', 'hover:elevation-2', 'active:elevation-1'];
        default:
            return 'elevation-0';
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
const styleOfIcon = $computed(() => {
    switch (icon) {
        case false:
            return ['w-0', content];
        case true:
            return ['w-4', content];
        default:
            return ['w-0', content];
    }
});

</script>

<template>
    <button class="component" :class="styleOfComponent">
        <state-layer v-if="!disabled" :content-color="contentColor"></state-layer>
        <i class="icon" :class="styleOfIcon">
            <slot name="icon"></slot>
        </i>
        <label class="content" :class="styleOfContent">
            <slot></slot>
        </label>
        <div class="container z-n-1" :class="styleOfContainer"></div>
    </button>
</template>

<style scoped>
.component {
    @apply relative h-10 w-fit rounded-full flex flex-row overflow-hidden transition duration-150;
}

.container {
    @apply absolute w-full h-full top-0 left-0;
}

.content {
    @apply capitalize ml-2 mr-6 font-medium leading-10;
}
.icon {
    @apply ml-4 text-center font-medium leading-10;
}
</style>