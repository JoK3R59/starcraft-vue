<template>

    <div class="container">

        <div class="Order">

            <h1 class="container TIPS title">
                Référence d'Ordre
            </h1>            
            
            <div :class="`Order-list list-${ i }`"
             v-for="(item, i) in build"
             v-bind:key="i">
                
                <div class="top">

                    <img class="top-img"
                        :src="getImgUrl(item.img)" alt=""/>
                    
                    <div>
                        <h2 class="">
                            {{ item.name }}
                        </h2>
                        <p>
                            {{ item.recap.a }}
                        </p>
                        <p>
                            {{ item.recap.b }}
                        </p>
                        <p v-if="item.recap.c">
                            {{ item.recap.c }}
                        </p>
                    </div>
                </div>

                <div class="bot">
                    <img class="bot-img"
                     :src="getImgUrl(item.imgSpe)" alt=""/>
                    <p>
                        {{ item.recap.spe }}
                    </p>
                </div>
            </div>

            <div class="button">
                <button class="btn btn-info">
                    Plus d'informations...
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import build from '../../../data/Order/build';

export default {
    name: 'Order',
    data() {
        return {
            build
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../../assets/Images/Interfaces/' + pic + '.png')
        },
    }
}
</script>

<style src="./Order.css" scoped>

</style>