<template>
    <head>
        <meta name="robots" content="noindex"/>
    </head>
    
    <div class="pt-24 overflow-x-hidden">

        <div v-if="isLoading">

            <h1 class="big-title-glitch title-glitch tg-anim-projet relative
                        mx-7 md:mx-14 xl:mx-28"
                :data-text="projet.titre">
                {{ projet.titre }}
            </h1>
    
            <!--image + infos rapide-->
            <div class="flex flex-col lg:flex-row-reverse">

                <!-- image + Bouton "voir"-->
                <div class="mt-10 place-items-end">
                    <div class="projet_img relative z-10">
                        <img :src="projet.image_rect" :alt="'image de mon projet '+projet.titre">
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
                    Création :
                </p>
    
                <p v-for="text in projet.contexte_all" class="mx-5 my-5 md:mx-14 xl:mx-28 leading-7
                                                            font-darker-grotesque text-base md:text-lg text-stone-300">
                    {{ text }}
                </p>
    
                <div class="lg:flex flex-wrap">
    
                    <!-- 2eme image -->
                    <div class="projet_img relative z-10 my-16 w-screen sm:mx-auto sm:w-2/3 h-fit lg:w-1/2">
                        <!-- <img class="w-full" :src="projet.image_rect2" :alt="'image de mon projet '+ projet.titre"> -->
                        <video controls width="full">
                        <source :src="projet.image_rect" type="video/webm" />

                        </video>
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
                <monBouton class="mx-auto my-20 md:my-40">
                    Voir le Projet
                </monBouton>
            </a>
        
        

            <hr class="separateur mx-auto border-none w-5/6 h-1"/>


            <div class="flex flex-wrap justify-evenly gap-20 mx-auto my-32 md:my-52 w-5/6">
                <RouterLink to="/">
                    <monBouton>Hello World</monBouton>
                </RouterLink>
        
                <RouterLink @click="menuOuvert = false" to="/projets">
                    <monBouton>Autres Projets</monBouton>
                </RouterLink>

            </div>

        </div>

        <div v-else class="w-full h-screen relative">
            <monChargement/>
        </div>

    </div>
</template>


<style>

/* style du separateur */
.separateur{
    animation: hr_color 3s linear infinite;
}

@keyframes hr_color {
    0%{background-color: #22d3ee;}
    50%{background-color: #d946ef;}
    100%{background-color: #22d3ee;}
}

/* style des images */
.projet_img::before{
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    width: 98%;
    height: 100%;
    top: -4%;
    left: -2%;
    background-color: #22d3ee;
}
.projet_img::after{
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    width: 98%;
    height: 100%;
    top: 4%;
    left: 2%;
    background-color: #d946ef;
}

/* taille du guillement sur moyen net grand écran */
@media screen and (min-width: 768px) {
    .projet_img::before,
    .projet_img::after{
        width: 100%;
    }
}


/* animation de l'effet gltich du titre */
.tg-anim-projet::before{
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

.tg-anim-projet::after{
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
    animation: glitch 3s linear infinite alternate-reverse;
}

@keyframes glitch {
    5%{
        clip-path: inset(48% 0 0 0);
    } 
    7.5%{
        clip-path: inset(70% 0 0 0);
    }
    10%{
        clip-path: inset(60% 0 0 0);
    }
    12.5%{
        clip-path: inset(37% 0 0 0);
    }
    15%{
        clip-path: inset(0 0 0 0);
    }
    17.5%{
        clip-path: inset(0 0 40% 0);
    }
    20%{
        clip-path: inset(0 0 40% 0);
    }
    22.5%{
        clip-path: inset(0 0 60% 0);
    }
    25%{
        clip-path: inset(0 0 30% 0);
    }
    27.5%{
        clip-path: inset(0 0 50% 0);
    }
    30%{
        clip-path: inset(40% 0 0 0);
    }
    32.5%{
        clip-path: inset(33% 0 0 0);
    } 
    35%{
        clip-path: inset(48% 0 0 0);
    } 
    37.5%{
        clip-path: inset(70% 0 0 0);
    }
    40%{
        clip-path: inset(60% 0 0 0);
    }
    42.5%{
        clip-path: inset(37% 0 0 0);
    }
    45%{
        clip-path: inset(0 0 0 0);
    }
    47.2%{
        clip-path: inset(0 0 40% 0);
    }
    50%{
        clip-path: inset(0 0 40% 0);
    }
    52.%{
        clip-path: inset(33% 0 0 0);
    } 
    55%{
        clip-path: inset(48% 0 0 0);
    } 
    57.5%{
        clip-path: inset(70% 0 0 0);
    }
    60%{
        clip-path: inset(60% 0 0 0);
    }
    62.5%{
        clip-path: inset(37% 0 0 0);
    }
    65%{
        clip-path: inset(0 0 0 0);
    }
    67.5%{
        clip-path: inset(0 0 40% 0);
    }
    70%{
        clip-path: inset(0 0 40% 0);
    }
    72.5%{
        clip-path: inset(0 0 60% 0);
    }
    75%{
        clip-path: inset(0 0 30% 0);
    }
    77.5%{
        clip-path: inset(0 0 50% 0);
    }
    80%{
        clip-path: inset(40% 0 0 0);
    }
    82.5%{
        clip-path: inset(33% 0 0 0);
    } 
    85%{
        clip-path: inset(48% 0 0 0);
    } 
    87.5%{
        clip-path: inset(70% 0 0 0);
    }
    90%{
        clip-path: inset(60% 0 0 0);
    }
    92.5%{
        clip-path: inset(37% 0 0 0);
    }
    95%{
        clip-path: inset(0 0 0 0);
    }
    97.5%{
        clip-path: inset(0 0 40% 0);
    }
    100%{
        clip-path: inset(0 0 40% 0);
    }
}

</style>


<script setup>
import monBouton from "@/components/monBouton.vue"
import monChargement from "@/components/monChargement.vue"

import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProjetsStore } from "@/stores/projetsStore.js";

const route = useRoute()
const router = useRouter()
const store = useProjetsStore();

const projet = ref({});
const isLoading = ref(false)

onMounted(() => {

    if(store.listeProjet.length > 0) {
        projet.value = store.listeProjet.find((p) => p.id == route.params.id);

        if (!projet.value || Object.keys(projet.value).length == 0) router.push('/');
        else isLoading.value = true;
    }
    else {
        // on attend le chargement des projets
        const stopWatcher = watch(
            () => store.listeProjet.length,
            () => {
                projet.value = store.listeProjet.find((p) => p.id == route.params.id);

                if (!projet.value || Object.keys(projet.value).length == 0) router.push('/');
                else isLoading.value = true;

                stopWatcher(); // pour stoper le watcher (le projet à afficher a été chargé 1 foix, il n'y a plus de raison qu'il change)
            }
        );
    }
});
</script>