<template>
    <head>
        <meta name="robots" content="noindex"/>
    </head>
    
    <div class="pt-24 overflow-x-hidden">

        <div v-if="isLoaded">

            <h1 class="big-title-glitch title-glitch tg-anim-projet relative
                        mx-7 md:mx-14 xl:mx-28"
                :data-text="projet.titre">
                {{ projet.titre }}
            </h1>
    
            <!--image + infos rapide-->
            <div class="flex flex-col lg:flex-row-reverse">

                <!-- image + Bouton "voir"-->
                <div class="mt-10 place-items-end">
                    <div class="relative">
                        <img :src="projet.image_rect" :alt="'image de mon projet '+projet.titre" class="borderAnim">
                    </div>
        
                    <a target="_blank" :href="projet.lien" rel="noopener noreferrer">
                        <monBouton class="mx-auto mt-16">
                            Voir le Projet
                        </monBouton>
                    </a>
                </div>
    
                <!-- infos rapides -->
                <div class="flex-none w-full lg:w-1/2">
        
                    <p class="mx-5 my-8 md:mx-14 md:my-10 xl:mx-28 xl:my-16
                            font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                        Année : 
                        <span class="ml-5 font-darker-grotesque text-base md:text-lg xl:text-xl text-stone-300">
                            {{ projet.annee }}
                        </span>
                    </p>
            
                    <p class="mx-5 my-8 md:mx-14 md:my-10 xl:mx-28 xl:my-16
                            font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                        Type : 
                        <span class="ml-5 font-darker-grotesque text-base md:text-lg xl:text-xl text-stone-300">
                            {{ projet.type }}
                        </span>
                    </p>
            
            
                    <div>
                        <p class="mx-5 mt-8 mb-0 md:mx-14 md:mt-10 xl:mx-28 xl:mt-16
                                font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                            Outils :
                        </p>
                        <p v-for="(text, key) in projet.outils" :key="key" 
                            class="mx-5 mt-2 mb-3 md:mx-14 md:mt-5 md:mb-5 xl:mx-28 sm:indent-5 md:indent-10 xl:inset-16
                                    font-darker-grotesque text-base md:text-lg xl:text-xl font-light text-stone-300">
                            - {{key}} : <span class="font-darker-grotesque text-base md:text-lg xl:text-xl font-extrabold text-orange-100">{{ text }}</span>
                        </p>
                    </div>
            
        
                </div>

            </div>

            <!-- long texte-->            
            <div>
                <p class="mx-5 my-8 md:mx-14 md:my-10 xl:mx-28
                        font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                    Description :
                </p>
    
                <p v-for="text in projet.contexte_all" class="mx-5 my-5 md:mx-14 xl:mx-28 leading-7
                                                            font-darker-grotesque text-base md:text-lg text-stone-300">
                    {{ text }}
                </p>
    
                <div class="lg:flex flex-wrap">
    
                    <!-- 2eme image -->
                    <div class="my-16 w-screen sm:mx-auto sm:w-2/3 lg:w-1/2 borderAnim">
                        <video v-if="projet.video" :key="videoKey" :poster="projet.image_rect" controls muted autoplay loop class="aspect-video">
                            <source :src="projet.video" type="video/mp4">
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                        <img v-else :src="projet.image_rect2" :alt="'image de mon projet '+ projet.titre">
                    </div>

                    <div class="inline-block basis-1/3 grow">
    
                        <p v-for="text in projet.contexte_all_2" class="mx-5 my-5 md:mx-14 leading-7
                                                                    font-darker-grotesque text-base md:text-lg text-stone-300
                                                                     ">
                            {{ text }}
                        </p>
                    </div>
                </div>
    
                <p v-for="text in projet.contexte_all_3" class="mx-5 my-5 md:mx-14 xl:mx-28 leading-7
                                                            font-darker-grotesque text-base md:text-lg text-stone-300">
                    {{ text }}
                </p>
            </div>
    
            <a target="_blank" :href="projet.lien" rel="noopener noreferrer">
                <monBouton class="mx-auto my-10">
                    Voir le Projet
                </monBouton>
            </a>

            <!-- liste d'autres projets -->
            <ul class="max-w-screen-2xl mx-auto mt-28 md:mt-44 md:grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-1 place-items-center">
    
                <li v-if="projetDernier" class="overflow-hidden w-full">
                    <maCard v-bind="projetDernier"/>
                </li>
                <li v-if="projetSuivant" class="overflow-hidden w-full">
                    <maCard v-bind="projetSuivant"/>
                </li>
                <li v-if="projetPrecedent" class="overflow-hidden w-full">
                    <maCard v-bind="projetPrecedent"/>
                </li>
                <li class="w-full" :class="{'col-span-full': !isFullWidth}">
                    <div class="w-full flex flex-wrap justify-center gap-x-20 gap-y-5 mx-auto px-5 py-7">
                        <RouterLink @click="menuOuvert = false" to="/projets">
                            <monBouton class="scale-75">Plus de Projets</monBouton>
                        </RouterLink>

                        <RouterLink to="/">
                            <monBouton class="scale-75">Hello World</monBouton>
                        </RouterLink>
                    </div>
                </li>
            </ul>
        </div>

        <div v-else class="w-full h-screen relative">
            <monChargement/>
        </div>

    </div>
</template>


<style>
/* animation de l'effet gltich du titre */
.tg-anim-projet::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -1px;
    color: #ffedd5;
    text-shadow: -2.5px 0 #d946ef;
}

.tg-anim-projet::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0px;
    color: #ffedd5;
    text-shadow: 2.5px 0 #22d3ee;
    background: #1f1f1f;
    clip-path: inset(61% 0% 0% 0%);
    animation: glitch 2s linear infinite alternate;
}
</style>


<script setup>
import monBouton from "@/components/monBouton.vue"
import maCard from "@/components/maCard.vue"
import monChargement from "@/components/monChargement.vue"

import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProjetsStore } from "@/stores/projetsStore.js";

const route = useRoute()
const router = useRouter()
const store = useProjetsStore();

const projet = ref();
const projetDernier = ref();
const projetPrecedent = ref();
const projetSuivant = ref();
const isLoaded = ref(false)
const videoKey = ref();

const verifProjetExiste = () => {
    projet.value = store.listeProjet.find((p) => p.id == route.params.id);

    if (!projet.value) router.push('/');
    else {
        const projetId = store.listeProjet.findIndex((p) => p.id == route.params.id);
        videoKey.value = projetId; 

        // dernier projet
        if (projetId != 0) projetDernier.value = store.projetDernier
        else projetDernier.value = null

        // projet précédent
        if (projetId == store.listeProjet.length-1) projetPrecedent.value = store.listeProjet[projetId-2]
        else projetPrecedent.value = store.listeProjet[projetId+1]

        // projet suivant
        if (projetId <= 1) projetSuivant.value = store.listeProjet[projetId+2]
        else projetSuivant.value = store.listeProjet[projetId-1]

        isLoaded.value = true;
    }
}

const isFullWidth = computed(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1536) screenWidth = 1536;
    
    const gap = 4; // Gap entre les card
    const minCardWidth = 320; // Largeur minimale de chaque card
    const cardsPerRow = Math.floor((screenWidth + gap) / (minCardWidth + gap));

    return 4 % cardsPerRow == 0;
});

onMounted(() => {
    if(store.projetDernier.titre) {
        verifProjetExiste()
    }
    else {
        // on attend le chargement des projets
        const stopWatcher = watch(
            () => store.projetDernier.titre,
            () => {
                verifProjetExiste()
                stopWatcher(); // pour stoper le watcher (le projet à afficher a été chargé 1 foix, il n'y a plus de raison qu'il change)
            }
        );
    }

    // Watch pour les changements dans les paramètres de la route
    watch(
        () => route.params.id,
        () => { verifProjetExiste() }
    );
});
</script>