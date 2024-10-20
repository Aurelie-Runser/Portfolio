<template>
    <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="inherit" :class="{ 'isHover': hover }">
        <path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/>
    </svg>
</template>
  
<script setup>
defineProps({
    hover: Boolean
})
</script>

<style scoped>
svg:hover,
.isHover{
    animation: colorMailAnim 1s linear infinite;
}
  
@keyframes colorMailAnim {
    0%{fill: #22d3ee;}
    50%{fill: #d946ef;}
    100%{fill: #22d3ee;}
}

</style>