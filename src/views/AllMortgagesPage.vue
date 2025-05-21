<script setup>
import { ref, onMounted } from 'vue';
import MortgageCard from '@/components/mortgage/MortgageCard.vue';
// import { useMortgageStore } from '@/store/mortgageStore'; // To be used later
// import { storeToRefs } from 'pinia'; // To be used later

// const mortgageStore = useMortgageStore(); // To be used later
// const { mortgages, isLoading, error } = storeToRefs(mortgageStore); // To be used later

// Placeholder mock data until API/store integration
const mockMortgages = ref([
  {
    id: 'mock_h1',
    bankName: 'Banco Mock A',
    bankLogoUrl: 'https://via.placeholder.com/100x40?text=Mock+A',
    mortgageName: 'Hipoteca Fija Ejemplo 1',
    interestRate: '2.85%',
    tae: '3.10%',
    monthlyPayment: 650,
    openingFee: '0%',
    cancellationFee: '0.5%',
    requiredProducts: ['payroll', 'home_insurance'],
  },
  {
    id: 'mock_h2',
    bankName: 'Banco Mock B',
    bankLogoUrl: 'https://via.placeholder.com/100x40?text=Mock+B',
    mortgageName: 'Hipoteca Variable Joven',
    interestRate: 'E+0.99%',
    tae: 'Variable',
    monthlyPayment: 580,
    openingFee: '1%',
    cancellationFee: '0.25%',
    requiredProducts: ['life_insurance'],
  },
  {
    id: 'mock_h3',
    bankName: 'Caja Mock Rural',
    bankLogoUrl: 'https://via.placeholder.com/100x40?text=Mock+C',
    mortgageName: 'Hipoteca Mixta Tranquilidad',
    interestRate: 'Fijo 5 años: 2.5%, Resto: E+1.2%',
    tae: '3.00% (estimado)',
    monthlyPayment: 710,
    openingFee: '0.25%',
    cancellationFee: '0%',
    requiredProducts: ['payroll'],
  }
]);

const mortgagesToDisplay = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  // Later, this will be: await mortgageStore.fetchAllMortgages();
  // For now, use mock data with a slight delay
  setTimeout(() => {
    mortgagesToDisplay.value = mockMortgages.value;
    isLoading.value = false;
  }, 500);
});

</script>

<template>
  <div class="container mt-4 mb-5">
    <h1 class="mb-4 text-center">Todas las Hipotecas Disponibles</h1>

    <div v-if="isLoading" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2">Cargando hipotecas...</p>
    </div>

    <!-- <div v-if="error" class="alert alert-danger">
      Error al cargar las hipotecas: {{ error.message || 'Error desconocido' }}
    </div> -->

    <div v-if="!isLoading && mortgagesToDisplay.length > 0" class="row">
      <div
        v-for="mortgage in mortgagesToDisplay"
        :key="mortgage.id"
        class="col-md-6 col-lg-4 mb-4"
      >
        <MortgageCard :mortgage="mortgage" />
      </div>
    </div>

    <div v-if="!isLoading && mortgagesToDisplay.length === 0" class="text-center">
      <p class="fs-5 text-muted">No hay hipotecas disponibles en este momento.</p>
      <!-- Optionally, add a button to refresh or try again -->
    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles for this page */
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
