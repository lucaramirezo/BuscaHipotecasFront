<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // e.g., primary, secondary, success, danger, warning, info, light, dark
  },
  size: {
    type: String,
    default: null, // e.g., sm, lg
  },
  type: {
    type: String,
    default: 'button', // e.g., button, submit, reset
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // Add other props as needed
});

const buttonClass = computed(() => {
  let classes = `btn btn-${props.variant}`;
  if (props.size) {
    classes += ` btn-${props.size}`;
  }
  return classes;
});
</script>

<template>
  <button :type="type" :class="buttonClass" :disabled="disabled">
    <slot></slot> <!-- Allows text or other content to be passed into the button -->
  </button>
</template>

<style scoped>
/* Add any component-specific styles here if Bootstrap defaults aren't enough */
</style>
