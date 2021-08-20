<template>

    <div class="escarmouche">

        <h2 class="escarmouche-title">Escarmouche n°{{ escarmoucheID + 1 }}</h2>

        <div class="escarmouche-atk">

            <div class="escarmouche-images">

                <div class="escarmouche--front">

                    <p>
                        Point d'attaque :  
                        <span class="type-atk">{{ unites.unitAtk.degats.atk }}</span>
                        Point de défense : 
                        <span class="type-def">{{ unites.unitAtk.degats.def }}</span>
                    </p>

                    <selectImage 
                     :imgSrc="unites.unitAtk.front.img"
                     :race="unites.unitAtk.race"
                     :classSelect="'figurine-front'"
                     :selectType="'front'"
                    />
                </div>

                <div v-if="unites.unitAtk.soutien.length > 0"
                 class="escarmouche--soutien"
                >

                    <selectImage v-for="(stringImg, id) in unites.unitAtk.soutien"
                     :key="id"
                     :imgSrc="stringImg.img"
                     :race="unites.unitAtk.race"
                     :classSelect="'figurine-soutien ' + id"
                     :selectType="'soutien'"
                    />
                </div>
            </div>

            <div class="escarmouche-log">

                <p>
                    {{ log.atk.target }} <br>
                    {{ log.atk.damage.info }} <br>
                </p>
            </div>
        </div>

        <div class="escarmouche-def">

            <div class="escarmouche-images">

                <div class="escarmouche--front">

                    <p>
                        Point d'attaque :  
                        <span class="type-atk">{{ unites.unitDef.degats.atk }}</span>
                        Point de défense : 
                        <span class="type-def">{{ unites.unitDef.degats.def }}</span>
                    </p>

                    <selectImage 
                     :imgSrc="unites.unitDef.front.img"
                     :race="unites.unitDef.race"
                     :classSelect="'figurine-front'"
                     :selectType="'front'"
                    />
                </div>

                <div v-if="unites.unitDef.soutien.length > 0"
                 class="escarmouche--soutien"
                >

                    <selectImage v-for="(stringImg, id) in unites.unitDef.soutien"
                     :key="id"
                     :imgSrc="stringImg.img"
                     :race="unites.unitDef.race"
                     :classSelect="'figurine-soutien ' + id"
                     :selectType="'soutien'"
                    />
                </div>
            </div>

            <div class="escarmouche-log">

                <p>
                    {{ log.def.target }} <br>
                    {{ log.def.damage.info }} <br>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import selectImage from './SelectImage';

export default {
    name: 'Resultat',
    props: [ 'log', 'result', 'unites', 'escarmoucheID' ],
    components : {
        'selectImage' : selectImage
    },

}
</script>

<style src='./Resultat.css' scoped>
</style>