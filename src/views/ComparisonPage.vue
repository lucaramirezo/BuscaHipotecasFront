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
  { 
    id: '1', 
    bankName: 'Banco Santander', 
    mortgageName: 'Hipoteca Fija Santander', 
    interestRate: '3.05% TIN', 
    apr: '3.55% TAE', 
    termYears: 25, 
    maxAmount: 200000,
    monthlyPayment: '850€', 
    openingFee: '0%', 
    otherFees: 'Seguro de vida y hogar requeridos',
    bankLogoUrl: '/banks/Banco_Santander_Logotipo.svg.png' 
  },
  { 
    id: '2', 
    bankName: 'BBVA', 
    mortgageName: 'Hipoteca Fija BBVA', 
    interestRate: '2.90% TIN', 
    apr: '3.40% TAE',
    termYears: 30,
    maxAmount: 250000,
    monthlyPayment: '780€', 
    openingFee: '0.25%', 
    otherFees: 'Seguro de hogar requerido, nómina domiciliada',
    bankLogoUrl: '/banks/BBVA_2019.svg.png' 
  },
  { 
    id: '3', 
    bankName: 'CaixaBank', 
    mortgageName: 'CasaFácil Fijo', 
    interestRate: '3.15% TIN',
    apr: '3.65% TAE',
    termYears: 20,
    maxAmount: 180000,
    monthlyPayment: '950€', 
    openingFee: '150€', 
    otherFees: 'Seguro de vida, seguro de hogar, domiciliación de nómina',
    bankLogoUrl: '/banks/Logo_CaixaBank.svg.png' 
  },
   { 
    id: '4', 
    bankName: 'ING', 
    mortgageName: 'Hipoteca Naranja Fija', 
    interestRate: '2.99% TIN',
    apr: '3.30% TAE',
    termYears: 25,
    maxAmount: 300000,
    monthlyPayment: '820€', 
    openingFee: '0€', 
    otherFees: 'Seguro de hogar y vida opcionales con bonificación',
    bankLogoUrl: '/banks/ING_Group_N.V._Logo.svg.png' 
  }
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
