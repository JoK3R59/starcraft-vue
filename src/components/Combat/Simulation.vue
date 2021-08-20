<template>

    <div class="Simulation">
        <div class="Simulation-atk">

            <div class="figurine soutien">

                <h3>Soutien</h3>
                
                <div class="atk-figurine--soutien">

                    <selectImage v-for="stringImg in atk.selectFigurineSoutien"
                     :key="stringImg.id"
                     :imgSrc="stringImg.icon"
                     :race="atk.selectRace"
                     :classSelect="imgDisplaySoutien(stringImg.icon)"
                     :selectType="'soutien'"
                    />
                </div>
            </div>
            
            <div class="figurine front">
                
                <h3>Front</h3>

                <div>
                    <selectImage
                     :imgSrc="atk.selectFigurineFront"
                     :race="atk.selectRace"
                     :classSelect="'figurine-front'"
                     :selectType="'front'"
                    />
                </div>
            </div>

            <div class="carte renfort">
                
                <h3>Carte Renfort</h3>

                <div>
                    <selectImage
                     :imgSrc="atk.selectCardRenfort"
                     :race="atk.selectRace"
                     :classSelect="'atk-card soutien'"
                     :selectType="'card'"
                    />
                </div>
            </div>

            <div class="carte combat">
                
                <h3>Carte Combat</h3>

                <div>
                    <selectImage
                     :imgSrc="atk.selectCardCombat"
                     :race="atk.selectRace"
                     :classSelect="'atk-card soutien'"
                     :selectType="'card'"
                    />
                </div>
            </div>

            <div class="carte zone">
                
                <h3>Zone de Jeu</h3>

                <div>
                    <selectImage
                     :imgSrc="atk.selectCardZone"
                     :race="atk.selectRace"
                     :classSelect="'atk-card zone'"
                     :selectType="'card'"
                    />
                </div>
            </div>

            <div class="base">
                <div>

                    <h3>Base</h3>

                    <selectImage
                     :imgSrc="atk.base"
                     :race="atk.selectRace"
                     :classSelect="'imgBase'"
                     :selectType="'base'"
                    />
                </div>
                <div>

                    <h3>Tourelle</h3>

                    <selectImage
                     :imgSrc="atk.turret"
                     :race="atk.selectRace"
                     :classSelect="'imgTurret'"
                     :selectType="'turret'"
                    />
                </div>
            </div>
        </div>

        <div class="Simulation-def">

            <div class="figurine front">

                <h3>Front</h3>

                <div>

                    <selectImage
                     :imgSrc="def.selectFigurineFront"
                     :race="def.selectRace"
                     :classSelect="'figurine-front'"
                     :selectType="'front'"
                    />
                </div>

            </div>

            <div class="figurine soutien">

                <h3>Soutien</h3>

                <div class="def-figurine--soutien">

                    <selectImage v-for="stringImg in def.selectFigurineSoutien"
                     :key="stringImg.id"
                     :imgSrc="stringImg.icon"
                     :race="def.selectRace"
                     :classSelect="imgDisplaySoutien(stringImg.icon)"
                     :selectType="'soutien'"
                    />
                </div>

            </div>

            <div class="carte combat">
                
                <h3>Carte Combat</h3>

                <div>

                    <selectImage
                     :imgSrc="def.selectCardCombat"
                     :race="def.selectRace"
                     :classSelect="'def-card soutien'"
                     :selectType="'card'"
                    />
                </div>
            </div>

            <div class="carte renfort">
                
                <h3>Carte Renfort</h3>

                <div>

                    <selectImage
                     :imgSrc="def.selectCardRenfort"
                     :race="def.selectRace"
                     :classSelect="'def-card soutien'"
                     :selectType="'card'"
                    />
                </div>
            </div>

            <div class="base">
                <div>

                    <h3>Base</h3>

                    <selectImage
                     :imgSrc="def.base"
                     :race="def.selectRace"
                     :classSelect="'imgBase'"
                     :selectType="'base'"
                    />
                </div>
                <div>

                    <h3>Tourelle</h3>

                    <selectImage
                     :imgSrc="def.turret"
                     :race="def.selectRace"
                     :classSelect="'imgTurret'"
                     :selectType="'turret'"
                    />
                </div>
            </div>

            <div class="carte zone">
                
                <h3>Zone de Jeu</h3>

                <div>

                    <selectImage
                     :imgSrc="def.selectCardZone"
                     :race="def.selectRace"
                     :classSelect="'def-card zone'"
                     :selectType="'card'"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../../data/Simulation/Card';
import selectImage from './items/SelectImage';

export default {
    name: 'Simulation',
    props: ['atk', 'def', 'resultData'],
    components : {
        'selectImage' : selectImage
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
        // imgFigurine(pic, race) {
        //     if (pic != '') {
        //         return require('../../assets/Images/Interfaces/Combat/Icon/' + race + '/' + pic + '.png')
        //     } else {
        //         return ''
        //     }
        // },
        imgDisplaySoutien(pic) {
            if (pic != undefined) {

                return "img-figurine"
            } else {

                return "img-figurineNone"
            }
        },
        // imgCarte(pic, race) {
        //     if (pic != '') {
        //         if (race === 'terran') {
        //             return require('../../assets/Images/DataScan/Factions/Bleu/Cartes/' + pic + '.png')
        //         } else if (race === 'zerg') {
        //             return require('../../assets/Images/DataScan/Factions/Violet/Cartes/' + pic + '.png')
        //         } else if (race === 'protoss') {
        //             return require('../../assets/Images/DataScan/Factions/Jaune/Cartes/' + pic + '.png')
        //         }
        //     } else {
        //         return ''
        //     }
        // },
        // imgBase(pic, race) {
        //     if (pic) {
        //         if (race === 'terran') {
        //             return require('../../assets/Images/DataScan/Factions/Bleu/jeton/base.png')
        //         } else if (race === 'zerg') {
        //             return require('../../assets/Images/DataScan/Factions/Violet/jeton/base.png')
        //         } else if (race === 'protoss') {
        //             return require('../../assets/Images/DataScan/Factions/Jaune/jeton/base.png')
        //         }
        //     } else {
        //         return ''
        //     }
        // },
        // imgTurret(pic, race) {
        //     if (pic) {
        //         if (race === 'terran') {
        //             return require('../../assets/Images/DataScan/Factions/Bleu/jeton/module_tower.png')
        //         } else if (race === 'zerg') {
        //             return require('../../assets/Images/DataScan/Factions/Violet/jeton/module_tower.png')
        //         } else if (race === 'protoss') {
        //             return require('../../assets/Images/DataScan/Factions/Jaune/jeton/module_tower.png')
        //         }
        //     } else {
        //         return ''
        //     }
        // }
    }
}

</script>

<style src='./Simulation.css' scoped>

</style>