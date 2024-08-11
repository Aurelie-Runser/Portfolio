import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import ProjetView from '../views/ProjetView.vue'
import Page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projets', name: 'projets', component: ProjetsView },
    { path: '/projet/:id', name: 'projet', component: ProjetView },
    { path: '/projet', redirect: 'projets' },
    { path: '/:pathMatch(.*)*',    name: 'Page404', component: Page404 },
  ],

  scrollBehavior(to) {
    if (to.hash) { // si la route contient une ancre, aller sur celle si
      return { el: to.hash }
    } else { // sinon aller en haut de la page souhaité
      return { top: 0 }
    }
  },
})

export default router
