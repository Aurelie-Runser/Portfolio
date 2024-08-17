<template>
    <!-- bouton -->
    <button class="mon_bouton relative block z-10">

        <!-- texte du bouton
            le style du bouton est mis sur le p et non directement sur le bouton
            pour que la couleur du bouton soit au-dessus des pseudo-element before et after
        -->
        <p class="bouton_text relative w-full h-full px-6 py-3 md:px-10 md:py-5 bg-orange-100 duration-200">
            <span class="font-oswald text-base sm:text-lg xl:text-xl tracking-wider text-center text-mon-black">
                <slot/>
            </span>
        </p>

    </button>
</template>

<style>

.mon_bouton::before,
.mon_bouton::after{
    content: "";
    position: absolute;
    display: block;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(-4px, -4px);
    background-color: #d946ef;
    transition: all 200ms;
}

.mon_bouton::after{
    transform: translate(4px, 4px);
    background-color: #22d3ee;
}

.mon_bouton:hover p {
    background-color: #ffedd5ee;
}

.mon_bouton:hover span {
    display: inline-block;
    animation: btnTxtAnim .4s linear infinite alternate;
}

.mon_bouton:hover::before{
    animation: btnAfterAnim .4s linear infinite alternate;
}

.mon_bouton:hover::after{
    animation: btnBeforeAnim .4s linear infinite alternate-reverse;
}

@keyframes btnTxtAnim {
    0% { transform: translate(-1px, 0px) }
    25% { transform: translate(-1px, -2px) }
    50% { transform: translate(1px, 0px) }
    75% { transform: translate(-3px, 0px) }
    100% { transform: translate(-1px, -1px) }
}

@keyframes btnAfterAnim {
    0% { transform: translate(-7px, 6px) }
    25% { transform: translate(-2px, -8px) }
    50% { transform: translate(7px, 6px) }
    75% { transform: translate(-10px, -6px) }
    100% { transform: translate(-4px, 2px) }
}

@keyframes btnBeforeAnim {
    0% { transform: translate(7px, -6px) }
    25% { transform: translate(2px, 8px) }
    50% { transform: translate(-7px, -6px) }
    75% { transform: translate(10px, 6px) }
    100% { transform: translate(4px, -2px) }
}

</style>