<template>
    <section class="ma-section my-0 h-[100dvh] grid relative">
        <div class="self-center h-[100dvh] max-h-[900px]">
            <h1 ref="title" class="w-full mx-auto mon-title absolute top-1/2 -translate-y-1/2">
                <span ref="hello" class="">{{ heroTexte[0] }} <br/> {{ heroTexte[1] }}</span>

                <span ref="nom" 
                        class="relative selft-center text-center w-fit mx-auto overflow-hidden"
                        :data-text=heroTexte[2]>
                        {{heroTexte[2]}}
                    </span>

                <span ref="juniordev" class="">
                    <span ref="junior" class="w-fit h-fit">{{heroTexte[3]}}</span>
        
                    <span class="relative">
                        <span ref="dev" class="" :data-text=heroTexte[4]>{{heroTexte[4]}}</span>
                    </span>
                </span>
            </h1>
        </div>

        <div ref="cube" class="absolute left-1 md:left-10 -bottom-16 w-5 h-5 md:w-7 md:h-7"></div>
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
import { useTemplateRef, ref, onMounted } from 'vue';

const heroTexte = ref(["", "", "", "", ""]);

const contenu = [
    "Hello World,",
    "I'm ",
    "Aurélie Runser",
    " a junior ",
    "Web Developer"
];

const title = useTemplateRef('title')
const nom = useTemplateRef('nom')
const juniordev = useTemplateRef('juniordev')
const junior = useTemplateRef('junior')
const dev = useTemplateRef('dev')
const cube = useTemplateRef('cube')

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
        nom.value.classList.add("italic");
    }, 500)
    
    setTimeout(() => {
        nom.value.classList.remove("italic");
        nom.value.classList.add("font-semilbold");
    }, 600)
    
    setTimeout(() => {
        nom.value.classList.remove("font-semilbold");
        nom.value.classList.add("italic", "uppercase", 'font-thin');
    }, 700)
    
    setTimeout(() => {
        nom.value.classList.remove("italic", "font-thin");
        nom.value.classList.add("italic", "lowercase", "font-bold");
    }, 800)
    
    setTimeout(() => {
        nom.value.classList.remove("italic", "lowercase", "font-bold");
        nom.value.classList.add("uppercase", 'font-medium');
    }, 900)
    
    setTimeout(() => {
        title.value.classList.remove("absolute", "top-1/2", "-translate-y-1/2");
        title.value.classList.add("flex", "flex-col", "justify-around", "h-full");
        
        nom.value.classList.remove("uppercase", 'font-medium');
        nom.value.classList.add("big-title-glitch", "btg-anim");
        
        juniordev.value.classList.add("self-end", "flex", "flex-wrap", "justify-end", "items-end", "text-right", "gap-x-[1rem]", "mr-5", "mb-8", "sm:mr-0", "sm:mb-0");
    }, 1200)

    setTimeout(() => {
        dev.value.classList.add("italic");
    }, 2000)

    setTimeout(() => {
        dev.value.classList.remove("italic");
        dev.value.classList.add("font-semibold");
    }, 2100)

    setTimeout(() => {
        dev.value.classList.remove('font-semibold');
        dev.value.classList.add("big-title-glitch", "title-glitch", "tg-anim");
    }, 2400)

    setTimeout(() => {
        cube.value.classList.add("mon-cube");
    }, 3000)
}

onMounted(() => {
    machineEcrireHero(contenu);
});
</script>