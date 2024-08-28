<template>
    <section class="my-20">
        <h2 class="mx-auto px-1 md:px-10 max-w-screen-2xl w-11/12">Projets</h2>

        <div v-if="projetsAffiches.length > 0">
            <!-- grille de projets -->
            <ul class="my-10 md:my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-1 place-items-center">
    
                <!-- card des projets -->
                <li v-for="p in projetsAffiches" :key="p.id" class="overflow-hidden w-full">
                    <maCard v-bind="p"/>
                </li>
            </ul>
    
            <RouterLink to="/projets">
                <monBouton class="mx-auto">Voir tous les Projets</monBouton>
            </RouterLink>
        </div>

        <div v-else class="h-[50vh]">
            <monChargement/>
         </div>

    </section>
</template>

<script setup>
import monChargement from "@/components/monChargement.vue";
import maCard from "@/components/maCard.vue";
import monBouton from "@/components/monBouton.vue";

import { ref, onMounted, watch } from 'vue';
import { useProjetsStore } from "@/stores/projetsStore.js";

const store = useProjetsStore()
const projetsAffiches = ref([]);

// determine le nombre de projet à afficher en fonction d'écran (sur /#mes_projets)
function projetsScreenFunction(){
    const screenWidth = window.innerWidth;
    const gap = 4; // Gap entre les card
    const minCardWidth = 320; // Largeur minimale de chaque card
    let cardsPerRow;

    if (screenWidth <= 767) {
        // Mobile view
        store.projetsScreen = store.orderByDate.slice(0, 3);
    } else {
        // Desktop view
        // Calculer le nombre de cartes qui peuvent tenir dans une ligne
        cardsPerRow = Math.floor((screenWidth + gap) / (minCardWidth + gap));
        // Limiter le nombre de cartes à 2 lignes
        store.projetsScreen = store.orderByDate.slice(0, cardsPerRow * 2);
    }
    return store.projetsScreen;
}

onMounted(() => {
    if(store.projetsScreen.length > 0){ // si le nombre de projet est déjà défini
        projetsAffiches.value = store.projetsScreen;
    }
    else if(store.projetDernier.titre){ // si le nombre de projet n'est pas encore défini mais que tous les projets ont été chargé (si arrivé directement sur une fiche projet ou la page listant tous les projets)
        projetsAffiches.value = projetsScreenFunction();
    }
    else {  // si les projets n'ont pas encore été chargé
        const stopWatcher = watch(
            () => store.projetDernier.titre,
            () => {
                projetsAffiches.value = projetsScreenFunction();
                stopWatcher(); // pour stoper le watcher (la liste à afficher à été chargé 1 foix, il n'y a plus de raison qu'elle change)
            }
        );
    };
});
</script>