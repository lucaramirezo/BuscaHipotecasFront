<script setup>
import SavedMortgageCard from '@/components/mortgage/SavedMortgageCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';
// import { useMortgageStore } from '@/store/mortgageStore'; // Assuming your store is set up
// import { computed, onMounted } from 'vue';

// const mortgageStore = useMortgageStore();
// const savedMortgages = computed(() => mortgageStore.savedMortgages);
// const savedComparisons = computed(() => mortgageStore.savedComparisons);

// onMounted(() => {
//   mortgageStore.loadSavedMortgagesFromAPI();
//   mortgageStore.loadSavedComparisonsFromAPI();
// });

// Mock data until store is connected
const mockSavedMortgages = ref([
  { id: 'sm1', bankName: 'Banco Sol', mortgageName: 'Hipoteca Sol Joven', interestRate: '2.8%', savedAt: '2025-05-10' },
  { id: 'sm2', bankName: 'Caja Estrella', mortgageName: 'Hipoteca Estrella Variable', interestRate: 'Euribor + 0.99%', savedAt: '2025-05-11' },
]);
const savedMortgages = ref(mockSavedMortgages);

const mockSavedComparisons = ref([
  { id: 'sc1', name: 'Comparación Casa Playa', date: '2025-05-09', mortgageCount: 2 },
  { id: 'sc2', name: 'Opciones Fijas Interesantes', date: '2025-05-12', mortgageCount: 3 },
]);
const savedComparisons = ref(mockSavedComparisons);

const viewComparisonDetails = (comparisonId) => {
  console.log('Viewing details for saved comparison:', comparisonId);
  // Navigate to a detailed view or load data into ComparisonPage
};

const deleteSavedComparison = (comparisonId) => {
  console.log('Deleting saved comparison:', comparisonId);
  // mortgageStore.removeSavedComparison(comparisonId);
  savedComparisons.value = savedComparisons.value.filter(c => c.id !== comparisonId); // Mock removal
};

</script>

<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Mis Hipotecas y Comparaciones Guardadas</h2>

    <!-- Saved Mortgages Section -->
    <section class="mb-5">
      <h3>Hipotecas Guardadas Individualmente</h3>
      <div v-if="savedMortgages && savedMortgages.length > 0" class="row">
        <div class="col-md-6 col-lg-4 mb-3" v-for="mortgage in savedMortgages" :key="mortgage.id">
          <SavedMortgageCard :savedMortgage="mortgage" />
        </div>
      </div>
      <div v-else>
        <p>No tienes ninguna hipoteca guardada individualmente.</p>
        <p>Puedes guardar hipotecas desde la <router-link to="/resultados">página de resultados</router-link>.</p>
      </div>
    </section>

    <hr class="my-5">

    <!-- Saved Comparisons Section -->
    <section>
      <h3>Comparaciones Guardadas</h3>
      <div v-if="savedComparisons && savedComparisons.length > 0">
        <ul class="list-group">
          <li v-for="comparison in savedComparisons" :key="comparison.id" class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 class="mb-1">{{ comparison.name }}</h5>
              <small class="text-muted">Guardada el {{ comparison.date }} - {{ comparison.mortgageCount }} hipotecas</small>
            </div>
            <div>
              <BaseButton variant="outline-primary" size="sm" @click="viewComparisonDetails(comparison.id)" class="me-2">Ver</BaseButton>
              <BaseButton variant="outline-danger" size="sm" @click="deleteSavedComparison(comparison.id)">Eliminar</BaseButton>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No tienes ninguna comparación guardada.</p>
        <p>Puedes guardar comparaciones desde la <router-link to="/comparar">página de comparación</router-link>.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
.list-group-item h5 {
  font-weight: 500;
}
</style>
