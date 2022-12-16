<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    direction: 'right' | 'left' | 'bottom' | 'top';
}

const { direction } = defineProps<Props>();

const inAnim = computed(() => {
    switch (direction) {
        case 'left':
            return 'slideInLeft';
        case 'right':
            return 'slideInRight';
        case 'top':
            return 'slideInDown';
        case 'bottom':
            return 'slideInUp';
        default:
            return 'slideInLeft';
    }
});

const outAnim = computed(() => {
    switch (direction) {
        case 'left':
            return 'slideOutLeft';
        case 'right':
            return 'slideOutRight';
        case 'top':
            return 'slideOutup';
        case 'bottom':
            return 'slideOutDown';
        default:
            return 'slideOutLeft';
    }
});
</script>

<template>
    <transition name="fade">
        <slot></slot>
    </transition>
</template>

<style>
.fade-enter-active {
    animation: v-bind(inAnim);
    animation-duration: 0.3s;
    animation-timing-function: ease-in;
}
.fade-leave-active {
    animation: v-bind(outAnim);
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
}
</style>
