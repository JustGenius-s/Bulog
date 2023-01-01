<script setup lang="ts">
interface Props {
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    icon?: boolean;
}

const { variant, icon } = defineProps<Props>();

const type = $computed(() => {
    switch (variant) {
        case 'elevated':
            return ['rounded-full', 'bg-orange-50', 'shadow-0.5'];
        case 'filled':
            return ['rounded-full', 'bg-orange-200'];
        case 'tonal':
            return ['rounded-full', 'bg-orange-100'];
        case 'outlined':
            return ['rounded-full', 'border', 'border-black'];
        case 'text':
            return ['bg-transparent'];
        default:
            return ['rounded-full', 'bg-orange-50', 'shadow-0.5'];
    }
});

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
    <div
        class="capitalize font-medium h-10 w-fit leading-10 pr-6 hover:opacity-70 transition transition-150 flex flex-row"
        :class="type">
        <div class="ml-4 text-center" :class="iconSize">
            <slot name="icon"></slot>
        </div>
        <div class="ml-2">
            <slot></slot>
        </div>
    </div>
</template>