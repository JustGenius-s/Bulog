<script setup lang="ts">
type Icon = {
    icon: string;
    name: string;
};

const props = defineProps<{
    list: Icon[];
}>();
</script>

<template>
    <ul class="flex gap-1 flex-col">
        <li
            class="flex text-white gap-4 py-3 px-3.75 rounded-2 items-center
            hover:bg-white hover:color-#151a2d transition transition-duration-300"
            v-for="icon in props.list">
            <span :class="icon.icon" class="inline-block text-2xl"></span>
            <span>{{ icon.name }}</span>
        </li>
    </ul>
</template>

<style scoped>
* {
    list-style: none;
    box-sizing: border-box;
}
</style>
