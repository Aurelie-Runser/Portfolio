import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ProjetsView = () => import('../views/ProjetsView.vue')
const ProjetView = () => import('../views/ProjetView.vue')
const Page404 = () => import('../views/404.vue')

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
    if (to.hash) { // si la route contient une ancre, aller sur celle-ci
      return { el: to.hash }
    } else { // sinon aller en haut de la page souhaitée
      return { top: 0 }
    }
  },
})

export default router
