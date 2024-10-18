<template>
    <section id="hero" class="ma-section my-0 h-[100dvh] grid relative">
        <div class="self-center h-[100dvh] max-h-[900px]">
            <h1 class="flex flex-col justify-around w-full h-full mx-auto mon-title">
                <span>Hello World,<br/>I'm</span>

                <span class="big-title-glitch btg-anim relative selft-center text-center w-fit mx-auto overflow-hidden"
                        data-text="Aurélie Runser">
                        Aurélie Runser
                    </span>

                <span class="self-end flex flex-wrap justify-end items-end w-full text-right gap-x-[1rem] mr-5 mb-8 sm:mr-0 sm:mb-0">
                    <span class="w-fit h-fit">a junior </span>
        
                    <span class="relative">
                        <span class="big-title-glitch title-glitch tg-anim" data-text="Web Developer">Web Developer</span>
                    </span>
                </span>
            </h1>
        </div>

        <div class="mon-cube absolute left-1 md:left-10 -bottom-16 w-5 h-5 md:w-7 md:h-7"></div>
    </section>
</template>

<style scoped>

.btg-anim::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -2px;
    color: #ffedd5;
    text-shadow: -3px 0 #d946ef;
    animation: glitchPink 3s linear infinite alternate;
}

.btg-anim::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0 ;
    color: #ffedd5;
    text-shadow: 3px 0 #22d3ee;
    background: #1f1f1f;
    clip-path: inset(62% 0% 0% 0%);
    animation: glitch 3s linear infinite alternate;
}

.tg-anim::before{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: -0.5px;
    color: #ffedd5;
    text-shadow: -2px 0 #d946ef;
}

.tg-anim::after{
    content: attr(data-text);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #ffedd5;
    text-shadow: 2px 0 #22d3ee;
    background: #1f1f1f;
    clip-path: inset(62% 0% 0% 0%);
}

/* mise en place d'un carre d'animation */
.mon-cube{
    animation: anim_translate 2s ease-in-out infinite normal, anim_bg 8s infinite;   
}

/* animation de déplacement du carre */
@keyframes anim_translate {
    0% { opacity: 0;
        transform: translate(0, -120px)}
    25% { transform: translate(0, -120px)}

    25% { opacity: 1}

    75% { opacity: 1}
    
    75% {transform: translate(0, -30px)}
    100% {opacity: 0;
        transform: translate(0, -30px)}  
}

/* animation de couleur du carre */
@keyframes anim_bg {
    17% { background: #ffedd5;}

    42% { background: #22d3ee;}
    
    67% { background: #dddddd;}  
    
    92% { background: #d946ef;}  
}

</style>
