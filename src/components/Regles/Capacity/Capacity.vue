<template>
    <div class="container">

        <div class="Capacity">

            <h1 class="TIPS title">
                Effets et Capacités
            </h1> 

            <p>
                Le plus souvent, les capacités sont totalement expliquées sur les éléments du jeu (cartes, fiches). Mais certaines capacités sont résumées par un symbole ou un mot clé. Les effets de ces symboles ou mots clés sont expliqués maintenant.
            </p>
            
            <!-- <offCanvas></offCanvas> -->

            <div :class="`Capacity-list list-${ i }`"
             v-for="(item, i) in capacity"
             v-bind:key="i">

                <h2>
                   {{ item.name }}.
                </h2>

                <p>
                    {{ item.recap }}
                </p>
                
            </div>
        </div>
    </div>
</template>

<script>
import capacity from '../../../data/Capacity/capacity';

// import OffCanvas from './OffCanvas';

export default {
    name: 'Capacity',
    data() {
        return {
            capacity
        }
    },
    components: {
        // 'offCanvas' : OffCanvas
    }
}
</script>

<style src="./Capacity.css" scoped>

</style>