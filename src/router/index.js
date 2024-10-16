import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import ProjetView from '../views/ProjetView.vue'
import Page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Aurélie Runser - Portfolio",
        description: "Je suis Aurélie Runser, une développeuse web junior. Mon portfolio vous fera découvrir mes compétences et mes projets.",
      },
    },
    { 
      path: '/projets',
      name: 'projets',
      component: ProjetsView,
      meta: {
        title: "Aurélie Runser - Projets Web",
        description: "Tous mes projets web sont listés et détaillés dans mon portfolio.",
      },
    },
    { 
      path: '/projet/:id',
      name: 'projet',
      component: ProjetView,
      meta: {
        // title et description définis dans la page
      },
    },
    { 
      path: '/projet', redirect: 'projets' },
    { 
      path: '/:pathMatch(.*)*',
      name: 'Page404',
      component: Page404,
      meta: {
        robots: 'noindex',
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    } else {
      return { top: 0 }
    }
  },
})

// Définir les titres et les descriptions avant chaque changement de route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Aurélie Runser - Portfolio";
  const description = to.meta.description || "Portfolio d'une développeuse web junior.";
  
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);

  // Ajouter un contrôle pour les balises "robots"
  if (to.meta.robots) {
    document.querySelector('meta[name="robots"]')?.setAttribute("content", to.meta.robots);
  } else {
    document.querySelector('meta[name="robots"]')?.setAttribute("content", "index,follow");
  }

  next();
});

export default router;