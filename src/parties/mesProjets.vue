<template>
    <section class="my-32">
        <h2>Mes Projets</h2>

        <!-- grille de projets -->
        <ul id="ma-liste" class="overflow-hidden -mx-7 md:-mx-10 my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-1">

            <!-- card des projets -->
            <li v-for="p in listeProjets" :key="p.id"
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


<script>
import monBouton from "../components/monBouton.vue"

import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy,        // Permet de demander le tri d'une requête query
    limit
    } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js'

export default {
    name : "ProjetView",
    components: {monBouton},

    data(){
        return{
            listeProjet:[]
        }
    },

    computed:{
        orderByDate:function(){
            return this.listeProjet.sort(function(a,b){
                if(a.date_ajout < b.date_ajout) return 1;
                if(a.date_ajout > b.date_ajout) return -1;
                return 0;
            });
        },
        listeProjets: function(){
            const screenWidth = window.innerWidth;
            const gap = 4; // Gap entre les cartes
            const minCardWidth = 320; // Largeur minimale de chaque carte
            let cardsPerRow;

            if (screenWidth <= 767) {
                // Mobile view
                return this.orderByDate.slice(0, 4);
            } else {
                // Desktop view
                // Calculer le nombre de cartes qui peuvent tenir dans une ligne
                cardsPerRow = Math.floor((screenWidth + gap) / (minCardWidth + gap));
                // Limiter le nombre de cartes à 2 lignes
                return this.orderByDate.slice(0, cardsPerRow * 2);
            }
        }
    },

    mounted(){
        this.getProjets();
    },

    methods: {

        async getProjets() {
            const firestore = getFirestore();
            const dbProjet = collection(firestore, "projet");           
            const query = await onSnapshot(dbProjet, (snapshot) => {
                this.listeProjet = snapshot.docs.map((doc) => (
                    {id: doc.id,...doc.data()}
                ));

                this.listeProjet.forEach(function (projet) {
                    const storage = getStorage();
    
                    const spaceRef_rect = ref(storage, projet.image_rect);
                    getDownloadURL(spaceRef_rect)
                    .then((url) => {
                        projet.image_rect = url;
                    })
    
                    const spaceRef_card = ref(storage, projet.image_card);
                    getDownloadURL(spaceRef_card)
                    .then((url) => {
                        projet.image_card = url;
                    })
    
                    .catch((error) => {
                        console.log("erreur downloadUrl", error);
                    });
                });
            });

            
        },
    },
}


</script>