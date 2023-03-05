<template>
    <section class="my-28">
        <h2>Mes Compétences</h2>

        <div v-for="c in listeCompetence" :key="c.id">

            <h3>{{c.titre}}</h3>

            <div class="flex flex-wrap gap-x-8 gap-y-8 justify-around
                         md:justify-start md:gap-x-32
                         mx-5 md:mx-14 xl:mx-28">

                <div v-for="(point, key) in c.competences" :key="key">
    
                    <h4>{{key}}</h4>
    
    
                    <div class="flex gap-2">
                        <div class="w-5 h-5 border-2 border-stone-300">
                            <div :class="['h-full', 'bg-stone-300', width1(point)]"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-fuchsia-500">
                            <div :class="['h-full', 'bg-fuchsia-500', width2(point)]"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-orange-100">
                            <div :class="['h-full', 'bg-orange-100', width3(point)]"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-cyan-400">
                            <div :class="['h-full', 'bg-cyan-400', width4(point)]"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-stone-300">
                            <div :class="['h-full', 'bg-stone-300', width5(point)]"></div>
                        </div>
    
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>


<style scoped>


</style>


<script>

import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"


export default {
    name : "mesCompetences",
    data() {
        return {
            listeCompetence : [],
            PartieTitre : [],
            

            query : "",
        }
    },

    mounted() {
        this.getCompetences();
    },
    
    methods:{
        async getCompetences(){
            const firestore = getFirestore();
            const dbComptences = collection(firestore, "compétences");
            
            const query = await onSnapshot(dbComptences, (snapshot) =>{
                this.listeCompetence = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                    ))
                })            

                this.listeCompetence.forEach(item => {
                    item.tableau.sort((a, b) => {
                        return a.createdAt + b.createdAt;
                    });
                });

            },

            width1(points) {
                return {
                    'w-0': points == 0,
                    'w-1/2': points == 0.5,
                    'w-full': points >= 1
                }
            },

            width2(points) {
                return {
                    'w-0': points <= 1,
                    'w-1/2': points == 1.5,
                    'w-full': points >= 2
                }
            },

            width3(points) {
                return {
                    'w-0': points <= 2,
                    'w-1/2': points == 2.5,
                    'w-full': points >= 3
                }
            },

            width4(points) {
                return {
                    'w-0': points <= 3,
                    'w-1/2': points == 3.5,
                    'w-full': points >= 4
                }
            },

            width5(points) {
                return {
                    'w-0': points <= 4,
                    'w-1/2': points == 4.5,
                    'w-full': points >= 5
                }
            },

        }
}

</script>