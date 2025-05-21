import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  // State for basic and advanced filter values
  const initialBasicFilters = {
    loanAmount: null,
    propertyValue: null,
    loanTerm: '30 años',
    mortgageType: 'Tipo fijo',
    netMonthlyIncome: null,
    isFirstHome: null,
  };

  const initialAdvancedFilters = {
    financialEntities: 'Todas las entidades',
    maxTIN: null,
    maxTAE: null,
    maxMonthlyPayment: null,
    maxOpeningFee: null,
    maxCancellationFee: null,
    requiredProducts: {
      payroll: false,
      lifeInsurance: false,
      homeInsurance: false,
      creditCard: false,
      pensionPlan: false,
    },
  };

  const basicFilters = ref({ ...initialBasicFilters });
  const advancedFilters = ref({ ...initialAdvancedFilters });

  // Action to update filter values
  function updateBasicFilters(newFilters) {
    basicFilters.value = { ...basicFilters.value, ...newFilters };
    console.log('Basic filters updated:', basicFilters.value);
  }

  function updateAdvancedFilters(newFilters) {
    advancedFilters.value = { ...advancedFilters.value, ...newFilters };
    console.log('Advanced filters updated:', advancedFilters.value);
  }

  function clearBasicFilters() {
    basicFilters.value = { ...initialBasicFilters };
    console.log('Basic filters cleared');
  }

  function clearAdvancedFilters() {
    advancedFilters.value = { ...initialAdvancedFilters };
    console.log('Advanced filters cleared');
  }

  function clearAllFilters() {
    clearBasicFilters();
    clearAdvancedFilters();
    console.log('All filters cleared');
  }
  
  // Placeholder for saving search draft (could call an API service)
  async function saveSearchDraft() {
    const currentFilters = {
      basic: { ...basicFilters.value },
      advanced: { ...advancedFilters.value },
    };
    console.log('Saving search draft (simulated):', currentFilters);
    // try {
    //   await api.saveSearchDraft(currentFilters);
    //   console.log('Search draft saved successfully via API (simulated).');
    // } catch (error) {
    //   console.error('Failed to save search draft via API (simulated):', error);
    // }
    // Could also save to localStorage
    localStorage.setItem('searchDraft', JSON.stringify(currentFilters));
    console.log('Search draft saved to localStorage.');
  }

  function loadSearchDraft() {
    const draft = localStorage.getItem('searchDraft');
    if (draft) {
      const parsedDraft = JSON.parse(draft);
      if(parsedDraft.basic) basicFilters.value = { ...initialBasicFilters, ...parsedDraft.basic };
      if(parsedDraft.advanced) advancedFilters.value = { ...initialAdvancedFilters, ...parsedDraft.advanced };
      console.log('Search draft loaded from localStorage.');
    }
  }


  return {
    basicFilters,
    advancedFilters,
    updateBasicFilters,
    updateAdvancedFilters,
    clearBasicFilters,
    clearAdvancedFilters,
    clearAllFilters,
    saveSearchDraft,
    loadSearchDraft,
  };
});
