<template>
    <header class="fixed top-0 right-0 w-content h-screen translate-x-full bg-mon-black z-40 duration-300 menu_border"
        :class="{ '-translate-x-0': menuOuvert }"
        :aria-expanded="menuOuvert" @mouseover="menuOuvert = true" @mouseleave="menuOuvert = false">

        <!-- bouton Menu-->
        <div class="absolute bottom-14 sm:top-10 left-0 z-50 cursor-pointer">
            <p class="-translate-x-[60%] sm:-translate-x-1/2 bg-mon-black-dd py-5
                    font-poppins font-bold text-2xl sm:text-4xl text-orange-100 text_vertical">
                MENU
            </p>
        </div>

        <!-- bouton femrer Menu en mobil-->
        <div class="absolute cursor-pointer
                    bottom-7 left-8 z-50 w-12 h-12 
                    sm:top-20 sm:left-10 sm:w-20 sm:h-20
                    md:hidden"
            @click="menuOuvert = false">
            <flecheIcon/>
        </div>
        

        <!--les liens-->
        <nav class="relative w-full h-full flex flex-col justify-end gap-16 py-28 sm:justify-evenly items-right px-[10vw] md:px-[5vw]
            text-right font-oswald font-semibold italic text-transparent text-lg sm:text-xl md:text-3xl">

            <!-- <RouterLink to="/"  @click="menuOuvert = !menuOuvert"> -->
                <RouterLink to="/" @click="menuOuvert = !menuOuvert">
                <p class="menu_item item_acc"
                    data-text="Hello World">
                    Hello World
                </p>
            </RouterLink>

            <!-- <RouterLink to="/"  @click="menuOuvert = !menuOuvert"> -->
                <a href="/projets" @click="menuOuvert = !menuOuvert">
                    <p class="menu_item item_pro"
                        data-text="Mes projets">
                        Mes Projets
                    </p>
                </a>
            <!-- </RouterLink> -->

            <!-- <RouterLink :to="{ path: '/', hash: '#id_competences' }"  @click="menuOuvert = !menuOuvert"> -->
                <a href="/#id_competences" @click="menuOuvert = !menuOuvert">
                    <p class="menu_item item_comp"
                        data-text="Mes Compétences">
                        Mes Compétences
                    </p>
                </a>
            <!-- </RouterLink> -->

            <!-- <RouterLink :to="{ path: '/', hash: '#id_competences' }"  @click="menuOuvert = !menuOuvert"> -->
                <a href="/#id_personne" @click="menuOuvert = !menuOuvert">
                    <p class="menu_item item_perso"
                        data-text="Ma Personne">
                        Ma Personne
                    </p>
                </a>
            <!-- </RouterLink> -->

            <!-- <RouterLink :to="{ path: '/', hash: '#id_competences' }"  @click="menuOuvert = !menuOuvert"> -->
                <a href="/#id_contact" @click="menuOuvert = !menuOuvert">
                <p class="menu_item item_cont"
                    data-text="Me Contacter">
                    Me Contacter
                </p>
                </a>
            <!-- </RouterLink> -->

        </nav>

    </header>
</template>

<style scoped>

/* texte du bouton "Menu" */
.text_vertical{
    writing-mode: vertical-lr; 
    text-orientation: upright;    
}

/* animation de la couleur de la bordure du menu */
.menu_border{
    border-left-width: 2px;
    border-left-style: solid;
    animation: border_color 3s linear infinite;
}

@keyframes border_color {
    0%{border-color: #22d3ee;}
    50%{border-color: #d946ef;}
    100%{border-color: #22d3ee;}
}



/* animation des liens */
.menu_item::after{
    content: attr(data-text);
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    color: #ffedd5;
    text-shadow: -3px 0 #22d3ee;
    background: #1f1f1f;
    overflow: hidden;
    clip-path: inset(59% 0% 0% 0%);
}

.menu_item:hover::after{
    animation: glitch 3s linear infinite alternate-reverse;
}
.menu_item::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -2px;
    width: 100%;
    color: #ffedd5;
    text-shadow: -3px 0 #d946ef;
    background: #1f1f1f;
    overflow: hidden;
}

.item_acc,
.item_pro,
.item_comp,
.item_perso,
.item_cont{
    position: relative;
    top: 0;
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
import flecheIcon from "@/components/icons/flecheIcon.vue"

export default {
  name: "monMenu",
  components: {flecheIcon},
  data() {
    return {
      menuOuvert: false,
    };
  },
}
</script>