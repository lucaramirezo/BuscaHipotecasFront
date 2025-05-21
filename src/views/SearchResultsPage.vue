<script setup>
import MortgageCard from '@/components/mortgage/MortgageCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { ref, computed } from 'vue';
// import { useMortgageStore } from '@/store/mortgageStore'; // Assuming your store is set up

// const mortgageStore = useMortgageStore();
// const searchResults = computed(() => mortgageStore.searchResults);

// Mock data until store is connected
const mockResults = ref([
  { id: '1', bankName: 'Banco Sol', mortgageName: 'Hipoteca Sol Joven', interestRate: '2.8%', monthlyPayment: '680€', bankLogoUrl: 'https://via.placeholder.com/80x40?text=Sol' },
  { id: '2', bankName: 'Banco Luna', mortgageName: 'Hipoteca Luna Fija', interestRate: '3.1%', monthlyPayment: '710€', bankLogoUrl: 'https://via.placeholder.com/80x40?text=Luna' },
  { id: '3', bankName: 'Caja Estrella', mortgageName: 'Hipoteca Estrella Variable', interestRate: ' Euribor + 0.99%', monthlyPayment: '750€ (aprox)', bankLogoUrl: 'https://via.placeholder.com/80x40?text=Estrella' },
]);
const searchResults = ref(mockResults); // Replace with store data later

// const comparisonItemsCount = computed(() => mortgageStore.comparisonList.length);
const comparisonItemsCount = ref(1); // Mock data, replace with store getter

const viewComparison = () => {
  // router.push('/comparar');
  console.log("Navigating to comparison page");
}
</script>

<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Resultados de tu Búsqueda</h2>

    <div v-if="searchResults && searchResults.length > 0">
      <p class="text-muted mb-3">Hemos encontrado {{ searchResults.length }} hipotecas que podrían interesarte.</p>
      <div class="row">
        <div class="col-lg-12" v-for="mortgage in searchResults" :key="mortgage.id">
          <!-- MortgageCard will take actual mortgage data as prop -->
          <MortgageCard :mortgage="mortgage" />
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center fs-4">No se encontraron hipotecas con los criterios seleccionados.</p>
      <div class="text-center">
        <BaseButton variant="primary" @click="$router.push('/buscar')">Ajustar búsqueda</BaseButton>
      </div>
    </div>

    <!-- Floating Action Button or Fixed Header for Comparison -->
    <div v-if="comparisonItemsCount > 0" class="comparison-fab-container">
      <BaseButton variant="success" @click="viewComparison" class="shadow-lg">
        Ver Comparación ({{ comparisonItemsCount }})
        <i class="bi bi-arrow-right-circle ms-2"></i> <!-- Requires Bootstrap Icons -->
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.comparison-fab-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
/* You might need to install and import Bootstrap Icons for the button icon */
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"); */
</style>
