<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const bankLogos = [
  '/banks/Banco_Santander_Logotipo.svg.png',
  '/banks/BBVA_2019.svg.png',
  '/banks/Logo_CaixaBank.svg.png',
  '/banks/Bankinter.svg.png',
  '/banks/ING_Group_N.V._Logo.svg.png',
  '/banks/BSabadell_Logo.svg.png',
];

const navigateToSearch = () => {
  router.push('/buscar');
};
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero text-center py-5 bg-primary text-white">
      <div class="container">
        <h1 class="display-4 fw-bold">Encuentra y Compara las Mejores Hipotecas</h1>
        <p class="lead fs-4 mb-4">Te ayudamos a tomar la mejor decisión para tu futuro hogar de forma rápida y transparente.</p>
        <BaseButton variant="light" size="lg" @click="navigateToSearch">Comenzar Búsqueda</BaseButton>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits py-5">
      <div class="container">
        <h2 class="text-center mb-5">¿Por Qué Elegirnos?</h2>
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="bi bi-stopwatch fs-1 text-primary mb-3"></i>
                <h3 class="card-title h5">Ahorra Tiempo Valioso</h3>
                <p class="card-text">Comparamos decenas de hipotecas por ti en minutos, evitándote horas de investigación.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="bi bi-shield-check fs-1 text-success mb-3"></i>
                <h3 class="card-title h5">100% Transparente y Fiable</h3>
                <p class="card-text">Información clara, detallada y sin letra pequeña para que decidas con confianza.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="bi bi-people-fill fs-1 text-info mb-3"></i>
                <h3 class="card-title h5">Asesoramiento Personalizado</h3>
                <p class="card-text">Te guiamos en cada paso del proceso, resolviendo tus dudas y ayudándote a elegir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">¿Cómo Funciona?</h2>
        <div class="row align-items-center">
          <div class="col-md-4 text-center mb-3">
            <div class="p-3">
              <div class="step-icon mx-auto d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3">
                <i class="bi bi-pencil-square fs-2"></i>
              </div>
              <h4>1. Configura tu Búsqueda</h4>
              <p>Indica tus necesidades y preferencias financieras.</p>
            </div>
          </div>
          <div class="col-md-4 text-center mb-3">
            <div class="p-3">
              <div class="step-icon mx-auto d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3">
                <i class="bi bi-search fs-2"></i>
              </div>
              <h4>2. Compara Ofertas</h4>
              <p>Analiza las opciones de diferentes bancos en un solo lugar.</p>
            </div>
          </div>
          <div class="col-md-4 text-center mb-3">
            <div class="p-3">
              <div class="step-icon mx-auto d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3">
                <i class="bi bi-check2-circle fs-2"></i>
              </div>
              <h4>3. Elige la Mejor</h4>
              <p>Selecciona la hipoteca que mejor se adapte a ti.</p>
            </div>
          </div>
        </div>
         <div class="text-center mt-4">
            <BaseButton variant="success" size="lg" @click="navigateToSearch">¡Encuentra tu Hipoteca Ideal Ahora!</BaseButton>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="partners py-5">
      <div class="container text-center">
        <h2 class="mb-4">Colaboramos con las Principales Entidades Financieras</h2>
        <p class="lead mb-5">Accede a una amplia y diversa oferta del mercado hipotecario.</p>
        <div class="d-flex flex-wrap justify-content-center align-items-center">
          <img v-for="(logo, index) in bankLogos" :key="index" :src="logo" alt="Bank Logo" class="partner-logo img-thumbnail m-2"/>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Lo Que Dicen Nuestros Usuarios</h2>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text fst-italic">"¡Increíblemente fácil de usar! Encontré la hipoteca perfecta en poco tiempo y sin complicaciones. Totalmente recomendado."</p>
                <footer class="blockquote-footer mt-3">Ana G. <cite title="Source Title">Cliente Satisfecha</cite></footer>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text fst-italic">"La transparencia y el detalle de la información me dieron mucha confianza. Pude comparar todas las condiciones claramente."</p>
                <footer class="blockquote-footer mt-3">Carlos M. <cite title="Source Title">Usuario Contento</cite></footer>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text fst-italic">"El comparador es muy útil y el asesoramiento fue clave para entender algunos términos. ¡Recomendado al 100%!"</p>
                <footer class="blockquote-footer mt-3">Laura P. <cite title="Source Title">Ahorradora Feliz</cite></footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  /* background: linear-gradient(to right, #007bff, #0056b3); */ /* Example gradient */
}
.hero h1 {
  font-weight: 700;
}

.benefits .card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.benefits .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15) !important;
}

.how-it-works .step-icon {
  width: 80px;
  height: 80px;
}

.partner-logo {
  height: 60px;
  filter: grayscale(100%);
  transition: filter 0.3s ease, transform 0.3s ease;
  border: none;
  padding: 0.5rem;
}
.partner-logo:hover {
  filter: grayscale(0%);
  transform: scale(1.1);
}

.testimonials .card {
  border-left: 4px solid #007bff;
}

/* Ensure Bootstrap Icons are available if you use them like bi-clock-history */
/* You might have imported it globally in main.js or App.vue */
</style>
