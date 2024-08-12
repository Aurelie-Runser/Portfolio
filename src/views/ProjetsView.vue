<template>
    <div class="pt-24">
        <h1 class="big-title-glitch title-glitch tg-anim-projet relative
                    mx-7 md:mx-14 xl:mx-28"
            data-text="Tous Mes Projets">
            Tous Mes Projets
        </h1>

        <div class="my-16 flex flex-wrap justify-start gap-x-32 gap-y-4 mx-7 md:mx-14 xl:mx-28">
            <div class="mon_select">
                <select class="w-fit h-fit border-orange-100 border-2 border-solid bg-mon-black p-4 text-stone-300 cursor-pointer hover:bg-orange-100 hover:text-mon-black transition-all"
                        v-model="genreSelect" name="genreProjet" id="genreProjet">
                    <option value="">Tous les Genres</option>
                    <option value="scolaire">Projets Scolaires</option>
                    <option value="pro">Projets Professionnels</option>
                    <option value="perso">Projets Personnels</option>
                </select>
            </div>

            <div class="mon_select">
                <select class="w-fit h-fit border-orange-100 border-2 border-solid bg-mon-black p-4 text-stone-300 cursor-pointer hover:bg-orange-100 hover:text-mon-black transition-all"
                        v-model="catSelect" name="categorieProjet" id="categorieProjet">
                    <option value="">Toutes les Catégories</option>
                    <option value="fs">Full Stack</option>
                    <option value="fe">Site vitrine</option>
                    <option value="dv">Dataviz</option>
                </select>
            </div>
        </div> 

        <!-- grille de projets -->       
        <ul v-if="projetsSelect.length > 0" id="ma-liste" class="overflow-hidden my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-1 place-items-center">

            <!-- card des projets -->
            <li v-for="p in projetsSelect" :key="p.id"
                class="projet_card relative max-w-lg aspect-video md:aspect-square overflow-hidden">

                <!-- Les images -->

                <!--image en mobile-->
                <div class="w-full h-full relative block md:hidden aspect-video delay-200 duration-500">
                    <img class="object-cover w-full h-ful"
                        :src="p.image_rect" :alt="'Image de mon projet '+p.titre">
                </div>

                <!--image en pc-->
                <div class="w-full h-full relative hidden md:block aspect-square delay-200 duration-500">
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

        <div v-else-if="projetsSelect.length == 0 && (genreSelect != '' || catSelect != '')" class="px-4 sm:px-20">
            <p class="big-title-glitch title-glitch tg relative block w-fit mx-auto text-center text-xl" data-text="Aucun projet ne correspond à votre recherche." >Aucun projet ne correspond à votre recherche.</p>
        </div>

        <div v-else class="w-full h-screen relative">
            <monChargement/>
         </div>

        <RouterLink to="/">
            <monBouton class="mx-auto my-32 md:my-52">Hello World</monBouton>
        </RouterLink>

    </div>
</template>

<style scoped>
.mon_select{
    display: block;
    position: relative;
    width: fit-content;
    height: fit-content;
    z-index: 1;
}

.mon_select::before,
.mon_select::after{
    content: "";
    position: absolute;
    display: block;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(-2%, -4%);
    background-color: #22d3ee;
    transition: all 200ms;
}

.mon_select::after{
    transform: translate(2%, 4%);
    background-color: #d946ef;
}

.mon_select:hover::before{
    transform: translate(-5%, -10%);
}

.mon_select:hover::after{
    transform: translate(5%, 10%);
}

.tg::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -1px;
    color: #ffedd5;
    text-shadow: -3px 0 #d946ef;
    background: #1f1f1f;
    overflow: hidden;
}

.tg::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0px;
    color: #ffedd5;
    text-shadow: -3px 0 #22d3ee;
    background: #1f1f1f;
    overflow: hidden;
    clip-path: inset(61% 0% 0% 0%);
}
</style>

<script setup>
import monChargement from "@/components/monChargement.vue";
import monBouton from "@/components/monBouton.vue";

import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useProjetsStore } from "@/stores/projetsStore.js";

const store = useProjetsStore()
const projetsSelect = ref([]);
const genreSelect = ref(""); // select
const catSelect = ref(""); // select

function projetsSelectFonction() {
    projetsSelect.value = store.listeProjet;

    if (genreSelect.value != ''){
        projetsSelect.value = projetsSelect.value.filter(projet => projet.genre == genreSelect.value);
    }
    
    if(catSelect.value != ''){
        projetsSelect.value = projetsSelect.value.filter(projet => projet.categorie == catSelect.value);
    }

    return projetsSelect.value;
}

let stopWatcherSelect;

onMounted(() => {
    if(store.listeProjet.length > 0) {
        projetsSelect.value = store.listeProjet;
    }
    else {
        // on attend le chargement des projets
        const stopWatcherListe = watch(
            () => store.listeProjet.length,
            () => {
                projetsSelect.value = store.listeProjet;
                stopWatcherListe(); // pour stoper le watcher (la liste à afficher à été chargé 1 foix, il n'y a plus de raison qu'elle change)
            }
        );
    }
    // si les projets sont chargés, observé les select
    stopWatcherSelect = watch(
        [() => genreSelect.value, () => catSelect.value],
        () => {
            projetsSelectFonction()
        }
    );
});

onUnmounted(() => {
    stopWatcherSelect();
});
</script>