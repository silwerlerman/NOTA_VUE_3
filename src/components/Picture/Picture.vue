<template>
  <img :src="src" :alt="alt" :height="height" :width="width" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  src?: string;
  alt?: string;
  height?: string;
  width?: string;
  url?: string;
};

const props = defineProps<Props>();

const src = computed(() => {
  return props.url
    ? import.meta.env.VITE_VUE_APP_BASE_PATH + props.src
    : props.src;
});
</script>

<style lang="scss" scoped></style>
