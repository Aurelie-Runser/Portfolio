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
                        <monBouton class="mx-auto my-10">Retourner à Hello World</monBouton>
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
    left: -3px;
    color: #ffedd5;
    text-shadow: -5px 0 #d946ef;
    background: #1f1f1f;
    overflow: hidden;
}

.btg-anim::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #ffedd5;
    text-shadow: -5px 0 #22d3ee;
    background: #1f1f1f;
    overflow: hidden;
    animation: glitch 3s linear infinite alternate-reverse;
}

@keyframes glitch {
    5%{
        clip-path: inset(48% 0 0 0);
    } 
    7.5%{
        clip-path: inset(70% 0 0 0);
    }
    10%{
        clip-path: inset(60% 0 0 0);
    }
    12.5%{
        clip-path: inset(37% 0 0 0);
    }
    15%{
        clip-path: inset(0 0 0 0);
    }
    17.5%{
        clip-path: inset(0 0 40% 0);
    }
    20%{
        clip-path: inset(0 0 40% 0);
    }
    22.5%{
        clip-path: inset(0 0 60% 0);
    }
    25%{
        clip-path: inset(0 0 30% 0);
    }
    27.5%{
        clip-path: inset(0 0 50% 0);
    }
    30%{
        clip-path: inset(40% 0 0 0);
    }
    32.5%{
        clip-path: inset(33% 0 0 0);
    } 
    35%{
        clip-path: inset(48% 0 0 0);
    } 
    37.5%{
        clip-path: inset(70% 0 0 0);
    }
    40%{
        clip-path: inset(60% 0 0 0);
    }
    42.5%{
        clip-path: inset(37% 0 0 0);
    }
    45%{
        clip-path: inset(0 0 0 0);
    }
    47.2%{
        clip-path: inset(0 0 40% 0);
    }
    50%{
        clip-path: inset(0 0 40% 0);
    }
    52.%{
        clip-path: inset(33% 0 0 0);
    } 
    55%{
        clip-path: inset(48% 0 0 0);
    } 
    57.5%{
        clip-path: inset(70% 0 0 0);
    }
    60%{
        clip-path: inset(60% 0 0 0);
    }
    62.5%{
        clip-path: inset(37% 0 0 0);
    }
    65%{
        clip-path: inset(0 0 0 0);
    }
    67.5%{
        clip-path: inset(0 0 40% 0);
    }
    70%{
        clip-path: inset(0 0 40% 0);
    }
    72.5%{
        clip-path: inset(0 0 60% 0);
    }
    75%{
        clip-path: inset(0 0 30% 0);
    }
    77.5%{
        clip-path: inset(0 0 50% 0);
    }
    80%{
        clip-path: inset(40% 0 0 0);
    }
    82.5%{
        clip-path: inset(33% 0 0 0);
    } 
    85%{
        clip-path: inset(48% 0 0 0);
    } 
    87.5%{
        clip-path: inset(70% 0 0 0);
    }
    90%{
        clip-path: inset(60% 0 0 0);
    }
    92.5%{
        clip-path: inset(37% 0 0 0);
    }
    95%{
        clip-path: inset(0 0 0 0);
    }
    97.5%{
        clip-path: inset(0 0 40% 0);
    }
    100%{
        clip-path: inset(0 0 40% 0);
    }
}

</style>


<script>
import monBouton from "@/components/monBouton.vue"

export default {
  name: '404',
  components: {monBouton},
}

</script>