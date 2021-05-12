<template>

    <div class="Combat">

        <h1 class="TIPS">Simulation de Combat</h1>

        <div class="Combat-list">

            <div class="select-list">

                <div class="select">

                    <h2>Attaquant</h2>

                    <div class="selection race">

                        <p>Race :</p>

                        <select name="comAtk" id="atk"
                         @change="selectRaceAtk($event)">
                            <option value="" selected disabled>
                                Select Race
                            </option>
                            <option :key="i"
                             v-for="(card, i) in Card"
                             :value="card.value">
                                {{ card.race }}
                            </option>
                        </select>
                    </div>

                    <div class="selection figurine">

                        <p>Figurine :</p>

                        <select name="comFigurine" id="atk-fig"
                         @change="onChange($event)">
                            <option value="" selected>
                                Select Figurine
                            </option>
                            <option :key="i"
                             v-for="(figurine, i) in figurineAtkFront"
                             :value="figurine.value">
                                {{ figurine.name }}
                            </option>
                        </select>

                    </div>

                    <div class="selection card-combat">

                        <p>Carte Combat :</p>

                        <select name="card-combat" id="atk-combat"
                         @change="onChange($event)">
                            <option value="" selected disabled>
                                Select Carte Combat
                            </option>
                            <optgroup label= "Combat_Standard">
                                <option :key="i"
                                v-for="(card, i) in selectCardCombatAtk"
                                :value="card.img">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                            <optgroup label= "Combat_Technologie">
                                <option :key="i"
                                v-for="(card, i) in selectCardTechAtk"
                                :value="card.img">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                        </select>

                    </div>

                    <div class="selection card-combat">

                        <p>Carte Renfort :</p>

                        <select name="card-combat" id="atk-combat"
                         @change="onChange($event)">
                            <option value="" selected>
                                Select Carte Renfort
                            </option>
                            <!-- <option :key="i"
                             v-for="(figurine, i) in figurineAtkFront"
                             :value="figurine.value">
                                {{ figurine.name }}
                            </option> -->
                        </select>

                    </div>
                </div>

                <div class="select">

                    <h2>Défenseur</h2>

                    <div class="selection race">

                        <p>Race :</p>

                        <select name="comDef" id="def"
                        @change="selectRaceDef($event)">
                            <option value="select" selected disabled>
                                Select Race
                            </option>
                            <option :key="i"
                            v-for="(card, i) in Card"
                            :value="card.value">
                                {{ card.race }}
                            </option>
                        </select>
                    </div>

                    <div class="selection figurine">

                        <p>Figurine :</p>

                        <select name="comFigurine" id="atk-fig"
                         @change="onChange($event)">
                            <option value="" selected>
                                Select Figurine
                            </option>
                            <option :key="i"
                             v-for="(figurine, i) in figurineDefFront"
                             :value="figurine.value">
                                {{ figurine.name }}
                            </option>
                        </select>

                    </div>

                    <div class="selection card-combat">

                        <p>Carte Combat :</p>

                        <select name="card-combat" id="atk-combat"
                         @change="onChange($event)">
                            <option value="" selected disabled>
                                Select Carte Combat
                            </option>
                            <optgroup label= "Combat_Standard">
                                <option :key="i"
                                v-for="(card, i) in selectCardCombatDef"
                                :value="card.img">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                            <optgroup label= "Combat_Technologie">
                                <option :key="i"
                                v-for="(card, i) in selectCardTechDef"
                                :value="card.img">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                        </select>

                    </div>

                    <div class="selection card-combat">

                        <p>Carte Renfort :</p>

                        <select name="card-combat" id="atk-combat"
                         @change="onChange($event)">
                            <option value="" selected>
                                Select Carte Renfort
                            </option>
                            <!-- <option :key="i"
                             v-for="(figurine, i) in figurineAtkFront"
                             :value="figurine.value">
                                {{ figurine.name }}
                            </option> -->
                        </select>

                    </div>
                </div>
            </div>

            <simul></simul>
        </div>
    </div>
</template>

<script>
import Simulation from './Simulation';

import Card from '../../data/Simulation/Card';
import Figurine from '../../data/Simulation/Figurine';

export default {
    name: 'Combat',
    data() {
        return {
            Card,
            figurineAtkFront: [],
            selectCardCombatAtk: [],
            selectCardTechAtk: [],
            figurineDefFront: [],
            selectCardCombatDef: [],
            selectCardTechDef: [],
            atk: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: ''
            },
            def: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: ''
            }
        }
    },
    components : {
        'simul' : Simulation
    },
    methods: {
        onChange(event) {
            console.log(event.target.value)
        },
        selectRaceAtk(event) {
            var select = event.target.value
            this.atk.selectRace = select
            if (select === 'terran') {
                this.figurineAtkFront = Figurine.terran.figurine
                this.selectCardCombatAtk = Card.terran.troupe
                this.selectCardTechAtk = Card.terran.techno
            }else if (select === 'zerg') {
                this.figurineAtkFront = Figurine.zerg.figurine
                this.selectCardCombatAtk = Card.zerg.troupe
                this.selectCardTechAtk = Card.zerg.techno
            }else if (select === 'protoss') {
                this.figurineAtkFront = Figurine.protoss.figurine
                this.selectCardCombatAtk = Card.protoss.troupe
                this.selectCardTechAtk = Card.protoss.techno
            } else {
                this.figurineAtkFront = []
            }
        },
        selectRaceDef(event) {
            var select = event.target.value
            this.atk.selectRace = select
            if (select === 'terran') {
                this.figurineDefFront = Figurine.terran.figurine
                this.selectCardCombatDef = Card.terran.troupe
                this.selectCardTechDef = Card.terran.techno
            }else if (select === 'zerg') {
                this.figurineDefFront = Figurine.zerg.figurine
                this.selectCardCombatDef = Card.zerg.troupe
                this.selectCardTechDef = Card.zerg.techno
            }else if (select === 'protoss') {
                this.figurineDefFront = Figurine.protoss.figurine
                this.selectCardCombatDef = Card.protoss.troupe
                this.selectCardTechDef = Card.protoss.techno
            } else {
                this.figurineDefFront = []
            }
        }
    }
}
</script>

<style src='./Combat.css' scoped>

</style>