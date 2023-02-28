<template>
    <main class="pt-24">
        <h1 class="px-7 md:px-10">{{ projet.titre }}</h1>

        <div class="my-16 w-full md:absolute md:right-0 md:m-0 md:w-1/2">
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
            <p class="my-8 font-oswald font-bold text-lg text-orange-100">Année :<span class="ml-5 font-darker-grotesque text-base text-stone-300">{{ projet.annee }}</span></p>
    
            <p class="my-8 font-oswald font-bold text-lg text-orange-100">Type : <span class="ml-5 font-darker-grotesque text-base text-stone-300">{{ projet.type }}</span></p>
    
            <p class="my-8 font-oswald font-bold text-lg text-orange-100">Contex <span class="ml-5 font-darker-grotesque text-base text-stone-300">{{ projet.contexte_all }}</span></p>
        </div>


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
    width: 100%;
    height: 100%;
    top: 4%;
    left: 2%;
    background-color: #d946ef;
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