<template>
    <div class="card relative aspect-video md:aspect-square overflow-hidden max-w-md mx-auto" :class="{'borderAnim': isHover}"
        @mouseover="isHover = true" @mouseleave="isHover = false">
        <div class="card_img">
            <!--image en mobile-->
            <div class="relative block md:hidden aspect-video">
                <img class="object-cover w-full h-full"
                    :src="image_rect" :alt="'Image de mon projet '+titre">
            </div>

            <!--image en pc-->
            <div class="relative hidden md:block aspect-square">
                <img class="object-cover w-full h-full"
                    :src="image_card" :alt="'Image de mon projet '+titre">
            </div>
        </div>

        <div class="card_txt relative w-full h-full p-[5%] bg-mon-black flex flex-col justify-between">

            <p>
                <span class="text_card text-orange-100">Contexte : </span>
                <span class="text_card font-oswald font-extralight">{{ contexte_resume }}</span>
            </p>

            <p>
                <span class="text_card text-orange-100">Type : </span>
                <span class="text_card font-oswald font-extralight">{{ type }}</span>
            </p>

            <p>
                <span class="text_card text-orange-100">Année : </span>
                <span class="text_card font-oswald font-extralight">{{ annee_resume }}</span>
            </p>

            <!-- le bouton pour aller sur le projet-->
            <RouterLink :to="`/projet/${id}`" class="text-right absolute right-3 bottom-3 sm:relative">
                <button class="card_bouton relative min-w-min w-[25%] h-fit">
                    <p class="font-oswald w-full px-6 py-3 text-base md:text-xl tracking-wider text-center bg-orange-100 text-mon-black">
                        Voir
                    </p>
                </button>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.card_img{
    z-index: 6;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .1s 0s linear;
}

.card:hover .card_img{
    animation: cardGlitchAnim .2s 0s linear;
    transform: skewX(-90deg);
}

@keyframes cardGlitchAnim{
    0% { transform: skewX(0deg); }
    50% { transform: skewX(-90deg); }
    75% { transform: skewX(-10deg); }
    100% { transform: skewX(-90deg); }
}

.card_bouton{
    z-index: 5;
}

.card_bouton::before,
.card_bouton::after{
    content: "";
    position: absolute;
    display: block;
    z-index: -5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(-3px, -3px);
    background-color: #22d3ee;
    transition: all 200ms;
}

.card_bouton::after{
    transform: translate(3px, 3px);
    background-color: #d946ef;
}

.card_bouton:hover p {
    display: inline-block;
    animation: btnTxtAnim .4s linear infinite alternate;
}

.card_bouton:hover::before{
    animation: btnCardBeforeAnim .4s linear infinite;
}

.card_bouton:hover::after{
    animation: btnCardAfterAnim .4s linear infinite alternate-reverse;
}

@keyframes btnCardAfterAnim {
    0% { transform: translate(-4px, 3px) }
    25% { transform: translate(-1px, -4px) }
    50% { transform: translate(4px, 3px) }
    75% { transform: translate(-5px, -3px) }
    100% { transform: translate(-2px, 1px) }
}

@keyframes btnCardBeforeAnim {
    0% { transform: translate(4px, -3px) }
    25% { transform: translate(1px, 4px) }
    50% { transform: translate(-4px, -3px) }
    75% { transform: translate(5px, 3px) }
    100% { transform: translate(2px, -1px) }
}
</style>

<script setup>
import { ref } from 'vue';

defineProps({
    id: String,
    image_card: String,
    image_rect: String,
    contexte_resume: String,
    type: String,
    annee_resume: Number,
    titre: String
});

const isHover = ref(false)
</script>