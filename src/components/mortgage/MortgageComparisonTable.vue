<script setup>
// Props will be defined later, e.g., array of mortgages
// defineProps({ mortgagesToCompare: Array });
</script>

<template>
  <div>
    <p class="text-muted">MortgageComparisonTable.vue - La tabla de comparación se implementará aquí.</p>
    <!-- Responsive table for comparing mortgages -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Característica</th>
            <th>Hipoteca 1 (Placeholder)</th>
            <th>Hipoteca 2 (Placeholder)</th>
            <th>Hipoteca 3 (Placeholder)</th>
            <!-- Add more columns if needed, up to max comparison limit -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Logo Entidad</td>
            <td><img src="https://via.placeholder.com/80x30?text=Bank1" alt="Bank 1"></td>
            <td><img src="https://via.placeholder.com/80x30?text=Bank2" alt="Bank 2"></td>
            <td><img src="https://via.placeholder.com/80x30?text=Bank3" alt="Bank 3"></td>
          </tr>
          <tr>
            <td>Nombre Hipoteca</td>
            <td>Hipoteca Alfa</td>
            <td>Hipoteca Beta</td>
            <td>Hipoteca Gamma</td>
          </tr>
          <tr>
            <td>TIN</td>
            <td>3.0%</td>
            <td>3.2%</td>
            <td>2.9%</td>
          </tr>
          <tr>
            <td>TAE</td>
            <td>3.5%</td>
            <td>3.7%</td>
            <td>3.4%</td>
          </tr>
          <tr>
            <td>Cuota Mensual</td>
            <td>700€</td>
            <td>720€</td>
            <td>690€</td>
          </tr>
          <tr>
            <td>Comisión Apertura</td>
            <td>0%</td>
            <td>0.5%</td>
            <td>0.25%</td>
          </tr>
          <!-- Add more comparison rows as needed -->
          <tr>
            <td>Acciones</td>
            <td><button class="btn btn-sm btn-danger">Quitar</button></td>
            <td><button class="btn btn-sm btn-danger">Quitar</button></td>
            <td><button class="btn btn-sm btn-danger">Quitar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
.table th {
  vertical-align: middle;
  text-align: center;
}
.table td {
  vertical-align: middle;
  text-align: center;
}
.table img {
  max-height: 40px;
  display: block;
  margin: auto;
}
</style>
