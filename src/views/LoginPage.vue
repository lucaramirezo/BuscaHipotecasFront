<script setup>
// Page for user login - Basic Placeholder
import BaseInput from '@/components/common/BaseInput.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Login attempt with:', email.value, password.value);
  // Here you would call an authStore action
};
</script>

<template>
  <div class="container mt-5 mb-5"> <!-- Added mb-5 for spacing below -->
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm"> <!-- Added shadow-sm -->
          <div class="card-body p-4"> <!-- Added more padding -->
            <h2 class="card-title text-center mb-4">Iniciar Sesión</h2>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <BaseInput
                  v-model="email"
                  label="Correo Electrónico"
                  type="email"
                  id="loginEmail"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div class="mb-3">
                <BaseInput
                  v-model="password"
                  label="Contraseña"
                  type="password"
                  id="loginPassword"
                  placeholder="Tu contraseña"
                  required
                />
              </div>
              <div class="d-grid gap-2">
                <BaseButton type="submit" variant="primary" size="lg">Entrar</BaseButton>
              </div>
            </form>
            <p class="mt-4 text-center"> <!-- Increased top margin -->
              ¿No tienes cuenta? <router-link to="/registro">Regístrate aquí</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  /* box-shadow: 0 4px 8px rgba(0,0,0,0.1); // Replaced by Bootstrap shadow-sm */
}
</style>
