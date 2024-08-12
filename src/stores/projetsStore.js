import { defineStore } from 'pinia'

import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    orderBy,        // Permet de demander le tri d'une requête query
    limit
    } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js'

export const useProjetsStore = defineStore('projetsStore', {
    state: () => ({ 
        listeProjet:[], // liste de tous les projets
        projetsScreen: [], // liste réduite pour la page d'accueil, pour évité de refaire le calcul
    }),
    getters: {
        // afficher les projets du plus récent au plus ancien
        orderByDate() {
            return this.listeProjet.sort((a,b) => {
                if(a.date_ajout < b.date_ajout) return 1;
                if(a.date_ajout > b.date_ajout) return -1;
                return 0;
            });
        },
    },
    actions: {
        async getProjetsListe() {
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

                    const spaceRef_rect2 = ref(storage, projet.image_rect2);
                    getDownloadURL(spaceRef_rect2)
                    .then((url) => {
                        projet.image_rect2 = url;
                    })
    
                    .catch((error) => {
                        console.log("erreur lors du chargement des images depuis firebase", error);
                    });
                });

                this.listeProjet = this.orderByDate;
            });
        },
    },
})