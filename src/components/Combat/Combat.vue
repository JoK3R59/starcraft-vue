<template>

    <div class="Combat">

        <h1 class="TIPS">Simulation de Combat</h1>

        <h2 class="title-escarmouche">Escarmouche n°{{ this.numberEscarmouche + 1}}</h2>

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

                        <div id='select-soutienAtk'>

                            <select name="comFigurine_ref0" id="atk-fig-soutien0"
                            @change="selectFigurineSoutienAtk($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineAtkFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienAtk >= 1"
                             name="comFigurine_ref1" id="atk-fig-soutien1"
                            @change="selectFigurineSoutienAtk($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineAtkFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienAtk >= 2"
                             name="comFigurine_ref2" id="atk-fig-soutien2"
                            @change="selectFigurineSoutienAtk($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineAtkFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienAtk >= 3"
                             name="comFigurine_ref3" id="atk-fig-soutien3"
                            @change="selectFigurineSoutienAtk($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineAtkFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienAtk === 4"
                             name="comFigurine_ref4" id="atk-fig-soutien4"
                            @change="selectFigurineSoutienAtk($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineAtkFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>
                        </div>

                        <button
                         v-if="this.selectionCounterSoutienAtk < 4"
                         v-on:click="addSoutienAtk()"
                         id="btn-plusSoutien">
                            <img src="../../assets/Flat_plus_icon.svg" alt="add">
                        </button>
                       
                        <button
                         v-if="this.selectionCounterSoutienAtk >= 1"
                         v-on:click="supprSoutienAtk()"
                         id="btn-supprSoutien">
                            <img src="../../assets/remove.svg" alt="suppr">
                        </button>
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
                            <option value="select" selected>
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
                            <option value="select" selected>
                                Carte Zone de Jeu
                            </option>
                            <option :key="i"
                             v-for="(card, i) in selectCardZoneAtk"
                             :value="i">
                                {{ card.name }}
                            </option>
                        </select>
                    </div>

                    <div class="selection base-atk">
                        <label for="baseAtk" id="base-atk">
                            Base :
                        </label>
                        <input @change="selectBaseAtk($event)"
                         type="checkbox" name="base-atk" id="base-atk">
                    </div>

                    <div class="selection turret-atk">
                        <label for="turretAtk" id="turret-atk">
                            Tourelle active :
                        </label>
                        <input @change="selectTurretAtk($event)"
                         type="checkbox" name="turret-atk" id="turret-atk">
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

                        <div id='select-soutienDef'>

                            <select name="comFigurine_ref0" id="def-fig-soutien0"
                             v-on:change="selectFigurineSoutienDef($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineDefFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienDef >= 1"
                             name="comFigurine_ref1" id="def-fig-soutien1"
                             v-on:change="selectFigurineSoutienDef($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineDefFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienDef >= 2"
                             name="comFigurine_ref2" id="def-fig-soutien2"
                             v-on:change="selectFigurineSoutienDef($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineDefFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienDef >= 3"
                             name="comFigurine_ref3" id="def-fig-soutien3"
                             v-on:change="selectFigurineSoutienDef($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineDefFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>

                            <select v-if="this.selectionCounterSoutienDef === 4"
                             name="comFigurine_ref4" id="def-fig-soutien4"
                             v-on:change="selectFigurineSoutienDef($event)">
                                <option value="select" selected>
                                    Select Figurine Soutien
                                </option>
                                <option :key="i"
                                v-for="(figurine, i) in figurineDefFront"
                                :value="i">
                                    {{ figurine.name }}
                                </option>
                            </select>
                        </div>

                        <button
                         v-if="this.selectionCounterSoutienDef < 4"
                         v-on:click="addSoutienDef()"
                         id="btn-plusSoutienDef">
                            <img src="../../assets/Flat_plus_icon.svg" alt="add">
                        </button>
                       
                        <button
                         v-if="this.selectionCounterSoutienDef >= 1"
                         v-on:click="supprSoutienDef()"
                         id="btn-supprSoutienDef">
                            <img src="../../assets/remove.svg" alt="suppr">
                        </button>
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
                            <option value="select" selected>
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
                            <option value="select" selected>
                                Carte Zone de Jeu
                            </option>
                            <option :key="i"
                             v-for="(card, i) in selectCardZoneDef"
                             :value="i">
                                {{ card.name }}
                            </option>
                        </select>
                    </div>

                    <div class="selection base-def">
                        <label for="baseDef" id="base-def">
                            Base :
                        </label>
                        <input @change="selectBaseDef($event)"
                         type="checkbox" name="base-def" id="base-def">
                    </div>

                    <div class="selection turret-def">
                        <label for="turretDef" id="turret-def">
                            Tourelle active :
                        </label>
                        <input @change="selectTurretDef($event)"
                         type="checkbox" name="turret-def" id="turret-def">
                    </div>
                </div>
            </div>
            
            <div class="buttons">

                <button type="button" class="btn btn-outline-warning"
                 v-on:click="addEscarmouche()"
                 v-if="numberEscarmouche != 3">
                    Ajouter Escarmouche
                </button>
                <button type="button" class="btn btn-outline-success"
                 v-on:click="simulActive(selectData)">
                    Lancer Simulation
                </button>

            </div>

            <simul :atk="atk" :def="def"></simul>

            <div id="escarmouche-list">

                <escarmouche
                 v-if="this.numberEscarmouche > 0"
                 :numberEscarmouche="this.selectData[0].numberEscarmouche"
                 :data="this.selectData[0].data"></escarmouche>
                <escarmouche
                 v-if="this.numberEscarmouche > 1"
                 :numberEscarmouche="this.selectData[1].numberEscarmouche"
                 :data="this.selectData[1].data"></escarmouche>
                <escarmouche
                 v-if="this.numberEscarmouche > 2"
                 :numberEscarmouche="this.selectData[2].numberEscarmouche"
                 :data="this.selectData[2].data"></escarmouche>
            </div>

            <resultat :resultSimulation="this.resultSimulation"></resultat>
        </div>
    </div>
</template>

<script>
import Simulation from './Simulation';
import Escarmouche from './items/Escarmouche';
import ResultatList from './items/ResultatList';

import Card from '../../data/Simulation/Card';
import {resultat} from './Simul-Combat.js';

export default {
    name: 'Combat',
    data() {
        return {
            Card,
            resultat,
            numberEscarmouche : 0,
            selectionCounterSoutienAtk : 0,
            selectionCounterSoutienDef : 0,
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
            resultData: {
                active: false,
                data: [
                    {
                        atk: {
                            damage: '',
                            target: ''
                        },
                        def: {
                            damage:  '',
                            target: ''
                        }
                    }
                ]
            },
            selectData: [
                {
                    active : false,
                    numberEscarmouche: 1,
                    data: {
                        atk: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        },
                        def: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        }
                    }
                },
                {
                    active : false,
                    numberEscarmouche: 2,
                    data: {
                        atk: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        },
                        def: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        }
                    }
                },
                {
                    active : false,
                    numberEscarmouche: 3,
                    data: {
                        atk: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        },
                        def: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        }
                    }
                },
                {
                    active : false,
                    numberEscarmouche: 4,
                    data: {
                        atk: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        },
                        def: {
                            race: '',
                            figurineFront: '',
                            figurineSoutien: [],
                            cardCombat: '',
                            cardRenfort: '',
                            cardZone: '',
                            base: false,
                            turret: false,
                        }
                    }
                }
            ],
            // IMG pour Simulation ATK
            atk: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: [],
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: '',
                base: false,
                turret: false
            },
            // IMG pour Simulation DEF
            def: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: [],
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: '',
                base: false,
                turret: false
            },
            //RESULTAT final simulation
            resultSimulation: ''
        }
    },
    components : {
        'simul' : Simulation,
        'escarmouche' : Escarmouche,
        'resultat' : ResultatList
    },
    methods: {
        onChange(event) {
            console.log('test ' + event.target.value)
        },
        // TODO: supprimer selection BASE & TURRET visuellement.
        resetSelect(atk, def, atkZone, defZone) {
            if (atk === 1) {
                document.getElementById('atk-fig-front').value = 'select'
                document.getElementById('atk-fig-soutien0').value = 'select'
                document.getElementById('atk-card-combat').value = 'select'
                document.getElementById('atk-card-renfort').value = 'select'
            }
            if (def === 1) {
                document.getElementById('def-fig-front').value = 'select'
                document.getElementById('def-fig-soutien0').value = 'select'
                document.getElementById('def-card-combat').value = 'select'
                document.getElementById('def-card-renfort').value = 'select'
            }
            if (atkZone) {
                document.getElementById('atk-card-zone').value = 'select'
            }
            if (defZone) {
                document.getElementById('def-card-zone').value = 'select'
            }
        },
        resetImg() {
            let atkImg = this.atk
            atkImg.selectFigurineFront = ''
            atkImg.selectFigurineSoutien = []
            atkImg.selectCardCombat = ''
            atkImg.selectCardRenfort = ''
            atkImg.selectCardZone = ''
            atkImg.base = false
            atkImg.turret = false
            let defImg = this.def
            defImg.selectFigurineFront = ''
            defImg.selectFigurineSoutien = []
            defImg.selectCardCombat = ''
            defImg.selectCardRenfort = ''
            defImg.selectCardZone = ''
            defImg.base = false
            defImg.turret = false
        },
        changeValueCard(pic, i) {
            var result = pic.toString() + i.toString()
            return result
        },
        selectRaceAtk(event) {
            let select = event.target.value
            this.atk = {
                selectRace: select,
                selectFigurineFront: '',
                selectFigurineSoutien: [],
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: '',
                base: false,
                turret: false
            }
            this.selectData[this.numberEscarmouche].data.atk = {
                    race: '',
                    figurineFront: '',
                    figurineSoutien: [],
                    cardCombat: '',
                    cardRenfort: '',
                    cardZone: '',
                    base: false,
                    turret: false,
            }
            this.selectionCounterSoutienAtk = 0
            if (select === 'terran') {
                this.figurineAtkFront = Card.terran.figurine
                this.selectCardCombatAtk = Card.terran.combat.troupe
                this.selectCardTechAtk = Card.terran.combat.techno
                this.selectCardRenfortCombatAtk = Card.terran.renfort.troupe
                this.selectCardRenfortTechAtk = Card.terran.renfort.techno
                this.selectCardZoneAtk = Card.terran.zoneJeu
                this.resetSelect(1, 0, true, false)

            }else if (select === 'zerg') {
                this.figurineAtkFront = Card.zerg.figurine
                this.selectCardCombatAtk = Card.zerg.combat.troupe
                this.selectCardTechAtk = Card.zerg.combat.techno
                this.selectCardRenfortCombatAtk = Card.zerg.renfort.troupe
                this.selectCardRenfortTechAtk = Card.zerg.renfort.techno
                this.selectCardZoneAtk = Card.zerg.zoneJeu
                this.resetSelect(1, 0, true, false)

            }else if (select === 'protoss') {
                this.figurineAtkFront = Card.protoss.figurine
                this.selectCardCombatAtk = Card.protoss.combat.troupe
                this.selectCardTechAtk = Card.protoss.combat.techno
                this.selectCardRenfortCombatAtk = Card.protoss.renfort.troupe
                this.selectCardRenfortTechAtk = Card.protoss.renfort.techno
                this.selectCardZoneAtk = Card.protoss.zoneJeu
                this.resetSelect(1, 0, true, false)

            } else {
                this.selectRaceAtk = []

            }
        },
        selectFigurineFrontAtk(event) {
            var id = event.target.value
            var Race = this.atk.selectRace
            if (Race === 'terran') {
                var selectIdT = Card.terran.figurine[id]
                this.selectData[this.numberEscarmouche].data.atk.figurineFront = selectIdT
                this.atk.selectFigurineFront = selectIdT.img
                this.selectData[this.numberEscarmouche].data.atk.race = Race
                this.selectData[this.numberEscarmouche].active = true
            } else if (Race === 'zerg') {
                var selectIdZ = Card.zerg.figurine[id]
                this.selectData[this.numberEscarmouche].data.atk.figurineFront = selectIdZ
                this.atk.selectFigurineFront = selectIdZ.img
                this.selectData[this.numberEscarmouche].data.atk.race = Race
                this.selectData[this.numberEscarmouche].active = true
            } else if (Race === 'protoss') {
                var selectIdP = Card.protoss.figurine[id]
                this.selectData[this.numberEscarmouche].data.atk.figurineFront = selectIdP
                this.atk.selectFigurineFront = selectIdP.img
                this.selectData[this.numberEscarmouche].data.atk.race = Race
                this.selectData[this.numberEscarmouche].active = true
            }
        },
        selectFigurineSoutienAtk(event) {
            let classId = event.target.id.substring(15)
            var numId = event.target.value
            var Race = this.atk.selectRace
            if (Race === 'terran') {
                let selectIdT = Card.terran.figurine[numId]
                if (classId > 0 && this.atk.selectFigurineSoutien.length === 0) {

                    for (let i = 0; i <= classId; i++) {
                        if (i == classId) {
                            this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = selectIdT
                            this.$set(this.atk.selectFigurineSoutien,[i],{
                                id : i,
                                icon : selectIdT.img
                            })

                        } else {
                            this.atk.selectFigurineSoutien[i] = {
                                id : i,
                                icon : undefined
                            }

                        }
                    }
                } else {

                    if (numId != 'select') {
                        this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = selectIdT
                        this.$set(this.atk.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : selectIdT.img
                        })
    
                    } else {
                        this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = undefined
                        this.$set(this.atk.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : undefined
                        })

                    }
                }
            } else if (Race === 'zerg') {
                let selectIdZ = Card.zerg.figurine[numId]
                if (classId > 0 && this.atk.selectFigurineSoutien.length === 0) {

                    for (let i = 0; i <= classId; i++) {
                        if (i == classId) {
                            this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = selectIdZ
                            this.$set(this.atk.selectFigurineSoutien,[i],{
                                id : i,
                                icon : selectIdZ.img
                            })

                        } else {
                            this.atk.selectFigurineSoutien[i] = {
                                id : i,
                                icon : undefined
                            }

                        }
                    }
                } else {

                    if (numId != 'select') {
                        this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = selectIdZ
                        this.$set(this.atk.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : selectIdZ.img
                        })
                        
                    } else {
                        this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = undefined
                        this.$set(this.atk.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : undefined
                        })
    
                    }
                }
            } else if (Race === 'protoss') {
                var selectIdP = Card.protoss.figurine[numId]
                if (classId > 0 && this.atk.selectFigurineSoutien.length === 0) {

                    for (let i = 0; i <= classId; i++) {
                        if (i == classId) {
                            this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = selectIdP
                            this.$set(this.atk.selectFigurineSoutien,[i],{
                                id : i,
                                icon : selectIdP.img
                            })

                        } else {
                            this.atk.selectFigurineSoutien[i] = {
                                id : i,
                                icon : undefined
                            }

                        }
                    }
                } else {
                    if (numId != 'select') {
                        this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = selectIdP
                        this.$set(this.atk.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : selectIdP.img
                        })
                        
                    } else {
                        this.selectData[this.numberEscarmouche].data.atk.figurineSoutien[classId] = undefined
                        this.$set(this.atk.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : undefined
                        })
    
                    }
                }
            }
        },
        selectCardStandardAtk(event) {
            var Race = this.atk.selectRace
            var id = event.target.value
            if (id != '') {
                var type = id.substr(0,3)
                var index = id.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.combat.troupe[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardCombat = selectIdTerranStd
                        this.atk.selectCardCombat = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.combat.techno[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardCombat = selectIdTerranTch
                        this.atk.selectCardCombat = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.combat.troupe[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardCombat = selectIdZergStd
                        this.atk.selectCardCombat = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.combat.techno[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardCombat = selectIdZergTch
                        this.atk.selectCardCombat = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.combat.troupe[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardCombat = selectIdProtossStd
                        this.atk.selectCardCombat = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.combat.techno[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardCombat = selectIdProtossTch
                        this.atk.selectCardCombat = selectIdProtossTch.img
                    }
                }
            } else {
                return ''
            } 
        },
        selectCardRenfortAtk(event) {
            var Race = this.atk.selectRace
            var id = event.target.value
            if (id != '') {
                var type = id.substr(0,3)
                var index = id.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.renfort.troupe[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardRenfort = selectIdTerranStd
                        this.atk.selectCardRenfort = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.renfort.techno[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardRenfort = selectIdTerranTch
                        this.atk.selectCardRenfort = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.renfort.troupe[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardRenfort = selectIdZergStd
                        this.atk.selectCardRenfort = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.renfort.techno[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardRenfort = selectIdZergTch
                        this.atk.selectCardRenfort = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.renfort.troupe[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardRenfort = selectIdProtossStd
                        this.atk.selectCardRenfort = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.renfort.techno[index]
                        this.selectData[this.numberEscarmouche].data.atk.cardRenfort = selectIdProtossTch
                        this.atk.selectCardRenfort = selectIdProtossTch.img
                    }
                }
            } else {
                return ''
            } 
        },
        // REVOIR ZONE DE JEU POUR AJOUTER TOUTES LES CARTES ZONE -exemple SOUTIEN
        // AJOUTER CARDZONE DANS TOUT LES OBJETS DE SELECTDATA comme BASE & TURRET
        selectCardZoneJeuAtk(event) {
            var Race = this.atk.selectRace
            var id = event.target.value
            if (id != '') {
                if (Race === 'terran') {
                    var selectIdTerranStd = Card.terran.zoneJeu[id]
                    this.selectData[0].data.atk.cardZone = selectIdTerranStd
                    this.atk.selectCardZone = selectIdTerranStd.img
                } else if (Race === 'zerg') {
                    var selectIdZergStd = Card.zerg.zoneJeu[id]
                    this.selectData[0].data.atk.cardZone = selectIdZergStd
                    this.atk.selectCardZone = selectIdZergStd.img
                } else if (Race === 'protoss') {
                    var selectIdProtossStd = Card.protoss.zoneJeu[id]
                    this.selectData[0].data.atk.cardZone = selectIdProtossStd
                    this.atk.selectCardZone = selectIdProtossStd.img
                }
            } else {
                return ''
            }
        },
        selectBaseAtk(event) {
            var select = event.target.checked
            select ? this.atk.base = true : this.atk.base = false

            if (select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.atk.base = true
                }
            } else if (!select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.atk.base = false
                }
            }
        },
        selectTurretAtk(event) {
            var select = event.target.checked
            select ? this.atk.turret = true : this.atk.turret = false

            if (select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.atk.turret = true
                }
            } else if (!select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.atk.turret = false
                }
            }
        },
        selectRaceDef(event) {
            var select = event.target.value
            this.def = {
                selectRace: select,
                selectFigurineFront: '',
                selectFigurineSoutien: [],
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: '',
                base: false,
                turret: false
            }
            this.selectData[this.numberEscarmouche].data.def = {
                    race: '',
                    figurineFront: '',
                    figurineSoutien: [],
                    cardCombat: '',
                    cardRenfort: '',
                    cardZone: '',
                    base: false,
                    turret: false,
            }
            this.selectionCounterSoutienDef = 0
            if (select === 'terran') {
                this.figurineDefFront = Card.terran.figurine
                this.selectCardCombatDef = Card.terran.combat.troupe
                this.selectCardTechDef = Card.terran.combat.techno
                this.selectCardRenfortCombatDef = Card.terran.renfort.troupe
                this.selectCardRenfortTechDef = Card.terran.renfort.techno
                this.selectCardZoneDef = Card.terran.zoneJeu
                this.resetSelect(0, 1, false, true)

            }else if (select === 'zerg') {
                this.figurineDefFront = Card.zerg.figurine
                this.selectCardCombatDef = Card.zerg.combat.troupe
                this.selectCardTechDef = Card.zerg.combat.techno
                this.selectCardRenfortCombatDef = Card.zerg.renfort.troupe
                this.selectCardRenfortTechDef = Card.zerg.renfort.techno
                this.selectCardZoneDef = Card.zerg.zoneJeu
                this.resetSelect(0, 1, false, true)

            }else if (select === 'protoss') {
                this.figurineDefFront = Card.protoss.figurine
                this.selectCardCombatDef = Card.protoss.combat.troupe
                this.selectCardTechDef = Card.protoss.combat.techno
                this.selectCardRenfortCombatDef = Card.protoss.renfort.troupe
                this.selectCardRenfortTechDef = Card.protoss.renfort.techno
                this.selectCardZoneDef = Card.protoss.zoneJeu
                this.resetSelect(0, 1, false, true)

            } else {
                this.figurineDefFront = []
            }
        },
        selectFigurineFrontDef(event) {
            var id = event.target.value
            var Race = this.def.selectRace
            if (Race === 'terran') {
                var selectIdT = Card.terran.figurine[id]
                this.selectData[this.numberEscarmouche].data.def.figurineFront = selectIdT
                this.def.selectFigurineFront = selectIdT.img
                this.selectData[this.numberEscarmouche].data.def.race = Race
                this.selectData[this.numberEscarmouche].active = true
            } else if (Race === 'zerg') {
                var selectIdZ = Card.zerg.figurine[id]
                this.selectData[this.numberEscarmouche].data.def.figurineFront = selectIdZ
                this.def.selectFigurineFront = selectIdZ.img
                this.selectData[this.numberEscarmouche].data.def.race = Race
                this.selectData[this.numberEscarmouche].active = true
            } else if (Race === 'protoss') {
                var selectIdP = Card.protoss.figurine[id]
                this.selectData[this.numberEscarmouche].data.def.figurineFront = selectIdP
                this.def.selectFigurineFront = selectIdP.img
                this.selectData[this.numberEscarmouche].data.def.race = Race
                this.selectData[this.numberEscarmouche].active = true
            }
        },
        selectFigurineSoutienDef(event) {
            var numId = event.target.value
            var Race = this.def.selectRace
            let classId = event.target.id.substring(15)
            if (Race === 'terran') {
                let selectIdT = Card.terran.figurine[numId]
                if (classId > 0 && this.def.selectFigurineSoutien.length === 0) {

                    for (let i = 0; i <= classId; i++) {
                        if (i == classId) {
                            this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = selectIdT
                            this.$set(this.def.selectFigurineSoutien,[i],{
                                id : i,
                                icon : selectIdT.img
                            })

                        } else {
                            this.def.selectFigurineSoutien[i] = {
                                id : i,
                                icon : undefined
                            }

                        }
                    }
                } else {

                    if (numId != 'select') {
                        this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = selectIdT
                        this.$set(this.def.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : selectIdT.img
                        })
    
                    } else {
                        this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = undefined
                        this.$set(this.def.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : undefined
                        })
    
                    }
                }
            } else if (Race === 'zerg') {
                let selectIdZ = Card.zerg.figurine[numId]
                if (classId > 0 && this.def.selectFigurineSoutien.length === 0) {

                    for (let i = 0; i <= classId; i++) {
                        if (i == classId) {
                            this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = selectIdZ
                            this.$set(this.def.selectFigurineSoutien,[i],{
                                id : i,
                                icon : selectIdZ.img
                            })

                        } else {
                            this.def.selectFigurineSoutien[i] = {
                                id : i,
                                icon : undefined
                            }

                        }
                    }
                } else {

                    if (numId != 'select') {
                        this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = selectIdZ
                        this.$set(this.def.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : selectIdZ.img
                        })
    
                    } else {
                        this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = undefined
                        this.$set(this.def.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : undefined
                        })
    
                    }
                }
            } else if (Race === 'protoss') {
                let selectIdP = Card.protoss.figurine[numId]
                if (classId > 0 && this.def.selectFigurineSoutien.length === 0) {
                    
                    for (let i = 0; i <= classId; i++) {
                        if (i == classId) {
                            this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = selectIdP
                            this.$set(this.def.selectFigurineSoutien,[i],{
                                id : i,
                                icon : selectIdP.img
                            })

                        } else {
                            this.def.selectFigurineSoutien[i] = {
                                id : i,
                                icon : undefined
                            }

                        }
                    }
                } else {

                    if (numId != 'select') {
                        this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = selectIdP
                        this.$set(this.def.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : selectIdP.img
                        })
    
                    } else {
                        this.selectData[this.numberEscarmouche].data.def.figurineSoutien[classId] = undefined
                        this.$set(this.def.selectFigurineSoutien,[classId],{
                            id : classId,
                            icon : undefined
                        })
    
                    }
                }
            }
        },
        selectCardStandardDef(event) {
            var Race = this.def.selectRace
            var id = event.target.value
            if (id != '') {
                var type = id.substr(0,3)
                var index = id.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.combat.troupe[index]
                        this.selectData[this.numberEscarmouche].data.def.cardCombat = selectIdTerranStd
                        this.def.selectCardCombat = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.combat.techno[index]
                        this.selectData[this.numberEscarmouche].data.def.cardCombat = selectIdTerranTch
                        this.def.selectCardCombat = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.combat.troupe[index]
                        this.selectData[this.numberEscarmouche].data.def.cardCombat = selectIdZergStd
                        this.def.selectCardCombat = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.combat.techno[index]
                        this.selectData[this.numberEscarmouche].data.def.cardCombat = selectIdZergTch
                        this.def.selectCardCombat = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.combat.troupe[index]
                        this.selectData[this.numberEscarmouche].data.def.cardCombat = selectIdProtossStd
                        this.def.selectCardCombat = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.combat.techno[index]
                        this.selectData[this.numberEscarmouche].data.def.cardCombat = selectIdProtossTch
                        this.def.selectCardCombat = selectIdProtossTch.img
                    }
                }
            } else {
                return ''
            }
        },
        selectCardRenfortDef(event) {
            var Race = this.def.selectRace
            var id = event.target.value
            if (id != '') {
                var type = id.substr(0,3)
                var index = id.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.renfort.troupe[index]
                        this.selectData[this.numberEscarmouche].data.def.cardRenfort = selectIdTerranStd
                        this.def.selectCardRenfort = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.renfort.techno[index]
                        this.selectData[this.numberEscarmouche].data.def.cardRenfort = selectIdTerranTch
                        this.def.selectCardRenfort = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.renfort.troupe[index]
                        this.selectData[this.numberEscarmouche].data.def.cardRenfort = selectIdZergStd
                        this.def.selectCardRenfort = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.renfort.techno[index]
                        this.selectData[this.numberEscarmouche].data.def.cardRenfort = selectIdZergTch
                        this.def.selectCardRenfort = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.renfort.troupe[index]
                        this.selectData[this.numberEscarmouche].data.def.cardRenfort = selectIdProtossStd
                        this.def.selectCardRenfort = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.renfort.techno[index]
                        this.selectData[this.numberEscarmouche].data.def.cardRenfort = selectIdProtossTch
                        this.def.selectCardRenfort = selectIdProtossTch.img
                    }
                }
            } else {
                return ''
            } 
        },
        // REVOIR ZONE DE JEU POUR AJOUTER TOUTES LES CARTES ZONE -exemple SOUTIEN
        // AJOUTER CARDZONE DANS TOUT LES OBJETS DE SELECTDATA comme BASE & TURRET
        selectCardZoneJeuDef(event) {
            var Race = this.def.selectRace
            var id = event.target.value
            if (id != '') {
                if (Race === 'terran') {
                    var selectIdTerranStd = Card.terran.zoneJeu[id]
                    this.selectData[0].data.def.cardZone = selectIdTerranStd
                    this.def.selectCardZone = selectIdTerranStd.img
                } else if (Race === 'zerg') {
                    var selectIdZergStd = Card.zerg.zoneJeu[id]
                    this.selectData[0].data.def.cardZone = selectIdZergStd
                    this.def.selectCardZone = selectIdZergStd.img
                } else if (Race === 'protoss') {
                    var selectIdProtossStd = Card.protoss.zoneJeu[id]
                    this.selectData[0].data.def.cardZone = selectIdProtossStd
                    this.def.selectCardZone = selectIdProtossStd.img
                }
            } else {
                return ''
            }
        },
        selectBaseDef(event) {
            var select = event.target.checked
            select ? this.def.base = true : this.def.base = false
            
            if (select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.def.base = true
                }
            } else if (!select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.def.base = false
                }
            }
        },
        selectTurretDef(event) {
            var select = event.target.checked
            select ? this.def.turret = true : this.def.turret = false
            
            if (select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.def.turret = true
                }
            } else if (!select) {
                for (let i = 0; i < this.selectData.length; i++) {
                    this.selectData[i].data.def.turret = false
                }
            }
        },
        addSoutienAtk() {
            if (this.selectionCounterSoutienAtk < 4) {
                this.selectionCounterSoutienAtk++
                let id = this.selectionCounterSoutienAtk
                this.atk.selectFigurineSoutien[id] = {
                    id : id,
                    icon : undefined

                }
            } else {
                console.log('Nombre maximum de 5 autorisé en Soutien')
            }
        },
        supprSoutienAtk() {
            let id = this.selectionCounterSoutienAtk
            let index = this.numberEscarmouche
            this.$delete(this.atk.selectFigurineSoutien, id)
            this.$delete(this.selectData[index].data.atk.figurineSoutien, id)
            this.selectionCounterSoutienAtk--
        },
        addSoutienDef() {
            if (this.selectionCounterSoutienDef < 4) {
                this.selectionCounterSoutienDef++
                let id = this.selectionCounterSoutienDef
                this.def.selectFigurineSoutien[id] = {
                    id : id,
                    icon : undefined

                }
            } else {
                console.log('Nombre maximum de 5 autorisé en Soutien')
            }
        },
        supprSoutienDef() {
            let id = this.selectionCounterSoutienDef
            let index = this.numberEscarmouche
            this.$delete(this.def.selectFigurineSoutien, id)
            this.$delete(this.selectData[index].data.def.figurineSoutien, id)
            this.selectionCounterSoutienDef--
        },
        addEscarmouche() {
            // AJOUT d'une fonction permettant de vérifier les champs FRONT et COMBAT avant ajout d'une escarmouche
            if(this.numberEscarmouche < 3) {
                this.numberEscarmouche++
                this.resetSelect(1, 1, false, false)
                this.resetImg()

            }
        },
        simulActive(data) {
            let dataMultiResult = []

            for (let i = 0; i < data.length; i++) {
                let elementData = data[i];

                // Lancement de la simulation
                if (elementData.active) {
                    let tempoResult = resultat(elementData.data)
                    dataMultiResult[i] = {
                        log: tempoResult.logResult,
                        unites: tempoResult.unites,
                        result: tempoResult.resultat
                    }

                } else {
                    i = 3
                }

                document.getElementById('resultat-modal').style.display = 'block'
            }
            console.log(dataMultiResult)
            console.log('FINISH')
            this.resultSimulation = dataMultiResult
        },
        // TODO !!!
        verifiedFieldSelect() {
            let i = this.numberEscarmouche
            let selectVerify = this.selectData

            let verifyAtk = {
                front: false,
                logFront: '',
                cardCombat: false,
                logCombat: ''
            }
            selectVerify[i].data.atk.figurineFront != '' ?
             verifyAtk.front = true : null
            selectVerify[i].data.atk.cardCombat != '' ?
             verifyAtk.cardCombat = true : null
            
            let verifyDef = {
                front: false,
                logFront: '',
                cardCombat: false,
                logCombat: ''
            }
            selectVerify[i].data.def.figurineFront != '' ?
             verifyDef.front = true : null
            selectVerify[i].data.def.cardCombat != '' ?
             verifyDef.cardCombat = true : null
            
            !verifyAtk.front ?
             verifyAtk.logFront = 'ROUGE select CSS FRONT ATK' :
             null
            !verifyAtk.cardCombat ?
             verifyAtk.logCombat = 'ROUGE select CSS CARDCOMBAT ATK' :
             null
            !verifyDef.front ?
             verifyDef.logFront = 'ROUGE select CSS FRONT DEF' :
             null
            !verifyDef.cardCombat ? 
             verifyDef.logCombat = 'ROUGE select CSS CARDCOMBAT DEF' : 
             null
            
            // if () {

            // }
        }
        ///////////////////////
        //
        // Données effets et capacités
        //
        ///////////////////////
        // 
        // Camouflage :
        //              retraite, fin de l'étape Destruction
        // 
        // Détecteur : 
        //              Escouade
        // 
        // Annuler : 
        //              Dois être deja joué avant simulation... pour le moment
        // 
        // Contre : OK
        //              Deja ajouté dans simulation
        // 
        // Renfort : OK
        //              R.A.S
        // 
        // Degats Repercuté : 
        //              Fin des etapes.
        // 
        // Destroy (nuke||sucide) : 
        //              Fin des etapes.
        // 
    }
}
</script>

<style src='./Combat.css' scoped>

</style>