<template>

     <div class="container">

        <div class="Victoire">

            <h1 class="TIPS title">
                Victoire
            </h1> 

            <p>
                Une Partie peut se terminer de quatre façons :
            </p>

            <div :class="`Victoire-list list-${ i }`"
             v-for="(item, i) in victoire"
             v-bind:key="i">

                <h2>
                   {{ item.name }}
                </h2>

                <p>
                    {{ item.desc }}
                </p>
            </div>      

            <div class="button d-flex flex-row-reverse">
                <button class="btn btn-info">
                    Plus d'informations...
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import victoire from '../../../data/Victoire/victoire'

export default {
    name: 'Victoire',
    data() {
        return {
            victoire
        }
    }
}
</script>

<style src="./Victoire.css" scoped>

</style>