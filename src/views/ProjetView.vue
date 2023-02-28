<template>
    <main class="px-7 md:px-10 pt-24">
        <h1>{{ projet.titre }}</h1>

        <img :src="img_rect" alt="image noon trouver">
    </main>
</template>


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
                titre: null,
                image_rect: null,
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