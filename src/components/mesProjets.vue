<template>
    <section class="my-28">
        <h2>Mes Projets</h2>

        <!-- grille de projets -->
        <ul id="ma-liste" class="-mx-7 md:-mx-10 my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-y-1 md:gap-1">

            <!-- card des projets -->
            <li v-for="p in listeProjet" :key="p.id"
                class="projet_card relative grid content-center justify-items-center basis-96 grow aspect-video md:aspect-square">

                <!-- Les images -->
                <!--image en mobile-->
                <div class="card_img relative block md:hidden aspect-video delay-200 duration-500">
                    <img class="object-cover h-full"
                         :src="p.image_rect" :alt="'Image de mon projet '+p.titre">
                </div>

                <!--image en pc-->
                <div class="card_img relative hidden md:block aspect-square delay-200 duration-500">
                    <img class="object-cover"
                         :src="p.image_card" :alt="'Image de mon projet '+p.titre">
                </div>

                <!-- les decos -->
                <div class="card_deco deco_b absolute bottom-0 right-0 w-5 h-5 md:w-8 md:h-8 bg-fuchsia-500 duration-500"></div>
                <div class="card_deco deco_t absolute top-0 left-0 w-5 h-5 md:w-8 md:h-8 bg-cyan-400 duration-500"></div>

                <!-- Les textes (qui n'apparraissent qu'au survole) -->
                <div class="card_text absolute top-0 bottom-0 left-[8%] right-[8%] flex flex-col justify-around opacity-0 delay-200 duration-500">
                    
                    <p class="font-oswald
                            text-base sm:text-lg xl:text-xl
                            tracking-wider text-slate-300">
                        Contexte :
                        <span class="font-oswald font-extralight">{{ p.contexte_resume }}</span>
                    </p>

                    <p class="font-oswald
                            text-base sm:text-lg xl:text-xl
                            tracking-wider text-slate-300">
                        Type :
                        <span class="font-oswald font-extralight">{{ p.type }}</span>
                    </p>

                    <p class="font-oswald
                            text-base sm:text-lg xl:text-xl
                            tracking-wider text-slate-300">
                        Année :
                        <span class="font-oswald font-extralight">{{ p.annee_resume }}</span>
                    </p>

                </div>

                <button id="voir"
                    class="card_button absolute bottom-[5%] right-[5%] px-6 py-3 min-w-min w-[25%] h-16 md:h-20 bg-mon-black opacity-0 delay-200 duration-500
                            font-oswald text-base md:text-xl tracking-wider text-center text-stone-300">
                    Voir
                </button>

            </li>

        </ul>

        <button></button>

    </section>
</template>

<style scoped>

/* assombrissement de l'image survole de la card */
.projet_card:hover .card_img{
    filter: brightness(0.5);
}

/* modification des décos au survole de la card */
.projet_card:hover .card_deco{
    width: 95%;
    height: 95%;
    opacity: 50%;
}

/* affichage des texte et du bouton au survole de la card */
.projet_card:hover .card_text,
.projet_card:hover .card_button{
    opacity: 100%;
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
    orderBy         // Permet de demander le tri d'une requête query
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

    mounted(){
        this.getProjets();
    },

    methods: {

        async getProjets() {
            const firestore = getFirestore();
            const dbProjet = collection(firestore, "projet");           
            const query = await onSnapshot(dbProjet, (snapshot) => {
                console.log("query", query);
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
                console.log("listeProjet", this.listeProjet);
            });
        },
    },
}


</script>