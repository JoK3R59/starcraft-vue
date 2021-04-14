<template >

    <div class="pt-5 pb-5"
     v-if="viewC">

        <div class="content">

            <div v-for="(commander, i) in commanders"
             :key="i"
             :class ="`faction ${ i === 0 ? 'gauche' : 'droite' }`">

                <div class ="faction-header">

                    <div :class ="`faction-header-${ i === 0 ? 'gauche' : 'droite' }`">

                        <div class="faction-lead-desc">
                            <h3 :class ="`faction-lead ${commander.color}`">
                                {{ commander.leader }}
                            </h3>
                            <h4 class = 'TIPS'>
                                Monde Natal
                            </h4>
                            <p class="parag">
                                {{ commander.world }}
                            </p>
                        </div>
                        <img :class ="`imgTop faction--header-${commander.color}`"
                        :src ="getGifUrl(commander.gifL)"
                        :alt ="`${ commander.slug } commander image`"/>
                    </div>

                    <div :class ="`faction-header-desc ${ i === 0 ? 'gauche' : 'droite' }`">

                        <h2 class = 'TIPS'>Condition de Victoire</h2>
                        <p class="parag">
                            {{ commander.victory }}
                        </p>
                    </div>
                </div>

                <div :class ="`faction-content-${ i === 0 ? 'gauche' : 'droite' }`">

                    <h2 class = 'TIPS'>
                        Forces de Départ
                    </h2>
                    <div class = 'faction-content top'>

                        <div class="desc">

                            <img class="imgBot"
                             :src ="getGifUrl(commander.gifS)"/>
                            <p>
                                {{ commander.soldier }}
                            </p>
                        </div>
                        
                        <div class="desc"
                         v-if="commander.advance">

                            <img class="imgBot"
                             :src ="getGifUrl(commander.gifA)"/>
                            <p>
                                {{ commander.advance }}
                            </p>
                        </div>

                        <div class="desc"
                         v-if="commander.vehicule">

                            <img class="imgBot"
                             :src ="getGifUrl(commander.gifV)"/>
                            <p>
                                {{ commander.vehicule }}
                            </p>
                        </div>
                    </div>

                    <div class = 'faction-content bottom'>

                        <div class="desc">

                            <img class="imgBot"
                             :src ="getGifUrl(commander.gifC)"/>
                            <p>
                                {{ commander.constructor }}
                            </p>
                        </div>

                        <div class="desc">

                            <img class="imgBot"
                             :src ="getGifUrl(commander.gifSh)"/>
                            <p>
                                {{ commander.ship }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <img :class="`faction-portrait img ${faction}`"
            :src="getImgUrl(faction)"
            alt ="Faction image"/>
            <img :class ="`faction-portrait gif ${faction}`"
            :src="getGifLogo(faction)"
            alt ="Faction image"/>
        </div>
    </div>

    <div v-else
     v-on:click="goFactions"
     class="d-flex justify-content-center btn btn-warning">
        Retour aux Factions
    </div>
</template>

<script>
import {bus} from '../../main'

export default {
    name:'Commander',
    data() {
        return {
            viewC : false,
            faction : '',
            commanders: [
                {
                    leader: '',
                    slug: '',
                    color: '',
                    victory: '',
                    world: '',
                    soldier: '',
                    advance: '',
                    vehicule: '',
                    ship: '',
                    constructor: '',
                    gifL: '',
                    gifS: '',
                    gifA: '',
                    gifV: '',
                    gifSh: '',
                    gifC: '',
                }
            ]
        }
    },
    methods: {
        goFactions() {
            this.$router.push('/factions')
        },
        getGifUrl(pic) {
            return require('../../assets/Images/Interfaces/Races/' + pic + '.gif')
        },
        getGifLogo(pic) {
            return require('../../assets/Images/Interfaces/Races/' + pic + '/' + pic + '.gif')
        },
        getImgUrl(pic) {
            return require('../../assets/Images/Interfaces/Races/' + pic + '/fond-portrait.png')
        },
        capitalize(value) {
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    beforeCreate() {
        bus.$on('dataCommander', (data) => {
            this.viewC = true
            this.faction = this.capitalize(this.$router.history.current.params.name)
            this.commanders = data
        })
    }
}
</script>

<style src="./Commander.css" scoped>

</style>