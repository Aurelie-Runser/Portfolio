<script setup>
import monMenu from "./components/monMenu.vue";
import monFooter from "./components/monFooter.vue";

import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useCompetencesStore } from "@/stores/competencesStore.js";

const competencesStore = useCompetencesStore();

onMounted(() => {
    competencesStore.getCompetencesListe()
        .then(() => {
            return
        })
        .catch(error => {
            console.error("Erreur lors du chargement des compétences :", error);
        });
});
</script>

<template>
    <div class="bg-mon-black max-w-full">
        <monMenu class="!z-50"/>
        <RouterView />
        <monFooter/>
    </div>
</template>