<template>
    <div class="min-h-[100dvh]
                flex flex-col items-center justify-center">

        <h1 class="relative w-fit">
            <span class="big-title-glitch btg-anim text-center text-5xl md:text-7xl"
                data-text="Erreur 404">
                Erreur 404
            </span>
        </h1>

        <p class="mb-20 inline-block font-oswald font-extralight text-base md:text-xl text-center text-stone-300">
            La page que vous recherchez n'a pas été trouvée.
        </p>
                
        <RouterLink to="/">
            <monBouton class="mx-auto my-10">Hello World</monBouton>
        </RouterLink>
    </div>
</template>


<style scoped>
.btg-anim::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -2px;
    color: #ffedd5;
    text-shadow: -3px 0 #d946ef;
    animation: glitchPink 3s linear infinite alternate;
}

.btg-anim::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0 ;
    color: #ffedd5;
    text-shadow: 3px 0 #22d3ee;
    background: #1f1f1f;
    clip-path: inset(62% 0% 0% 0%);
    animation: glitch 3s linear infinite alternate;
}
</style>


<script setup>
import monBouton from "@/components/monBouton.vue"
</script>