<script setup>
import monAccueil from "@/parties/monAccueil.vue";
import mesProjets from "@/parties/mesProjets.vue";
import mesCompetences from "@/parties/mesCompetences.vue";
import maPersonne from "@/parties/maPersonne.vue";
import meContacte from "@/parties/meContacte.vue";
</script>

<template>
    <div class="max-w-[100vw] overflow-hidden">
        <monAccueil id="id_accueil"/>
        <mesProjets id="id_projets"/>
        <mesCompetences id="id_competences"/>
        <maPersonne id="id_apropos"/>
        <meContacte id="id_contact"/>
    </div>
</template>
