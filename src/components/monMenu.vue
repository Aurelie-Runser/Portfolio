<template>
    <div class="fixed">
        <div class="menu fixed top-10 right-10 z-50 cursor-pointer"
            :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <div class="menu_barre barre_h" :class="{ 'menu_ouvert-barre menu_ouvert-barre_h': menuOuvert }"></div>
            <div class="menu_barre barre_m" :class="{ 'menu_ouvert-barre menu_ouvert-barre_m': menuOuvert }"></div>
            <div class="menu_barre barre_b" :class="{ 'menu_ouvert-barre menu_ouvert-barre_b': menuOuvert }"></div>
        </div>

        <div class="w-screen h-screen bg-mon-black-dd translate-x-full z-40"
            :class="{ 'translate-x-0': menuOuvert }">
            <ul class="w-full h-full flex flex-col justify-evenly items-center
            text-center font-oswald font-semibold italic text-teal-300 text-2xl">
                <li class="menu_item item_acc after:content-['Accueil']">Accueil</li>
                <li class="menu_item item_pro after:content-['Mes_Projets']">Mes Projets</li>
                <li class="menu_item item_comp after:content-['Mes_Compétences']">Mes Compétences</li>
                <li class="menu_item item_perso after:content-['Ma_Personne']">Ma Personne</li>
                <li class="menu_item item_cont after:content-['Me_Contactez']">Me Contactez</li>
            </ul>
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






.menu_item{
    position: relative;
}

.menu_item::after{
    display: block;
    width: max-content  ;
    position: absolute;
    color: #F1E9DA;
    left: 3px;
    top: 0;
}
.menu_item::before{
    display: block;
    
    position: absolute;
    color: #D912D7;
    right: 0;
    top: 0;
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