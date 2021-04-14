<template>

    <div class="container">
        <div class="row">
            <div v-for="(item, i) in factions"
             v-bind:key="i"
             class ="col-sm races-container">

                <div class ='races-container-header'>

                    <router-link v-on:click.native="`${dataCommander(i)}`"
                     :to ="`/factions/${item.slug}`">
                        <img :class ="`races-container--${item.race}`" 
                         :src="getImgUrl(item.image)"
                         alt="image race"/>
                        <h2 :class ="`text-center races-container-title--${item.race}`">
                            {{ item.race }}
                        </h2>
                    </router-link>
                </div>

                <div class = 'races-capacity'>

                    <h3 class = 'text-center TIPS races-capacity-first'>
                        {{ item.cap_first_name }}
                    </h3>
                    <p class = 'races-capacity--desc'>
                        {{ item.cap_first_desc }}
                    </p>
                    <h3 class = 'text-center TIPS races-capacity-second'>
                        {{ item.cap_second_name }}
                    </h3>
                    <p class = 'races-capacity--desc'>
                        {{ item.cap_second_desc }} 
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import factions from '../../data/Factions/factions';
import {bus} from '../../main';

export default {
    name: 'Factions',
    data() {
        return {
           factions
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../assets/Images/Interfaces/Races/' + pic + '.png')
        },
        dataCommander(i) {
            var commanders = this.factions[i].commander
            return bus.$emit('dataCommander', commanders)
        }
    }
}
</script>

<style src="./Factions.css" scoped>

</style>