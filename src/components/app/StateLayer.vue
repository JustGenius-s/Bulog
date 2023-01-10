<script setup lang='ts'>
interface Props {
    contentColor: string;
}

const { contentColor } = defineProps<Props>();

const style = [contentColor]

</script>

<template>
    <div class="state" :class="style"></div>
</template>

<style scoped>
.state {
    @apply w-full h-full opacity-0 absolute top-0 left-0 hover:opacity-8 focus:opacity-12 active:opacity-12;
}
</style>