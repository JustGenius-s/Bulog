<script setup lang="ts">
import { ref } from "vue";
import { IconList } from "./components/index";

const primaryNavIconLists = ref([
    {
        icon: "i-ic-round-dashboard",
        name: "Dashboard",
    },
    {
        icon: "i-ic-round-calendar-today",
        name: "Calendar",
    },
    {
        icon: "i-ic-round-notifications",
        name: "Notifications",
    },
    {
        icon: "i-ic-round-group",
        name: "Group",
    },
    {
        icon: "i-ic-round-analytics",
        name: "Analytics",
    },
    {
        icon: "i-ic-round-bookmark",
        name: "Bookmark",
    },
    {
        icon: "i-ic-round-settings",
        name: "Settings",
    },
]);

const secondaryNavIconLists = ref([
    {
        icon: "i-ic-round-account-circle",
        name: "Account",
    },
    {
        icon: "i-ic-round-logout",
        name: "Logout",
    },
]);
</script>

<template>
    <aside class="fixed w-70 bg-#151a2d m-4 rounded-2xl">
        <header class="flex items-center justify-between px-6 py-5">
            <a href="#" class="w-10 h-10 block text-2xl text-white"> Bulog </a>
            <button class="i-ic-round-chevron-left text-2xl bg-white"></button>
        </header>
        <nav class="py-0 px-3.75 transition-all">
            <!-- Primary nav -->
            <IconList :list="primaryNavIconLists" />
            <!-- Secondary nav -->
            <IconList
                :list="secondaryNavIconLists"
                class="absolute left-0 right-0 px-3.75 py-0 bottom-7.5 flex-1" />
        </nav>
    </aside>
</template>

<style scoped>
aside {
    height: calc(100vh - 8rem);
}
</style>
