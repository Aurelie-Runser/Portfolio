<template>
    <head>
        <meta name="robots" content="noindex"/>
    </head>
    
    <div>
        <div v-if="isLoaded">

            <div class="ma-section my-0">
                <h1 class="big-title-glitch title-glitch tg-anim-projet relative mt-10 md:mt-20"
                    :data-text="projet.titre">
                    {{ projet.titre }}
                </h1>
    
            <!--image + infos rapide-->
            <div class="my-10 md:my-16 flex flex-col md:flex-row-reverse">

                <!-- image + Bouton "voir"-->
                <div class="place-items-end reltaive"> 
                    <div class="relative">
                        <img :src="projet.image_rect" :alt="'image de mon projet '+projet.titre" class="borderAnim">
                    </div>
        
                    <a v-if="projet.lien" target="_blank" :href="projet.lien" rel="noopener noreferrer">
                        <monBouton class="mx-auto mt-8">
                            Voir le Projet
                        </monBouton>
                    </a>
                    <a v-else-if="projet.rapport" target="_blank" :href="projet.rapport" rel="noopener noreferrer">
                        <monBouton class="mx-auto mt-8">
                            Lire le Rapport
                        </monBouton>
                    </a>
                    <a v-else-if="projet.github" target="_blank" :href="projet.github" rel="noopener noreferrer">
                        <monBouton class="mx-auto mt-8">
                            <div class="w-6 sm:w-7 xl:w-10 aspect-square">
                                <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="#1f1f1f" d="M20.116 5.901a4 4 0 0 0-.26-.31a4.4 4.4 0 0 0 .21-.76a5.3 5.3 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.5 12.5 0 0 0-3.35-.45a12.6 12.6 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.26 5.26 0 0 0-.35 2.77a4.2 4.2 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a8 8 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.56 2.56 0 0 0-.77 1.39a4 4 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.7 5.7 0 0 0-1.834-2.413a1 1 0 0 1-.17-.112a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.5 4.5 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1h4.714a1 1 0 0 0 1-1s.008-3.16.008-3.69a4 4 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.53 2.53 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a8 8 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3Z"/></svg>
                            </div>
                        </monBouton>
                    </a>
                </div>
    
                <!-- infos rapides -->
                <div class="flex-none w-full pr-3 mt-10 md:w-1/2 lg:mt-0 flex flex-col gap-5 xl:gap-8">
        
                    <p class="font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                        Année : 
                        <span class="font-darker-grotesque text-base md:text-lg xl:text-xl font-light text-stone-300">
                            {{ projet.annee }}
                        </span>
                    </p>
            
                    <p class="font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                        Type : 
                        <span class="font-darker-grotesque text-base md:text-lg xl:text-xl font-light text-stone-300">
                            {{ projet.type }}
                        </span>
                    </p>

                    <div>
                        <p class="font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                            Outils :
                        </p>
                        <ul class="flex flex-wrap items-center justify-start mt-4 gap-x-4 gap-y-2">
                            <li v-for="techno in projet.technos" :key="techno"
                                class="technoAnim flex flex-wrap items-center justify-center gap-0.5 sm:gap-1
                                        font-darker-grotesque text-base md:text-lg xl:text-xl text-stone-300">
                                <img class="w-8 sm:w-12 aspect-square object-contain" :src="techno.svg" :alt="`logo de ${techno.nom}`">
                                <span class="font-darker-grotesque text-base md:text-lg xl:text-xl font-light text-stone-300">
                                    {{techno.nom}}
                                </span>
                            </li>
                        </ul>
                    </div>        
                </div>

            </div>

            <!-- long texte-->            
            <div>
                <p class="mb-5 font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                    Description :
                </p>
    
                <p v-for="text in projet.contexte_all" class="mb-5 font-darker-grotesque text-base md:text-lg text-stone-300 leading-7">
                    {{ text }}
                </p>
        
                <!-- 2eme image -->
                <div class="h-fit w-full xl:w-1/2 xl:mr-10 my-5 float-left borderAnim">
                    <video v-if="projet.video" :key="videoKey" :poster="projet.image_rect" controls muted autoplay loop class="aspect-video">
                        <source :src="projet.video" type="video/mp4">
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                    <img v-else :src="projet.image_rect2" :alt="'image de mon projet '+ projet.titre">
                </div>
    
                <p v-for="text in projet.contexte_all_2" class="mb-5 font-darker-grotesque text-base md:text-lg text-stone-300 leading-7">
                    {{ text }}
                </p>
            </div>
    

            <div class="py-10 md:py-16 flex flex-wrap gap-10 justify-center items-center">
                <a v-if="projet.lien" target="_blank" :href="projet.lien" rel="noopener noreferrer">
                    <monBouton>
                        Voir le Projet
                    </monBouton>
                </a>
                <a v-if="projet.github" target="_blank" :href="projet.github" rel="noopener noreferrer">
                    <monBouton>
                        <div class="w-6 sm:w-7 xl:w-10 aspect-square">
                            <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="#1f1f1f" d="M20.116 5.901a4 4 0 0 0-.26-.31a4.4 4.4 0 0 0 .21-.76a5.3 5.3 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.5 12.5 0 0 0-3.35-.45a12.6 12.6 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.26 5.26 0 0 0-.35 2.77a4.2 4.2 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a8 8 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.56 2.56 0 0 0-.77 1.39a4 4 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.7 5.7 0 0 0-1.834-2.413a1 1 0 0 1-.17-.112a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.5 4.5 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1h4.714a1 1 0 0 0 1-1s.008-3.16.008-3.69a4 4 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.53 2.53 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a8 8 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3Z"/></svg>
                        </div>
                    </monBouton>
                </a>
                <a v-if="projet.rapport" target="_blank" :href="projet.rapport" rel="noopener noreferrer">
                    <monBouton>
                        Lire le Rapport
                    </monBouton>
                </a>
            </div>

        </div>


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
                            <monBouton :small="true">Plus de Projets</monBouton>
                        </RouterLink>

                        <RouterLink to="/">
                            <monBouton :small="true">Hello World</monBouton>
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
import { useCompetencesStore } from "@/stores/competencesStore.js";

const route = useRoute()
const router = useRouter()
const store = useProjetsStore();
const storeCompetence = useCompetencesStore();

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
        // meta description de la page
        document.title = `Aurélie Runser - ${projet.value.titre}`;
        const description = `${projet.value.titre}, projet web réalisé en ${projet.value.annee_resume} par Aurélie Runser.`;
        document.querySelector('meta[name="description"]')?.setAttribute("content", description);

        projet.value.technos = [];
        projet.value.outils.forEach(techno => {
            projet.value.technos.push(storeCompetence.listeCompetence.find((comp) => techno == comp.nom));
        });
        
        // key pour changer la vidéo lors d'un changement de projet
        const projetId = store.listeProjet.findIndex((p) => p.id == route.params.id);
        videoKey.value = projetId; 

        // dernier projet ou 3ème dernier si sur le plus recent
        if (projetId != 0) projetDernier.value = store.projetDernier
        else projetDernier.value = store.listeProjet[3]

        // projet précédent ou 3ème réaliser si sur le plus ancient
        if (projetId == store.listeProjet.length-1) projetPrecedent.value = store.listeProjet[projetId-2]
        else projetPrecedent.value = store.listeProjet[projetId+1]

        // projet suivant ou les 2 derniers si sur dernier/avant-dernier projet
        if (projetId <= 1) projetSuivant.value = store.listeProjet[projetId+2]
        else projetSuivant.value = store.listeProjet[projetId-1]

        isLoaded.value = true;
    }
}

const isFullWidth = computed(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1536) screenWidth = 1536;
    
    const gap = 4;
    const minCardWidth = 320;
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