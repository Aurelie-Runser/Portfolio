<template>
    <div class="min-h-screen pt-24 overflow-hidden
    flex justify-between flex-col xl:flex-row">

        <div>
            <h1 class="relative top-0 left-1/2 w-full animate-skew">
                <span class="big-title-glitch btg-anim top-0 -translate-x-1/2 text-center text-5xl md:text-7xl"
                    data-text="Erreur 404">
                    Erreur 404
                </span>
            </h1>

            <div class="flex justify-between gap-5 ml-5">
                <div class="flex flex-col justify-center w-full">
                    <div class="flex flex-wrap justify-between gap-5 mx-auto my-10 max-w-4xl">
                        <p class="mx-auto inline-block font-oswald font-extralight text-base md:text-xl text-center text-stone-300">
                            La page que vous recherchez ne semble pas exister.
                        </p>
                    </div>
                    
                    <RouterLink to="/">
                        <monBouton class="mx-auto my-10">Hello World</monBouton>
                    </RouterLink>
                </div>

                <img class="hidden sm:block w-full max-w-md xl:hidden" src="/error.gif" alt="GIF où je cherche votre page dans le code">
                
            </div>
        </div>
        
        <div class="w-full hidden xl:flex xl:w-1/3 justify-end items-center my-10">
            <img class="w-full max-w-md xl:max-w-full" src="/error.gif" alt="GIF où je cherche votre page dans le code">
        </div>

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
}

.btg-anim::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #ffedd5;
    text-shadow: 3px 0 #22d3ee;
    background: #1f1f1f;
    clip-path: inset(62% 0% 0% 0%);
    animation: glitch 3s linear infinite alternate;
}

</style>


<script>
import monBouton from "@/components/monBouton.vue"

export default {
  name: '404',
  components: {monBouton},
}

</script>