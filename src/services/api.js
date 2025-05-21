// Base URL for the API, can be configured via environment variables
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// --- Mock Data ---
const mockMortgage = (id) => ({
  id: id || `mortgage_${Date.now()}`,
  bankName: "Banco Ficticio",
  bankLogoUrl: "https://via.placeholder.com/100x40?text=BancoLogo",
  mortgageName: "Hipoteca Ejemplo Fija",
  interestRate: "3.0%", // TIN
  tae: "3.25%",
  monthlyPayment: 700,
  openingFee: "0.75%",
  cancellationFee: "0.30%",
  requiredProducts: ["payroll"],
  details: {
    description: "Una hipoteca de prueba con buenas condiciones.",
    maxFinancingPercentage: 80,
    minAge: 18,
    maxAge: 75,
  }
});

const mockSearchResults = (filters) => ({
  results: Array.from({ length: Math.floor(Math.random() * 5) + 3 }, (_, i) => ({
    ...mockMortgage(`search_res_${i}`),
    bankName: `Banco ${String.fromCharCode(65 + i)}`,
    monthlyPayment: 600 + i * 50,
    interestRate: `${(2.5 + i * 0.1).toFixed(2)}%`
  })),
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalResults: 5,
    totalPages: 1
  }
});

const mockUserProfile = {
  id: "user_dev_1",
  name: "Usuario de Prueba",
  email: "test@example.com",
  preferences: {}
};

// --- API Service Functions (Placeholders) ---

// Simulates an API call
const simulateApiCall = (data, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Simulated API call with data:', data);
      resolve(data);
    }, delay);
  });
};

const simulateErrorApiCall = (message, delay = 500) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      console.error('Simulated API error:', message);
      reject(new Error(message));
    }, delay);
  });
};


export async function loginUser(credentials) {
  console.log('API: loginUser called with', credentials);
  // Example: return simulateApiCall({ token: 'fake-jwt-token', user: mockUserProfile });
  if (credentials.email === "error@example.com") {
      return simulateErrorApiCall("Invalid credentials");
  }
  return simulateApiCall({ token: 'fake-jwt-token', user: { ...mockUserProfile, email: credentials.email } });
}

export async function fetchUserProfile() {
  console.log('API: fetchUserProfile called');
  return simulateApiCall(mockUserProfile);
}

export async function searchMortgages(filters) {
  console.log('API: searchMortgages called with', filters);
  return simulateApiCall(mockSearchResults(filters));
}

export async function saveSearchDraft(filters) {
  console.log('API: saveSearchDraft called with', filters);
  return simulateApiCall({ status: 'success', message: 'Draft saved', draftId: `draft_${Date.now()}` });
}

export async function saveMortgage(mortgageId) {
  console.log('API: saveMortgage called with mortgageId:', mortgageId);
  return simulateApiCall({ status: 'success', message: 'Mortgage saved', savedMortgage: { ...mockMortgage(mortgageId), savedAt: new Date().toISOString()} });
}

export async function removeSavedMortgage(mortgageId) {
  console.log('API: removeSavedMortgage called with mortgageId:', mortgageId);
  return simulateApiCall({ status: 'success', message: 'Mortgage removed' });
}

export async function getSavedMortgages() {
  console.log('API: getSavedMortgages called');
  // Simulate having a few saved mortgages
  return simulateApiCall([
    mockMortgage('saved_m1'),
    mockMortgage('saved_m2')
  ]);
}

export async function saveComparison(mortgageIds, name) {
  console.log('API: saveComparison called with name:', name, 'and mortgageIds:', mortgageIds);
  return simulateApiCall({ status: 'success', message: 'Comparison saved', comparison: { id: `comp_${Date.now()}`, name, mortgageIds, createdAt: new Date().toISOString()} });
}

export async function removeSavedComparison(comparisonId) {
  console.log('API: removeSavedComparison called with comparisonId:', comparisonId);
  return simulateApiCall({ status: 'success', message: 'Comparison removed' });
}

export async function getSavedComparisons() {
  console.log('API: getSavedComparisons called');
  // Simulate having a few saved comparisons
  return simulateApiCall([
    { id: 'comp_abc', name: 'My First Comparison', mortgageIds: ['m1', 'm2'], createdAt: '2025-01-15T10:00:00Z' },
    { id: 'comp_def', name: 'Best Fixed Rates', mortgageIds: ['m3', 'm4', 'm5'], createdAt: '2025-01-20T14:30:00Z' }
  ]);
}

// Add other API functions as needed, e.g., registerUser, updateProfile, etc.
