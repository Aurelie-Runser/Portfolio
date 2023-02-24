<script setup>
import { RouterView } from "vue-router";
import monMenu from "./components/monMenu.vue";
</script>

<template>
  <main class=" bg-mon-black max-w-full">
    <monMenu class="!z-50"/>
      <RouterView />
  </main>
</template>