<script setup>
import monAccueilAnime from "@/parties/monAccueilAnime.vue";
import monAccueil from "@/parties/monAccueil.vue";
import mesProjets from "@/parties/mesProjets.vue";
import mesCompetences from "@/parties/mesCompetences.vue";
import maPersonne from "@/parties/maPersonne.vue";
import meContacte from "@/parties/meContacte.vue";

import { ref, onMounted } from 'vue';

// Fonction pour lancer l'animation aléatoirement sur un h2
function startRandomGlitch() {
    // Sélectionner tous les éléments h2 avec la classe .glitch-text
    const glitchElements = document.querySelectorAll('h2');

    if(glitchElements.length > 0){
        // Supprime l'animation de tous les éléments
        glitchElements.forEach(el => el.classList.remove('animated'));
    
        // Sélectionne un h2 aléatoire
        const randomIndex = Math.floor(Math.random() * glitchElements.length);
        const randomElement = glitchElements[randomIndex];
    
        // Ajoute la classe .animated pour démarrer l'animation
        randomElement.classList.add('animated');
    
    }
    // Répète l'animation après un intervalle aléatoire entre 1 et 3 secondes
    const randomInterval = Math.random() * 1000 + 1000;
    setTimeout(startRandomGlitch, randomInterval);
}
startRandomGlitch();

// vérifie si l'utilisateur à déjà visité la page d'accueil
const hasVisitedHome = ref(false);
onMounted(() => {
  const visited = sessionStorage.getItem('hasVisitedHome');
  if (visited) {
    hasVisitedHome.value = true;
  } else {
    sessionStorage.setItem('hasVisitedHome', 'true');
    hasVisitedHome.value = false;
  }
});
</script>

<template>
    <main class="max-w-[100vw] overflow-hidden">
        <monAccueilAnime v-if="!hasVisitedHome"/>
        <monAccueil id="id_accueil" v-else/>

        <mesProjets id="id_projets"/>
        <mesCompetences id="id_competences"/>
        <maPersonne id="id_apropos"/>
        <meContacte id="id_contact"/>
    </main>
</template>
