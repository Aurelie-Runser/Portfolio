<template>
    <main class="pt-24">
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
         <div v-if="listeProjet.length == 0" class="w-full h-screen relative">
            <monChargement/>
         </div>
         
        <ul v-else-if="projetsAffichees.length > 0" id="ma-liste" class="overflow-hidden my-16 md:grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-1 place-items-center">

            <!-- card des projets -->
            <li v-for="p in projetsAfficheesFonction" :key="p.id"
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

        <div v-else>
            <p class="text-stone-300 text-center" >Aucun projet ne correspond à votre recherche.</p>
        </div>

        <RouterLink to="/">
            <monBouton class="mx-auto my-32 md:my-52">Hello World</monBouton>
        </RouterLink>

    </main>
</template>

<style>
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
</style>

<script>
import monBouton from "../components/monBouton.vue"
import monChargement from "../components/monChargement.vue"

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
    name : "ProjetsView",
    components: {monBouton, monChargement},

    data(){
        return{
            listeProjet:[],
            projetsAffichees:[],
            catSelect: '',
            genreSelect: '',
        }
    },

    computed:{
        orderByDate() {
            return this.projetsAffichees.sort((a,b) => {
                if(a.date_ajout < b.date_ajout) return 1;
                if(a.date_ajout > b.date_ajout) return -1;
                return 0;
            });
        },

        projetsAfficheesFonction() {
            this.projetsAffichees = this.listeProjet;

            if (this.genreSelect != ''){
                this.projetsAffichees = this.listeProjet.filter(projet => projet.genre == this.genreSelect);
            }
            
            if(this.catSelect != ''){
                this.projetsAffichees = this.projetsAffichees.filter(projet => projet.categorie == this.catSelect);
            }

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

            await onSnapshot(dbProjet, (snapshot) => {
                this.listeProjet = snapshot.docs.map((doc) => (
                    {id: doc.id,...doc.data()}
                ));

                const storage = getStorage();
                this.listeProjet.forEach((projet) => {
    
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

                this.projetsAffichees = this.listeProjet;
            });
        },
    },
}
</script>