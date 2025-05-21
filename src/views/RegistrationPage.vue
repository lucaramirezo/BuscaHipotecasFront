<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <div class="text-center mb-4">
              <i class="bi bi-person-plus-fill" style="font-size: 3rem; color: var(--bs-primary);"></i>
              <h2 class="card-title mt-2">Crear Cuenta</h2>
              <p class="text-muted">Únete a BuscaHipotecas para guardar tus búsquedas y comparaciones.</p>
            </div>
            
            <div class="alert alert-warning text-center" role="alert">
              <strong>Página en desarrollo.</strong><br>
              El formulario de registro estará disponible próximamente.
            </div>

            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="email" placeholder="tu@email.com" disabled>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" placeholder="Contraseña" disabled>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirmar Contraseña" disabled>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary" disabled>Registrarse</button>
              </div>
            </form>
            <p class="mt-3 text-center">
              ¿Ya tienes cuenta? <router-link to="/login">Inicia Sesión</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Placeholder logic
const handleRegister = () => {
  alert('Función de registro no implementada todavía.');
};
</script>

<style scoped>
/* Add any specific styles for this page */
.card-title {
  font-weight: 300;
}
</style>
