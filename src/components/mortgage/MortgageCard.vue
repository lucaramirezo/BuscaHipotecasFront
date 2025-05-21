<script setup>
import BaseButton from '@/components/common/BaseButton.vue'; // Changed to @ alias

const props = defineProps({
  mortgage: {
    type: Object,
    required: true,
    default: () => ({
      bankName: 'N/A',
      bankLogoUrl: 'https://via.placeholder.com/80x40?text=N/A',
      mortgageName: 'Hipoteca Desconocida',
      interestRate: 'N/A',
      tae: 'N/A',
      monthlyPayment: 'N/A',
      // Ensure all fields used in the template are covered by a default or are optional
      openingFee: 'N/A',
      cancellationFee: 'N/A',
      requiredProducts: [],
    })
  }
});

// Helper for product display, can be expanded
const getProductLabel = (productKey) => {
  const labels = {
    payroll: 'Nómina',
    home_insurance: 'Seguro de Hogar',
    life_insurance: 'Seguro de Vida',
  };
  return labels[productKey] || productKey;
};
</script>

<template>
  <div class="card mb-3 shadow-sm h-100">
    <div class="row g-0">
      <div class="col-md-3 d-flex align-items-center justify-content-center p-3">
        <img :src="props.mortgage.bankLogoUrl || 'https://via.placeholder.com/100x40?text=Bank'" class="img-fluid rounded-start" :alt="props.mortgage.bankName + ' Logo'" style="max-height: 50px; object-fit: contain;">
      </div>
      <div class="col-md-9">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ props.mortgage.mortgageName }}</h5>
          <p class="card-text mb-1">
            <strong>Entidad:</strong> {{ props.mortgage.bankName }}
          </p>
          <p class="card-text mb-1">
            <strong>Interés:</strong> {{ props.mortgage.interestRate }} 
            <span v-if="props.mortgage.tae && props.mortgage.tae.toLowerCase() !== 'variable'">(TAE: {{ props.mortgage.tae }})</span>
            <span v-else-if="props.mortgage.tae">(TAE: {{ props.mortgage.tae }})</span>
          </p>
          <p class="card-text mb-2">
            <strong>Cuota mensual:</strong> 
            {{ typeof props.mortgage.monthlyPayment === 'number' ? props.mortgage.monthlyPayment.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }) : props.mortgage.monthlyPayment }}
          </p>
          <ul v-if="props.mortgage.requiredProducts && props.mortgage.requiredProducts.length" class="list-unstyled list-inline mb-2" style="font-size: 0.8rem;">
            <li class="list-inline-item"><strong>Vinculaciones:</strong></li>
            <li v-for="product in props.mortgage.requiredProducts" :key="product" class="list-inline-item">
              <span class="badge bg-light text-dark border">{{ getProductLabel(product) }}</span>
            </li>
          </ul>
          <div class="mt-auto pt-2">
            <BaseButton variant="outline-primary" size="sm" class="me-1">Más info</BaseButton>
            <BaseButton variant="primary" size="sm" class="me-1">Comparar</BaseButton>
            <BaseButton variant="outline-danger" size="sm">
              <i class="bi bi-heart"></i>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  font-weight: bold;
  font-size: 1.05rem; /* Slightly reduced */
  color: #333;
}
.card-text {
  font-size: 0.85rem; /* Slightly reduced */
  color: #555;
}
.card {
  transition: box-shadow 0.2s ease-in-out;
}
.card:hover {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
/* Ensure Bootstrap Icons are available globally or import them here */
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"); */
</style>
