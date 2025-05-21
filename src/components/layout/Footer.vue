<script setup>
// No script logic needed for this basic placeholder
</script>

<template>
  <footer class="bg-dark text-white mt-auto py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4">BuscaHipotecas</h5>
          <p class="text-muted">
            Encuentra y compara las mejores hipotecas del mercado de forma fácil y transparente. Te ayudamos a tomar la mejor decisión para tu futuro hogar.
          </p>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4">Empresa</h5>
          <ul class="list-unstyled">
            <li><a href="#!" class="text-muted text-decoration-none footer-link">Sobre nosotros</a></li>
            <li><a href="#!" class="text-muted text-decoration-none footer-link">Blog</a></li>
            <li><a href="#!" class="text-muted text-decoration-none footer-link">Contacto</a></li>
            <li><a href="#!" class="text-muted text-decoration-none footer-link">FAQs</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Legal</h5>
          <ul class="list-unstyled">
            <li><a href="#!" class="text-muted text-decoration-none footer-link">Política de Privacidad</a></li>
            <li><a href="#!" class="text-muted text-decoration-none footer-link">Términos y Condiciones</a></li>
            <li><a href="#!" class="text-muted text-decoration-none footer-link">Política de Cookies</a></li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Síguenos</h5>
          <ul class="list-unstyled d-flex">
            <li class="me-3"><a href="#!" class="text-muted footer-icon"><i class="bi bi-facebook fs-4"></i></a></li>
            <li class="me-3"><a href="#!" class="text-muted footer-icon"><i class="bi bi-twitter fs-4"></i></a></li>
            <li class="me-3"><a href="#!" class="text-muted footer-icon"><i class="bi bi-instagram fs-4"></i></a></li>
            <li class="me-3"><a href="#!" class="text-muted footer-icon"><i class="bi bi-linkedin fs-4"></i></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center p-3 mt-4" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{ new Date().getFullYear() }} BuscaHipotecas. Todos los derechos reservados.
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
}
.footer-link {
  transition: color 0.2s ease-in-out;
}
.footer-link:hover {
  color: #ffffff !important; /* White text on hover */
}

.footer-icon i {
   transition: color 0.2s ease-in-out;
}

.footer-icon:hover i {
  color: #0d6efd !important; /* Bootstrap primary blue on hover */
}

/* Ensure Bootstrap Icons are available */
</style>
