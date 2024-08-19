import { defineStore } from 'pinia';
import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    getStorage, 
    ref, 
    getDownloadURL 
} from '@/stores/firebase.js';

export const useCompetencesStore = defineStore('competencesStore', {
    state: () => ({ 
        listeCompetence: [] // liste de toutes les compétences
    }),
    actions: {
        async getCompetencesListe() {
            const firestore = getFirestore();
            const dbCompetence = collection(firestore, "competences");

            // Création d'une promesse pour surveiller la fin du chargement des données
            return new Promise((resolve, reject) => {
                onSnapshot(dbCompetence, async (snapshot) => {
                    this.listeCompetence = snapshot.docs.map((doc) => (
                        { id: doc.id, ...doc.data() }
                    ));

                    this.listeCompetence = this.listeCompetence.filter(c => c.techno)

                    const storage = getStorage();

                    // Charger tous les SVGs avant de résoudre la promesse
                    try {
                        const svgPromises = this.listeCompetence.map(async (c) => {
                            let technoPromises
                                technoPromises = c.techno.map(async (t) => {
                                    const svgRef = ref(storage, `icons/${t.svg}.svg`);
                                    t.svg = await getDownloadURL(svgRef);
                                });
                            await Promise.all(technoPromises);
                        });

                        await Promise.all(svgPromises);
                        resolve();
                    } catch (error) {
                        console.log("Erreur lors du chargement des logos depuis Firebase", error);
                        reject(error);
                    }
                });
            });
        },
    },
});