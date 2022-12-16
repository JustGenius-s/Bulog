<script setup lang="ts">
import { computed } from 'vue';
import FadeAnim from '../anims/FadeAnim.vue';

interface Props {
    initState: Boolean | null;
}

const { initState } = defineProps<Props>();

let EXPAN_ON_DESKTOP = false;
let selfState = $ref(true);

const state = computed(() => {
    // todo: Add mobile condition.
    return (selfState && initState) || (!selfState && !initState);
});

function clickOutside() {
    selfState = !selfState;
}
</script>

<template>
    <fade-anim>
        <div
            class="w-3/4 max-w-sm h-screen fixed flex flex-col bg-white border-r-2 z-20"
            v-show="state"
        >
            <slot></slot>
        </div>
    </fade-anim>
    <teleport to="body">
        <div
            class="w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-10 z-10 md:invisible"
            v-show="state"
            @click="clickOutside"
        ></div>
    </teleport>
</template>
