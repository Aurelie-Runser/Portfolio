<template>
    <section class="ma-section">
        <h2>Contact</h2>

        <!--mise en ligne des élements (formulaire + réseaux) en ligne-->
        <div class="lg:flex flex-row-reverse gap-5 mx-auto my-8 md:my-10 h-fit">
    
                <!-- réseaux sociaux -->
            <div class="sticky top-1/2 flex flex-wrap sm:justify-center lg:flex-col mx-auto w-fit h-fit gap-x-8 gap-y-5 fill-orange-100 mb-8 lg:mb-0 lg:mt-20">

                    <a target="_blank" href="https://www.linkedin.com/in/aurélie-runser" rel="noopener noreferrer" class="block w-max"
                            @mouseover="liHover = true" 
                            @mouseleave="liHover = false">
                        <linkedinIcon :hover="liHover" class="inline-block w-7 h-7 md:w-10 md:h-10"/>
                        <p class="sr-only">Mon compte Linkedin : </p>
                        <p class="contact_link inline-block ml-3 w-auto font-darker-grotesque font-bold text-base md:text-lg text-orange-100 underline decoration-fuchsia-500">
                            in/aurélie-runser
                        </p>
                    </a>

                    <a target="_blank" href="https://github.com/Aurelie-Runser" rel="noopener noreferrer" class="block w-max"
                            @mouseover="gitHover = true" 
                            @mouseleave="gitHover = false">
                        <githubIcon :hover="gitHover" class="inline-block w-7 h-7 md:w-10 md:h-10"/>
                        <p class="sr-only">Mon compte Github : </p>
                        <p class="contact_link inline-block ml-3 w-auto font-darker-grotesque font-bold text-base md:text-lg text-orange-100 underline decoration-fuchsia-500">
                            Aurelie-Runser
                        </p>
                    </a>
        
                    <a target="_blank" href="https://www.instagram.com/aurelie.runser_pro/" rel="noopener noreferrer" class="block w-max"
                            @mouseover="instaHover = true" 
                            @mouseleave="instaHover = false">
                        <instagramIcon :hover="instaHover" class="inline-block w-7 h-7 md:w-10 md:h-10"/>
                        <p class="sr-only">Mon compte Instagram : </p>
                        <p class="contact_link inline-block ml-3 w-auto font-darker-grotesque font-bold text-base md:text-lg text-orange-100 underline decoration-fuchsia-500">
                            @aurelie.runser_pro
                        </p>
                    </a>

                    <a href="mailto:aurelie.runser25@gmail.com" class="block w-max"
                            @mouseover="mailHover = true" 
                            @mouseleave="mailHover = false">
                        <mailIcon :hover="mailHover" class="inline-block w-9 h-9 md:w-12 md:h-12"/>
                        <p class="sr-only">Mon Adresse Mail : </p>
                        <p class="contact_link inline-block ml-3 w-auto font-darker-grotesque font-bold text-base md:text-lg text-orange-100 underline decoration-fuchsia-500">
                            aurelie.runser25@gmail.com
                        </p>
                    </a>
            </div>

            <!-- formulaire-->
            <div>
                <form action="https://api.web3forms.com/submit" method="POST" ref="contactForm"
                    class="mx-auto lg:mx-0 max-w-2xl">
        
                    <input type="hidden" name="access_key" value="b3a5c0b1-dcc2-48e8-90e1-8ce766ba6253" autocomplete="off">

                    <div class="relative">
                        <input
                            type="text"
                            name="prenom_nom"
                            id="prenom_nom"
                            placeholder=" "
                            required>
                        <label for="prenom_nom" 
                                class="form_text">
                            Prénom & Nom
                        </label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
                    
                    <div class="relative mt-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                            required>
                        <label for="email"
                               class="form_text">
                            Adresse Mail
                        </label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
                    

                    <div class="relative mt-6">
                        <input
                            type="text"
                            name="sujet"
                            id="sujet"
                            placeholder=" "
                            required>
                        <label for="sujet"
                                class="form_text">
                            Sujet
                        </label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
        

                    <div class="relative mt-6">
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            placeholder=" "
                            required></textarea>

                        <label for="message"
                                class="form_text">Message</label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
          

                    <div class="relative mt-6 text_complement">
                        <input
                            type="text"
                            name="complement"
                            id="complement"
                            placeholder=" ">
                        <label for="complement"
                                class="form_text
                                font-darker-grotesque font-medium  text-orange-100 opacity-70">
                            Complément
                        </label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
        

                    <!-- consentement RGPD -->
                    <div class="relative mt-6 flex items-start gap-5">

                        <!-- CheckBox-->
                        <input type="checkbox" name="consentementRGPD" required
                                class="w-20 h-20 sm:w-10 sm:h-10 accent-cyan-400">

                        <!-- Texte de consentement RGPD extrait -->
                        <label class="inline-block font-darker-grotesque text-sm md:text-base text-stone-300"
                                for="consentementRGPD">
                            J'accepte que ces données personnelles soient collectées et utilisées par Aurélie Runser dans le but de répondre à mon message.
                            <br/>Pour en savoir plus sur les conditions d'utilisation de mes données,
                            <button @click="RGPD = true"
                                    class="contact_link inline-block font-darker-grotesque text-sm md:text-base text-orange-100 underline decoration-fuchsia-500">
                                cliquez ici</button>&nbsp;.
                        </label>

                    </div>

        
                    <monBouton v-if="!messageSent" type="submit" class="mx-auto mt-10">
                        Envoyer
                    </monBouton>
                    <p v-else class="form_messageSent relative mx-auto my-20 w-fit font-oswald font-bold text-lg xl:text-xl text-center text-stone-300">
                        Merci beaucoup, votre message a bien été envoyé !</p>
        
                </form>

                <!-- Texte de consentement RGPD complet -->
                <div class="RGPDcomplet fixed z-50 p-7 md:p-10 bg-mon-black w-full h-full md:w-3/4 md:h-auto overflow-scroll md:overflow-visible top-[200vh] left-1/2 -translate-x-1/2 -translate-y-1/2"
                    :aria-expanded="RGPD" :class="{ 'top-[50vh]': RGPD }">
                      
                    <p class="mx-auto w-fit font-darker-grotesque text-base xl:text-lg text-stone-300">
                        En soumettant ce formulaire, vous consentez à ce que vos données personnelles, telles que votre prénom, votre nom, votre adresse e-mail et le contenu de votre message, soient collectées et utilisées par Aurélie Runser dans le but de répondre à votre demande de contact. Ces informations seront stockées en toute sécurité et ne seront pas partagées avec des tiers sans votre consentement préalable.
    
                        <br/>Vous pouvez à tout moment me demander de supprimer vos données personnelles de mes archives en m'envoyant un e-mail à aurelie.runser25@gmail.com.
    
                        <br/>En soumettant ce formulaire, vous donnez votre consentement libre, spécifique, éclairé et univoque au traitement de vos données personnelles conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD).
                    </p>   

                    <monBouton class="mx-auto mt-10" @click="RGPD = false">Fermer</monBouton>
                </div>
                
            </div>
        </div>

    </section>
</template>


<style>

/* animation du underline */
a:hover .contact_link{
    animation: underline_color 1s linear infinite;
}

/* nécessaire pour que l'utilisateur puisse pas cliquer sur les textes en absolute */
.form_text,
.form_obligatoire {
    pointer-events: none;
    transition: all 0.1s ease-in-out;
}

/* taille du texte mobile sur portable */
.form_text{
    font-size: 1.5rem;
}

/* style lorsque le texte mobile se déplace sur portable */
:is(input, textarea):is(:focus, :not(:placeholder-shown)) + .form_text{
    top: 0;
    /* translate: 0 -25%; */
    font-size: 1rem;
    padding: 0 0.5rem;
    transition: all 0.1s ease-in-out;
}

/* style lorsque le texte mobile se déplace sur moyen et grand écran */
@media screen and (min-width: 768px) {
    :is(input, textarea):is(:focus, :not(:placeholder-shown)) + .form_text{
        top: 0rem;
        font-size: 1.25rem;
    }
}


/* style du texte "* Obligatoire" */
.form_obligatoire{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    place-items: center;
    height: 100%;
    padding: 0 10px;

    opacity: 0;
    transition: opacity 0.1s ease-in-out;
}

/* couleur du texte "* Obligatoire" */
.form_obligatoire p{
    color: #d946ef;
}

/* style du texte "*Obligatoire" lorsque l'input n'est pas complete */
input:invalid ~ .form_obligatoire,
textarea:invalid ~ .form_obligatoire{
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
}


/* style autour du message de confirmation de l'envoie du formulaire */
.form_messageSent::before{
    content: "";
    position: absolute;
    top: -15%;
    left: -3%;
    display: block;
    width: 104%;
    height: 120%;
    border: 2px solid #22d3ee;
}
.form_messageSent::after{
    content: "";
    position: absolute;
    bottom: -15%;
    right : -3%;
    display: block;
    width: 104%;
    height: 120%;
    border: 2px solid #d946ef;
}



/* style autour du message RGPD */
.RGPDcomplet::before{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 101%;
    height: 101%;
    border: 2px solid #22d3ee;
}
.RGPDcomplet::after{
    content: "";
    position: absolute;
    top: 0;
    left : 0;
    display: block;
    width: 101%;
    height: 101%;
    border: 2px solid #d946ef;
}

/* suppression des marges du message RGPD sur mobile */
@media screen and (max-width: 768px) {
    .RGPDcomplet::before,
    .RGPDcomplet::after{
        display: none;
    }
}

/* cache du champs anti-spam */
.text_complement{
    display: none;
}

</style>


<script>
import monBouton from "@/components/monBouton.vue"
import linkedinIcon from "@/components/icons/linkedinIcon.vue"
import instagramIcon from "@/components/icons/instagramIcon.vue"
import githubIcon from "@/components/icons/githubIcon.vue"
import mailIcon from "@/components/icons/mailIcon.vue"

export default {
  name: 'ContactForm',
  components: {monBouton, linkedinIcon, instagramIcon, githubIcon, mailIcon},

  data() {
    return {
      messageSent: false,
      RGPD: false,
      liHover: false,
      instaHover: false,
      gitHover: false,
      mailHover: false,
    }
  },

  mounted(){  
    this.$refs.contactForm.addEventListener('submit', this.submitForm)
  },

    methods: {
        async submitForm(event) {
            event.preventDefault();

            // récupère les valeurs des champs du formulaire
            const formData = new FormData(event.target);

             // Vérifier si le champ "complement" est rempli
            const complementValue = formData.get('complement');
            if (complementValue && complementValue.trim() !== '') {
                // Si le champ "complement" est rempli, ne pas envoyer le mail
                // Vous pouvez afficher un message d'erreur ou simplement sortir de la fonction
                return;
            }

            // envoie les valeurs à web3form qui m'envoie le mail
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            // si le message est envoyé, écrire un message et effacer les champs
            if (response.ok) {
                this.messageSent = true;
                // Réinitialiser les champs du formulaire
                const inputs = event.target.querySelectorAll('input, textarea');
                inputs.forEach(input => (input.value = ''));
            }
        }
    }
  
}

</script>