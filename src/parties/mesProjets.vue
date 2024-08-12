<template>
    <section class="my-32">
        <h2>Mes Projets</h2>

        <!-- grille de projets -->
        <ul id="ma-liste" class="overflow-hidden -mx-7 md:-mx-10 my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-1">
            
            <!-- card des projets -->
            <li v-for="p in projetsAffiches" :key="p.id"
                class="projet_card relative aspect-video md:aspect-square overflow-hidden">

                <!-- Les images -->

                <!--image en mobile-->
                <div class="card_img relative block md:hidden aspect-video delay-200 duration-500">
                    <img class="object-cover w-full h-full"
                         :src="p.image_rect" :alt="'Image de mon projet '+p.titre">
                </div>

                <!--image en pc-->
                <div class="card_img relative hidden md:block aspect-square delay-200 duration-500">
                    <img class="object-cover w-full h-full"
                         :src="p.image_card" :alt="'Image de mon projet '+p.titre">
                </div>

                
                <!-- deco -->
                <div class="card_deco deco_t absolute -top-full left-0 w-full h-full bg-mon-black border-b-4 border-cyan-400 duration-500"></div>
                
                <!-- Les textes (qui n'apparraissent qu'au survole) -->
                    <div class="card_deco deco_b absolute flex flex-col justify-between top-full left-0 w-full h-full p-[5%] border-t-4 border-fuchsia-500 duration-500 delay-200">
                    
                    <p>
                        <span class="text_card text-orange-100">Contexte : </span>
                        <span class="text_card font-oswald font-extralight">{{ p.contexte_resume }}</span>
                    </p>

                    <p>
                        <span class="text_card text-orange-100">Type : </span>
                        <span class="text_card font-oswald font-extralight">{{ p.type }}</span>
                    </p>

                    <p>
                        <span class="text_card text-orange-100">Année : </span>
                        <span class="text_card font-oswald font-extralight">{{ p.annee_resume }}</span>
                    </p>

                    <!-- le bouton pour aller sur le projet-->
                        <RouterLink :to="`/projet/${p.id}`">
                            <button
                                class="card_button absolute bottom-1 right-0 px-6 py-3 min-w-min w-[25%] h-16 md:h-20 bg-orange-100
                                        font-oswald text-base md:text-xl tracking-wider text-center text-mon-black
                                        transition-all duration-75">
                                Voir
                            </button>
                        </RouterLink>
                </div>
            </li>
        </ul>

        <RouterLink to="/projets">
            <monBouton class="mx-auto">Voir tous les Projets</monBouton>
        </RouterLink>

    </section>
</template>

<style>
/* animation du fond noir au survole de la card */
.projet_card:hover .deco_t{
    transform: translateY(100%);
}
/* animation du texte au survole de la card */
.projet_card:hover .deco_b{
    transform: translateY(-100%);
}

/* animation lors du survole du bouton */
.card_button:hover{
    transform-origin: bottom right;
    transform: scale(1.1);
}
</style>

<script setup>
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
        return
    }
    else if(store.listeProjet.length > 0){ // si le nombre de projet n'est pas encore défini
        projetsAffiches.value = projetsScreenFunction();
        return
    }
    else {  // si les projets n'ont pas encore été chargé
        const stopWatcher = watch(
            () => store.listeProjet.length,
            () => {
                projetsAffiches.value = projetsScreenFunction();
                stopWatcher(); // pour stoper le watcher (la liste à afficher à été chargé 1 foix, il n'y a plus de raison qu'elle change)
            }
        );
    };
});
</script>