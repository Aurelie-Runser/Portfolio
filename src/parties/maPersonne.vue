<template>
    <section class="my-32 px-0">
        <h2 class="px-7 md:px-10">Ma Personne</h2>
        
        <div class="md:mx-14 xl:mx-28 2xl:mx-auto my-8 2xl:max-w-7xl">

            <div class="my-10 flex md:flex-row flex-wrap justify-around gap-5">
                <SoftSkillsGraph/>
                <PassionsGraph/>
            </div>

            <div class="px-7 md:px-10">
                <p class="perso_text">
                    <span class="guillement_1">"</span>Minutieuse et sérieuse, je me suis épanouie dans la formation
                    <a target="_blank" href="http://mmimontbeliard.com/"
                        class="perso_link font-darker-grotesque text-base md:text-lg
                                underline decoration-fuchsia-500">
                        MMI, Métiers du Multimédia et de l'Internet, à l'IUT de Montbéliard</a>,
                    durant 3 ans. J'en suis sortie diplômée et majore de mon parcours, développement Web et dispositifs interactifs.
                </p>
                
                <p class="perso_text">
                    Je suis arrivée dans le développement un peu par hasard, mon intérêt pour le développement et le multimédia naissant seulement au lycée grâce au choix de mon orientation, où j'y ai écrit mon 1<sup class="text-sm">er</sup>
                    <span class="font-oswald font-light"> "Hello World"</span>.
                </p>
        
                <p class="perso_text">
                    Depuis, j'écris beaucoup de lignes de code, ai réalisé de nombreux projets, et cela ne cesse de me passionner, me donnant
                    <strong class="font-darker-grotesque font-medium text-base md:text-lg text-cyan-400">
                        l'envie de toujours découvrir de nouvelles façons de développer
                    </strong>
                    des sites web, de nouvelles fonctionnalités et animations.
                </p>
        
                <p class="perso_text">
                    <strong class="font-darker-grotesque font-medium text-base md:text-lg text-fuchsia-500">
                        Je mets un point d'honneur à respecter au mieux les attentes qui me sont données</strong>,
                    pour être fière de mon travail, mais surtout satisfaire les utilisateurs.
                </p>
                
                <div class="flex gap-3">
                    <p class="perso_text w-auto">
                        La volonté de rendre service et d'aider avec mes connaissances sont ce qui me font avancer pour
                        <strong class="font-darker-grotesque font-medium text-base md:text-lg text-cyan-400">
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
                        <monBouton class="mx-auto mt-5">
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
    text-shadow: 3px 3px #22d3ee;
    transform: translateY(3rem);
}

.guillement_2{
    transform: translateY(-2rem);
    font-family: Oswald;
    font-size: 10rem;
    height: 3rem;
    color: #ffedd5;
    text-shadow: 3px 3px #d946ef;
}

/* taille du guillement sur moyen net grand écran */
@media screen and (min-width: 768px) {
    .form_text {
        font-size: 10rem;
  }
}


/* animation du underline */
.perso_link:hover{
    animation: underline_color 1s linear infinite;
}

@keyframes underline_color {
    0%{text-decoration-color: #d946ef;}
    50%{text-decoration-color: #22d3ee;}
    100%{text-decoration-color: #d946ef;}
}

</style>

<script>
import monBouton from "../components/monBouton.vue"
import SoftSkillsGraph from "@/components/SoftSkillsGraph.vue"
import PassionsGraph from "@/components/PassionsGraph.vue"

export default {
    name:'ProjetView',
    components: {monBouton, SoftSkillsGraph, PassionsGraph},
}
</script>