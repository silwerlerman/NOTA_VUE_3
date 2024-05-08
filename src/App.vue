<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '@store/auth';
import EmptyLayout from './layouts/EmptyLayout.vue';

const route = useRoute();

const layout = computed(() => {
  return (route.meta.layout || 'empty') + '-layout';
});

useAuth();
</script>

<template>
  <div id="app">
    <EmptyLayout v-if="layout === 'empty-layout'" />
  </div>
</template>

<style lang="scss">
@import '/src/assets/scss/common';
</style>
