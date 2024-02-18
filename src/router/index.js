import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import ProjetView from '../views/ProjetView.vue'
import Page404 from '../views/404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projets', name: 'projets', component: ProjetsView },
    { path: '/projet/:id', name: 'projet', component: ProjetView },
    { path: '/:pathMatch(.*)*',    name: 'Page404', component: Page404 },
  ],

  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})



export default router

