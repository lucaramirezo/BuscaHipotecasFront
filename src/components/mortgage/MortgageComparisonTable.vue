<script setup>
defineProps({
  mortgagesToCompare: {
    type: Array,
    required: true,
    default: () => []
  }
});

const featureMapping = {
  bankLogoUrl: 'Logo Entidad',
  bankName: 'Entidad',
  mortgageName: 'Nombre Hipoteca',
  interestRate: 'TIN',
  apr: 'TAE',
  monthlyPayment: 'Cuota Mensual',
  termYears: 'Plazo (años)',
  maxAmount: 'Importe Máx. (€)',
  openingFee: 'Comisión Apertura',
  otherFees: 'Otros Requisitos/Costes'
};

const getFeatureKeys = (mortgages) => {
  if (!mortgages || mortgages.length === 0) return [];
  // Use a predefined order of keys, and filter by those present in the data
  const preferredOrder = [
    'bankLogoUrl', 'bankName', 'mortgageName', 'interestRate', 'apr', 
    'monthlyPayment', 'termYears', 'maxAmount', 'openingFee', 'otherFees'
  ];
  // Check which keys are actually present in the first mortgage object
  const firstMortgageKeys = Object.keys(mortgages[0]);
  return preferredOrder.filter(key => firstMortgageKeys.includes(key));
};

</script>

<template>
  <div class="table-responsive">
    <table class="table table-bordered table-hover align-middle">
      <thead class="table-light">
        <tr>
          <th scope="col" class="text-nowrap">Característica</th>
          <th v-for="mortgage in mortgagesToCompare" :key="mortgage.id" scope="col" class="text-center text-nowrap">
            {{ mortgage.bankName }} - {{ mortgage.mortgageName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="featureKey in getFeatureKeys(mortgagesToCompare)" :key="featureKey">
          <th scope="row" class="text-nowrap">{{ featureMapping[featureKey] || featureKey }}</th>
          <td v-for="mortgage in mortgagesToCompare" :key="`${mortgage.id}-${featureKey}`" class="text-center">
            <template v-if="featureKey === 'bankLogoUrl'">
              <img :src="mortgage[featureKey]" :alt="`${mortgage.bankName} logo`" style="max-height: 40px; display: block; margin: auto;">
            </template>
            <template v-else-if="featureKey === 'maxAmount'">
              {{ mortgage[featureKey] ? mortgage[featureKey].toLocaleString('es-ES') : '-' }}
            </template>
            <template v-else>
              {{ mortgage[featureKey] || '-' }}
            </template>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-nowrap">Acciones</th>
          <td v-for="mortgage in mortgagesToCompare" :key="`action-${mortgage.id}`" class="text-center">
            <button class="btn btn-sm btn-outline-danger">Quitar</button>
            <!-- Add more actions if needed, e.g., view details -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table th, .table td {
  vertical-align: middle;
}
.table thead th {
  background-color: #f8f9fa; /* Light grey for header */
  font-weight: bold;
}
.table img {
  max-height: 40px; /* Consistent logo size */
  object-fit: contain; /* Ensure logo aspect ratio is maintained */
}

/* Ensure table is truly responsive and doesn't overflow excessively on small screens */
.table-responsive {
  overflow-x: auto; /* Allows horizontal scrolling on small screens */
}

/* Custom styling for better readability */
th[scope="row"] {
  background-color: #f8f9fa; /* Light grey for feature names */
  text-align: left;
}

td {
  min-width: 150px; /* Minimum width for data cells to prevent excessive squishing */
}

th[scope="col"] {
   min-width: 180px; /* Minimum width for mortgage name columns */
}

.text-nowrap {
  white-space: nowrap;
}
</style>
