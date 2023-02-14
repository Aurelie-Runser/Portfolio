<script setup>
import { RouterView } from "vue-router";
import monMenu from "./components/monMenu.vue";
</script>

<template>
  <div class="bg-mon-black overflow-x-hidden">
    <monMenu class="!z-50"/>
      <RouterView />
  </div>
</template>