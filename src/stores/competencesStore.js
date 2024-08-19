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
        listeCompetence: [], // liste de toutes les compétences
        listeCompetenceGroup: [
            {titre: 'Très bonne maîtrise', techno: [], niv: 1},
            {titre: 'Bonne maîtrise', techno: [], niv: 2},
            {titre: 'Maîtrise partielle', techno: [], niv: 3},
            {titre: 'Les Bases', techno: [], niv: 4},
        ], //liste de compétences par groupe de niveau de maîtrise
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

                    const storage = getStorage();

                    // Charger tous les SVGs avant de résoudre la promesse
                    try {
                        const svgPromises = this.listeCompetence.map(async (c) => {
                            const svgRef = ref(storage, `icons/${c.svg}.svg`);
                            c.svg = await getDownloadURL(svgRef);
                        });

                        this.listeCompetence.forEach(comp => {
                            if (comp.niv) this.listeCompetenceGroup[comp.niv-1].techno.push(comp);
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