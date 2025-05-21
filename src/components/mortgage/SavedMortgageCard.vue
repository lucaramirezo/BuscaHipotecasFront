<script setup>
import BaseButton from '../common/BaseButton.vue';

// Props will be defined later, e.g., saved mortgage data
// defineProps({ savedMortgage: Object });
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Nombre Hipoteca Guardada (Ej: Hipoteca Fija Santander)</h5>
      <p class="card-text">
        <strong>Entidad:</strong> Banco Santander<br>
        <strong>Interés:</strong> 3.1% TIN (3.6% TAE)<br>
        <strong>Guardada el:</strong> 10/05/2025
      </p>
      <BaseButton variant="outline-primary" class="me-2">Ver Detalles</BaseButton>
      <BaseButton variant="danger">Quitar de guardados</BaseButton>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
.card-title {
  font-weight: bold;
}
</style>
