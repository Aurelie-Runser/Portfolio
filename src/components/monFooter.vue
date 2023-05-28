<template>
    <div class="flex flex-wrap justify-evenly gap-x-10 gap-y-5
                w-full h-auto p-7 bg-neutral-800">

        <RouterLink to="/"
            class="footer_link font-darker-grotesque font-bold text-sm md:text-base text-neutral-400 underline decoration-fuchsia-500">
            Hello World
        </RouterLink>

        <a href="/#id_contact" class="footer_link font-darker-grotesque font-bold text-sm md:text-base text-neutral-400 underline decoration-fuchsia-500">
            Me Contacter
        </a>

        <div class="flex gap-5">
            <a target="_blank" href="https://www.linkedin.com/in/aurélie-runser"> 
                <linkedinIconGray class="inline-block w-5 h-5 md:w-8 md:h-8"/>
                <p class="sr-only">Lien vers mon compte Linkedin</p>
            </a>
    
            <a target="_blank" href="https://www.instagram.com/aurelie.runser_pro/">
                <instagramIconGray class="inline-block w-5 h-5 md:w-8 md:h-8"/>
                <p class="sr-only">Lien vers mon compte Instagram</p>
            </a>
            
            <a target="_blank" href="https://github.com/Aurelie-Runser">
                <githubIconGray class="inline-block w-5 h-5 md:w-8 md:h-8"/>
                <p class="sr-only">Lien vers mon compte Github</p>
            </a>
        </div>


        <a href="mailto:aurelie.runser25@gmail.com">
            <p class="sr-only">Mon Adresse Mail : </p>
            <p class="footer_link inline-block ml-3 w-auto font-darker-grotesque font-bold text-sm md:text-base text-neutral-400 underline decoration-fuchsia-500">
                aurelie.runser25@gmail.com
            </p>
        </a>
        
        <p class="w-full mt-3 text-center font-darker-grotesque font-bold text-sm md:text-base text-neutral-400">© 2023 Aurélie Runser</p>

    </div>
</template>

<style scoped>
/* animation du underline des liens */
.footer_link:hover{
    animation: underline_color 1s linear infinite;
}

@keyframes underline_color {
    0%{text-decoration-color: #d946ef;}
    50%{text-decoration-color: #22d3ee;}
    100%{text-decoration-color: #d946ef;}
}
</style>

<script>
import linkedinIconGray from "@/components/icons/linkedinIconGray.vue"
import instagramIconGray from "@/components/icons/instagramIconGray.vue"
import githubIconGray from "@/components/icons/githubIconGray.vue"

export default {
  name: 'ContactForm',
  components: {linkedinIconGray, instagramIconGray, githubIconGray},
}

</script>