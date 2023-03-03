<script setup>
import monAccueil from "@/components/monAccueil.vue";
import mesProjets from "@/components/mesProjets.vue";
import mesCompetences from "@/components/mesCompetences.vue";
import maPersonne from "@/components/maPersonne.vue";
import meContacte from "@/components/meContacte.vue";

</script>

<template>
    <main>
        <monAccueil id="id_accueil"/>
        <mesProjets id="id_projets">Mes Projets</mesProjets>
        <mesCompetences id="id_competences"/>
        <maPersonne id="id_personne"/>
        <meContacte id="id_contact"/>
    
    </main>
</template>
