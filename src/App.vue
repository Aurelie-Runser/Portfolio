<script setup>
import monMenu from "./components/monMenu.vue";
import monFooter from "./components/monFooter.vue";

import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useProjetsStore } from "@/stores/projetsStore.js";

const store = useProjetsStore();

onMounted(() => {
    store.getProjetsListe()
        .then(() => {
            console.log("Données des projets chargées");
        })
        .catch(error => {
            console.error("Erreur lors du chargement des projets :", error);
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


// Gestionnaire pour activer l'animation lorsque les éléments sont visibles
function animateOnScroll() {
            // Sélectionnez tous les éléments avec la classe 'niveau' (les éléments à animer)
            const elementsToAnimate1 = document.querySelectorAll('.niveau1');
            const elementsToAnimate2 = document.querySelectorAll('.niveau2');
            const elementsToAnimate3 = document.querySelectorAll('.niveau3');
            const elementsToAnimate4 = document.querySelectorAll('.niveau4');
            const elementsToAnimate5 = document.querySelectorAll('.niveau5');

            // Parcourez chaque élément à animer
            elementsToAnimate1.forEach((element) => {
                // Vérifiez si l'élément est actuellement visible à l'écran à l'aide de la fonction isElementVisible
                if (this.isElementVisible(element)) {
                    // Si l'élément est visible, ajoutez la classe 'animate-visible' pour déclencher l'animation CSS
                    element.classList.add('animate-visible');
                }
            });
        }

 // Fonction pour vérifier si un élément est visible à l'écran
function isElementVisible(element) {
    // Obtenez les coordonnées et la taille de l'élément en utilisant getBoundingClientRect()
    const rect = element.getBoundingClientRect();

    // Vérifiez si le haut de l'élément est au-dessus de 70% de l'écran et si le bas de l'élément est en dessous du haut de l'écran
    // Si c'est le cas, alors l'élément est actuellement visible à l'écran
    return rect.top >= 0 && rect.bottom <= window.innerHeight*0.8;
}

</script>

<template>
    <main class=" bg-mon-black max-w-full">
        <monMenu class="!z-50"/>
        <RouterView />
        <monFooter/>
    </main>
</template>