<template>
    <section class="ma-section">
        <h2>Compétences</h2>

        <ul v-if="listeCompetenceGroup.length > 0" class="comptGrid my-8 md:my-16 p-1 gap-2 sm:gap-5">
            <li v-for="c in listeCompetenceGroup" :key="c.id" :class="'item-'+c.niv" class="borderAnim">
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

        <div v-else class="h-[50vh]">
            <monChargement />
        </div>

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
</style>


<script setup>
import monChargement from "@/components/monChargement.vue";

import { ref, watch, onMounted } from 'vue';
import { useCompetencesStore } from "@/stores/competencesStore.js";

const store = useCompetencesStore();

const listeCompetenceGroup = ref([]);

onMounted(async() => {
    if(store.listeCompetenceGroup[0].techno.length){ // si les compétences ont été chargés
        listeCompetenceGroup.value = store.listeCompetenceGroup;
    }
    else {  // si les compétences n'ont pas encore été chargé
        const stopWatcher = watch(
            () => store.listeCompetenceGroup[0].techno.length,
            () => {
                listeCompetenceGroup.value = store.listeCompetenceGroup;
                stopWatcher(); // pour stoper le watcher (la liste à afficher à été chargé 1 foix, il n'y a plus de raison qu'elle change)
            }
        );
    };
});
</script>