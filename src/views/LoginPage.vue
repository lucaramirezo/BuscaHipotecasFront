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
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Iniciar Sesión</h2>
            <form @submit.prevent="handleLogin">
              <BaseInput
                v-model="email"
                label="Correo Electrónico"
                type="email"
                placeholder="tu@email.com"
                required
              />
              <BaseInput
                v-model="password"
                label="Contraseña"
                type="password"
                placeholder="Tu contraseña"
                required
              />
              <BaseButton type="submit" variant="primary" class="w-100 mt-3">Entrar</BaseButton>
            </form>
            <p class="mt-3 text-center">
              ¿No tienes cuenta? <router-link to="/registro">Regístrate aquí</router-link> <!-- Assuming a /registro route -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
