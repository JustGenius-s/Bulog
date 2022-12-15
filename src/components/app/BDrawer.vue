<script setup lang="ts">
import { computed, watchEffect } from 'vue';

interface Props {
    initState: Boolean | null;
}

const { initState } = defineProps<Props>();

let EXPAN_ON_DESKTOP = false;
let selfState = $ref(true);
let lastState = initState;

const state = computed(() => {
    // todo: Add mobile condition.
    return !(selfState || initState);
});

watchEffect(() => {
    
});

function clickOutside() {
    selfState = true;
}
</script>

<template>
    <transition>
        <div
            class="w-4/5 max-w-sm h-screen fixed bg-white border-r-2 z-20"
            v-show="state"
        ></div>
    </transition>
    <teleport to="body">
        <div
            class="w-screen h-screen fixed bg-gray-300 z-10 md:invisible"
            v-show="state"
            @click="clickOutside"
        ></div>
    </teleport>
</template>
