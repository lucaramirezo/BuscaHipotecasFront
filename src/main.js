import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import Pinia

import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Optionally import Bootstrap JS bundle if you need dropdowns, modals, etc.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const app = createApp(App)

app.use(createPinia()) // Use Pinia
app.use(router)

app.mount('#app')
