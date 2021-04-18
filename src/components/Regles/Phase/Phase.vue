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
                    {{ item.title }}
                </h2>

                <p>
                    {{ item.recap }}
                </p>
                
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
            // Progr : phase[0],
            // Execu : phase[1],
            // Mobil : phase[2]
            phase
        }
    },
}
</script>

<style src="./Phase.css" scoped>

</style>