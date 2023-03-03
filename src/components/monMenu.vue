<template>
    <div class="fixed">
        <div class="menu fixed top-10 right-10 md:right-16 z-50 cursor-pointer"
            :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <div class="menu_barre barre_h" :class="{ 'menu_ouvert-barre menu_ouvert-barre_h': menuOuvert }"></div>
            <div class="menu_barre barre_m" :class="{ 'menu_ouvert-barre menu_ouvert-barre_m': menuOuvert }"></div>
            <div class="menu_barre barre_b" :class="{ 'menu_ouvert-barre menu_ouvert-barre_b': menuOuvert }"></div>
        </div>

        <div class="fixed top-0 left-0 w-screen h-screen translate-y-full bg-mon-black z-40 duration-300"
            :class="{ 'translate-y-0': menuOuvert }">

            <div class="relative w-full h-full flex flex-col justify-evenly items-center
                text-center font-oswald font-semibold italic text-transparent text-2xl md:text-3xl">

                <!-- <RouterLink to="/"  @click="menuOuvert = !menuOuvert"> -->
                    <a href="/#id_accueil" @click="menuOuvert = !menuOuvert">
                        <p class="menu_item item_acc"
                            data-text="Hello World">
                            Hello World
                        </p>
                    </a>
                    <!-- </RouterLink> -->

                <!-- <RouterLink to="/"  @click="menuOuvert = !menuOuvert"> -->
                    <a href="/#id_projets" @click="menuOuvert = !menuOuvert">
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
                        data-text="Me Contactez">
                        Me Contactez
                    </p>
                    </a>
                <!-- </RouterLink> -->

            </div>

        </div>
    </div>
</template>

<style scoped>

/*icon du menu-------------------------------------------------------- */

/* style commun a toutes les barres
    ! attention ! barre bleu */
.menu_barre{
    position: relative;
    width: 45px;
    height: 8px;
    background-color: #5eead400;
    margin: 8px 0;
}
/* affichage de la barre bleu au survole */
.menu:hover .menu_barre{
    background-color: #22d3ee;
}


/* style commun a toutes les barres ::before
    barre rose */
.menu_barre::before{
    position: absolute;
    display: block;
    content: " ";
    width: 45px;
    height: 8px;
    background-color: #D912D700;
    top: 4px;
    left: 4px;
}

/* affichage de la barre rose au survole */
.menu:hover .menu_barre::before{
    background-color: #D912D7;
}


/* style commun a toutes les barres ::after
    barre beige */
.menu_barre::after{
    position: absolute;
    display: block;
    content: " ";
    width: 45px;
    height: 8px;
    background-color: #F1E9DA;
    top: 2px;
    left: 2px;
}


/* animation du menu */

/* animation de la barre du haut */
.barre_h,
.barre_h::after,
.barre_h::before{
    transform-origin: top right;
    transition: rotate 0.2s ease-in 0.5s, width 0.2s ease-in 1s;
}

/* rotation de la barre du haut apres animation */
.menu_ouvert-barre_h{
    rotate: -45deg;
}

/* taille de la barre du haut apres animation */
.menu_ouvert-barre_h,
.menu_ouvert-barre_h::after,
.menu_ouvert-barre_h::before{
    width: 52px;
}


/* animation de la barre du milieu */
.barre_m,
.barre_m::after,
.barre_m::before{
    transform-origin: center;
    transition: width 0.1s ease-in 0.1s, margin-left 0.1s ease-in 0.1s;
}

/* taille de la barre du milieu apres animation */
.menu_ouvert-barre_m,
.menu_ouvert-barre_m::after,
.menu_ouvert-barre_m::before{
    margin-left: 50%;
    width: 0;
}


/* animation de la barre du bas */
.barre_b,
.barre_b::after,
.barre_b::before{
    transform-origin: bottom right;
    transition: rotate 0.2s ease-in 1.5s, width 0.2s ease-in 2s;
}

/* rotation de la barre du bas apres animation */
.menu_ouvert-barre_b{
    rotate: 45deg;
}

/* taille de la barre du bas apres animation */
.menu_ouvert-barre_b,
.menu_ouvert-barre_b::after,
.menu_ouvert-barre_b::before{
    width: 52px;
}








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
export default {
  name: "monMenu",
  data() {
    return {
      menuOuvert: false,
    };
  },
}
</script>