<script setup lang="ts"></script>

<template>
    <transition name="fade">
        <slot></slot>
    </transition>
</template>

<style>
    .fade-enter-active {
        animation: slideInLeft;
        animation-duration: .5s;
    }
    .fade-leave-active {
        animation: slideOutLeft;
        animation-duration: .5s;
    }
</style>