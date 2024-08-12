<script setup>
import monMenu from "./components/monMenu.vue";
import monFooter from "./components/monFooter.vue";

import { RouterView } from "vue-router";
import { useProjetsStore } from "@/stores/projetsStore.js";

useProjetsStore().getProjetsListe();
</script>

<template>
    <main class=" bg-mon-black max-w-full">
        <monMenu class="!z-50"/>
        <RouterView />
        <monFooter/>
    </main>
</template>