<template>
    <section class="ma-section">
        <h2>À Propos</h2>
        
        <div class="my-8 md:my-16">

            <div class="hidden md:flex md:flex-row flex-wrap justify-around gap-1">
                <SoftSkillsGraph/>
                <PassionsGraph/>
            </div>

            <div class="photo relative aspect-square object-cover object-top w-2/3 mx-auto sm:aspect-auto sm:w-1/4 sm:float-left sm:mr-10 mb-10 overflow-hidden">
                <img src="/Aurelie.png" alt="photo d'Aurélie Runser" class="opacity-0">
            </div>

            <p class="perso_text">
                <span class="guillement_1">"</span>Minutieuse et sérieuse, je me suis épanouie dans la formation MMI,
                Métiers du Multimédia et de l'Internet, à l'IUT de Montbéliard, durant 3 ans.
                <strong class="text-cyan-400">J'en suis sortie diplômée, 2<sup class="text-sm">ème</sup> de promo et majore de mon parcours</strong>, Développement Web et Dispositifs Interactifs.

                <br class="block my-2"/>

                Je code beaucoup, ai réalisé de nombreux projets, et cela ne cesse de me passionner, me donnant
                <strong class="text-fuchsia-500">
                    l'envie de toujours découvrir de nouvelles façons de développer
                </strong>
                des sites web, de nouvelles fonctionnalités et animations.
            
                <br class="block my-2"/>

                <strong class="text-cyan-400">
                    Je mets un point d'honneur à respecter au mieux les attentes qui me sont données</strong>,
                pour être fière de mon travail, mais surtout satisfaire les utilisateurs.

                <br class="block my-2"/>
            </p>
            
            <div class="flex gap-3">
                <p class="perso_text">
                    La volonté de rendre service et d'aider avec mes connaissances sont ce qui me font avancer pour
                    <strong class="text-fuchsia-500">
                        participer à la construction du web de demain</strong>.
                </p>
                <span class="guillement_2">"</span>
            </div>
    
            <!-- Bouton pour télécharger mon CV-->
            <div class="block mt-8 w-full">
                <p class="perso_text block">
                    Si vous voulez en être, n'hésitez à me contacter et à consulter mon CV.
                </p>
    
                <a target="_blank" href="https://drive.google.com/drive/folders/1wbf5tLZU1f4blTsYob3HGBV2Mzv_Z10V?usp=sharing">
                    <monBouton class="mx-auto mt-10">
                        Télécharger mon CV
                    </monBouton>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>

/* quillement en début de texte */
.guillement_1{
    display: inline-block;
    font-family: Oswald;
    font-size: 10rem;
    color: #ffedd5;
    text-shadow: -3px -3px #d946ef;
    transform: translateY(3rem);
}

.guillement_2{
    transform: translateY(-2rem);
    font-family: Oswald;
    font-size: 10rem;
    height: 3rem;
    color: #ffedd5;
    text-shadow: 3px 3px #22d3ee;
}

.photo::before{
    content: '';
    position: absolute;
    top: 0;
    left: -1.5%;
    display: block;
    width: 100%;
    height: 100%;
    background: url("/Aurelie.png"), url("/Aurelie_pink.png");
    background-size: cover, cover;
    background-position: top, top left -3px;
    background-repeat: no-repeat, no-repeat;
    animation: photoRight 7s infinite linear;
}

.photo::after{
    content: '';
    position: absolute;
    top: 0;
    left: 1.5%;
    display: block;
    width: 100%;
    height: 100%;
    background: url("/Aurelie.png"), url("/Aurelie_blue.png");
    background-size: cover, cover;
    background-position: top, top left 3px;
    background-repeat: no-repeat, no-repeat;
    animation: photoLeft 7s infinite linear;
}

@keyframes photoLeft{
    0%{ clip-path: inset(1% 0 0 0) }
    20%{ clip-path: inset(51% 0 0 0) }
    40%{ clip-path: inset(101% 0 0 0) }
    41%{ clip-path: inset(0 0 100% 0) }
    60%{ clip-path: inset(0 0 100% 0) }
    80%{ clip-path: inset(0 0 50% 0) }
    100%{ clip-path: inset(0 0 0 0) }
}

@keyframes photoRight{
    0%{ clip-path: inset(0 0 100% 0) }
    20%{ clip-path: inset(0 0 50% 0) }
    40%{ clip-path: inset(1% 0 0 0) }
    60%{ clip-path: inset(1% 0 0 0) }
    80%{ clip-path: inset(51% 0 0 0) }
    100%{ clip-path: inset(101% 0 0 0) }
}
</style>

<script setup>
import monBouton from "../components/monBouton.vue"
import SoftSkillsGraph from "@/components/SoftSkillsGraph.vue"
import PassionsGraph from "@/components/PassionsGraph.vue"
</script>