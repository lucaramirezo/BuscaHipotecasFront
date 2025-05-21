<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'; // Removed unused computed import
import BaseButton from '@/components/common/BaseButton.vue'; // Import BaseButton
// import { useAuthStore } from '@/store/authStore'; // Example for later

// const authStore = useAuthStore(); // Example for later
const isLoggedIn = ref(false); // Placeholder for auth state
const userCredits = ref(12); // Placeholder for user credits
const userInitials = ref('JD'); // Placeholder for user initials


</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand fw-bold text-primary" to="/">BuscaHipotecas</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active fw-semibold" to="/buscar">Buscar Hipoteca</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active fw-semibold" to="/comparar">Comparador</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active fw-semibold" to="/hipotecas">Todas las Hipotecas</RouterLink> <!-- Updated Link -->
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active fw-semibold" to="/noticias">Noticias</RouterLink> <!-- TODO: Create NoticiasPage -->
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <template v-if="isLoggedIn">
            <BaseButton variant="outline-primary" size="sm" class="me-2">
              {{ userCredits }} créditos
            </BaseButton>
            <RouterLink to="/perfil" class="text-decoration-none">
              <div class="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style="width: 40px; height: 40px; cursor: pointer;">
                {{ userInitials }}
              </div>
            </RouterLink>
             <BaseButton variant="outline-secondary" size="sm" @click="isLoggedIn = false">Salir</BaseButton> <!-- Placeholder logout -->
          </template>
          <template v-else>
            <div class="w-100 d-lg-flex align-items-lg-center">
              <!-- Login Link/Button -->
              <RouterLink to="/login" custom v-slot="{ navigate, href }">
                <a :href="href" @click="navigate" class="nav-link d-block d-lg-none text-center py-1">Iniciar Sesión</a>
                <a :href="href" @click="navigate" class="btn btn-outline-primary btn-sm d-none d-lg-inline-block me-lg-2" role="button">Iniciar Sesión</a>
              </RouterLink>
              
              <!-- Register Link/Button -->
              <RouterLink to="/registro" custom v-slot="{ navigate, href }">
                <a :href="href" @click="navigate" class="nav-link d-block d-lg-none text-center py-1">Registrarse</a>
                <a :href="href" @click="navigate" class="btn btn-primary btn-sm d-none d-lg-inline-block" role="button">Registrarse</a>
              </RouterLink>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
}
.nav-link {
  color: #495057;
}
.nav-link.active {
  color: #007bff;
}
.navbar {
  border-bottom: 1px solid #dee2e6;
}
/* Ensure Bootstrap Icons are available globally or import them here */
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"); */
</style>
