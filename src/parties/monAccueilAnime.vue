<template>
    <section class="ma-section my-0 h-screen grid relative">
        <div class="self-center h-screen max-h-[900px]">
            <h1 id="title" class="w-full mx-auto mon-title absolute top-1/2 -translate-y-1/2">
                <span id="hello" class="">{{ heroTexte[0] }} <br/> {{ heroTexte[1] }}</span>

                <span id="nom" 
                        class="relative selft-center text-center w-fit mx-auto overflow-hidden"
                        :data-text=heroTexte[2]>
                        {{heroTexte[2]}}
                    </span>

                <span id="juniordev" class="">
                    <span id="junior" class="w-fit h-fit">{{heroTexte[3]}}</span>
        
                    <span class="relative">
                        <span id="dev" class="" :data-text=heroTexte[4]>{{heroTexte[4]}}</span>
                    </span>
                </span>
            </h1>
        </div>

        <div id="cube" class="absolute left-1 md:left-10 -bottom-16 w-5 h-5 md:w-7 md:h-7"></div>
    </section>
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

.tg-anim::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -0.5px;
    color: #ffedd5;
    text-shadow: -2px 0 #d946ef;
}

.tg-anim::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #ffedd5;
    text-shadow: 2px 0 #22d3ee;
    background: #1f1f1f;
    clip-path: inset(62% 0% 0% 0%);
}

/* mise en place d'un carre d'animation */
.mon-cube{
    animation: anim_translate 2s ease-in-out infinite normal, anim_bg 8s infinite;   
}

/* animation de déplacement du carre */
@keyframes anim_translate {
    0% { opacity: 0;
        transform: translate(0, -120px)}
    25% { transform: translate(0, -120px)}

    25% { opacity: 1}

    75% { opacity: 1}
    
    75% {transform: translate(0, -30px)}
    100% {opacity: 0;
        transform: translate(0, -30px)}  
}

/* animation de couleur du carre */
@keyframes anim_bg {
    17% { background: #ffedd5;}

    42% { background: #22d3ee;}
    
    67% { background: #dddddd;}  
    
    92% { background: #d946ef;}  
}

</style>

<script setup>
import { ref, onMounted } from 'vue';

const heroTexte = ref(["", "", "", "", ""]);

const contenu = [
    "Hello World,",
    "I'm ",
    "Aurélie Runser",
    " a junior ",
    "Web Developer"
];

const vitesse = 50;
const isTexteComplet = ref(false)

function machineEcrireHero(contenu){
    let indexTexteActuel = 0;
    let partieActuelle = 0;

    const intervalId = setInterval(() => {
        if (indexTexteActuel < contenu[partieActuelle].length) {
            // Ajoute chaque lettre progressivement à la partie actuelle
            heroTexte.value[partieActuelle] += contenu[partieActuelle][indexTexteActuel];
            indexTexteActuel++;
        } else {
            // Passe à la partie suivante du texte une fois que la précédente est entièrement affichée
            partieActuelle++;
            indexTexteActuel = 0;
        }

        // Si tout le texte a été affiché, arrête l'intervalle
        if (partieActuelle === contenu.length) {
            clearInterval(intervalId);
            isTexteComplet.value = true
            ajoutStyleHero()
        }
    }, vitesse);
}

function ajoutStyleHero(){
    setTimeout(() => {
        document.getElementById("nom").classList.add("italic");
    }, 500)
    
    setTimeout(() => {
        document.getElementById("nom").classList.remove("italic");
        document.getElementById("nom").classList.add("font-semilbold");
    }, 600)
    
    setTimeout(() => {
        document.getElementById("nom").classList.remove("font-semilbold");
        document.getElementById("nom").classList.add("italic", "uppercase", 'font-thin');
    }, 700)
    
    setTimeout(() => {
        document.getElementById("nom").classList.remove("italic", "font-thin");
        document.getElementById("nom").classList.add("italic", "lowercase", "font-bold");
    }, 800)
    
    setTimeout(() => {
        document.getElementById("nom").classList.remove("italic", "lowercase", "font-bold");
        document.getElementById("nom").classList.add("uppercase", 'font-medium');
    }, 900)
    
    setTimeout(() => {
        document.getElementById("title").classList.remove("absolute", "top-1/2", "-translate-y-1/2");
        document.getElementById("title").classList.add("flex", "flex-col", "justify-around", "h-full");
        
        document.getElementById("nom").classList.remove("uppercase", 'font-medium');
        document.getElementById("nom").classList.add("big-title-glitch", "btg-anim");
        
        document.getElementById("juniordev").classList.add("self-end", "flex", "flex-wrap", "justify-end", "items-end", "text-right", "gap-x-[1rem]", "mr-5", "mb-8", "sm:mr-0", "sm:mb-0");
    }, 1200)

    setTimeout(() => {
        document.getElementById("dev").classList.add("italic");
    }, 2000)

    setTimeout(() => {
        document.getElementById("dev").classList.remove("italic");
        document.getElementById("dev").classList.add("font-semibold");
    }, 2100)

    setTimeout(() => {
        document.getElementById("dev").classList.remove('font-semibold');
        document.getElementById("dev").classList.add("big-title-glitch", "title-glitch", "tg-anim");
    }, 2400)

    setTimeout(() => {
        document.getElementById("cube").classList.add("mon-cube");
    }, 3000)
}

onMounted(() => {
    machineEcrireHero(contenu);
});
</script>