<template>
    <section class="my-32">
        <h2>Mes Compétences</h2>

        <!-- liste globale -->
        <div v-for="c in listeCompetence" :key="c.id">

            <!-- commentaire (à quoi cert ses langages/logiciel) -->
            <h3>{{c.titre}}</h3>

            <!-- 1 élément -->
            <div class="flex flex-wrap gap-x-10 gap-y-10 justify-start
                         md:gap-x-32
                         mx-5 md:mx-14 xl:mx-28">

                <div v-for="(point, key) in c.competences" :key="key">
    
                    <!-- nom du langage/logiciel -->
                    <h4>{{key}}</h4>
    
                    <!-- niveau de maitrise sur 5 -->
                    <div class="flex gap-2">
                        <div class="w-5 h-5 border-2 border-stone-300 overflow-hidden">
                            <div :class="['h-full', 'bg-stone-300', width1(point), 'niveau1']"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-fuchsia-500 overflow-hidden">
                            <div :class="['h-full', 'bg-fuchsia-500', width2(point), 'niveau2']"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-orange-100 overflow-hidden">
                            <div :class="['h-full', 'bg-orange-100', width3(point), 'niveau3']"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-cyan-400 overflow-hidden">
                            <div :class="['h-full', 'bg-cyan-400', width4(point), 'niveau4']"></div>
                        </div>
    
                        <div class="w-5 h-5 border-2 border-stone-300 overflow-hidden">
                            <div :class="['h-full', 'bg-stone-300', width5(point), 'niveau5']"></div>
                        </div>
    
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>


<style scoped>
/* élément à animé (le temps est différent pour chaque case) */
.niveau1 {
    transform: translateX(-100%);
    transition: all 0.3s;
}

.niveau2 {
    transform: translateX(-100%);
    transition: all 0.3s 0.3s;
}

.niveau3 {
    transform: translateX(-100%);
    transition: all 0.3s 0.6s;
}

.niveau4 {
    transform: translateX(-100%);
    transition: all 0.3s 0.9s;
}

.niveau5 {
    transform: translateX(-100%);
    transition: all 0.3s 1.1s;
}

/* animation de la case */
.niveau1.animate-visible,
.niveau2.animate-visible,
.niveau3.animate-visible,
.niveau4.animate-visible,
.niveau5.animate-visible {
    transform: translateX(0);
}

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

        // Ajout le gestionnaire d'événement scroll
        window.addEventListener('scroll', this.animateOnScroll);
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


        // Gestionnaire pour activer l'animation lorsque les éléments sont visibles
        animateOnScroll() {
            // Sélectionnez tous les éléments avec la classe 'niveau' (les éléments à animer)
            const elementsToAnimate1 = document.querySelectorAll('.niveau1');
            const elementsToAnimate2 = document.querySelectorAll('.niveau2');
            const elementsToAnimate3 = document.querySelectorAll('.niveau3');
            const elementsToAnimate4 = document.querySelectorAll('.niveau4');
            const elementsToAnimate5 = document.querySelectorAll('.niveau5');

            // Parcourez chaque élément à animer
            elementsToAnimate1.forEach((element) => {
                // Vérifiez si l'élément est actuellement visible à l'écran à l'aide de la fonction isElementVisible
                if (this.isElementVisible(element)) {
                    // Si l'élément est visible, ajoutez la classe 'animate-visible' pour déclencher l'animation CSS
                    element.classList.add('animate-visible');
                }
            });

            elementsToAnimate2.forEach((element) => {
                if (this.isElementVisible(element)) {
                    element.classList.add('animate-visible');
                }
            });

            elementsToAnimate3.forEach((element) => {
                if (this.isElementVisible(element)) {
                    element.classList.add('animate-visible');
                }
            });

            elementsToAnimate4.forEach((element) => {
                if (this.isElementVisible(element)) {
                    element.classList.add('animate-visible');
                }
            });

            elementsToAnimate5.forEach((element) => {
                if (this.isElementVisible(element)) {
                    element.classList.add('animate-visible');
                }
            });
        },

        // Fonction pour vérifier si un élément est visible à l'écran
        isElementVisible(element) {
            // Obtenez les coordonnées et la taille de l'élément en utilisant getBoundingClientRect()
            const rect = element.getBoundingClientRect();

            // Vérifiez si le haut de l'élément est au-dessus de 70% de l'écran et si le bas de l'élément est en dessous du haut de l'écran
            // Si c'est le cas, alors l'élément est actuellement visible à l'écran
            return rect.top >= 0 && rect.bottom <= window.innerHeight*0.8;
        }
    }
}

</script>