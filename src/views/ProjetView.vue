<template>
    <main>
        <h1></h1>
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
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    name:'ProjetView',
    components: {monBouton},

    data() {
        return {
            imgData: null,
            projet:{
                titre: null,
                image_card: null,
            },

            refProjet:null,
            imgModifie:false,
            imgActuelle:null 
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
                // this.imgActuelle = this.projet.image;
            }
            else{
                this.console.log("Projet Inexistant");
            }

            // const storage = getStorage();
            // const spaceRef = ref(storage, 'projet/'+this.projet.image);
            // getDownloadURL(spaceRef)
            //     .then((url) => {
            //         this.imgData = url;
            // })
            // .catch((error) =>{
            //     console.log('erreur downloadUrl', error);
            // })
        },
    }
}

</script>