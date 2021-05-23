<template>

    <div class="Simulation">
        
        <div class="Simulation-atk">

            <div class="figurine soutien">

                <h3>Soutien</h3>

                <div>
                    <img class="atk-figurine front"
                     :src="imgSoutienAtk(atk.selectFigurineSoutien)"
                      alt="Selectionnez une Figurine">
                </div>

            </div>
            
            <div class=" figurine front">
                
                <h3>Front</h3>

                <div>
                    <img class="atk-figurine soutien"
                     :src="imgFrontAtk(atk.selectFigurineFront)"
                      alt="Selectionnez une Figurine">
                </div>
            </div>

            <div class="carte renfort">
                
                <h3>Carte Renfort</h3>

                <div>
                    <img class="atk-card soutien"
                     :src="imgRenfortAtk(atk.selectCardRenfort)"
                      alt="Selectionnez une carte">
                </div>
            </div>

            <div class="carte combat">
                
                <h3>Carte Combat</h3>

                <div>
                    <img class="atk-card soutien"
                     :src="imgCombatAtk(atk.selectCardCombat)"
                      alt="Selectionnez une carte">
                </div>
            </div>

            <div class="carte zone">
                
                <h3>Zone de Jeu</h3>

                <div>
                    <img class="atk-card zone"
                     :src="imgZoneAtk(atk.selectCardZone)"
                     alt="Selectionnez une carte Zone de Jeu">
                </div>
            </div>
        </div>

        <div class="Simulation-def">

            <div class="figurine front">

                <h3>Front</h3>

                <div>
                    <img class="def-figurine front"
                     :src="imgFrontDef(def.selectFigurineFront)"
                      alt="Selectionnez une Figurine">
                </div>

            </div>

            <div class="figurine soutien">

                <h3>Soutien</h3>

                <div>
                    <img class="def-figurine soutien"
                     :src="imgSoutienDef(def.selectFigurineSoutien)"
                      alt="Selectionnez une Figurine">
                </div>

            </div>

            <div class="carte combat">
                
                <h3>Carte Combat</h3>

                <div>
                    <img class="def-card soutien"
                     :src="imgCombatDef(def.selectCardCombat)"
                      alt="Selectionnez une carte">
                </div>
            </div>

            <div class="carte renfort">
                
                <h3>Carte Renfort</h3>

                <div>
                    <img class="def-card soutien"
                     :src="imgRenfortDef(def.selectCardRenfort)"
                      alt="Selectionnez une carte">
                </div>
            </div>

            <div class="carte zone">
                
                <h3>Zone de Jeu</h3>

                <div>
                    <img class="def-card zone"
                     :src="imgZoneDef(def.selectCardZone)"
                      alt="Selectionnez une carte Zone de Jeu">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../../data/Simulation/Card';

export default {
    name: 'Simulation',
    props: ['atk', 'def'],
    data() {
        return {
            // ATK
            selectAtk: {
                figurineFront: {},
                figurineSoutien: {},
                cardCombat: {},
                cardRenfort: {},
                cardZone: {}
            },
            // DEF
            selectDef: {
                figurineFront: {},
                figurineSoutien: {},
                cardCombat: {},
                cardRenfort: {},
                cardZone: {}
            },
            iconFlat: '../../assets/Images/Interfaces/Combat/Flat_plus_icon.svg'
        }
    },
    methods: {
        getImgFront(pic) {
            return require('../../assets/Images/Interfaces/Races/' + pic + '/' + pic + '.gif')
        },
        testId(id) {
            // var Race = this.atk.selectRace
            var selectId = Card.terran.figurine[id]
            var Race = this.atk.selectRace
            if (id != '') {
                this.selectAtk.figurineFront = selectId
                return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectId.img + '.png')
            } else {
                return ''
            }
        },
        imgFrontAtk(pic) {
            var Race = this.atk.selectRace
            if (pic != '') {
                if (Race === 'terran') {
                    var selectIdT = Card.terran.figurine[pic]
                    this.selectAtk.figurineFront = selectIdT
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdT.img + '.png')
                } else if (Race === 'zerg') {
                    var selectIdZ = Card.zerg.figurine[pic]
                    this.selectAtk.figurineFront = selectIdZ
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdZ.img + '.png')
                } else if (Race === 'protoss') {
                    var selectIdP = Card.protoss.figurine[pic]
                    this.selectAtk.figurineFront = selectIdP
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdP.img + '.png')
                }
            } else {
                return ''
            }
        },
        imgSoutienAtk(pic) {
            var Race = this.atk.selectRace
            if (pic != '') {
                if (Race === 'terran') {
                    var selectIdT = Card.terran.figurine[pic]
                    this.selectAtk.figurineSoutien = selectIdT
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdT.img + '.png')
                } else if (Race === 'zerg') {
                    var selectIdZ = Card.zerg.figurine[pic]
                    this.selectAtk.figurineSoutien = selectIdZ
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdZ.img + '.png')
                } else if (Race === 'protoss') {
                    var selectIdP = Card.protoss.figurine[pic]
                    this.selectAtk.figurineSoutien = selectIdP
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdP.img + '.png')
                }
            } else {
                return ''
            }
        },
        imgCombatAtk(pic) {
            var Race = this.atk.selectRace
            if (pic != '') {
                var type = pic.substr(0,3)
                var index = pic.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.combat.troupe[index]
                        this.selectAtk.cardCombat = selectIdTerranStd
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.combat.techno[index]
                        this.selectAtk.cardCombat = selectIdTerranTch
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranTch.img + '.png')
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.combat.troupe[index]
                        this.selectAtk.cardCombat = selectIdZergStd
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.combat.techno[index]
                        this.selectAtk.cardCombat = selectIdZergTch
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergTch.img + '.png')
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.combat.troupe[index]
                        this.selectAtk.cardCombat = selectIdProtossStd
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.combat.techno[index]
                        this.selectAtk.cardCombat = selectIdProtossTch
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossTch.img + '.png')
                    }
                }
            } else {
                return ''
            }
        },
        imgRenfortAtk(pic) {
            var Race = this.atk.selectRace
            if (pic != '') {
                var type = pic.substr(0,3)
                var index = pic.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.renfort.troupe[index]
                        this.selectAtk.cardRenfort = selectIdTerranStd
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.renfort.techno[index]
                        this.selectAtk.cardRenfort = selectIdTerranTch
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranTch.img + '.png')
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.renfort.troupe[index]
                        this.selectAtk.cardRenfort = selectIdZergStd
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.renfort.techno[index]
                        this.selectAtk.cardRenfort = selectIdZergTch
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergTch.img + '.png')
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.renfort.troupe[index]
                        this.selectAtk.cardRenfort = selectIdProtossStd
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.renfort.techno[index]
                        this.selectAtk.cardRenfort = selectIdProtossTch
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossTch.img + '.png')
                    }
                }
            } else {
                return ''
            }
        },
        imgZoneAtk(pic) {
            var Race = this.atk.selectRace
            if (pic != '') {
                if (Race === 'terran') {
                    var selectIdT = Card.terran.zoneJeu[pic]
                    this.selectAtk.cardZone = selectIdT
                    return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdT.img + '.png')
                } else if (Race === 'zerg') {
                    var selectIdZ = Card.zerg.zoneJeu[pic]
                    this.selectAtk.cardZone = selectIdZ
                    return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZ.img + '.png')
                } else if (Race === 'protoss') {
                    var selectIdP = Card.protoss.zoneJeu[pic]
                    this.selectAtk.cardZone = selectIdP
                    return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdP.img + '.png')
                }
            } else {
                return ''
            }
        },
        imgFrontDef(pic) {
            var Race = this.def.selectRace
            if (pic != '') {
                if (Race === 'terran') {
                    var selectIdT = Card.terran.figurine[pic]
                    this.selectDef.figurineFront = selectIdT
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdT.img + '.png')
                } else if (Race === 'zerg') {
                    var selectIdZ = Card.zerg.figurine[pic]
                    this.selectDef.figurineFront = selectIdZ
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdZ.img + '.png')
                } else if (Race === 'protoss') {
                    var selectIdP = Card.protoss.figurine[pic]
                    this.selectDef.figurineFront = selectIdP
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdP.img + '.png')
                }
            } else {
                return ''
            }
        },
        imgSoutienDef(pic) {
            var Race = this.def.selectRace
            if (pic != '') {
                if (Race === 'terran') {
                    var selectIdT = Card.terran.figurine[pic]
                    this.selectDef.figurineSoutien = selectIdT
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdT.img + '.png')
                } else if (Race === 'zerg') {
                    var selectIdZ = Card.zerg.figurine[pic]
                    this.selectDef.figurineSoutien = selectIdZ
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdZ.img + '.png')
                } else if (Race === 'protoss') {
                    var selectIdP = Card.protoss.figurine[pic]
                    this.selectDef.figurineSoutien = selectIdP
                    return require('../../assets/Images/Interfaces/Combat/Icon/' + Race + '/' + selectIdP.img + '.png')
                }
            } else {
                return ''
            }
        },
        imgCombatDef(pic) {
            var Race = this.def.selectRace
            if (pic != '') {
                var type = pic.substr(0,3)
                var index = pic.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.combat.troupe[index]
                        this.selectDef.cardCombat = selectIdTerranStd
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.combat.techno[index]
                        this.selectDef.cardCombat = selectIdTerranTch
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranTch.img + '.png')
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.combat.troupe[index]
                        this.selectDef.cardCombat = selectIdZergStd
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.combat.techno[index]
                        this.selectDef.cardCombat = selectIdZergTch
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergTch.img + '.png')
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.combat.troupe[index]
                        this.selectDef.cardCombat = selectIdProtossStd
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.combat.techno[index]
                        this.selectDef.cardCombat = selectIdProtossTch
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossTch.img + '.png')
                    }
                }
            } else {
                return ''
            }
        },
        imgRenfortDef(pic) {
            var Race = this.def.selectRace
            if (pic != '') {
                var type = pic.substr(0,3)
                var index = pic.slice(3)
                if (Race === 'terran') {
                    if (type === 'std') {
                        var selectIdTerranStd = Card.terran.renfort.troupe[index]
                        this.selectDef.cardRenfort = selectIdTerranStd
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdTerranTch = Card.terran.renfort.techno[index]
                        this.selectDef.cardRenfort = selectIdTerranTch
                        return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdTerranTch.img + '.png')
                    }
                } else if (Race === 'zerg') {
                    if (type === 'std') {
                        var selectIdZergStd = Card.zerg.renfort.troupe[index]
                        this.selectDef.cardRenfort = selectIdZergStd
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdZergTch = Card.zerg.renfort.techno[index]
                        this.selectDef.cardRenfort = selectIdZergTch
                        return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZergTch.img + '.png')
                    }
                } else if (Race === 'protoss') {
                    if (type === 'std') {
                        var selectIdProtossStd = Card.protoss.renfort.troupe[index]
                        this.selectDef.cardRenfort = selectIdProtossStd
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossStd.img + '.png')
                    } else if (type === 'tch') {
                        var selectIdProtossTch = Card.protoss.renfort.techno[index]
                        this.selectDef.cardRenfort = selectIdProtossTch
                        return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdProtossTch.img + '.png')
                    }
                }
            } else {
                return ''
            }
        },
        imgZoneDef(pic) {
            var Race = this.def.selectRace
            if (pic != '') {
                if (Race === 'terran') {
                    var selectIdT = Card.terran.zoneJeu[pic]
                    this.selectDef.cardZone = selectIdT
                    return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + selectIdT.img + '.png')
                } else if (Race === 'zerg') {
                    var selectIdZ = Card.zerg.zoneJeu[pic]
                    this.selectDef.cardZone = selectIdZ
                    return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + selectIdZ.img + '.png')
                } else if (Race === 'protoss') {
                    var selectIdP = Card.protoss.zoneJeu[pic]
                    this.selectDef.cardZone = selectIdP
                    return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + selectIdP.img + '.png')
                }
            } else {
                return ''
            }
        }
    }
}
</script>

<style src='./Simulation.css' scoped>

</style>