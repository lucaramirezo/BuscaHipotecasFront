<script setup>
import MortgageComparisonTable from '@/components/mortgage/MortgageComparisonTable.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { ref } from 'vue'; // Added import for ref
// import { useMortgageStore } from '@/store/mortgageStore'; // Assuming your store is set up
// import { computed } from 'vue';

// const mortgageStore = useMortgageStore();
// const mortgagesToCompare = computed(() => mortgageStore.comparisonList);

// Mock data until store is connected
const mockComparisonList = ref([
  { id: '1', bankName: 'Banco Sol', mortgageName: 'Hipoteca Sol Joven', interestRate: '2.8%', monthlyPayment: '680€', openingFee: '0%', bankLogoUrl: 'https://via.placeholder.com/80x40?text=Sol' },
  { id: '2', bankName: 'Banco Luna', mortgageName: 'Hipoteca Luna Fija', interestRate: '3.1%', monthlyPayment: '710€', openingFee: '0.5%', bankLogoUrl: 'https://via.placeholder.com/80x40?text=Luna' },
]);
const mortgagesToCompare = ref(mockComparisonList); // Replace with store data later

const handleSaveComparison = () => {
  const name = prompt("Introduce un nombre para esta comparación:");
  if (name) {
    console.log('Saving comparison as:', name, mortgagesToCompare.value);
    // mortgageStore.saveCurrentComparison(name);
  }
};

const handleExportPDF = () => {
  console.log('Exporting comparison to PDF (placeholder)...');
  // Placeholder for PDF export functionality
  alert('La funcionalidad de exportar a PDF se implementará próximamente.');
};
</script>

<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Comparador de Hipotecas</h2>
      <div>
        <BaseButton variant="outline-primary" @click="handleSaveComparison" class="me-2" :disabled="!mortgagesToCompare || mortgagesToCompare.length === 0">
          Guardar Comparación
        </BaseButton>
        <BaseButton variant="outline-secondary" @click="handleExportPDF" :disabled="!mortgagesToCompare || mortgagesToCompare.length === 0">
          Exportar como PDF
        </BaseButton>
      </div>
    </div>

    <div v-if="mortgagesToCompare && mortgagesToCompare.length > 0">
      <!-- MortgageComparisonTable will take actual comparison data as prop -->
      <MortgageComparisonTable :mortgagesToCompare="mortgagesToCompare" />
      <!-- Add chart visualization here later -->
      <!-- Add "custom ideal mortgage" summary here later -->
    </div>
    <div v-else class="text-center">
      <p class="fs-4">No hay hipotecas seleccionadas para comparar.</p>
      <p>Ve a la <router-link to="/resultados">página de resultados</router-link> para añadir hipotecas a la comparación.</p>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
