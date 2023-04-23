<template>
    <section class="my-32">
        <h2>Mes Projets</h2>

        <!-- grille de projets -->
        <ul id="ma-liste" class="overflow-hidden -mx-7 md:-mx-10 my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">

            <!-- card des projets -->
            <li v-for="p in listeProjets" :key="p.id"
                class="projet_card relative grid content-center justify-items-center basis-96 grow aspect-video md:aspect-square">

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

                <!-- les decos -->
                <div class="card_deco deco_b absolute bottom-0 right-0 w-5 h-5 md:w-8 md:h-8 bg-fuchsia-500 duration-500"></div>
                <div class="card_deco deco_t absolute top-0 left-0 w-5 h-5 md:w-8 md:h-8 bg-cyan-400 duration-500"></div>

                <!-- Les textes (qui n'apparraissent qu'au survole) -->
                <div class="card_text absolute top-0 bottom-0 left-[8%] right-[8%] flex flex-col justify-around opacity-0 delay-200 duration-500">
                    
                    <p class="text_card">
                        Contexte :
                        <span class="font-oswald font-extralight">{{ p.contexte_resume }}</span>
                    </p>

                    <p class="text_card">
                        Type :
                        <span class="font-oswald font-extralight">{{ p.type }}</span>
                    </p>

                    <p class="text_card">
                        Année :
                        <span class="font-oswald font-extralight">{{ p.annee_resume }}</span>
                    </p>

                </div>

                <!-- le bouton pour aller sur le projet-->
                <RouterLink :to="`/projet/${p.id}`">
                    <button
                        class="card_button translate-x-[120%] translate-y-[120%] absolute bottom-[5%] right-[5%] px-6 py-3 min-w-min w-[25%] h-16 md:h-20 bg-mon-black opacity-0
                                font-oswald text-base md:text-xl tracking-wider text-center text-stone-300">
                        Voir
                    </button>
                </RouterLink>

            </li>

        </ul>

    </section>
</template>

<style scoped>

/* assombrissement de l'image survole de la card */
.projet_card:hover .card_img{
    filter: brightness(0.25);
}

/* modification des carrés au survole de la card */
.projet_card:hover .card_deco{
    width: 95%;
    height: 95%;
    opacity: 50%;
}

/* affichage des texte et du bouton au survole de la card */
.projet_card:hover .card_text,
.projet_card:hover .card_button{
    opacity: 100%;
    transform: translate(0);
    transition: opacity 200ms 500ms;
    
}

</style>


<script>

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
        listeProjets:function(){
            return this.orderByDate;
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