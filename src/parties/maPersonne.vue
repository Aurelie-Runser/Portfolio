<template>
    <section class="my-32">
        <h2>Ma Personne</h2>

        <div class="mx-5 md:mx-14 xl:mx-28 my-8">

            <p class="perso_text guillement_1 relative pl-16 ">
                Perfectionniste et sérieuse, je m'épanouis dans la formation
                <a target="_blank" href="http://mmimontbeliard.com/"
                    class="perso_link font-darker-grotesque text-base md:text-lg
                            underline decoration-fuchsia-500">
                    MMI, Métiers du Multimédia et de l'Internet, à l'IUT de Montbéliard</a>,
                depuis maintenant 2 ans.
            </p>
            
            <p class="perso_text">
                J'y suis arrivée un peu par hasard, mon intérêt pour le développement et le multimédia naissant seulement au lycée grâce au choix de mon orientation, où j'y ai écrit mon 1<sup class="text-sm">er</sup>
                <span class="font-oswald font-light"> "Hello World"</span>.
            </p>
    
            <p class="perso_text">
                Depuis, et surtout en MMI, j'écris beaucoup de lignes de code, et cela ne cesse de me passionner, me donnant
                <strong class="font-darker-grotesque font-medium text-base md:text-lg text-cyan-400">
                    l'envie de toujours découvrir de nouvelle façon de développer
                </strong>
                des sites web, de nouvelles fonctionnalités et animations.
            </p>
    
            <p class="perso_text">
                <strong class="font-darker-grotesque font-medium text-base md:text-lg text-fuchsia-500">
                    Je mets un point d'honneur à respecter au mieux les attentes qui me sont données</strong>,
                pour être fière de mon travail, mais surtout satisfaire mes commanditaires.
            </p>
    
            <p class="perso_text guillement_2 relative pr-16">
                La volonté de rendre service et d'aider avec mes (encore, mais pas pour longtemps) petites connaissances sont ce qui me font avancer pour
                <strong class="font-darker-grotesque font-medium text-base md:text-lg text-cyan-400">
                    participer à la construction du web de demain</strong>.
            </p>

            <!-- Bouton pour télécharger mon CV-->
            <div class="mt-5">
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

    </section>
</template>

<style scoped>

/* quillement en début de texte */
.guillement_1::before{
    content: '"';
    position: absolute;
    top: -3rem;
    left: 0;
    display: inline-block;
    font-family: Oswald;
    font-size: 8rem;
    color: #ffedd5;

    text-shadow: 3px 3px #22d3ee;
}
.guillement_2::after{
    content: '"';
    position: absolute;
    bottom: -4rem;
    right: 0;
    display: inline-block;
    font-family: Oswald;
    font-size: 8rem;
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
// import des composants
import monBouton from "../components/monBouton.vue"

export default {
    name:'ProjetView',
    components: {monBouton},
}
</script>