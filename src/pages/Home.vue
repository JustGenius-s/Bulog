<script setup lang="ts">
/**
 * This is the Home page.
 */
import { ref } from "vue";

const lists = ref([
    { id: 1, name: "My Posts", path: "/post" },
    { id: 2, name: "Algorithms", path: "/algorithms" },
    { id: 2, name: "Garden", path: "/garden" },
]);
</script>

<template>
    <div id="home">
        <h1 class="text-20 tracking-1 animate__animated animate__fadeInDown">
            Bulog
            <router-link to="/"></router-link>
        </h1>
        <ul class="list-none m-0 p-0">
            <li
                class="
                  text-16 mt-6 
                  animate__animated animate__fadeInLeft animate__delay-1s
                  hover:text-18 transition-all transition-duration-300"
                v-for="list in lists"
                :key="list.id">
                <router-link :to="list.path">{{ list.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#home {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
