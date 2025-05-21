<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'; // Assuming authStore will be used later
// import { useAuthStore } from '@/store/authStore'; // Example for later

// const authStore = useAuthStore(); // Example for later
const isLoggedIn = ref(false); // Placeholder for auth state
const userCredits = ref(12); // Placeholder for user credits
const userInitials = ref('JD'); // Placeholder for user initials

const navigateToLogin = () => {
  // router.push('/login'); // Handled by RouterLink
};
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
            <RouterLink to="/login" custom v-slot="{ navigate }">
              <BaseButton variant="outline-primary" @click="navigate" class="me-2">Iniciar Sesión</BaseButton>
            </RouterLink>
            <RouterLink to="/registro" custom v-slot="{ navigate }"> <!-- TODO: Create RegistroPage -->
              <BaseButton variant="primary" @click="navigate">Registrarse</BaseButton>
            </RouterLink>
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
/* Add any component-specific styles here */
</style>
