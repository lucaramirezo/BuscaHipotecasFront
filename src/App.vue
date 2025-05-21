<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="app-container d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global styles can go here or in a separate CSS file imported in main.js */
body {
  font-family: 'Inter', sans-serif; /* Example: Using a modern sans-serif font */
}

/* Ensure the app container takes full height */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
