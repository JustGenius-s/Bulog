<script setup lang='ts'>
interface Props {
    contentColor: string,
    rounded?: string,
}

const { contentColor, rounded } = defineProps<Props>();

const style = [contentColor, rounded]

</script>

<template>
    <div class="state" :class="style">
        <slot></slot>
    </div>
</template>

<style scoped>
.state {
    @apply w-full h-full opacity-0 absolute hover:opacity-8 focus:opacity-12 active:opacity-12;
}
</style>