<template>

    <div class="Regles">

        <div class="button-nav container">

            <p>Accès rapide :</p>
            <button class="btn btn-secondary"
             v-on:click="scrollToElement('Phase')">
                Phase
            </button>
            <button class="btn btn-secondary"
             v-on:click="scrollToElement('Victoire')">
                Victoire
            </button>
            <button class="btn btn-secondary"
             v-on:click="scrollToElement('Module')">
                Module
            </button>
            <button class="btn btn-secondary"
             v-on:click="scrollToElement('Exploit')">
                Exploitation
            </button>
            <button class="btn btn-secondary"
             v-on:click="scrollToElement('Capacity')">
                Capacités
            </button>
        </div>

        <button v-on:click="scrollTopPage()"
         id="btn-nav">
            <img src="../../assets/arrow-bar-up.svg" alt="">
        </button>

        <order></order>
        <phase></phase>
        <victoire></victoire>
        <module></module>
        <exploit></exploit>
        <capacity></capacity>
    </div>
</template>

<script>
import Order from './Order/Order';
import Phase from './Phase/Phase';
import Victoire from './Victoire/Victoire';
import Module from './Module/Module';
import Exploit from './Exploit/Exploit';
import Capacity from './Capacity/Capacity';

export default {
    name: 'Regles',
    components: {
        'order' : Order,
        'phase' : Phase,
        'victoire' : Victoire,
        'module' : Module,
        'exploit' : Exploit,
        'capacity' : Capacity
    },
    methods: {
        scrollToElement(pic) {
            const el = this.$el.getElementsByClassName(pic)[0]
            if (el) {
                el.scrollIntoView()
            }
        },
        scrollTopPage() {
            document.documentElement.scrollTop = 0
        },
        scrollFunction() {
            const mybutton = document.getElementById("btn-nav");
            if (document.documentElement.scrollTop > 500 ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.scrollFunction);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollFunction);
    },
}
</script>

<style src="./Regles.css" scoped>

</style>