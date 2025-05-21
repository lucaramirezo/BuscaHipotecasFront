<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue'; // Import BaseInput
import { ref, onMounted, watch } from 'vue';
import { useSearchStore } from '@/store/searchStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchStore = useSearchStore();

// Use storeToRefs to keep reactivity and allow direct v-model binding
const { basicFilters, advancedFilters } = storeToRefs(searchStore);

const currentStep = ref(1); // 1: Basic, 2: Advanced

onMounted(() => {
  searchStore.loadSearchDraft(); // Load draft when component mounts
});

// Watch for changes in store filters if needed for local component logic,
// but direct binding with storeToRefs is often sufficient.

const goToNextStep = () => {
  // Basic form validation can be added here if needed before proceeding
  if (currentStep.value === 1) {
    // Basic filters are already updated in the store via v-model
    // searchStore.updateBasicFilters(basicFilters.value); // Not strictly necessary if using storeToRefs for v-model
    currentStep.value = 2;
  }
};

const goToPreviousStep = () => {
  if (currentStep.value === 2) {
    currentStep.value = 1;
  }
};

const handleSaveDraft = () => {
  searchStore.saveSearchDraft();
  // Optionally, provide user feedback (e.g., a toast notification)
  alert('Borrador guardado!');
};

const handleClearAdvancedFilters = () => {
  searchStore.clearAdvancedFilters();
};

const handleSearch = () => {
  // Advanced filters are already updated in the store via v-model
  // searchStore.updateAdvancedFilters(advancedFilters.value); // Not strictly necessary
  console.log('Searching mortgages with filters:', { basic: basicFilters.value, advanced: advancedFilters.value });
  // Navigate to results page
  router.push('/resultados');
};

const loanTermOptions = ['15 años', '20 años', '25 años', '30 años', '35 años', '40 años'];
const mortgageTypeOptions = ['Tipo fijo', 'Tipo variable', 'Tipo mixto'];
const financialEntityOptions = ['Todas las entidades', 'Banco A', 'Banco B', 'Caja Rural C']; // Populate with actual bank names later

</script>

<template>
  <div class="container mt-4 mb-5">
    <h2 class="mb-4 text-center">Configura tu Búsqueda de Hipoteca</h2>

    <!-- Progress Bar / Stepper -->
    <div class="progress mb-4" style="height: 20px;">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: currentStep === 1 ? '50%' : '100%' }"
        :aria-valuenow="currentStep === 1 ? 50 : 100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ currentStep === 1 ? 'Paso 1: Datos Básicos' : 'Paso 2: Filtros Avanzados' }}
      </div>
    </div>

    <!-- Basic Filters Section -->
    <div v-if="currentStep === 1" class="card shadow-sm mb-4">
      <div class="card-header">
        <h3>Datos Básicos</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="goToNextStep">
          <div class="row g-3">
            <div class="col-md-6">
              <BaseInput
                label="Importe de la hipoteca (€)"
                type="number"
                id="loanAmount"
                v-model="basicFilters.loanAmount"
                placeholder="Ej: 150000"
                required
              />
            </div>
            <div class="col-md-6">
              <BaseInput
                label="Valor de la vivienda (€)"
                type="number"
                id="propertyValue"
                v-model="basicFilters.propertyValue"
                placeholder="Ej: 200000"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="loanTerm" class="form-label">Plazo de la hipoteca</label>
              <select class="form-select" id="loanTerm" v-model="basicFilters.loanTerm">
                <option v-for="term in loanTermOptions" :key="term" :value="term">{{ term }}</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="mortgageType" class="form-label">Tipo de hipoteca</label>
              <select class="form-select" id="mortgageType" v-model="basicFilters.mortgageType">
                 <option v-for="type in mortgageTypeOptions" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>
            <div class="col-md-6">
              <BaseInput
                label="Ingresos mensuales netos (€)"
                type="number"
                id="netMonthlyIncome"
                v-model="basicFilters.netMonthlyIncome"
                placeholder="Ej: 2500"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label d-block">¿Es tu primera vivienda?</label>
              <BaseButton
                type="button"
                :variant="basicFilters.isFirstHome === true ? 'primary' : 'outline-secondary'"
                @click="basicFilters.isFirstHome = true"
                class="me-2"
              >Sí</BaseButton>
              <BaseButton
                type="button"
                :variant="basicFilters.isFirstHome === false ? 'primary' : 'outline-secondary'"
                @click="basicFilters.isFirstHome = false"
              >No</BaseButton>
               <BaseButton
                type="button"
                variant="outline-secondary"
                @click="basicFilters.isFirstHome = null"
                class="ms-2"
                v-if="basicFilters.isFirstHome !== null"
              >Limpiar</BaseButton>
            </div>
          </div>
          <hr class="my-4">
          <div class="d-flex justify-content-between">
            <BaseButton type="button" variant="secondary" disabled>Atrás</BaseButton>
            <div>
              <BaseButton type="button" variant="outline-info" @click="handleSaveDraft" class="me-2">Guardar borrador</BaseButton>
              <BaseButton type="submit" variant="primary">Continuar</BaseButton>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Advanced Filters Section -->
    <div v-if="currentStep === 2" class="card shadow-sm">
      <div class="card-header">
        <h3>Filtros Avanzados (Opcional)</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSearch">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="financialEntities" class="form-label">Entidades financieras</label>
              <select class="form-select" id="financialEntities" v-model="advancedFilters.financialEntities">
                <option v-for="entity in financialEntityOptions" :key="entity" :value="entity">{{ entity }}</option>
              </select>
            </div>
             <div class="col-md-6">
              <BaseInput
                label="TIN máximo (%)"
                type="number"
                id="maxTIN"
                v-model="advancedFilters.maxTIN"
                placeholder="Ej: 3.5"
                step="0.01"
              />
            </div>
            <div class="col-md-6">
              <BaseInput
                label="TAE máximo (%)"
                type="number"
                id="maxTAE"
                v-model="advancedFilters.maxTAE"
                placeholder="Ej: 4.0"
                step="0.01"
              />
            </div>
            <div class="col-md-6">
              <BaseInput
                label="Cuota mensual máxima (€)"
                type="number"
                id="maxMonthlyPayment"
                v-model="advancedFilters.maxMonthlyPayment"
                placeholder="Ej: 750"
              />
            </div>
            <div class="col-md-6">
              <BaseInput
                label="Comisión de apertura máxima (%)"
                type="number"
                id="maxOpeningFee"
                v-model="advancedFilters.maxOpeningFee"
                placeholder="Ej: 1.0"
                step="0.01"
              />
            </div>
            <div class="col-md-6">
              <BaseInput
                label="Comisión de cancelación máxima (%)"
                type="number"
                id="maxCancellationFee"
                v-model="advancedFilters.maxCancellationFee"
                placeholder="Ej: 0.5"
                step="0.01"
              />
            </div>
          </div>

          <h4 class="mt-4 mb-3">Vinculaciones Requeridas</h4>
          <div class="row">
            <div class="col-md-4 col-sm-6" v-for="(value, key) in advancedFilters.requiredProducts" :key="key">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :id="`check-${key}`" v-model="advancedFilters.requiredProducts[key]">
                <label class="form-check-label" :for="`check-${key}`">
                  {{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}
                </label>
              </div>
            </div>
          </div>

          <hr class="my-4">
          <div class="d-flex justify-content-between">
            <BaseButton type="button" variant="secondary" @click="goToPreviousStep">Atrás</BaseButton>
            <div>
              <BaseButton type="button" variant="outline-warning" @click="handleClearAdvancedFilters" class="me-2">Limpiar filtros avanzados</BaseButton>
              <BaseButton type="submit" variant="success">Buscar Hipotecas</BaseButton>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- MortgageFilterForm component is planned for later integration -->
    <!-- <MortgageFilterForm class="mt-4 d-none" /> -->
  </div>
</template>

<style scoped>
.card {
  border: none;
}
.card-header {
  background-color: #e9ecef;
  border-bottom: 1px solid #dee2e6;
  font-weight: 500;
}
.progress-bar {
  transition: width 0.3s ease-in-out;
}
/* Add more specific styles if needed */
</style>
