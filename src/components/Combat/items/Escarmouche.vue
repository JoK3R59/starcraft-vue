<template>
    <div>
        <h1 class="title-escarmouche">
            Escarmouche n°{{ numberEscarmouche }} 
        </h1>

        <div class="Escarmouche">

            <div class="Escarmouche-atk">

                <div class="first">

                    <div class="figurine soutien">

                        <h3 v-if="data.atk.figurineSoutien.length != 0">Soutien</h3>

                        <p v-for="figurine in data.atk.figurineSoutien" :key="figurine.value">
                            {{ figurine.name }}
                        </p>
                    </div>

                    <div class="figurine front">

                        <h3>Front</h3>

                        <p>{{ data.atk.figurineFront.name }}</p>
                    </div>
                </div>

                <div class="second">

                    <div class="carte renfort">

                        <h3 v-if="data.atk.cardRenfort != ''">Carte Renfort</h3>

                        <p>{{ data.atk.cardRenfort != '' ? data.atk.cardRenfort.name : null }}</p>
                    </div>

                    <div class="carte combat">

                        <h3>Carte Combat</h3>

                        <p>{{ data.atk.cardCombat.name }}</p>
                    </div>
                </div>

                <div class="third"
                 v-if="numberEscarmouche === 1 && data.atk.cardZone != '' || data.atk.base != false">

                    <div class="carte zone"
                     v-if="numberEscarmouche === 1 && data.atk.cardZone != ''">

                        <h3>Zone de Jeu</h3>

                        <p>{{ data.atk.cardZone.name }}</p>
                    </div>

                    <div class="base turret"
                    v-if="numberEscarmouche === 1 && data.atk.base != false">

                        <div>
                            <h3>Base</h3>
                        </div>

                        <div v-if="numberEscarmouche === 1 && data.atk.turret != false">
                            <h3>Tourelle</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Escarmouche-def">

                <div class="first">

                    <div class="figurine front">

                        <h3>Front</h3>

                        <p>{{ data.def.figurineFront.name }}</p>
                    </div>

                    <div class="figurine soutien"
                     v-if="data.def.figurineSoutien.length != 0">

                        <h3>Soutien</h3>

                        <p v-for="figurine in data.def.figurineSoutien" :key="figurine.value">
                            {{ figurine.name }}
                        </p>
                    </div>
                </div>

                <div class="second">

                    <div class="carte combat">

                        <h3>Carte Combat</h3>

                        <p>{{ data.def.cardCombat.name }}</p>
                    </div>

                    <div class="carte renfort"
                     v-if="data.def.cardRenfort != ''">

                        <h3>Carte Renfort</h3>

                        <p>{{ data.def.cardRenfort.name }}</p>
                    </div>
                </div>

                <div class="third"
                 v-if="numberEscarmouche === 1 && data.def.cardZone != '' || data.def.base != false">

                    <div class="base turret"
                     v-if="numberEscarmouche === 1 && data.def.base != false">

                        <div>
                            <h3>Base</h3>
                        </div>

                        <div v-if="numberEscarmouche === 1 && data.def.turret != false">
                            <h3>Tourelle</h3>
                        </div>
                    </div>

                    <div class="carte zone"
                     v-if="numberEscarmouche === 1 && data.def.cardZone != ''">
                        
                        <h3>Zone de Jeu</h3>

                        <p>{{ data.def.cardZone.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Escarmouche',
    props: ['numberEscarmouche', 'data']
}
</script>

<style src='./Escarmouche.css' scoped>

</style>