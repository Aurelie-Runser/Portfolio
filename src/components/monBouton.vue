<template>
    <!-- bouton -->
    <button class="mon_bouton relative block z-10">

        <!-- texte du bouton
            le style du bouton est mis sur le p et non directement sur le bouton
            pour que la couleur du bouton soit au-dessus des pseudo-element before et after
        -->
        <p class="bouton_text w-full h-full px-6 py-3 md:px-10 md:py-5 bg-orange-100 duration-200
                font-oswald text-base sm:text-lg xl:text-xl tracking-wider text-center text-mon-black">
            <slot/>
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
    transform: translate(-3%, -3%);
    background-color: #22d3ee;
    transition: all 200ms;
}

.mon_bouton::after{
    transform: translate(3%, 3%);
    background-color: #d946ef;
}

.mon_bouton:hover::before{
    transform: translate(-5%, -10%);
}

.mon_bouton:hover::after{
    transform: translate(5%, 10%);
}

</style>