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
    id: 'santander_fija_premium',
    bankName: 'Banco Santander',
    bankLogoUrl: '/banks/Banco_Santander_Logotipo.svg.png',
    mortgageName: 'Hipoteca Fija Premium',
    interestRate: '2.95% TIN',
    tae: '3.30% TAE',
    monthlyPayment: 700,
    openingFee: '0%',
    cancellationFee: '0.25% (primeros 5 años)',
    requiredProducts: ['payroll', 'home_insurance', 'life_insurance'],
    maxFinancingPercentage: 80,
    maxTermYears: 30,
    type: 'fija',
    description: 'Condiciones especiales para clientes con alta vinculación.'
  },
  {
    id: 'bbva_variable_joven',
    bankName: 'BBVA',
    bankLogoUrl: '/banks/BBVA_2019.svg.png',
    mortgageName: 'Hipoteca Variable Joven',
    interestRate: 'E+0.89%',
    tae: 'Variable (TAE actual 3.15%)',
    monthlyPayment: 620,
    openingFee: '150€',
    cancellationFee: '0.15%',
    requiredProducts: ['payroll', 'credit_card'],
    maxFinancingPercentage: 80,
    maxTermYears: 30,
    type: 'variable',
    description: 'Ideal para jóvenes que buscan flexibilidad.'
  },
  {
    id: 'caixabank_casafacil_mixta',
    bankName: 'CaixaBank',
    bankLogoUrl: '/banks/Logo_CaixaBank.svg.png',
    mortgageName: 'CasaFácil Mixta',
    interestRate: 'Fijo 10 años: 2.75%, Resto: E+1.10%',
    tae: '3.05% TAE (calculada para toda la vida del préstamo)',
    monthlyPayment: 680,
    openingFee: '0.10%',
    cancellationFee: '0%',
    requiredProducts: ['payroll', 'home_insurance', 'pension_plan'],
    maxFinancingPercentage: 75,
    maxTermYears: 25,
    type: 'mixta',
    description: 'Seguridad los primeros años y potencial de ahorro después.'
  },
  {
    id: 'ing_naranja_fija',
    bankName: 'ING',
    bankLogoUrl: '/banks/ING_Group_N.V._Logo.svg.png',
    mortgageName: 'Hipoteca Naranja Fija',
    interestRate: '2.80% TIN',
    tae: '3.15% TAE',
    monthlyPayment: 690,
    openingFee: '0€',
    cancellationFee: '0% si se amortiza con productos ING',
    requiredProducts: ['payroll', 'home_insurance'],
    maxFinancingPercentage: 80,
    maxTermYears: 25,
    type: 'fija',
    description: 'Sin comisiones de apertura y condiciones claras.'
  },
  {
    id: 'bankinter_fija_sinmas',
    bankName: 'Bankinter',
    bankLogoUrl: '/banks/Bankinter.svg.png',
    mortgageName: 'Hipoteca Fija Sin Más',
    interestRate: '3.00% TIN',
    tae: '3.40% TAE',
    monthlyPayment: 720,
    openingFee: '500€',
    cancellationFee: '0.5% (primeros 3 años)',
    requiredProducts: ['payroll', 'life_insurance', 'investment_fund'],
    maxFinancingPercentage: 70,
    maxTermYears: 30,
    type: 'fija',
    description: 'Para quienes buscan estabilidad a largo plazo.'
  },
  {
    id: 'sabadell_variable_expansion',
    bankName: 'Banco Sabadell',
    bankLogoUrl: '/banks/BSabadell_Logo.svg.png',
    mortgageName: 'Hipoteca Variable Expansión',
    interestRate: 'E+0.95%',
    tae: 'Variable (TAE actual 3.25%)',
    monthlyPayment: 640,
    openingFee: '0.20%',
    cancellationFee: '0.20%',
    requiredProducts: ['payroll', 'home_insurance', 'credit_card'],
    maxFinancingPercentage: 80,
    maxTermYears: 28,
    type: 'variable',
    description: 'Condiciones ventajosas con vinculación.'
  },
  {
    id: 'santander_variable_plus',
    bankName: 'Banco Santander',
    bankLogoUrl: '/banks/Banco_Santander_Logotipo.svg.png',
    mortgageName: 'Hipoteca Variable Plus',
    interestRate: 'E+0.79% (bonificado)',
    tae: 'Variable (TAE actual 3.00%)',
    monthlyPayment: 600,
    openingFee: '0€',
    cancellationFee: '0.15% (primeros 5 años)',
    requiredProducts: ['payroll', 'home_insurance', 'life_insurance', 'pension_plan'],
    maxFinancingPercentage: 80,
    maxTermYears: 30,
    type: 'variable',
    description: 'TAE muy competitiva con máxima vinculación.'
  },
  {
    id: 'bbva_fija_bonificada',
    bankName: 'BBVA',
    bankLogoUrl: '/banks/BBVA_2019.svg.png',
    mortgageName: 'Hipoteca Fija Bonificada',
    interestRate: '2.85% TIN (con bonificaciones)',
    tae: '3.20% TAE',
    monthlyPayment: 695,
    openingFee: '0%',
    cancellationFee: '0%',
    requiredProducts: ['payroll', 'home_insurance', 'life_insurance', 'alarm_system'],
    maxFinancingPercentage: 75,
    maxTermYears: 25,
    type: 'fija',
    description: 'Consigue un tipo fijo atractivo cumpliendo condiciones.'
  },
  {
    id: 'caixabank_joven_fija',
    bankName: 'CaixaBank',
    bankLogoUrl: '/banks/Logo_CaixaBank.svg.png',
    mortgageName: 'Hipoteca Joven Fija',
    interestRate: '3.10% TIN',
    tae: '3.50% TAE',
    monthlyPayment: 730,
    openingFee: '0€ para menores de 35',
    cancellationFee: '0.25%',
    requiredProducts: ['payroll', 'app_usage'],
    maxFinancingPercentage: 85,
    maxTermYears: 30,
    type: 'fija',
    description: 'Condiciones especiales para jóvenes que compran su primera vivienda.'
  },
  {
    id: 'ing_naranja_mixta',
    bankName: 'ING',
    bankLogoUrl: '/banks/ING_Group_N.V._Logo.svg.png',
    mortgageName: 'Hipoteca Naranja Mixta',
    interestRate: 'Fijo 5 años: 2.60%, Resto: E+1.05%',
    tae: '2.95% TAE (calculada para toda la vida del préstamo)',
    monthlyPayment: 670,
    openingFee: '0€',
    cancellationFee: '0%',
    requiredProducts: ['payroll', 'home_insurance'],
    maxFinancingPercentage: 80,
    maxTermYears: 25,
    type: 'mixta',
    description: 'Combina la seguridad inicial de un tipo fijo con la flexibilidad del variable.'
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
