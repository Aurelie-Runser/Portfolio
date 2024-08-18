<template>
    <section class="ma-section">
        <h2>À Propos</h2>
        
        <div class="my-8 md:my-16">

            <div class="flex md:flex-row flex-wrap justify-around gap-1">
                <SoftSkillsGraph/>
                <PassionsGraph/>
            </div>

            <div>
                <p class="perso_text">
                    <span class="guillement_1">"</span>Minutieuse et sérieuse, je me suis épanouie dans la formation MMI,
                    Métiers du Multimédia et de l'Internet, à l'IUT de Montbéliard, durant 3 ans.
                    <strong class="text-cyan-400">J'en suis sortie diplômée, 2<sup class="text-sm">ème</sup> de promo et majore de mon parcours</strong>, développement Web et dispositifs interactifs.
                </p>
                
                <p class="perso_text">
                    Je suis arrivée dans le développement un peu par hasard, mon intérêt pour le développement et le multimédia naissant seulement au lycée grâce au choix de mon orientation, où j'y ai écrit mon 1<sup class="text-sm">er</sup>
                    <span class="font-oswald font-light"> "Hello World"</span>.
                </p>
        
                <p class="perso_text">
                    Depuis, j'écris beaucoup de lignes de code, ai réalisé de nombreux projets, et cela ne cesse de me passionner, me donnant
                    <strong class="text-fuchsia-500">
                        l'envie de toujours découvrir de nouvelles façons de développer
                    </strong>
                    des sites web, de nouvelles fonctionnalités et animations.
                </p>
        
                <p class="perso_text">
                    <strong class="text-cyan-400">
                        Je mets un point d'honneur à respecter au mieux les attentes qui me sont données</strong>,
                    pour être fière de mon travail, mais surtout satisfaire les utilisateurs.
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
                <div>
                    <p class="perso_text">
                        Si vous voulez en être, n'hésitez à me contacter et à consulter mon CV.
                    </p>
    
                    <a target="_blank" href="https://drive.google.com/drive/folders/1wbf5tLZU1f4blTsYob3HGBV2Mzv_Z10V?usp=sharing">
                        <monBouton class="mx-auto mt-10">
                            Télécharger mon CV
                        </monBouton>
                    </a>
                </div>
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
</style>

<script setup>
import monBouton from "../components/monBouton.vue"
import SoftSkillsGraph from "@/components/SoftSkillsGraph.vue"
import PassionsGraph from "@/components/PassionsGraph.vue"
</script>