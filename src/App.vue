<script setup>
import monMenu from "./components/monMenu.vue";
import monFooter from "./components/monFooter.vue";

import { RouterView } from "vue-router";
import { useProjetsStore } from "@/stores/projetsStore.js";

useProjetsStore().getProjetsListe();

// Fonction pour lancer l'animation aléatoirement sur un h2
function startRandomGlitch() {
    const glitchElements = document.querySelectorAll('h2');

    if(glitchElements.length > 0){
        glitchElements.forEach(el => el.classList.remove('animated'));
    
        // Sélectionne un h2 aléatoire
        const randomIndex = Math.floor(Math.random() * glitchElements.length);
        const randomElement = glitchElements[randomIndex];
    
        // Ajoute la classe .animated pour démarrer l'animation
        randomElement.classList.add('animated');
    
        const randomInterval = Math.random() * 1000 + 1000;
        setTimeout(startRandomGlitch, randomInterval);
    }
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