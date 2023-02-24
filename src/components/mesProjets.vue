<template>
    <section class="">
        <h2 class="">Mes Projets</h2>

        <div class="-mx-7 md:-mx-10 my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))]">
            <div v-for="p in listeProjet" :key="p.id"
                class="projet_card relative my-1 md:mx-1 basis-96 grow">

                <!-- Les images-->
                <div class="card_img md:hidden w-full aspect-video">
                    <img class="object-cover h-full"
                         :src="p.image_rect" :alt="'Image de mon projet '+p.titre">
                </div>

                <div class="card_img hidden md:block aspect-square">
                    <img class="object-cover"
                         :src="p.image_card" :alt="'Image de mon projet '+p.titre">
                </div>

                <!--Le texte-->
                <p class="absolute top-0 hidden">{{ p.titre }}</p>

                <!--les decos-->
                <div class="card_deco deco_b absolute bottom-0 right-4 w-5 h-5 md:w-8 md:h-8 bg-fuchsia-500"></div>
                <div class="card_deco deco_t absolute top-0 left-0 w-5 h-5 md:w-8 md:h-8 bg-cyan-400"></div>
            </div>
        </div>

    </section>
</template>

<style scoped>

/* .projet_card:hover .card_img{
    width: 90%;
    height: 90%;
    margin: 0 auto;
}
.projet_card:hover .card_deco{
    width: 90%;
    height: 90%;
    opacity: 70%;
} */

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