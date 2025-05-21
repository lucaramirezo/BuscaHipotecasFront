import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ConfigureSearchPage from '../views/ConfigureSearchPage.vue';
import SearchResultsPage from '../views/SearchResultsPage.vue';
import ComparisonPage from '../views/ComparisonPage.vue';
import SavedMortgagesPage from '../views/SavedMortgagesPage.vue';
import LoginPage from '../views/LoginPage.vue';
import AllMortgagesPage from '../views/AllMortgagesPage.vue';
// Import new placeholder pages
import NoticiasPage from '../views/NoticiasPage.vue';
import UserProfilePage from '../views/UserProfilePage.vue';
import RegistrationPage from '../views/RegistrationPage.vue';
// Placeholder for future components
// import CalculadoraPage from '../views/CalculadoraPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/buscar',
    name: 'ConfigureSearch',
    component: ConfigureSearchPage,
  },
  {
    path: '/resultados',
    name: 'SearchResults',
    component: SearchResultsPage,
  },
  {
    path: '/comparar',
    name: 'CompareMortgages',
    component: ComparisonPage,
  },
  {
    path: '/guardados',
    name: 'SavedMortgages',
    component: SavedMortgagesPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/hipotecas',
    name: 'AllMortgages',
    component: AllMortgagesPage,
  },
  // Add routes for new placeholder pages
  {
    path: '/noticias',
    name: 'Noticias',
    component: NoticiasPage,
  },
  {
    path: '/perfil',
    name: 'UserProfile',
    component: UserProfilePage,
  },
  {
    path: '/registro',
    name: 'Register',
    component: RegistrationPage,
  },
  // TODO: Add routes for these pages once components are created
  // {
  //   path: '/calculadora',
  //   name: 'Calculadora',
  //   component: CalculadoraPage, 
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
