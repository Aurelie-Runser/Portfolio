<template>
    <header class="fixed top-0 right-0 w-content h-screen translate-x-full bg-mon-black z-40 duration-150 menu_border"
        :class="{ '-translate-x-0': menuOuvert }"
        :aria-expanded="menuOuvert" @mouseover="menuOuvert = true" @mouseleave="menuOuvert = false">

        <!-- bouton Menu-->
        <div class="absolute bottom-14 sm:top-10 left-0 z-50 cursor-pointer">
            <p class="-translate-x-[55%] bg-mon-black-dd py-5
                    font-poppins font-bold text-2xl sm:text-4xl text-orange-100 text_vertical"
                :class="{ '-translate-x-[50%]': menuOuvert }">
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
        <nav class="relative w-full h-full flex flex-col justify-end gap-y-7 sm:justify-evenly sm:gap-y-2 items-right px-[10vw] pb-[5vh] md:px-[5vw] md:pb-0
            text-right font-oswald font-semibold italic text-lg sm:text-xl md:text-3xl">

            <RouterLink @click="menuOuvert = false" to="/">
                <p class="menu_item item_acc"
                    data-text="Hello World">
                    Hello World
                </p>
            </RouterLink>
            
            <RouterLink @click="menuOuvert = false" to="/projets">
                <p class="menu_item item_pro"
                    data-text="Projets">
                    Projets
                </p>
            </RouterLink>

            <RouterLink @click="menuOuvert = false" :to="{ path: '/', hash: '#id_competences' }">
                <p class="menu_item item_comp"
                    data-text="Compétences">
                    Compétences
                </p>
            </RouterLink>

            <RouterLink @click="menuOuvert = false" :to="{ path: '/', hash: '#id_apropos' }">
                <p class="menu_item item_perso"
                    data-text="À Propos">
                    À Propos
                </p>
            </RouterLink>

            <RouterLink @click="menuOuvert = false" :to="{ path: '/', hash: '#id_contact' }">
                <p class="menu_item item_cont"
                    data-text="Contact">
                    Contact
                </p>
            </RouterLink>

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
    text-shadow: 1.5px 0 #22d3ee;
    background: #1f1f1f;
    clip-path: inset(60% 0% 0% 0%);
}

.menu_item:hover::after{
    animation: glitch 3s linear infinite alternate-reverse;
}
.menu_item::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -0.5px;
    width: 100%;
    color: #ffedd5;
    text-shadow: -1.5px 0 #d946ef;
}

.item_acc,
.item_pro,
.item_comp,
.item_perso,
.item_cont{
    position: relative;
    top: 0;
}

</style>

<script setup>
import flecheIcon from "@/components/icons/flecheIcon.vue"

import { ref } from "vue";

const menuOuvert = ref(false)
</script>