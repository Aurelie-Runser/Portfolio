import { defineStore } from "pinia";
import technosData from "@/donnees/technosData.json";

export const useCompetencesStore = defineStore("competencesStore", {
  state: () => ({
    listeCompetence: technosData,
    listeCompetenceGroup: [
      { titre: "Très bonne maîtrise", techno: [], niv: 1 },
      { titre: "Bonne maîtrise", techno: [], niv: 2 },
      { titre: "Maîtrise partielle", techno: [], niv: 3 },
      { titre: "Les Bases", techno: [], niv: 4 },
    ],
  }),
  actions: {
    async getCompetencesListe() {

      try {
        this.listeCompetence.forEach((comp) => {
          if (comp.niv)
            this.listeCompetenceGroup[comp.niv - 1].techno.push(comp);
        });

      } catch (error) {
        console.log(
          "Erreur lors du chargement des logos",
          error
        );
        reject(error);
      }
    },
  },
});
