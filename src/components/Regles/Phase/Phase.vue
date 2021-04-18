<template>
    <div class="container">

        <div class="Phase">

            <h1 class="TIPS title">
                Le Tour de Jeu
            </h1> 

            <div :class="`Phase-list list-${ i }`"
             v-for="(item, i) in phase"
             v-bind:key="i">

                <h2>
                   {{ item.numb }}. {{ item.title }}
                </h2>

                <p>
                    {{ item.recap }}
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
import phase from '../../../data/Phase/phase';

export default {
    name: 'Phase',
    data() {
        return {
            phase
        }
    },
}
</script>

<style src="./Phase.css" scoped>

</style>