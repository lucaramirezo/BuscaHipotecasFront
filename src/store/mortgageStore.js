import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
// import * as api from '@/services/api'; // Your API service

const MAX_COMPARISON_ITEMS = 4; // Max 3-4 items for comparison

export const useMortgageStore = defineStore('mortgage', () => {
  // State
  const searchResults = ref([]); // Array to hold mortgage search results from API
  const comparisonList = ref([]); // Array to hold mortgages selected for comparison
  const savedMortgages = ref([]); // Array to hold mortgages the user has individually saved
  const savedComparisons = ref([]); // Array to hold saved comparison sets { name: string, mortgageIds: [], mortgages: [] }

  // --- Getters (Computed Properties) ---
  const comparisonListFull = computed(() => comparisonList.value.length >= MAX_COMPARISON_ITEMS);

  // --- Helper for localStorage ---
  const persistToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error saving to localStorage (${key}):`, e);
    }
  };

  const loadFromLocalStorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error(`Error loading from localStorage (${key}):`, e);
      return null;
    }
  };

  // Initialize from localStorage
  const initialComparisonList = loadFromLocalStorage('comparisonList');
  if (initialComparisonList) comparisonList.value = initialComparisonList;

  const initialSavedMortgages = loadFromLocalStorage('savedMortgages');
  if (initialSavedMortgages) savedMortgages.value = initialSavedMortgages;
  
  const initialSavedComparisons = loadFromLocalStorage('savedComparisons');
  if (initialSavedComparisons) savedComparisons.value = initialSavedComparisons;


  // --- Actions ---

  // Placeholder for fetching search results
  async function fetchMortgages(filters) {
    console.log('Fetching mortgages with filters (simulated):', filters);
    // const data = await api.searchMortgages(filters);
    // searchResults.value = data.results;
    // Mock data:
    await new Promise(resolve => setTimeout(resolve, 500));
    searchResults.value = [
      { id: 'm1', name: 'Mock Hipoteca A', rate: '3.0%', bank: 'MockBank 1' },
      { id: 'm2', name: 'Mock Hipoteca B', rate: '3.2%', bank: 'MockBank 2' },
    ];
    console.log('Search results updated (simulated):', searchResults.value);
  }

  function addToComparison(mortgage) { // Expecting full mortgage object or at least ID
    if (comparisonList.value.length < MAX_COMPARISON_ITEMS) {
      if (!comparisonList.value.find(item => item.id === mortgage.id)) {
        comparisonList.value.push(mortgage);
        persistToLocalStorage('comparisonList', comparisonList.value);
        console.log('Added to comparison:', mortgage.id, comparisonList.value);
      } else {
        console.warn('Mortgage already in comparison list:', mortgage.id);
      }
    } else {
      console.warn('Comparison list is full. Max items:', MAX_COMPARISON_ITEMS);
      alert(`Puedes comparar un máximo de ${MAX_COMPARISON_ITEMS} hipotecas a la vez.`);
    }
  }

  function removeFromComparison(mortgageId) {
    comparisonList.value = comparisonList.value.filter(item => item.id !== mortgageId);
    persistToLocalStorage('comparisonList', comparisonList.value);
    console.log('Removed from comparison:', mortgageId, comparisonList.value);
  }

  async function saveMortgage(mortgage) { // Expecting full mortgage object or at least ID
    if (!savedMortgages.value.find(item => item.id === mortgage.id)) {
      // await api.saveMortgage(mortgage.id); // API call
      savedMortgages.value.push(mortgage);
      persistToLocalStorage('savedMortgages', savedMortgages.value);
      console.log('Mortgage saved (simulated):', mortgage.id);
    } else {
      console.warn('Mortgage already saved:', mortgage.id);
    }
  }

  async function removeSavedMortgage(mortgageId) {
    // await api.removeSavedMortgage(mortgageId); // API call
    savedMortgages.value = savedMortgages.value.filter(item => item.id !== mortgageId);
    persistToLocalStorage('savedMortgages', savedMortgages.value);
    console.log('Removed saved mortgage (simulated):', mortgageId);
  }

  async function saveCurrentComparison(name) {
    if (!name || comparisonList.value.length === 0) {
      console.warn('Cannot save empty or unnamed comparison.');
      return;
    }
    const newComparison = {
      id: `comp_${Date.now()}`, // Generate a unique ID
      name: name,
      mortgages: [...comparisonList.value], // Store copies of the mortgage objects
      createdAt: new Date().toISOString(),
    };
    // await api.saveComparison(newComparison.mortgages.map(m => m.id), name); // API call
    savedComparisons.value.push(newComparison);
    persistToLocalStorage('savedComparisons', savedComparisons.value);
    console.log('Comparison saved (simulated):', newComparison);
  }

  async function removeSavedComparison(comparisonId) {
    // await api.removeSavedComparison(comparisonId); // API call
    savedComparisons.value = savedComparisons.value.filter(comp => comp.id !== comparisonId);
    persistToLocalStorage('savedComparisons', savedComparisons.value);
    console.log('Removed saved comparison (simulated):', comparisonId);
  }

  async function loadSavedMortgagesFromAPI() {
    console.log('Loading saved mortgages from API (simulated)...');
    // const data = await api.getSavedMortgages();
    // savedMortgages.value = data; // Assuming API returns array of mortgage objects
    // Mock:
    const localData = loadFromLocalStorage('savedMortgages');
    if (localData) savedMortgages.value = localData;
    console.log('Saved mortgages loaded (simulated):', savedMortgages.value);
  }

  async function loadSavedComparisonsFromAPI() {
    console.log('Loading saved comparisons from API (simulated)...');
    // const data = await api.getSavedComparisons();
    // savedComparisons.value = data; // Assuming API returns array of comparison objects
    // Mock:
    const localData = loadFromLocalStorage('savedComparisons');
    if (localData) savedComparisons.value = localData;
    console.log('Saved comparisons loaded (simulated):', savedComparisons.value);
  }

  return {
    searchResults,
    comparisonList,
    savedMortgages,
    savedComparisons,
    comparisonListFull,
    fetchMortgages,
    addToComparison,
    removeFromComparison,
    saveMortgage,
    removeSavedMortgage,
    saveCurrentComparison,
    removeSavedComparison,
    loadSavedMortgagesFromAPI,
    loadSavedComparisonsFromAPI,
  };
});
