<template>
    <div class="projet_card relative aspect-video md:aspect-square overflow-hidden">
        <!-- Les images -->

        <!--image en mobile-->
        <div class="card_img relative block md:hidden aspect-video delay-200 duration-500">
            <img class="object-cover w-full h-full"
                :src="image_rect" :alt="'Image de mon projet '+titre">
        </div>

        <!--image en pc-->
        <div class="card_img relative hidden md:block aspect-square delay-200 duration-500">
            <img class="object-cover w-full h-full"
                :src="image_card" :alt="'Image de mon projet '+titre">
        </div>


        <!-- deco -->
        <div class="card_deco deco_t absolute -top-full left-0 w-full h-full bg-mon-black border-b-4 border-cyan-400 duration-500"></div>

        <!-- Les textes (qui n'apparraissent qu'au survole) -->
            <div class="card_deco deco_b absolute flex flex-col justify-between top-full left-0 w-full h-full p-[5%] border-t-4 border-fuchsia-500 duration-500 delay-200">
            
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
            <RouterLink :to="`/projet/${id}`">
                <button
                    class="card_button absolute bottom-1 right-0 px-6 py-3 min-w-min w-[25%] h-16 md:h-20 bg-orange-100
                            font-oswald text-base md:text-xl tracking-wider text-center text-mon-black
                            transition-all duration-75">
                    Voir
                </button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    id: String,
    image_card: String,
    image_rect: String,
    contexte_resume: String,
    type: String,
    annee_resume: Number,
    titre: String
});
</script>