// router/router.js

import { createRouter, createWebHistory } from 'vue-router'
// Import your components
import Home from '@/components/Home.vue';
import Buscador from '@/components/Buscador.vue';
import Film from '@/components/Film.vue';
import Watchlist from '@/components/Watchlist.vue';
import Carrusel from '@/components/Carrusel.vue';


// Define your routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Buscador',
      name: 'Buscador',
      component: Buscador
    },
    {
      path: '/Carrusel',
      name: 'Carrusel',
      component: Carrusel
    },
    {
      path: '/Watchlist',
      name: 'Watchlist',
      component: Watchlist
    },
    {
      path: '/Watchlist',
      name: 'Watchlist',
      component: Watchlist
    }
  ]
})
// Create the router instance

export default router;
