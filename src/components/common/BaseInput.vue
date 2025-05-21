<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: [String, Number], // Used for v-model
  label: String,
  type: {
    type: String,
    default: 'text', // e.g., text, number, email, password
  },
  placeholder: String,
  required: Boolean,
  id: String, // Allow passing an explicit ID
  // Add other props like 'disabled', 'readonly', 'errorMessage', etc.
});

const emit = defineEmits(['update:modelValue']);

const inputId = computed(() => props.id || `input-${props.label?.replace(/\s+/g, '-').toLowerCase() || Math.random().toString(36).substring(7)}`);

const updateValue = (event) => {
  let value = event.target.value;
  if (props.type === 'number') {
    value = event.target.value === '' ? null : Number(value);
  }
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="mb-3">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :id="inputId"
      class="form-control"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :required="required"
    />
    <!-- Add error message display here if needed -->
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
