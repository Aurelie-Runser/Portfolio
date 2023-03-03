<template>
    <main class="pt-24  overflow-x-hidden">
        <h1 class="big-title-glitch title-glitch tg-anim relative
                    mx-7 md:mx-14 xl:mx-28"
            :data-text="projet.titre">
            {{ projet.titre }}
        </h1>

        <div class="my-16 w-full md:absolute md:right-0 md:m-0 md:w-1/2 ">
            <div class="projet_img relative z-10">
                <img :src="img_rect" alt="image non trouver">
            </div>
    
            <a target="_blank" :href="projet.lien">
                <monBouton class="mx-auto my-16">
                    Voir le Projet
                </monBouton>
            </a>
        </div>

        <div class="px-7 md:px-10">
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
                <p v-for="(text, key) in projet.outils" :key="key" class="mx-5 mt-2 mb-3 md:mx-14 md:mt-5 md:mb-5 xl:mx-28 sm:indent-5 md:indent-10 xl:inset-16
                                                                        font-darker-grotesque text-base md:text-lg xl:text-xl text-stone-300">
                    - {{key}} : <span class="font-bold">{{ text }}</span>
                </p>
            </div>
    
            <div>
                <p class="mx-5 my-8 md:mx-14 md:my-10 xl:mx-28 xl:my-16
                        font-oswald font-bold text-lg md:text-xl xl:text-2xl text-orange-100">
                    Contexte :
                </p>
                <p v-for="text in projet.contexte_all" class="mx-5 my-7 md:mx-14 md:my-9 xl:mx-28 xl:my-12
                                                            font-darker-grotesque text-base md:text-lg xl:text-xl text-stone-300">
                    {{ text }}
                </p>
            </div>
            
        </div>

        <div class="h-8"></div>


    </main>
</template>

<style>

.projet_img::before{
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
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


/* animation de l'effet gltich du titre */
.tg-anim::before{
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

.tg-anim::after{
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

.tg-anim:hover::after{
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


<script>

// import des composants
import monBouton from "../components/monBouton.vue"

// import des fonctions firebases
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js'


export default {
    name:'ProjetView',
    components: {monBouton},

    data() {
        return {
            imgData: null,
            projet:{
                anne: null,
                contexte_all: null,
                image_rect: null,
                lien: null,
                titre: null,
                type: null, 
                contexte_all_test: [],
            },
            
            refProjet:null,
            img_rect:null 
        }
    },

    mounted(){
        this.getProjet(this.$route.params.id)
    },

    methods :{

        async getProjet(id){
            const firestore = getFirestore();
            const docRef = doc(firestore, "projet", id);
            this.refProjet = await getDoc(docRef);
            if(this.refProjet.exists()){
                this.projet = this.refProjet.data();
                this.img_rect = this.projet.image_rect;
            }
            else{
                this.console.log("Projet Inexistant");
            }

            const storage = getStorage();
            const spaceRef = ref(storage, this.projet.image_rect);
            getDownloadURL(spaceRef)
                .then((url) => {
                    this.img_rect = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })

        },
    }
}

</script>