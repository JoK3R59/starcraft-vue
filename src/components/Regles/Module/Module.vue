<template>
    <div class="container">

        <div class="Module">

            <h1 class="TIPS title">
                Effet des Modules
            </h1> 

            <p>
                Il y a trois type de modules dans le jeu :
            </p>

            <div :class="`Module-list list-${ i }`"
             v-for="(item, i) in module"
             v-bind:key="i">

                <h2>
                   {{ item.name }}
                </h2>

                <div class="list-img">
                    <img class="img-top"
                     :src="getImgUrl(item.imgO)" alt=""/>
                    <img class="img-top"
                     :src="getImgUrl(item.imgB)" alt=""/>
                    <img class="img-top"
                     v-if="item.imgV"
                     :src="getImgUrl(item.imgV)" alt=""/>
                </div>

                <p>
                    {{ item.desc }}
                </p>

                <div class="Module-SA"
                 v-if="item.da">

                    <div class="Module-list img">
                        <img class="img-bot"
                         :src="getImgTower(item.do.img)" alt="">
                        <div>
                            <h2> {{ item.do.name }} </h2>
                            <p> {{ item.do.desc }} </p>
                        </div>
                    </div>

                    <div class="Module-list img">
                        <img class="img-bot"
                         :src="getImgTower(item.da.img)" alt="">
                        <div>
                            <h2> {{ item.da.name }} </h2>
                            <p> {{ item.da.desc }} </p>
                        </div>
                    </div>

                    <div class="Module-list img">
                        <img class="img-bot"
                         :src="getImgTower(item.dc.img)" alt="">
                        <div>
                            <h2> {{ item.dc.name }} </h2>
                            <p> {{ item.dc.desc }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import module from "../../../data/Module/module"

export default {
    name: "Module",
    data() {
        return{
            module
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../../assets/Images/DataScan/Factions/' + pic + '.png')
        },
        getImgTower(pic) {
            return require('../../../assets/Images/Interfaces/Module/' + pic + '.png')
        }
    }
}
</script>

<style src="./Module.css" scoped>

</style>