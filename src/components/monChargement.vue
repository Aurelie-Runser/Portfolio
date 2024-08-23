<template>
    <div class="w-full h-full relative">
        <div class="log log_4 absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-fuchsia-500"></div>
        <div class="log log_3 absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-stone-300"></div>
        <div class="log log_2 absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-cyan-400"></div>
        <div class="log log_1 absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-orange-100"></div>
    </div>
</template>

<style>

/* animation chargement carree beige */
.log_1{
    animation: log_1 5s ease-in-out infinite;
}
@keyframes log_1{
    0%{
        translate : -45px -45px
    }
    12.5%{
        translate : 0
    }
    25%{
        translate : 45px -45px
    }
    37.5%{
        translate : 0
    }
    50%{
        translate : 45px 45px
    }
    62.5%{
        translate : 0
    }
    75%{
        translate : -45px 45px
    }
    87.5%{
        translate : 0
    }
    100%{
        translate : -45px -45px
    }
}

/* animation chargement carree bleu */
.log_2{
    animation: log_2 5s ease-in-out infinite;
}
@keyframes log_2{
    0%{
        translate : 45px -45px
    }
    12.5%{
        translate : 0
    }
    25%{
        translate : 45px 45px
    }
    37.5%{
        translate : 0
    }
    50%{
        translate : -45px 45px
    }
    62.5%{
        translate : 0
    }
    75%{
        translate : -45px -45px
    }
    87.5%{
        translate : 0
    }
    100%{
        translate : 45px -45px
    }
}

/* animation chargement carree blanc */
.log_3{
    animation: log_3 5s ease-in-out infinite;
}
@keyframes log_3{
    0%{
        translate : 45px 45px
    }
    12.5%{
        translate : 0
    }
    25%{
        translate : -45px 45px
    }
    37.5%{
        translate : 0
    }
    50%{
        translate : -45px -45px
    }
    62.5%{
        translate : 0
    }
    75%{
        translate : 45px -45px
    }
    87.5%{
        translate : 0
    }
    100%{
        translate : 45px 45px
    }
}

/* animation chargement carree rose */
.log_4{
    animation: log_4 5s ease-in-out infinite;
}
@keyframes log_4{
    0%{
        translate : -45px 45px
    }
    12.5%{
        translate : 0
    }
    25%{
        translate : -45px -45px
    }
    37.5%{
        translate : 0
    }
    50%{
        translate : 45px -45px
    }
    62.5%{
        translate : 0
    }
    75%{
        translate : 45px 45px
    }
    87.5%{
        translate : 0
    }
    100%{
        translate : -45px 45px
    }
}
</style>