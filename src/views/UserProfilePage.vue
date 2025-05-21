<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <i class="bi bi-person-circle" style="font-size: 4rem; color: var(--bs-primary);"></i>
        <h1 class="display-4 mt-3">Mi Perfil</h1>
        <p class="lead text-muted">Gestiona tu información personal y preferencias.</p>
        <hr class="my-4">
        <div class="alert alert-info" role="alert">
          <h4 class="alert-heading">¡En Construcción!</h4>
          <p>Esta sección está actualmente en desarrollo. Pronto podrás ver y editar los detalles de tu cuenta, tus hipotecas guardadas, y mucho más.</p>
          <hr>
          <p class="mb-0">Gracias por tu paciencia.</p>
        </div>
        <router-link to="/" class="btn btn-primary mt-3">Volver al Inicio</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific script needed for this placeholder
</script>

<style scoped>
/* Add any specific styles for this page */
.display-4 {
  font-weight: 300;
}
</style>
