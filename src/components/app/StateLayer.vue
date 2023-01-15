<script setup lang='ts'>
interface Props {
    contentColor: string;
}

const { contentColor } = defineProps<Props>();

const style = [contentColor]

</script>

<template>
    <div class="w-full h-full opacity-0 absolute top-0 left-0 hover:hover-state-layer focus:focus-state-layer active:pressed-state-layer" :class="style"></div>
</template>