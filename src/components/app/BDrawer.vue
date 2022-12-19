<script setup lang="ts">
import { computed } from 'vue';
import FadeAnim from '../anims/FadeAnim.vue';

interface Props {
    direction: 'left' | 'right';
    initState: Boolean | null;
}

const { initState, direction } = defineProps<Props>();

let EXPAND_ON_DESKTOP = false;
let selfState = $ref(true);

const state = computed(() => {
    // todo: Add mobile condition.
    return (selfState && initState) || (!selfState && !initState);
});

const dire = computed(() => {
    switch (direction) {
        case 'left':
            return ['left-0', 'top-0', 'border-r-2'];
        case 'right':
            return ['right-0', 'top-0', 'border-l-2'];
        default:
            return ['left-0', 'top-0', 'border-r-2'];
    }
});

function clickOutside() {
    selfState = !selfState;
}
</script>

<template>
    <fade-anim :direction="direction">
        <div
            class="w-3/4 max-w-xs h-screen fixed flex flex-col bg-white z-20"
            :class="dire"
            v-show="state">
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
