<template>
    
    <div class="resultat" id="resultat-modal">

        <div class="resultat-container"
         v-if="resultSimulation != undefined || resultSimulation != ''">

            <h1 class="title">Résultat de la simulation </h1>
                
            <div v-for="(type, index) in resultSimulation"
             :key="'escarmouche'+[index]"
             class="escarmouche"
            >

                <resultat
                 :escarmoucheID="index"
                 :log="type.log"
                 :result="type.result"
                 :unites="type.unites"
                />
            </div>

            <button type="button" class="btn btn-outline-danger"
             v-on:click="quitModal()">
                Quitter
            </button>
        </div>
    </div>
</template>

<script>
import Resultat from './Resultat'

export default {
    name: 'ResultatList',
    props: ['resultSimulation'],
    components : {
        'resultat' : Resultat
    },
    methods: {
        quitModal() {
            document.getElementById('resultat-modal').style.display = 'none'
        }
    },
};
</script>

<style src='./ResultatList.css' scoped>

</style>