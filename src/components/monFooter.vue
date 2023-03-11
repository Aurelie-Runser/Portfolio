<template>
    <div class="flex flex-wrap justify-around gap-x-10 gap-y-5
                w-full h-auto p-7 bg-neutral-700">
        <RouterLink to="/id_contact"
            class="footer_link font-darker-grotesque font-bold text-sm md:text-base text-orange-100 underline decoration-fuchsia-500">
            Contactez-Moi !
        </RouterLink>

        <div class="flex gap-5">
            <a target="_blank" href="https://www.linkedin.com/in/aurélie-runser-10a763224"> 
                <linkedinIcon class="inline-block w-5 h-5 md:w-8 md:h-8"/>
                <p class="sr-only">Lien vers mon compte Linkedin</p>
            </a>
    
            <a target="_blank" href="https://www.instagram.com/aurelie.projetmmi/">
                <instagramIcon class="inline-block w-5 h-5 md:w-8 md:h-8"/>
                <p class="sr-only">Lien vers mon compte Instagram : </p>
            </a>
        </div>


        <a href="mailto:aurelie.runser25@gmail.com">
            <p class="sr-only">Mon Adresse Mail : </p>
            <p class="footer_link inline-block ml-3 w-auto font-darker-grotesque font-bold text-sm md:text-base text-orange-100 underline decoration-fuchsia-500">
                aurelie.runser25@gmail.com
            </p>
        </a>

        <a href="tel:+33771722003">
            <p class="sr-only">Mon Numéro de Téléphone : </p>
            <p class="footer_link inline-block ml-3 w-auto font-darker-grotesque font-bold text-sm md:text-base text-orange-100 underline decoration-fuchsia-500">
                +33 7 71 72 20 03
            </p>
        </a>
        

    </div>
</template>

<style scoped>
/* animation du underline */
.footer_link:hover{
    animation: underline_color 0.5s linear infinite;
}

@keyframes underline_color {
    from{text-decoration-color: #22d3ee;}
    to{text-decoration-color: #d946ef;}
}
</style>

<script>
import linkedinIcon from "@/components/icons/linkedinIcon.vue"
import instagramIcon from "@/components/icons/instagramIcon.vue"
import mailIcon from "@/components/icons/mailIcon.vue"
import phonIcon from "@/components/icons/phonIcon.vue"

export default {
  name: 'ContactForm',
  components: {linkedinIcon, instagramIcon, mailIcon, phonIcon},
}

</script>