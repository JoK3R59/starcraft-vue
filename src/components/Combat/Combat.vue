<template>

    <div class="Combat">

        <h1 class="TIPS">Simulation de Combat</h1>

        <div class="Combat-list">

            <div class="select-list">

                <div class="select atk">

                    <h2>Attaquant</h2>

                    <div class="selection race">

                        <p>Race :</p>

                        <select name="comAtk" id="atk-race"
                         @change="selectRaceAtk($event)">
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

                    <div class="selection figurine Front">

                        <p>Figurine Front :</p>

                        <select name="comFigurine" id="atk-fig-front"
                         @change="selectFigurineFrontAtk($event)">
                            <option value="select" selected disabled>
                                Select Figurine Front
                            </option>
                            <option :key="i"
                             v-for="(figurine, i) in figurineAtkFront"
                             :value="i">
                                {{ figurine.name }}
                            </option>
                        </select>
                    </div>

                    <div class="selection figurine Soutien">

                        <p>Figurine Soutien :</p>

                        <select name="comFigurine_ref" id="atk-fig-soutien"
                         @change="selectFigurineSoutienAtk($event)">
                            <option value="select" selected disabled>
                                Select Figurine Soutien
                            </option>
                            <option :key="i"
                             v-for="(figurine, i) in figurineAtkFront"
                             :value="i">
                                {{ figurine.name }}
                            </option>
                        </select>
                    </div>

                    <div class="selection card-combat">

                        <p>Carte Combat :</p>

                        <select name="card-combat" id="atk-card-combat"
                         @change="selectCardStandardAtk($event)">
                            <option value="select" selected disabled>
                                Select Carte Combat
                            </option>
                            <optgroup label= "Carte Combat Standard">
                                <option :key="i"
                                 v-for="(card, i) in selectCardCombatAtk"
                                 :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                            <optgroup label= "Carte Combat Technologie">
                                <option :key="i"
                                 v-for="(card, i) in selectCardTechAtk"
                                 :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="selection card-renfort">

                        <p>Carte Renfort :</p>

                        <select name="card-combat" id="atk-card-renfort"
                         @change="selectCardRenfortAtk($event)">
                            <option value="select" selected disabled>
                                Select Carte Renfort
                            </option>
                            <optgroup label= "Carte Renfort Combat">
                                <option :key="i"
                                 v-for="(card, i) in selectCardRenfortCombatAtk"
                                 :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                            <optgroup label= "Carte Renfort Technologie">
                                <option :key="i"
                                 v-for="(card, i) in selectCardRenfortTechAtk"
                                 :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="selection card-zone">

                        <p>Zone de Jeu :</p>

                        <select name="card-zone" id="atk-card-zone"
                         @change="selectCardZoneJeuAtk($event)">
                            <option value="select" selected disabled>
                                Carte Zone de Jeu
                            </option>
                            <option :key="i"
                             v-for="(card, i) in selectCardZoneAtk"
                             :value="i">
                                {{ card.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="select def">

                    <h2>Défenseur</h2>

                    <div class="selection race">

                        <p>Race :</p>

                        <select name="comDef" id="def-race"
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

                        <p>Figurine Front :</p>

                        <select name="comFigurine" id="def-fig-front"
                         @change="selectFigurineFrontDef($event)">
                            <option value="select" selected disabled>
                                Select Figurine
                            </option>
                            <option :key="i"
                             v-for="(figurine, i) in figurineDefFront"
                             :value="i">
                                {{ figurine.name }}
                            </option>
                        </select>
                    </div>

                    <div class="selection figurine Soutien">

                        <p>Figurine Soutien :</p>

                        <select name="comFigurine_ref" id="def-fig-soutien"
                         @change="selectFigurineSoutienDef($event)">
                            <option value="select" selected disabled>
                                Select Figurine Soutien
                            </option>
                            <option :key="i"
                             v-for="(figurine, i) in figurineDefFront"
                             :value="i">
                                {{ figurine.name }}
                            </option>
                        </select>
                    </div>

                    <div class="selection card-combat">

                        <p>Carte Combat :</p>

                        <select name="card-combat" id="def-card-combat"
                         @change="selectCardStandardDef($event)">
                            <option value="select" selected disabled>
                                Select Carte Combat
                            </option>
                            <optgroup label= "Carte Combat Standard">
                                <option :key="i"
                                v-for="(card, i) in selectCardCombatDef"
                                :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                            <optgroup label= "Carte Combat Technologie">
                                <option :key="i"
                                v-for="(card, i) in selectCardTechDef"
                                :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="selection card-renfort">

                        <p>Carte Renfort :</p>

                        <select name="card-renfort" id="def-card-renfort"
                         @change="selectCardRenfortDef($event)">
                            <option value="select" selected disabled>
                                Select Carte Renfort
                            </option>
                            <optgroup label= "Carte Renfort Combat">
                                <option :key="i"
                                v-for="(card, i) in selectCardRenfortCombatDef"
                                :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                            <optgroup label= "Carte Renfort Technologie">
                                <option :key="i"
                                v-for="(card, i) in selectCardRenfortTechDef"
                                :value="changeValueCard(card.type, i)">
                                    {{ card.name }}
                                </option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="selection card-zone">

                        <p>Zone de Jeu :</p>

                        <select name="card-zone" id="def-card-zone"
                         @change="selectCardZoneJeuDef($event)">
                            <option value="select" selected disabled>
                                Carte Zone de Jeu
                            </option>
                            <option :key="i"
                             v-for="(card, i) in selectCardZoneDef"
                             :value="i">
                                {{ card.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <simul :atk="atk" :def="def"></simul>
        </div>
    </div>
</template>

<script>
import Simulation from './Simulation';

import Card from '../../data/Simulation/Card';

export default {
    name: 'Combat',
    data() {
        return {
            Card,
            figurineAtkFront: [],
            selectCardCombatAtk: [],
            selectCardTechAtk: [],
            selectCardRenfortCombatAtk: [],
            selectCardRenfortTechAtk: [],
            selectCardZoneAtk: [],
            figurineDefFront: [],
            selectCardCombatDef: [],
            selectCardTechDef: [],
            selectCardRenfortCombatDef: [],
            selectCardRenfortTechDef: [],
            selectCardZoneDef: [],
            atk: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: '',
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: ''
            },
            def: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: '',
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: ''
            }
        }
    },
    components : {
        'simul' : Simulation
    },
    methods: {
        onChange(event) {
            console.log('test ' + event.target.value)
        },
        changeValueCard(pic, i) {
            var result = pic.toString() + i.toString()
            return result
        },
        selectRaceAtk(event) {
            var select = event.target.value
            this.atk = {
                selectRace: select,
                selectFigurineFront: '',
                selectFigurineSoutien: '',
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: ''
            }
            if (select === 'terran') {
                this.figurineAtkFront = Card.terran.figurine
                document.getElementById('atk-fig-front').value = 'select'
                document.getElementById('atk-fig-soutien').value = 'select'
                this.selectCardCombatAtk = Card.terran.combat.troupe
                this.selectCardTechAtk = Card.terran.combat.techno
                document.getElementById('atk-card-combat').value = 'select'
                this.selectCardRenfortCombatAtk = Card.terran.renfort.troupe
                this.selectCardRenfortTechAtk = Card.terran.renfort.techno
                document.getElementById('atk-card-renfort').value = 'select'
                this.selectCardZoneAtk = Card.terran.zoneJeu
                document.getElementById('atk-card-zone').value = 'select'
            }else if (select === 'zerg') {
                this.figurineAtkFront = Card.zerg.figurine
                document.getElementById('atk-fig-front').value = 'select'
                document.getElementById('atk-fig-soutien').value = 'select'
                this.selectCardCombatAtk = Card.zerg.combat.troupe
                this.selectCardTechAtk = Card.zerg.combat.techno
                document.getElementById('atk-card-combat').value = 'select'
                this.selectCardRenfortCombatAtk = Card.zerg.renfort.troupe
                this.selectCardRenfortTechAtk = Card.zerg.renfort.techno
                document.getElementById('atk-card-renfort').value = 'select'
                this.selectCardZoneAtk = Card.zerg.zoneJeu
                document.getElementById('atk-card-zone').value = 'select'
            }else if (select === 'protoss') {
                this.figurineAtkFront = Card.protoss.figurine
                document.getElementById('atk-fig-front').value = 'select'
                document.getElementById('atk-fig-soutien').value = 'select'
                this.selectCardCombatAtk = Card.protoss.combat.troupe
                this.selectCardTechAtk = Card.protoss.combat.techno
                document.getElementById('atk-card-combat').value = 'select'
                this.selectCardRenfortCombatAtk = Card.protoss.renfort.troupe
                this.selectCardRenfortTechAtk = Card.protoss.renfort.techno
                document.getElementById('atk-card-renfort').value = 'select'
                this.selectCardZoneAtk = Card.protoss.zoneJeu
                document.getElementById('atk-card-zone').value = 'select'
            } else {
                this.selectRaceAtk = []
            }
        },
        selectFigurineFrontAtk(event) {
            this.atk.selectFigurineFront = event.target.value
        },
        selectFigurineSoutienAtk(event) {
            this.atk.selectFigurineSoutien = event.target.value
        },
        selectCardStandardAtk(event) {
            this.atk.selectCardCombat = event.target.value
        },
        selectCardRenfortAtk(event) {
            this.atk.selectCardRenfort = event.target.value
        },
        selectCardZoneJeuAtk(event) {
            this.atk.selectCardZone = event.target.value
        },
        selectRaceDef(event) {
            var select = event.target.value
            this.def = {
                selectRace: select,
                selectFigurineFront: '',
                selectFigurineSoutien: '',
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: ''
            }
            if (select === 'terran') {
                this.figurineDefFront = Card.terran.figurine
                document.getElementById('def-fig-front').value = 'select'
                document.getElementById('def-fig-soutien').value = 'select'
                this.selectCardCombatDef = Card.terran.combat.troupe
                this.selectCardTechDef = Card.terran.combat.techno
                document.getElementById('def-card-combat').value = 'select'
                this.selectCardRenfortCombatDef = Card.terran.renfort.troupe
                this.selectCardRenfortTechDef = Card.terran.renfort.techno
                document.getElementById('def-card-renfort').value = 'select'
                this.selectCardZoneDef = Card.terran.zoneJeu
                document.getElementById('def-card-zone').value = 'select'
            }else if (select === 'zerg') {
                this.figurineDefFront = Card.zerg.figurine
                document.getElementById('def-fig-front').value = 'select'
                document.getElementById('def-fig-soutien').value = 'select'
                this.selectCardCombatDef = Card.zerg.combat.troupe
                this.selectCardTechDef = Card.zerg.combat.techno
                document.getElementById('def-card-combat').value = 'select'
                this.selectCardRenfortCombatDef = Card.zerg.renfort.troupe
                this.selectCardRenfortTechDef = Card.zerg.renfort.techno
                document.getElementById('def-card-renfort').value = 'select'
                this.selectCardZoneDef = Card.zerg.zoneJeu
                document.getElementById('def-card-zone').value = 'select'
            }else if (select === 'protoss') {
                this.figurineDefFront = Card.protoss.figurine
                document.getElementById('def-fig-front').value = 'select'
                document.getElementById('def-fig-soutien').value = 'select'
                this.selectCardCombatDef = Card.protoss.combat.troupe
                this.selectCardTechDef = Card.protoss.combat.techno
                document.getElementById('def-card-combat').value = 'select'
                this.selectCardRenfortCombatDef = Card.protoss.renfort.troupe
                this.selectCardRenfortTechDef = Card.protoss.renfort.techno
                document.getElementById('def-card-renfort').value = 'select'
                this.selectCardZoneDef = Card.protoss.zoneJeu
                document.getElementById('def-card-zone').value = 'select'
            } else {
                this.figurineDefFront = []
            }
        },
        selectFigurineFrontDef(event) {
            this.def.selectFigurineFront = event.target.value
        },
        selectFigurineSoutienDef(event) {
            this.def.selectFigurineSoutien = event.target.value
        },
        selectCardStandardDef(event) {
            this.def.selectCardCombat = event.target.value
        },
        selectCardRenfortDef(event) {
            this.def.selectCardRenfort = event.target.value
        },
        selectCardZoneJeuDef(event) {
            this.def.selectCardZone = event.target.value
        }
    }
}
</script>

<style src='./Combat.css' scoped>

</style>