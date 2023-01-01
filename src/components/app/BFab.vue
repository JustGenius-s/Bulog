<script setup lang="ts">
import { def } from '@vue/shared';

interface Props {
    variant?: 'small' | 'large';
}

const { variant } = defineProps<Props>();

const type = $computed(() => {
    switch (variant) {
        case 'small':
            return ['w-10', 'h-10', 'rounded-xl'];
        case 'large':
            return ['w-24', 'h-24', 'rounded-3.5xl'];
        default:
            return ['w-14', 'h-14', 'rounded-2xl'];
    }
});

const iconSize = $computed(() => {
    switch (variant) {
        case 'small':
            return ['w-6', 'h-6', 'leading-6'];
        case 'large':
            return ['w-9', 'h-9', 'leading-9'];
        default:
            return ['w-6', 'h-6', 'leading-6'];
    }
});
</script>

<template>
    <div class="shadow-0.5 flex items-center justify-center bg-orange-50" :class="type">
        <div class="text-center bg-gray-200" :class="iconSize">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
