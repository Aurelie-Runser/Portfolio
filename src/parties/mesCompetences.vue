<template>
    <section class="my-32 px-1 sm:px-7 md:px-10">
        <h2>Mes Compétences</h2>

        <ul class="comptGrid my-16 md:mx-14 xl:mx-28 2xl:mx-auto p-1 gap-2 sm:gap-5 max-w-screen-xl">
            <li v-for="c in listeCompetence" :key="c.id" :class="'item-'+c.num" class="colorAnim">
                <div class="w-full h-full p-3 sm:p-4 bg-mon-black">
        
                    <h3 class="text-xl leading-9 break-words">{{c.titre}}</h3>

                    <ul class="flex flex-wrap items-center justify-center mt-4 gap-x-4 gap-y-2">
                        <li
                            v-for="t in c.techno">
                            <div class="technoAnim flex flex-wrap items-center justify-center gap-0.5 sm:gap-1">
                                <img class="aspect-square object-contain" :src="t.svg" :alt="'logo de ' + t.nom">
                                <span class="text-orange-100">{{ t.nom }}</span>
                            </div>
                        </li>
                    </ul>
        
                </div>
            </li>
        </ul>

    </section>
</template>


<style scoped>
.comptGrid{
    display: grid;
    grid-template-areas:
        "a a a "
        "b b c"
        "b b d";
}

.item-1{
    grid-area: a;
    font-size: 1.25rem;
}
.item-1 img{
    width: 60px;
}

.item-2{
    grid-area: b;
    font-size: 1.2rem;
}
.item-2 img{
    width: 50px;
}

.item-3{
    grid-area: c;
    font-size: 1.1rem;
}
.item-3 img{
    width: 35px;
}

.item-4{
    grid-area: d;
    font-size: 1rem;
}
.item-4 img{
    width: 25px;
}

@media (min-width: 768px) {
    .comptGrid{
        grid-template-areas:
            "a a a a"
            "b b c d";
    }

    .item-1{
        font-size: 1.75rem;
    }
    .item-1 img{
        width: 85px;
    }

    .item-2{
        font-size: 1.5rem;
    }
    .item-2 img{
        width: 70px;
    }

    .item-3{
        font-size: 1.25rem;
    }
    .item-3 img{
        width: 50px;
    }

    .item-4{
        font-size: 1rem;
    }
    .item-4 img{
        width: 30px;
    }
}

.technoAnim:hover{
    animation: technoAnim 0.1s 0s linear;
    text-shadow: -1.5px -1.5px #22d3ee, 1.5px 1.5px #d946ef;
}

.technoAnim:hover img{
    filter: drop-shadow(-1.5px -1.5px #22d3ee) drop-shadow(1.5px 1.5px #d946ef);
}

@keyframes technoAnim{
    0% { transform: skewX(0deg); }
    50% { transform: skewX(-90deg); }
    100% { transform: skewX(0deg); }
}

.colorAnim{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
}

@property --angle{
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.colorAnim::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    translate: -50% -50%;
    z-index: -1;
    box-sizing: content-box;
    padding: 1.5px;
    background-image: conic-gradient(from var(--angle), #22d3ee, #d946ef, #22d3ee);
    animation: borderAnim 4s linear infinite;
}

@keyframes borderAnim {
    from { --angle: 0deg }
    to { --angle: 360deg }
}
</style>


<script setup>
import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    getStorage, 
    ref, 
    getDownloadURL
} from "@/stores/firebase.js";

import { ref as refVue, onMounted } from "vue";

const listeCompetence = refVue([]);

async function getCompetences(){
    const firestore = getFirestore();
    const dbComptences = collection(firestore, "competences");
    
    await onSnapshot(dbComptences, (snapshot) =>{
        listeCompetence.value = snapshot.docs.map(doc => (
            {id:doc.id, ...doc.data()}
        ))
        .sort((a, b) => a.num - b.num);

        const storage = getStorage();
                
        listeCompetence.value.forEach((c) => {
            c.techno.forEach((t) => {
                const svgRef = ref(storage, `icons/${t.svg}.svg`);
                getDownloadURL(svgRef)
                .then((url) => {
                    t.svg = url;
                })    
                .catch((error) => {
                    console.log("erreur lors du chargement des images depuis firebase", error);
                });
            });
        });
    })            
}

onMounted(() => {
    getCompetences()
})
</script>