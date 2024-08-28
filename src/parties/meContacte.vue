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
                <form @submit.prevent="submitForm"
                    class="mx-auto lg:mx-0 max-w-2xl">

                    <div class="relative">
                        <input
                            type="text"
                            id="prenom_nom"
                            name="prenom_nom"
                            v-model="prenom_nom"
                            placeholder=" "
                            required>
                        <label for="prenom_nom" class="form_text">Prénom Nom</label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
                    
                    <div class="relative mt-6">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            v-model="email"
                            placeholder=" "
                            required>
                        <label for="email" class="form_text">Adresse Mail</label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
                    

                    <div class="relative mt-6">
                        <input
                            type="text"
                            id="sujet"
                            name="sujet"
                            v-model="sujet"
                            placeholder=" "
                            required>
                        <label for="sujet" class="form_text">Sujet</label>
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
        

                    <div class="relative mt-6">
                        <textarea
                            id="message"
                            name="message"
                            v-model="message"
                            rows="5"
                            placeholder=" "
                            required></textarea>
                        <label for="message" class="form_text">Message</label>
                        
        
                        <div class="form_obligatoire p-3 md:p-5">
                            <p class="font-darker-grotesque font-bold text-sm 
                                        md:text-base">Obligatoire</p>
                        </div>
                    </div>
          

                    <div class="relative mt-6 text_complement">
                        <input
                            type="text"
                            id="complement"
                            name="complement"
                            v-model="complement"
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
                        <input type="checkbox" id="consentementRGPD" name="consentementRGPD" v-model="consentementRGPD" required
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
                    <div v-else class="borderAnim mt-10">
                        <p class="m-0.5 p-4 bg-mon-black font-oswald font-semibold italic text-lg xl:text-xl text-center text-orange-100">
                            Merci beaucoup,<br class="hidden xl:inline"/> votre message a bien été envoyé&nbsp;!
                        </p>
                    </div>
        
                </form>

                <!-- Texte de consentement RGPD complet -->
                <div :class="{ 'block': RGPD, 'hidden': !RGPD }"
                    class="borderAnim fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full h-fit md:w-3/4">
                     <div class="max-h-[100vh] p-5 md:p-10 bg-mon-black overflow-scroll">
                           
                         <p class="mx-auto w-fit font-darker-grotesque text-base xl:text-lg text-stone-300">
                             En soumettant ce formulaire, vous consentez à ce que vos données personnelles, telles que votre prénom, votre nom, votre adresse e-mail et le contenu de votre message, soient collectées et utilisées par Aurélie Runser dans le but de répondre à votre demande de contact. Ces informations seront stockées en toute sécurité et ne seront pas partagées avec des tiers sans votre consentement préalable.
         
                             <br/>Vous pouvez à tout moment me demander de supprimer vos données personnelles de mes archives en m'envoyant un e-mail à aurelie.runser25@gmail.com.
         
                             <br/>En soumettant ce formulaire, vous donnez votre consentement libre, spécifique, éclairé et univoque au traitement de vos données personnelles conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD).
                         </p>   
     
                         <monBouton class="mx-auto mt-10" @click="RGPD = false">Fermer</monBouton>
                     </div>
                 </div>
                
            </div>
        </div>

    </section>
</template>


<style>

/* animation du underline */
a:hover .contact_link,
.contact_link:hover{
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

/* cache du champs anti-spam */
.text_complement{
    display: none;
}

</style>


<script setup>
import { ref } from 'vue';
import monBouton from '@/components/monBouton.vue';
import linkedinIcon from '@/components/icons/linkedinIcon.vue';
import instagramIcon from '@/components/icons/instagramIcon.vue';
import githubIcon from '@/components/icons/githubIcon.vue';
import mailIcon from '@/components/icons/mailIcon.vue';

// Références réactives pour les états du composant
const liHover = ref(false);
const instaHover = ref(false);
const gitHover = ref(false);
const mailHover = ref(false);

const WEB3FORMS_ACCESS_KEY = "b3a5c0b1-dcc2-48e8-90e1-8ce766ba6253"
const prenom_nom = ref("");
const email = ref("");
const sujet = ref("");
const message = ref("");
const consentementRGPD = ref(false);

const complement = ref("");
const messageSent = ref(false);
const RGPD = ref(false);

const submitForm = async () => {
    if (complement.value.length > 0 || consentementRGPD.value == false) {
        // Si le champ "complement" est rempli, ne pas envoyer le mail
        return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            prenom_nom: prenom_nom.value,
            email: email.value,
            sujet: sujet.value,
            message: message.value,
        }),
    });

    const result = await response.json();
    if (result.success) {
        messageSent.value = true;

        prenom_nom.value = ""
        email.value = ""   
        sujet.value = ""   
        message.value = "" 
        consentementRGPD.value = false
    }
}

// Fonction de soumission du formulaire
// const submitForm = async (event) => {
//   event.preventDefault();

//   // Récupère les valeurs des champs du formulaire
//   const formData = new FormData(event.target);

//   // Vérifier si le champ "complement" est rempli
//   const complementValue = formData.get('complement');
//   if (complementValue && complementValue.trim() !== '') {
//     // Si le champ "complement" est rempli, ne pas envoyer le mail
//     return;
//   }

//   console.log(formData)
// //   name="access_key" value="b3a5c0b1-dcc2-48e8-90e1-8ce766ba6253"

//   // Envoie les valeurs à web3form qui envoie le mail
// //   const response = await fetch('https://api.web3forms.com/submit', {
// //     method: 'POST',
// //     body: formData,
// //   });

//   // Si le message est envoyé, écrire un message et effacer les champs
// //   if (response.ok) {
// //     messageSent.value = true;
// //     // Réinitialiser les champs du formulaire
// //     const inputs = event.target.querySelectorAll('input, textarea');
// //     inputs.forEach((input) => (input.value = ''));
// //   }
// };
</script>