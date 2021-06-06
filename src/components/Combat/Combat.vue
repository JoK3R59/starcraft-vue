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
                         type="checkbox" name="baseAtk" id="base-atk">
                    </div>

                    <div class="selection turret-atk">
                        <label for="turretAtk" id="turret-atk">
                            Tourelle active :
                        </label>
                        <input @change="selectTurretAtk($event)"
                         type="checkbox" name="turretAtk" id="turret-atk">
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
                         type="checkbox" name="baseDef" id="base-def">
                    </div>

                    <div class="selection turret-def">
                        <label for="turretDef" id="turret-def">
                            Tourelle active :
                        </label>
                        <input @change="selectTurretDef($event)"
                         type="checkbox" name="turretDef" id="turret-def">
                    </div>
                </div>
            </div>
            
            <button type="button" class="btn btn-outline-success"
            v-on:click="resultat(selectData)">
                Lancer Simulation
            </button>

            <simul :atk="atk" :def="def"></simul>

        </div>
    </div>
</template>

<script>
import Simulation from './Simulation';

import Card from '../../data/Simulation/Card';

import {resultat} from './Simul-Combat.js';

export default {
    name: 'Combat',
    data() {
        return {
            Card,
            resultat,
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
                atk: {
                    damage: '',
                    target: ''
                },
                def: {
                    damage:  '',
                    target: ''
                }
            },
            selectData: {
                atk: {
                    race: '',
                    figurineFront: '',
                    figurineSoutien: '',
                    cardCombat: '',
                    cardRenfort: '',
                    cardZone: '',
                    base: false,
                    turret: false,
                },
                def: {
                    race: '',
                    figurineFront: '',
                    figurineSoutien: '',
                    cardCombat: '',
                    cardRenfort: '',
                    cardZone: '',
                    base: false,
                    turret: false,
                }
            },
            atk: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: '',
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: '',
                base: false,
                turret: false
            },
            def: {
                selectRace: '',
                selectFigurineFront: '',
                selectFigurineSoutien: '',
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: '',
                base: false,
                turret: false
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
                selectCardZone: '',
                base: false,
                turret: false
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
            var id = event.target.value
            var Race = this.atk.selectRace
            if (Race === 'terran') {
                var selectIdT = Card.terran.figurine[id]
                this.selectData.atk.figurineFront = selectIdT
                this.atk.selectFigurineFront = selectIdT.img
                this.selectData.atk.race = Race
            } else if (Race === 'zerg') {
                var selectIdZ = Card.zerg.figurine[id]
                this.selectData.atk.figurineFront = selectIdZ
                this.atk.selectFigurineFront = selectIdZ.img
                this.selectData.atk.race = Race
            } else if (Race === 'protoss') {
                var selectIdP = Card.protoss.figurine[id]
                this.selectData.atk.figurineFront = selectIdP
                this.atk.selectFigurineFront = selectIdP.img
                this.selectData.atk.race = Race
            }
        },
        selectFigurineSoutienAtk(event) {
            var id = event.target.value
            var Race = this.atk.selectRace
            if (Race === 'terran') {
                var selectIdT = Card.terran.figurine[id]
                this.selectData.atk.figurineSoutien = selectIdT
                this.atk.selectFigurineSoutien = selectIdT.img
            } else if (Race === 'zerg') {
                var selectIdZ = Card.zerg.figurine[id]
                this.selectData.atk.figurineSoutien = selectIdZ
                this.atk.selectFigurineSoutien = selectIdZ.img
            } else if (Race === 'protoss') {
                var selectIdP = Card.protoss.figurine[id]
                this.selectData.atk.figurineSoutien = selectIdP
                this.atk.selectFigurineSoutien = selectIdP.img
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
                        this.selectData.atk.cardCombat = selectIdTerranStd
                        this.atk.selectCardCombat = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.combat.techno[index]
                        this.selectData.atk.cardCombat = selectIdTerranTch
                        this.atk.selectCardCombat = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.combat.troupe[index]
                        this.selectData.atk.cardCombat = selectIdZergStd
                        this.atk.selectCardCombat = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.combat.techno[index]
                        this.selectData.atk.cardCombat = selectIdZergTch
                        this.atk.selectCardCombat = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.combat.troupe[index]
                        this.selectData.atk.cardCombat = selectIdProtossStd
                        this.atk.selectCardCombat = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.combat.techno[index]
                        this.selectData.atk.cardCombat = selectIdProtossTch
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
                        this.selectData.atk.cardRenfort = selectIdTerranStd
                        this.atk.selectCardRenfort = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.renfort.techno[index]
                        this.selectData.atk.cardRenfort = selectIdTerranTch
                        this.atk.selectCardRenfort = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.renfort.troupe[index]
                        this.selectData.atk.cardRenfort = selectIdZergStd
                        this.atk.selectCardRenfort = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.renfort.techno[index]
                        this.selectData.atk.cardRenfort = selectIdZergTch
                        this.atk.selectCardRenfort = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.renfort.troupe[index]
                        this.selectData.atk.cardRenfort = selectIdProtossStd
                        this.atk.selectCardRenfort = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.renfort.techno[index]
                        this.selectData.atk.cardRenfort = selectIdProtossTch
                        this.atk.selectCardRenfort = selectIdProtossTch.img
                    }
                }
            } else {
                return ''
            } 
        },
        selectCardZoneJeuAtk(event) {
            var Race = this.atk.selectRace
            var id = event.target.value
            if (id != '') {
                if (Race === 'terran') {
                    var selectIdTerranStd = Card.terran.zoneJeu[id]
                    this.selectData.atk.cardZone = selectIdTerranStd
                    this.atk.selectCardZone = selectIdTerranStd.img
                } else if (Race === 'zerg') {
                    var selectIdZergStd = Card.zerg.zoneJeu[id]
                    this.selectData.atk.cardZone = selectIdZergStd
                    this.atk.selectCardZone = selectIdZergStd.img
                } else if (Race === 'protoss') {
                    var selectIdProtossStd = Card.protoss.zoneJeu[id]
                    this.selectData.atk.cardZone = selectIdProtossStd
                    this.atk.selectCardZone = selectIdProtossStd.img
                }
            } else {
                return ''
            }
        },
        selectBaseAtk(event) {
            var select = event.target.checked
            select ? this.atk.base = true : this.atk.base = false
            select ? this.selectData.atk.base = true : this.selectData.atk.base = false
        },
        selectTurretAtk(event) {
            var select = event.target.checked
            select ? this.atk.turret = true : this.atk.turret = false
            select ? this.selectData.atk.turret = true : this.selectData.atk.turret = false
        },
        selectRaceDef(event) {
            var select = event.target.value
            this.def = {
                selectRace: select,
                selectFigurineFront: '',
                selectFigurineSoutien: '',
                selectCardCombat: '',
                selectCardRenfort: '',
                selectCardZone: '',
                base: false,
                turret: false
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
                // document.getElementById('base-def').checked = false
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
                // document.getElementById('base-def').checked = false
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
                // document.getElementById('base-def').checked = false
            } else {
                this.figurineDefFront = []
            }
        },
        selectFigurineFrontDef(event) {
            var id = event.target.value
            var Race = this.def.selectRace
            if (Race === 'terran') {
                var selectIdT = Card.terran.figurine[id]
                this.selectData.def.figurineFront = selectIdT
                this.def.selectFigurineFront = selectIdT.img
                this.selectData.def.race = Race
            } else if (Race === 'zerg') {
                var selectIdZ = Card.zerg.figurine[id]
                this.selectData.def.figurineFront = selectIdZ
                this.def.selectFigurineFront = selectIdZ.img
                this.selectData.def.race = Race
            } else if (Race === 'protoss') {
                var selectIdP = Card.protoss.figurine[id]
                this.selectData.def.figurineFront = selectIdP
                this.def.selectFigurineFront = selectIdP.img
                this.selectData.def.race = Race
            }
        },
        selectFigurineSoutienDef(event) {
            var id = event.target.value
            var Race = this.def.selectRace
            if (Race === 'terran') {
                var selectIdT = Card.terran.figurine[id]
                this.selectData.def.figurineSoutien = selectIdT
                this.def.selectFigurineSoutien = selectIdT.img
            } else if (Race === 'zerg') {
                var selectIdZ = Card.zerg.figurine[id]
                this.selectData.def.figurineSoutien = selectIdZ
                this.def.selectFigurineSoutien = selectIdZ.img
            } else if (Race === 'protoss') {
                var selectIdP = Card.protoss.figurine[id]
                this.selectData.def.figurineSoutien = selectIdP
                this.def.selectFigurineSoutien = selectIdP.img
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
                        this.selectData.def.cardCombat = selectIdTerranStd
                        this.def.selectCardCombat = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.combat.techno[index]
                        this.selectData.def.cardCombat = selectIdTerranTch
                        this.def.selectCardCombat = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.combat.troupe[index]
                        this.selectData.def.cardCombat = selectIdZergStd
                        this.def.selectCardCombat = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.combat.techno[index]
                        this.selectData.def.cardCombat = selectIdZergTch
                        this.def.selectCardCombat = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.combat.troupe[index]
                        this.selectData.def.cardCombat = selectIdProtossStd
                        this.def.selectCardCombat = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.combat.techno[index]
                        this.selectData.def.cardCombat = selectIdProtossTch
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
                        this.selectData.def.cardRenfort = selectIdTerranStd
                        this.def.selectCardRenfort = selectIdTerranStd.img
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.renfort.techno[index]
                        this.selectData.def.cardRenfort = selectIdTerranTch
                        this.def.selectCardRenfort = selectIdTerranTch.img
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.renfort.troupe[index]
                        this.selectData.def.cardRenfort = selectIdZergStd
                        this.def.selectCardRenfort = selectIdZergStd.img
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.renfort.techno[index]
                        this.selectData.def.cardRenfort = selectIdZergTch
                        this.def.selectCardRenfort = selectIdZergTch.img
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.renfort.troupe[index]
                        this.selectData.def.cardRenfort = selectIdProtossStd
                        this.def.selectCardRenfort = selectIdProtossStd.img
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.renfort.techno[index]
                        this.selectData.def.cardRenfort = selectIdProtossTch
                        this.def.selectCardRenfort = selectIdProtossTch.img
                    }
                }
            } else {
                return ''
            } 
        },
        selectCardZoneJeuDef(event) {
            var Race = this.def.selectRace
            var id = event.target.value
            if (id != '') {
                if (Race === 'terran') {
                    var selectIdTerranStd = Card.terran.zoneJeu[id]
                    this.selectData.def.cardZone = selectIdTerranStd
                    this.def.selectCardZone = selectIdTerranStd.img
                } else if (Race === 'zerg') {
                    var selectIdZergStd = Card.zerg.zoneJeu[id]
                    this.selectData.def.cardZone = selectIdZergStd
                    this.def.selectCardZone = selectIdZergStd.img
                } else if (Race === 'protoss') {
                    var selectIdProtossStd = Card.protoss.zoneJeu[id]
                    this.selectData.def.cardZone = selectIdProtossStd
                    this.def.selectCardZone = selectIdProtossStd.img
                }
            } else {
                return ''
            }
        },
        selectBaseDef(event) {
            var select = event.target.checked
            select ? this.def.base = true : this.def.base = false
            select ? this.selectData.def.base = true : this.selectData.def.base = false
        },
        selectTurretDef(event) {
            var select = event.target.checked
            select ? this.def.turret = true : this.def.turret = false
            select ? this.selectData.def.turret = true : this.selectData.def.turret = false
        }
    }
}
</script>

<style src='./Combat.css' scoped>

</style>