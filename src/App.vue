<script setup>
import monMenu from "./components/monMenu.vue";
import monFooter from "./components/monFooter.vue";

import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useProjetsStore } from "@/stores/projetsStore.js";
import { useCompetencesStore } from "@/stores/competencesStore.js";

const projetsStore = useProjetsStore();
const competencesStore = useCompetencesStore();

onMounted(() => {
    projetsStore.getProjetsListe()
        .then(() => {
            return
        })
        .catch(error => {
            console.error("Erreur lors du chargement des projets :", error);
        });

    competencesStore.getCompetencesListe()
        .then(() => {
            return
        })
        .catch(error => {
            console.error("Erreur lors du chargement des compétences :", error);
        });
});

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

// Démarre la première animation
startRandomGlitch();

</script>

<template>
    <main class=" bg-mon-black max-w-full">
        <monMenu class="!z-50"/>
        <RouterView />
        <monFooter/>
    </main>
</template>