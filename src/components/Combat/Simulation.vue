<template>

    <div class="Simulation">
        <div class="Simulation-atk">

            <div class="figurine soutien">

                <h3>Soutien</h3>

                <div>
                    <img class="atk-figurine front"
                     :src="imgFigurine(atk.selectFigurineSoutien,atk.selectRace)"
                      alt="Selectionnez une Figurine">
                </div>

            </div>
            
            <div class="figurine front">
                
                <h3>Front</h3>

                <div>
                    <img class="atk-figurine soutien"
                     :src="imgFigurine(atk.selectFigurineFront,atk.selectRace)"
                      alt="Selectionnez une Figurine">
                </div>
            </div>

            <div class="carte renfort">
                
                <h3>Carte Renfort</h3>

                <div>
                    <img class="atk-card soutien"
                     :src="imgCarte(atk.selectCardRenfort,atk.selectRace)"
                      alt="Selectionnez une carte">
                </div>
            </div>

            <div class="carte combat">
                
                <h3>Carte Combat</h3>

                <div>
                    <img class="atk-card soutien"
                     :src="imgCarte(atk.selectCardCombat,atk.selectRace)"
                      alt="Selectionnez une carte">
                </div>
            </div>

            <div class="carte zone">
                
                <h3>Zone de Jeu</h3>

                <div>
                    <img class="atk-card zone"
                     :src="imgCarte(atk.selectCardZone,atk.selectRace)"
                     alt="Selectionnez une carte Zone de Jeu">
                </div>
            </div>

            <div class="base">
                <div>
                    <h3>Base</h3>
                    <img class="imgBase"
                     :src="imgBase(atk.base, atk.selectRace)" alt="Base ?">
                </div>
                <div>
                    <h3>Tourelle</h3>
                    <img class="imgTurret"
                     :src="imgTurret(atk.turret, atk.selectRace)" alt="tourelle ?">
                </div>
            </div>
        </div>

        <div class="Simulation-def">

            <div class="figurine front">

                <h3>Front</h3>

                <div>
                    <img class="def-figurine front"
                     :src="imgFigurine(def.selectFigurineFront,def.selectRace)"
                      alt="Selectionnez une Figurine">
                </div>

            </div>

            <div class="figurine soutien">

                <h3>Soutien</h3>

                <div>
                    <img class="def-figurine soutien"
                     :src="imgFigurine(def.selectFigurineSoutien,def.selectRace)"
                      alt="Selectionnez une Figurine">
                </div>

            </div>

            <div class="carte combat">
                
                <h3>Carte Combat</h3>

                <div>
                    <img class="def-card soutien"
                     :src="imgCarte(def.selectCardCombat,def.selectRace)"
                      alt="Selectionnez une carte">
                </div>
            </div>

            <div class="carte renfort">
                
                <h3>Carte Renfort</h3>

                <div>
                    <img class="def-card soutien"
                     :src="imgCarte(def.selectCardRenfort,def.selectRace)"
                     alt="Selectionnez une carte">
                </div>
            </div>

            <div class="base">
                <div>
                    <h3>Base</h3>
                    <img class="imgBase"
                     :src="imgBase(def.base, def.selectRace)" alt="Base ?">
                </div>
                <div>
                    <h3>Tourelle</h3>
                    <img class="imgTurret"
                     :src="imgTurret(def.turret, def.selectRace)"
                     alt="tourelle ?">
                </div>
            </div>

            <div class="carte zone">
                
                <h3>Zone de Jeu</h3>

                <div>
                    <img class="def-card zone"
                     :src="imgCarte(def.selectCardZone,def.selectRace)"
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
    props: ['atk', 'def', 'resultData'],
    data() {
        return {
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
        imgFigurine(pic, race) {
            if (pic != '') {
                return require('../../assets/Images/Interfaces/Combat/Icon/' + race + '/' + pic + '.png')
            } else {
                return ''
            }
        },
        imgCarte(pic, race) {
            if (pic != '') {
                if (race === 'terran') {
                    return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + pic + '.png')
                } else if (race === 'zerg') {
                    return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + pic + '.png')
                } else if (race === 'protoss') {
                    return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + pic + '.png')
                }
            } else {
                return ''
            }
        },
        imgBase(pic, race) {
            if (pic) {
                if (race === 'terran') {
                    return require('../../assets/Images/DataScan/Factions/Bleu/jeton/base.png')
                } else if (race === 'zerg') {
                    return require('../../assets/Images/DataScan/Factions/Violet/jeton/base.png')
                } else if (race === 'protoss') {
                    return require('../../assets/Images/DataScan/Factions/Jaune/jeton/base.png')
                }
            } else {
                return ''
            }
        },
        imgTurret(pic, race) {
            if (pic) {
                if (race === 'terran') {
                    return require('../../assets/Images/DataScan/Factions/Bleu/jeton/module_tower.png')
                } else if (race === 'zerg') {
                    return require('../../assets/Images/DataScan/Factions/Violet/jeton/module_tower.png')
                } else if (race === 'protoss') {
                    return require('../../assets/Images/DataScan/Factions/Jaune/jeton/module_tower.png')
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