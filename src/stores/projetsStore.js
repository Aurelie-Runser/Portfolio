import { defineStore } from 'pinia'
import projetsData from '@/donnees/projetsData.json'; 

export const useProjetsStore = defineStore('projetsStore', {
    state: () => ({ 
        listeProjet: projetsData, // liste de tous les projets
        projetsScreen: [], // liste réduite pour la page d'accueil, pour évité de refaire le calcul
        projetDernier: projetsData[0], // dernier projet réalisé
    }),
})