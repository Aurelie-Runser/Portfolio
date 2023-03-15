import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetView from '../views/ProjetView.vue'
import Page404View from '../views/404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projet/:id', name: 'projet', component: ProjetView },
    { path: "/:catchAll(.*)", name: "Page404View", component: Page404View,}, 
  ],

  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})



export default router

