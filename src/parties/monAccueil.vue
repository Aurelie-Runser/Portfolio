<template>
    <section class="ma-section my-0 h-screen grid relative">
        <div class="self-center h-screen max-h-[900px]">
            <h1 class="flex flex-col justify-between w-full h-full mx-auto py-[10vh] md:py-[5vh] lg:py-[10vh]">
                <span class="mon-title ">Hello World,<br/>I'm</span>

                <span class="big-title-glitch btg-anim relative selft-center text-center w-fit mx-auto !overflow-hidden"
                        data-text="Aurélie Runser">
                        Aurélie Runser
                    </span>

                <span class="self-end flex flex-wrap content-end justify-end align-bottom w-full text-right gap-x-[2%]">
                    <span class="mon-title mt-[1%] w-fit h-fit">a junior</span>
        
                    <span class="relative">
                        <span class="big-title-glitch title-glitch tg-anim" data-text="Développeuse Web">Développeuse Web</span>
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

@keyframes glitchPink {
    0%{
        transform: skewX(-90deg);
    }
    1.5%{
        transform: skewX(0deg);
    }
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
