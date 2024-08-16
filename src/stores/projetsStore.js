import { defineStore } from 'pinia'
import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    getStorage, 
    ref, 
    getDownloadURL 
} from '@/stores/firebase.js';

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

            // Création d'une promesse pour surveiller la fin du chargement des données
            return new Promise((resolve, reject) => {
                onSnapshot(dbProjet, async (snapshot) => {
                    this.listeProjet = snapshot.docs.map((doc) => (
                        {id: doc.id,...doc.data()}
                    ));

                    const storage = getStorage();

                    try{
                        const imgPromise = this.listeProjet.map(async(projet) => {
                            const svgRef = ref(storage, `projets/${projet.image_card}`);
                            projet.image_card = await getDownloadURL(svgRef);
            
                            const img_rectRef = ref(storage, `projets/${projet.image_rect}`);
                            projet.image_rect = await getDownloadURL(img_rectRef)
            
                            if(projet.video != undefined){
                                const img_videoRef = ref(storage, `projets/${projet.video}`);
                                projet.video = await getDownloadURL(img_videoRef)
                            } else {
                                const img_rect2Ref = ref(storage, `projets/${projet.image_rect2}`);
                                projet.image_rect2 = await getDownloadURL(img_rect2Ref)
                            }          
                        });

                        await Promise.all(imgPromise);
                        resolve();
                    } catch(error){
                        console.log("erreur lors du chargement des images/vidéos depuis firebase :", error)
                        reject(error)
                    }

                    this.listeProjet = this.orderByDate;
                });
            })
        },
    },
})