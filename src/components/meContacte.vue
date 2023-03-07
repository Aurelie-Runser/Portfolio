<template>
    <section class="py-28">
        <h2>Me Contacter</h2>
        
        <form action="https://api.web3forms.com/submit" method="POST" ref="contactForm"
            class="mx-5 my-14 md:mx-14 md:my-20 md:max-w-2xl xl:mx-28">


            <input type="hidden" name="access_key" value="b3a5c0b1-dcc2-48e8-90e1-8ce766ba6253">

            <div class="relative my-16">
                <input type="text" name="name" placeholder=" " required
                        class="border-2 border-orange-100 p-2 md:p-5">
                <p class="form_text absolute top-1/2 left-3 -translate-y-1/2
                        font-darker-grotesque font-medium  text-orange-100 opacity-70">
                    Prénom & Nom
                </p>

                <div class="form_obligatoire p-3 md:p-5">
                    <p class="font-darker-grotesque font-bold text-sm 
                                md:text-base">* Obligatoire</p>
                </div>
            </div>

            <div class="relative my-16">
                <input type="email" name="email" placeholder=" " required
                        class="border-2 border-orange-100 p-2 md:p-5">
                <p class="form_text absolute top-1/2 left-3 -translate-y-1/2
                        font-darker-grotesque font-medium  text-orange-100 opacity-70">
                    Adresse Mail
                </p>

                <div class="form_obligatoire p-3 md:p-5">
                    <p class="font-darker-grotesque font-bold text-sm 
                                md:text-base">* Obligatoire</p>
                </div>
            </div>
            
            <div class="relative my-16">
                <input type="text" name="sujet" placeholder=" " required
                        class="border-2 border-orange-100 p-2 md:p-5">
                <p class="form_text absolute top-1/2 left-3 -translate-y-1/2
                        font-darker-grotesque font-medium  text-orange-100 opacity-70">
                    Sujet
                </p>

                <div class="form_obligatoire p-3 md:p-5">
                    <p class="font-darker-grotesque font-bold text-sm 
                                md:text-base">* Obligatoire</p>
                </div>
            </div>

            <div class="relative my-16">
                <textarea name="message" rows="5" placeholder=" " required
                class="border-2 border-orange-100 p-2 md:p-5"></textarea>
                <p class="form_text absolute top-2 left-3
                        font-darker-grotesque font-medium text-lg text-orange-100 opacity-70
                        md:text-xl">
                    Message
                </p>

                <div class="form_obligatoire p-3 md:p-5">
                    <p class="font-darker-grotesque font-bold text-sm 
                                md:text-base">* Obligatoire</p>
                </div>
            </div>

            <!-- <input type="hidden" name="redirect" value="https://web3forms.com/success"> -->

            <monBouton type="submit" class="mx-auto">
                Envoyer
            </monBouton>

        </form>

        <p v-if="messageSent"
            class="form_messageSent relative mx-auto w-fit font-oswald font-bold text-lg xl:text-xl text-center text-stone-300">
            Merci beaucoup, votre message a bien été envoyé !
        </p>

    </section>
</template>


<style>

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

/* taille du texte mobile sur moyennet grand écran */
@media screen and (min-width: 768px) {
    .form_text {
        font-size: 2rem;
  }
}

/* style lorsque le texte mobile se déplace sur portable */
input:focus + .form_text,
input:not(:placeholder-shown) ~ .form_text {
    top: -45%;
    font-size: 1rem;
    transition: all 0.1s ease-in-out;
}

textarea:focus + .form_text,
textarea:valid + .form_text{
    top: -20%;
    font-size: 1rem;
    transition: all 0.1s ease-in-out;
}

/* style lorsque le texte mobile se déplace sur moyen et grand écran */
@media screen and (min-width: 768px) {
    input:focus + .form_text,
    input:not(:placeholder-shown) ~ .form_text {
        top: -40%;
        font-size: 1.5rem;
        transition: all 0.1s ease-in-out;
    }

    textarea:focus + .form_text,
    textarea:valid + .form_text{
        top: -20%;
        font-size: 1.5rem;
        transition: all 0.1s ease-in-out;
    }
}


/* style du texte "* Obligatoire" */
.form_obligatoire{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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

</style>


<script>
import monBouton from "../components/monBouton.vue"

export default {
  name: 'ContactForm',
  components: {monBouton},

  data() {
    return {
      messageSent: false
    }
  },

  mounted(){
        this.$refs.contactForm.addEventListener('submit', this.submitForm)
  },

  methods: {
    async submitForm(event) {
      event.preventDefault()
      const formData = new FormData(event.target)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      if (response.ok) {
        this.messageSent = true
        // Réinitialiser les champs du formulaire
        const inputs = event.target.querySelectorAll('input, textarea')
        inputs.forEach(input => input.value = '')
      }
    }
  }
}

</script>